import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import BlogModal from '@/modal/blog';

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
    await dbConnect();
    const { slug } = params;

    try {
        // Find the blog post by slug
        const blogPost = await BlogModal.findOne({ slug });
        if (!blogPost) {
            return NextResponse.json({ success: false, message: 'Blog post not found' }, { status: 404 });
        }

        // Find all blogs with the same badge
        const relatedBlogs = await BlogModal.find({
            badge: { $in: blogPost.badge }, // Find blogs with at least one matching badge
            slug: { $ne: slug } // Exclude the current blog post
        });

        return NextResponse.json({ success: true, blogPost, relatedBlogs });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: 'Error retrieving related blogs' }, { status: 500 });
    }
}
