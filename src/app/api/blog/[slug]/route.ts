import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import BlogModal from '@/modal/blog';

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
    await dbConnect();
    const { slug } = params; // Extract slug from params

    try {
        const blogPost = await BlogModal.findOne({ slug }); // Find blog post by slug
        if (!blogPost) {
            return NextResponse.json({ success: false, message: 'Blog post not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, blogPost });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: 'Error retrieving blog post' }, { status: 500 });
    }
}


