// app/blog/[slug]/page.tsx
import { ProductPage } from '@/components/ProductPage';
import { apiGet } from '@/lib/api';
import { Blog } from "@/lib/types/blogType";
import { Metadata } from 'next';

// Function to fetch blog post for metadata
async function fetchBlogPostMetadata(slug: string): Promise<Blog> {
  const data = await apiGet(`http://localhost:3000/api/blog/${slug}`);
  return data.blogPost;
}

// Dynamic metadata generation
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await fetchBlogPostMetadata(params.slug);

  return {
    title: post.title,
    description: post.bannerDescription,
    keywords: post.badge?.join(", "),
    openGraph: {
      title: post.title,
      description: post.bannerDescription,
      images: [
        {
          url: post.bannerImage as any || '/default-image.jpg', // Fallback to a default image if not provided
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.bannerDescription,
      images: [
        {
          url: post.bannerImage as any || '/default-image.jpg', // Fallback to a default image if not provided
        },
      ],
    },
  };
}

// Page component (Server Component)
export default async function Page({ params }: { params: { slug: string } }) {
  const blogPost = await fetchBlogPostMetadata(params.slug);

  if (!blogPost) {
    return <p>Blog post not found.</p>; // Handle not found case
  }

  return (
    <ProductPage blogPost={blogPost} /> // Render your blog post directly
  );
}
