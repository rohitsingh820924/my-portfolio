// app/blog/[slug]/page.tsx
import { ProductPage } from '@/components/ProductPage';
import { apiGet } from '@/lib/api';
import { Blog } from "@/lib/types/blogType";
import { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation'

// Function to fetch blog post for metadata
const baseUrl = process.env.NEXT_BASE_URL;
async function fetchBlogPostMetadata(slug: string): Promise<Blog | null> {
  try {
    const data = await apiGet(`${baseUrl}/api/blog/${slug}`);
    return data.blogPost;
    
  } catch (error:any) {
    redirect('/products')
  }
}

// Dynamic metadata generation
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await fetchBlogPostMetadata(params.slug);

  return {
    title: post?.title,
    description: post?.bannerDescription,
    keywords: post?.badge?.join(", "),
    openGraph: {
      title: post?.title,
      description: post?.bannerDescription,
      images: [
        {
          url: post?.bannerImage as any || '/default-image.jpg', // Fallback to a default image if not provided
          width: 1200,
          height: 630,
          alt: post?.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post?.title,
      description: post?.bannerDescription,
      images: [
        {
          url: post?.bannerImage as any || '/default-image.jpg', // Fallback to a default image if not provided
        },
      ],
    },
  };
}

// Page component (Server Component)
export default async function Page({ params }: { params: { slug: string } }) {
  const blogPost = await fetchBlogPostMetadata(params.slug);

  if (!blogPost) {
    return (
      <div className='flex justify-center items-center min-h-svh flex-col gap-5'>
        <p className='font-medium text-sm dark:text-white text-black'>Blog post not found.</p>
        <Link href="/products" className="bg-black dark:bg-white font-medium text-sm rounded-full py-2 w-24 text-center text-white dark:text-black">Go Back</Link>
      </div>
    );
  }

  return (
    <ProductPage blogPost={blogPost} />
  );
}
