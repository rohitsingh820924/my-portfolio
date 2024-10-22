'use client';
import { useEffect, useState } from 'react';
import { ProductPage } from '@/components/ProductPage';
import { apiGet } from '@/lib/api'; // Adjust the path according to your project structure
import { Blog } from "@/lib/types/blogType";
import { Metadata } from 'next';

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params; // Extract slug from params
  const [blogPost, setBlogPost] = useState<Blog | null>(null); // State to store the blog post
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  async function fetchBlogPost(slug: string) {
    setLoading(true); // Set loading to true before fetching
    try {
      const data = await apiGet(`/api/blog/${slug}`); // Use apiGet to fetch blog post
      setBlogPost(data.blogPost); // Store fetched blog post in state
    } catch (error) {
      console.error(error);
      setError('Failed to fetch blog post.'); // Set error message
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  }

  useEffect(() => {
    fetchBlogPost(slug); // Fetch blog post when the component mounts
  }, [slug]); // Dependency array to re-fetch if the slug changes

  // Set dynamic metadata based on fetched data
  const metadata: Metadata = {
    title: blogPost?.title || 'Loading...',
    description: blogPost?.bannerDescription || 'Loading...',
    metadataBase: new URL('https://www.rohitsingh.cloud/'),
  };

  return (
    <>
      <ProductPage blogPost={blogPost as any} />
    </>
  );
}
