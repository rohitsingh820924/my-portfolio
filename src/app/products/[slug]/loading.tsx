import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (    <TracingBeam className="px-6">
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
  </TracingBeam>)
  }
