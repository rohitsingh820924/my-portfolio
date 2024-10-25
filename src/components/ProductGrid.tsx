"use client";
import React, { useEffect } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs } from '@/lib/store/slices/blogSlice';
import { RootState, AppDispatch } from '@/lib/store/store';

export default function ProductGrid() {
  const dispatch = useDispatch<AppDispatch>();
  const { blogs, status, error } = useSelector((state:RootState) => state.blogs);

  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogs());
    }
    
  }, [dispatch, status]);

  const blog = blogs.filter((blog) => {
    return blog.isOnline === true;
  })

  if(status === "succeeded") return (
    <BentoGrid className="max-w-4xl mx-auto px-4 pb-4 pt-16 md:pt-4">
      {blog.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.bannerDescription}
          icon={item.badge}
          date={item.createdAt}
          image={item.bannerImage}
          slug={item.slug}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
  </BentoGrid>
  
  );

  return (
    <BentoGrid className="max-w-4xl mx-auto px-4 pb-4 pt-16 md:pt-4">
{Array.from({ length: 10 }, (_, i) => (
      <div 
        key={i} 
        className={`row-span-1 rounded-xl group/bento animate-pulse h-full hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-neutral-950 dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 ${i === 3 || i === 6 ? "md:col-span-2" : ""}`}
      >
        <div className="flex items-center justify-center w-full min-h-[7rem] bg-gray-300 rounded dark:bg-gray-900">
          <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
          </svg>
        </div>

        <div className="flex gap-2">
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
        </div>

        <div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-full mb-2"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-2/3"></div>
        </div>

        <div>
          <div className="h-2 bg-gray-200 rounded dark:bg-gray-700 w-full mb-1"></div>
          <div className="h-2 bg-gray-200 rounded dark:bg-gray-700 w-full mb-1"></div>
          <div className="h-2 bg-gray-200 rounded dark:bg-gray-700 w-full mb-1"></div>
          <div className="h-2 bg-gray-200 rounded dark:bg-gray-700 w-2/3"></div>
        </div>
      </div>
    ))}
  
    </BentoGrid>
  )
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);