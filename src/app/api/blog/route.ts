import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import BlogModal from '@/modal/blog';
import cloudinary from '@/lib/cloudinary';
import slugify from "slugify";

export async function GET() {
    await dbConnect();
    try {
        const blogs = await BlogModal.find({});
        return NextResponse.json({ success: true, blogs });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error getting blogs' });
    }
}

export async function DELETE(req: NextRequest) {
    await dbConnect();
    try {
        const reqBody = await req.json();
        const { id } = reqBody;

        if (!id) {
            return NextResponse.json({ success: false, message: 'ID is required' }, { status: 400 });
        }
        const deletedBlog = await BlogModal.findByIdAndDelete(id);

        if (!deletedBlog) {
            return NextResponse.json({ success: false, message: 'Blog not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: 'Blog deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: 'Error deleting blog' }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest) {
    await dbConnect();
    const formData = await req.formData();

    const id: string = formData.get('id')?.toString() || '';

    if (!id) {
        return NextResponse.json({ success: false, message: 'ID is required' }, { status: 400 });
    }

    const title: string = formData.get('title')?.toString() || '';
    const bannerDescription: string = formData.get('bannerDescription')?.toString() || '';
    const badge = formData.getAll('badge[]').map(b => b.toString());
    const bannerImage = formData.get('bannerImage');
    const isOnline: boolean = formData.get('isOnline') === 'true';

    const slug = slugify(title, { lower: true, strict: true });

    let bannerImagePath = '';

    // Upload new banner image if provided
    if (bannerImage instanceof File) {
        try {
            const buffer: Buffer = Buffer.from(await bannerImage.arrayBuffer());
            const result = await new Promise<{ secure_url: string }>((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: 'blogs', resource_type: 'image' },
                    (error, result: any) => {
                        if (error) {
                            return reject(error);
                        }
                        resolve(result);
                    }
                );
                uploadStream.end(buffer);
            });
            bannerImagePath = result.secure_url;
        } catch (uploadError: any) {
            return NextResponse.json({ message: 'Error uploading banner image', error: uploadError.message }, { status: 500 });
        }
    }

    const items: { heading: string; description: string; image?: string; code: string; }[] = [];
    
    // Dynamically determine the number of items
    let itemCount = 0;
    while (formData.has(`items[${itemCount}][heading]`)) {
        itemCount++;
    }

    // Loop through items and process each
    for (let i = 0; i < itemCount; i++) {
        const heading = formData.get(`items[${i}][heading]`)?.toString() || '';
        const description = formData.get(`items[${i}][description]`)?.toString() || '';
        const itemImage = formData.get(`items[${i}][image]`);
        const code = formData.get(`items[${i}][code]`)?.toString() || '';

        if (!description || !code) {
            return NextResponse.json({ message: `Item description and code are required for item ${i}.` }, { status: 400 });
        }

        let itemImagePath = '';

        // Upload new item image if provided
        if (itemImage instanceof File) {
            const buffer: Buffer = Buffer.from(await itemImage.arrayBuffer());
            try {
                const result = await new Promise<{ secure_url: string }>((resolve, reject) => {
                    const uploadStream = cloudinary.uploader.upload_stream(
                        { folder: 'blog-items', resource_type: 'image' },
                        (error, result: any) => {
                            if (error) {
                                return reject(error);
                            }
                            resolve(result);
                        }
                    );
                    uploadStream.end(buffer);
                });
                itemImagePath = result.secure_url;
            } catch (uploadError: any) {
                return NextResponse.json({ message: `Error uploading image for item ${i}`, error: uploadError.message }, { status: 500 });
            }
        }

        items.push({ heading, description, image: itemImagePath || undefined, code });
    }

    const updateFields: any = {
        title,
        bannerDescription,
        badge,
        items,
        isOnline,
        slug,
    };

    if (bannerImagePath) {
        updateFields.bannerImage = bannerImagePath;
    }

    try {
        const updatedBlog = await BlogModal.findByIdAndUpdate(id, updateFields, { new: true });
        if (!updatedBlog) {
            return NextResponse.json({ success: false, message: 'Blog not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: 'Blog updated successfully', blog: updatedBlog });
    } catch (error: any) {
        return NextResponse.json({ success: false, message: 'Error updating blog', error: error.message }, { status: 500 });
    }
}


export async function POST(req: NextRequest) {
    await dbConnect();
    const formData = await req.formData();

    const title: string = formData.get('title')?.toString() || '';
    const bannerDescription: string = formData.get('bannerDescription')?.toString() || '';
    const badge = formData.getAll('badge[]').map(b => b.toString());
    const bannerImage = formData.get('bannerImage');
    const isOnline: boolean = formData.get('isOnline') === 'true';
    const slug = slugify(title, { lower: true, strict: true });
    console.log(isOnline);

    if (!(bannerImage instanceof File)) {
        return NextResponse.json({ message: 'Banner image is required' }, { status: 400 });
    }

    let bannerImagePath = '';

    // Upload banner image
    try {
        const buffer: Buffer = Buffer.from(await bannerImage.arrayBuffer());
        const result = await new Promise<{ secure_url: string }>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: 'blogs', resource_type: 'image' },
                (error, result: any) => {
                    if (error) {
                        return reject(error);
                    }
                    resolve(result);
                }
            );
            uploadStream.end(buffer);
        });
        bannerImagePath = result.secure_url;
    } catch (uploadError: any) {
        return NextResponse.json({ message: 'Error uploading banner image', error: uploadError.message }, { status: 500 });
    }

    const items: { heading: string; description: string; image?: string; code: string; }[] = [];
    
    // Dynamically check the number of items based on the existence of `items[0][heading]`
    let itemCount = 0;
    while (formData.has(`items[${itemCount}][heading]`)) {
        itemCount++;
    }

    // Loop through each item dynamically
    for (let i = 0; i < itemCount; i++) {
        const heading = formData.get(`items[${i}][heading]`)?.toString() || '';
        const description = formData.get(`items[${i}][description]`)?.toString() || '';
        const itemImage = formData.get(`items[${i}][image]`); // File or null
        const code = formData.get(`items[${i}][code]`)?.toString() || '';

        if (!description || !code) {
            return NextResponse.json({ message: `Item description and code are required for item ${i}.` }, { status: 400 });
        }

        let itemImagePath = '';

        // Upload item image if it exists
        if (itemImage instanceof File) {
            const buffer: Buffer = Buffer.from(await itemImage.arrayBuffer());
            try {
                const result = await new Promise<{ secure_url: string }>((resolve, reject) => {
                    const uploadStream = cloudinary.uploader.upload_stream(
                        { folder: 'blog-items', resource_type: 'image' },
                        (error, result: any) => {
                            if (error) {
                                return reject(error);
                            }
                            resolve(result);
                        }
                    );
                    uploadStream.end(buffer);
                });
                itemImagePath = result.secure_url;
            } catch (uploadError: any) {
                return NextResponse.json({ message: `Error uploading image for item ${i}`, error: uploadError.message }, { status: 500 });
            }
        }

        // Add each item to the array
        items.push({ heading, description, image: itemImagePath || undefined, code });
    }

    // Save the blog with all collected items
    const newBlog = new BlogModal({
        title,
        bannerDescription,
        bannerImage: bannerImagePath,
        badge,
        items,
        isOnline,
        slug,
    });

    try {
        await newBlog.save();
        console.log(newBlog);
        return NextResponse.json({ message: 'Added new blog!', newBlog });
    } catch (error: any) {
        return NextResponse.json({ message: 'Error adding blog', error: error.message }, { status: 500 });
    }
}

export const revalidate = 10;



