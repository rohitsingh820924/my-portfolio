import GraphicsSection from '@/components/GraphicsSection';
import RelatedBlogs from '@/components/RelatedBlogs';
import React from 'react'

export default function page () {
  return (
    <div className='max-w-4xl mx-auto pb-5 px-4 mt-20'>
       <div className=" md:px-8">
        <h1 className="text-xl md:text-2xl lg:text-4xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
        Graphics | Designing Impactful Visual Stories
        </h1>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
        Explore my graphic design and multimedia projects where imagination takes shape. From graphic design and motion graphics to video editing, I create visually captivating content that communicates your brand message effectively. Whether it&apos;s animated videos or static graphics, I blend creativity with technical expertise to produce designs that leave a lasting impression.
        </p>
      </div>
        <GraphicsSection />
        <RelatedBlogs />
    </div>
  )
}