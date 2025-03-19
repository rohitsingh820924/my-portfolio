"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { LinkPreview } from "@/components/ui/link-preview";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    url: string;
    tech:string[]
    imgUrl?: string | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="h-[20rem] overflow-y-auto flex justify-center relative space-x-10 p-10 no-scrollbar dark:bg-black bg-white"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className={`my-20 relative before:content-[''] before:absolute before:inset-0 before:z-40 ${activeCard === index ? 'before:hidden' : 'before:block'}`}>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className={`text-2xl font-bold dark:text-neutral-100 text-neutral-950`}
              >
                {item.title}
              </motion.h2>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="flex flex-wrap gap-2 my-5 dark:text-neutral-100 text-neutral-950"
              >
                {
                  item.tech.map((techItem,index) => <span key={index} className="bg-gray-200 dark:bg-neutral-900 text-[10px] rounded-full py-1.5 px-3 dark:text-white text-black">{techItem}</span>)
                }
              </motion.div>
              <motion.div className="block lg:hidden rounded-lg overflow-hidden aspect-video object-cover object-top mb-5">
              <Image
                  src={item.imgUrl ?? null}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover object-top"
                  alt={item.imgUrl}
                />
              </motion.div>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-sm dark:text-neutral-300 text-neutral-950 max-w-sm"
              >
                {item.description}
              </motion.p>
              <span className="text-xs mt-5 block">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className=""
              >
                 <LinkPreview url={item.url}>
                    Visit Website
                </LinkPreview>
              </motion.div>
                </span>
            </div>
          ))}
        </div>
      </div>
      <div
        className={cn(
          "hidden lg:block h-60 w-96 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
         <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src={content[activeCard].imgUrl ?? null}
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="sportswiz"
        />
      </div>
      </div>
    </motion.div>
  );
};
