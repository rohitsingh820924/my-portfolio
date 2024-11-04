import BlogItem from '@/components/BlogItem'
import CompareBox from '@/components/CopmareBox'
import { apiGet } from '@/lib/api';
import { Blog } from '@/lib/types/blogType';
import React from 'react'

const baseUrl = process.env.NEXT_BASE_URL;
async function fetchBlogPost(): Promise<Blog[]> {
  const data = await apiGet(`${baseUrl}/api/blog`);
  return data.blogs;
}



export default async function page () {
  const blogs = await fetchBlogPost();
  return (
    <div className='max-w-4xl mx-auto py-5'>
      <h1 className='text-3xl text-neutral-950 dark:text-neutral-50 font-bold mb-5'>Frontend Development</h1>
        <CompareBox />

        <p className='my-10 text-neutral-950 dark:text-neutral-50 text-sm'>Dive into articles focused on best practices, frameworks, and tools that shape the frontend landscape. Learn about React, Next.js, TypeScript, and more.</p>

        <div className="grid md:grid-cols-1 gap-10 md:flex-wrap flex-nowrap">
          {
            blogs?.map((item:Blog)=><BlogItem key={item.id} blogContent={item} />)
          }
        </div>
    </div>
  )
}