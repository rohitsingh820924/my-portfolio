import FrontendSection from '@/components/FrontendSection';
import RelatedBlogs from '@/components/RelatedBlogs';
import React from 'react'

export default function page () {
  return (
    <div className='max-w-4xl mx-auto pb-5 px-4 mt-20'>
      <div className=" md:px-8">
        <h1 className="text-xl md:text-2xl lg:text-4xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Development | Building Robust Digital Solutions
        </h1>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Explore my development projects where innovation meets functionality. I craft seamless and efficient solutions using React.js, Next.js, MERN Stack, and Full Stack Development. From dynamic user interfaces to robust backend systems, I bring your ideas to life through clean, scalable code and high-performance applications that deliver outstanding user experiences.
        </p>
      </div>
       <FrontendSection />
       <RelatedBlogs />
    </div>
  )
}