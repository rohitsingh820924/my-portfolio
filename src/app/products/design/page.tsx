import RelatedBlogs from '@/components/RelatedBlogs';
import { LayoutGrid } from '@/components/ui/layout-grid';
import React from 'react'

export default function page () {
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
      <div className=" md:px-8">
        <h1 className="text-xl md:text-2xl lg:text-4xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Design | Crafting Visually Stunning Web Experiences
        </h1>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Dive into my design projects where creativity and user experience converge. Whether it’s building custom WordPress websites or designing responsive, intuitive web interfaces, I focus on creating aesthetically pleasing and highly functional designs. Each project is carefully tailored to elevate your brand and engage your audience, ensuring that the design seamlessly integrates with your digital goals.
        </p>
      </div>
      <LayoutGrid cards={cards} />
      <RelatedBlogs />
    </div>
  )
}