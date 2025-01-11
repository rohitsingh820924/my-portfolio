import BlogItem from '@/components/BlogItem'
import FrontendSection from '@/components/FrontendSection';
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
    <div className='max-w-4xl mx-auto pb-5 px-4 mt-20'>
      <div className="px-8">
        <h1 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
        Frontend Development Expertise
        </h1>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
        Showcasing my journey and expertise in building responsive, user-friendly, and high-performance web applications. Explore my skills, tools, and passion for delivering seamless digital experiences.
        </p>
      </div>
       <FrontendSection />
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