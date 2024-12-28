"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { CodeBlock } from "@/components/ui/code-block";
import { Blog } from "@/lib/types/blogType";
import { format } from 'date-fns';

interface ProductPageProps {
  blogPost: Blog;
}

export function ProductPage({ blogPost }: ProductPageProps) {
  return (
    <TracingBeam className="px-6 mt-12 md:mt-0">
      {blogPost ? (
        <div className="mx-auto max-w-4xl antialiased py-4 relative">
          <h1 className="md:text-4xl text-2xl font-bold text-black dark:text-white md:mb-10 mb-5">
            {blogPost.title}
          </h1>
          {blogPost?.bannerImage && (
            <Image
              src={blogPost.bannerImage as any}
              alt="blog thumbnail"
              height="1000"
              width="1000"
              className="rounded-lg md:mb-10 mb-5 w-full h-auto object-cover"
            />
          )}
          <div className="mb-5 flex gap-3 flex-wrap justify-between">
            <div className="flex gap-3">
              {blogPost.badge?.map((item, i) => (
                <span
                  key={i}
                  className="bg-black text-white capitalize rounded-full text-sm w-fit px-4 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
            
              <span className="bg-black text-white rounded-full text-sm w-fit px-4 py-1">
                {format(new Date(blogPost.createdAt), 'dd MMMM yyyy')}
              </span>
          
          </div>
          <div className="text-sm text-neutral-950 dark:text-neutral-100 prose prose-sm dark:prose-invert" dangerouslySetInnerHTML={{ __html: blogPost.bannerDescription }}>
          </div>
          {blogPost?.items?.map((item, i) => {
            return (
              <div key={i}>
                <h3 className="md:text-2xl text-lg font-bold text-black dark:text-white my-5">
                  {item.heading}
                </h3>
                {item?.image && (
                  <Image
                    src={item.image as any}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 w-full h-auto object-cover"
                  />
                )}
                {item.description && (<div className="text-sm text-neutral-950 dark:text-neutral-100 prose prose-sm dark:prose-invert" dangerouslySetInnerHTML={{ __html: item.description }}>
                </div>)}
                {item.code && (
              <CodeBlock
              language="jsx"
              filename="Code"
              highlightLines={[]}
              code={item.code}
            />)}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mb-10 pt-4">
          <div>
            <div className="h-10 bg-gray-200 rounded dark:bg-gray-700 w-full mb-3"></div>
            <div className="h-10 bg-gray-200 rounded dark:bg-gray-700 w-2/3"></div>
          </div>

          <div className="flex items-center justify-center w-full h-auto aspect-video bg-gray-300 rounded dark:bg-gray-900 my-5">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-5">
              <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
              <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
            </div>
            <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-40"></div>
          </div>

          {
            Array.from({length: 3}, (_, i) => (
              <div key={i}>
                <div className="my-5">
            <div className="h-8 bg-gray-200 rounded dark:bg-gray-700 w-2/3 mb-5"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-full mb-3"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-full mb-3"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-1/3"></div>
          </div>

          <div className="flex items-center justify-center w-full h-auto aspect-video bg-gray-300 rounded dark:bg-gray-900 my-5">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>

          <div className="my-5 p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-5/6"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-2/3"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-1/3"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-4/5"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-2/5"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-full"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-5/6"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-2/3"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-1/3"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-4/5"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-2/3"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-full"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-1/4"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-5/6"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-2/3"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-1/3"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-4/5"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-2/5"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-full"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-5/6"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-2/3"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-1/3"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-4/5"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-2/3"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-full"></div>
            <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 mb-2 w-1/4"></div>
          </div>
              </div>
            ))
          }
        </div>
      )}
    </TracingBeam>
  );
}
