import ProductGrid from '@/components/ProductGrid'
import { apiGet } from '@/lib/api';
import { Blog } from '@/lib/types/blogType';
import React from 'react'

const baseUrl = process.env.NEXT_BASE_URL;
async function fetchBlogPost(): Promise<Blog> {
  const data = await apiGet(`${baseUrl}/api/blog`);
  return data.blogs;
}

export default async function page () {
  const blogs = await fetchBlogPost();
  return (
    <>
      <ProductGrid blogs={blogs} />
    </>
  )
}