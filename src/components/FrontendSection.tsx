'use client'
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Link from "next/link";

export default function FrontendSection() {
  const features = [
    {
      title: "About Me",
      description:
        "As a frontend developer with a strong design foundation, I bridge creativity and technical expertise to craft visually stunning and highly functional web applications.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "My Work and Projects",
      description:
        "My portfolio showcases diverse projects, from real estate platforms to live sports updates, combining creativity and functionality to exceed client expectations.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "My Skills and Tech Stack",
      description:
        "Skilled in HTML, CSS, JavaScript, React.js, TypeScript, and Node.js, with expertise in responsive design using Tailwind CSS, Bootstrap, and Material-UI.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Let's Collaborate",
      description:
        "Looking for a dedicated frontend developer to bring your vision to life? Let's work together to craft intuitive, modern web applications that leave a lasting impact.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-2 mb-5 max-w-7xl mx-auto">
      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-gray-100 dark:bg-neutral-800 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src="/images/projects/developer.png"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-gray-100 dark:from-neutral-800 via-transparent dark:via-from-neutral-800 to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-gray-100 dark:from-neutral-800 via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
    const people = [
        {
          id: 1,
          name: "ReactJS",
          designation: "Frontend Development",
          image: "/images/skills/reactjs.png",
        },
        {
          id: 2,
          name: "NextJS",
          designation: "Full Stack Development",
          image: "/images/skills/nextjs.png",
        },
        {
          id: 3,
          name: "Figma",
          designation: "UI/UX Design",
          image: "/images/skills/figma.png",
        },
        {
          id: 4,
          name: "Adobe After Effects",
          designation: "Motion Graphics & Video Editing",
          image: "/images/skills/after-effects.png",
        },
        {
          id: 5,
          name: "Photoshop",
          designation: "Graphic Design",
          image: "/images/skills/photoshop.png",
        },
        {
          id: 6,
          name: "Adobe Illustrator",
          designation: "Vector Graphic Design",
          image: "/images/skills/illustrator.png",
        },
        {
          id: 7,
          name: "Adobe Premiere Pro",
          designation: "Video Editing",
          image: "/images/skills/premiere-pro.png",
        },
        {
          id: 8,
          name: "Adobe XD",
          designation: "UI/UX Prototyping",
          image: "/images/skills/xd.png",
        },
        {
          id: 9,
          name: "Adobe Media Encoder",
          designation: "Video Rendering & Compression",
          image: "/images/skills/media-encoder.png",
        },
        {
          id: 10,
          name: "Node.js",
          designation: "Backend Development",
          image: "/images/skills/nodejs.png",
        },
        {
          id: 11,
          name: "SCSS",
          designation: "CSS Preprocessing",
          image: "/images/skills/scss.png",
        },
        {
          id: 12,
          name: "JavaScript",
          designation: "Frontend Scripting",
          image: "/images/skills/javascript.png",
        },
        {
          id: 13,
          name: "TypeScript",
          designation: "Static Typing for JavaScript",
          image: "/images/skills/typescript.png",
        },
        {
          id: 14,
          name: "Material UI",
          designation: "Frontend Design System",
          image: "/images/skills/material-ui.png",
        },
        {
          id: 15,
          name: "jQuery",
          designation: "JavaScript Library",
          image: "/images/skills/jquery.png",
        },
        {
          id: 16,
          name: "Bootstrap",
          designation: "Responsive Design Framework",
          image: "/images/skills/bootstrap.png",
        },
      ];      
  return (
      <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-wrap justify-center items-center mt-10 gap-5 relative">
          <AnimatedTooltip items={people} />
        </div>
      </div>
  );
};

export const SkeletonTwo = () => {
  const images = ['/images/projects/sportswiz.png',
    '/images/projects/vantage.png',
    '/images/projects/quadra.png',
    '/images/projects/habot.png'];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col sm:flex-row lg:flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      
      <div className="flex flex-row -ml-10">
        {images.slice(0,2).map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 w-2/3 bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg w-full h-auto object-cover flex-shrink-0 aspect-square "
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row -ml-10">
        {images.slice(2,4).map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 w-2/3 bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg w-full h-auto object-cover flex-shrink-0 aspect-square "
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-gray-100 dark:from-neutral-800 to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-gray-100 dark:from-neutral-800  to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
        <Link
      href="/contact"
      className="bg-black relative z-10 dark:bg-white font-medium text-sm rounded py-2 w-24 text-center text-white dark:text-black self-start"
    >Contact</Link>
     <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};


export const Globe = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
   
    useEffect(() => {
      let phi = 0;
   
      if (!canvasRef.current) return;
   
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 600 * 2,
        height: 600 * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: [
          // longitude latitude
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.1 },
        ],
        onRender: (state) => {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          state.phi = phi;
          phi += 0.01;
        },
      });
   
      return () => {
        globe.destroy();
      };
    }, []);
   
    return (
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
        className={className}
      />
    );
  };