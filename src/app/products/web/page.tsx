import BlogItem from '@/components/BlogItem'
import { LayoutGrid } from '@/components/ui/layout-grid';
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
  const cards = [
    {
      id: 1,
      className: "md:col-span-2",
      title: "AffordableDreamz",
      description: "Specializes in affordable housing, assisting clients in finding budget-friendly properties.",
      thumbnail: "/images/projects/affordabledreamz.png",
    },
    {
      id: 2,
      className: "col-span-1",
      title: "Socket Prosthetics",
      description: "Designs and manufactures custom prosthetic sockets for comfort and functionality.",
      thumbnail: "/images/projects/socketprosthetics.png",
    },
    {
      id: 3,
      className: "col-span-1",
      title: "Pulse",
      description: "A social media website for making connections and building real relationships.",
      thumbnail: "/images/projects/pulse.png",
    },
    {
      id: 4,
      className: "md:col-span-2",
      title: "DigiHomes",
      description: "A digital gateway to explore, buy, and sell homes effortlessly.",
      thumbnail: "/images/projects/digi-homes.png",
    },
    {
      id: 5,
      className: "col-span-1",
      title: "Flikka",
      description: "Find your next job with ease. Discover opportunities and connect with employers.",
      thumbnail: "/images/projects/flikka.png",
    },
    {
      id: 6,
      className: "col-span-1",
      title: "AR Academy",
      description: "Offers coaching and resources for the RAS exam, including study materials and expert guidance.",
      thumbnail: "/images/projects/aracademy.png",
    },
    {
      id: 7,
      className: "col-span-1",
      title: "BubuPod",
      description: "Effortless bottle care with washing, sterilizing, drying, and storing functionalities.",
      thumbnail: "/images/projects/bubupod.png",
    },
  ];
  
  return (
    <div className='max-w-4xl mx-auto pb-5 px-4 mt-20'>
      <div className="px-8">
        <h1 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
        Creative & Responsive Website Solutions
        </h1>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
        Explore innovative web design services tailored to your needs. From sleek layouts to responsive interfaces, I craft websites that combine creativity, functionality, and seamless user experiences. Let’s bring your vision to life!
        </p>
      </div>
      <LayoutGrid cards={cards} />
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