import BlogItem from '@/components/BlogItem'
import CompareBox from '@/components/CopmareBox'
import GraphicsSection from '@/components/GraphicsSection';
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
    <div className='max-w-4xl mx-auto pb-5 px-4 mt-14 md:mt-8'>
      <h1 className='md:text-3xl text-2xl text-neutral-950 dark:text-neutral-50 font-bold mb-5'>Creative Design & Video Editing Services</h1>
        <GraphicsSection />
        <p className='my-10 text-neutral-950 dark:text-neutral-50 text-sm'>Explore my portfolio showcasing professional design and video editing projects crafted with Adobe Photoshop, Illustrator, Premiere Pro, XD, Media Encoder, and After Effects. Hire me to bring your creative vision to life with stunning visuals and impactful videos.</p>
        <h2 className='text-lg md:text-2xl font-semibold mb-3 text-neutral-950 dark:text-neutral-50'>All Blogs</h2>
        <p className='text-neutral-950 dark:text-neutral-50 text-sm'>Browse through all my blogs covering UI/UX design, web development, and creative projects. Gain insights, tips, and inspiration from my experiences and industry trends.</p>
        <div className="grid md:grid-cols-1 gap-10 md:flex-wrap flex-nowrap my-10">
          {
            blogs?.map((item:Blog)=><BlogItem key={item.id} blogContent={item} />)
          }
        </div>
    </div>
  )
}