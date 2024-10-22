'use client';
import { useEffect, useState } from 'react';
import { ProductPage } from '@/components/ProductPage';
import { apiGet } from '@/lib/api'; // Adjust the path according to your project structure
import { Blog } from "@/lib/types/blogType";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params; // Extract slug from params
  const [blogPost, setBlogPost] = useState<Blog | null>(null); // State to store the blog post

  async function fetchBlogPost(slug: string) {
    try {
      const data = await apiGet(`/api/blog/${slug}`); // Use apiGet to fetch blog post
      setBlogPost(data.blogPost); // Store fetched blog post in state
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchBlogPost(slug); // Fetch blog post when the component mounts
  }, [slug]); // Dependency array to re-fetch if the slug changes

  return (
    <>
        <ProductPage blogPost={blogPost as any} />
    </>
  );
}
