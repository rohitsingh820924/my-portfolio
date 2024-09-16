"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function SkillsSection() {
  return (
    <div className="h-[30rem] flex flex-col antialiased dark:bg-black bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      
      <h2 className="text-4xl md:text-5xl font-bold text-center dark:text-neutral-300 text-neutral-950 mb-5">My Skills</h2>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "With Adobe Photoshop expertise, I excel in creating and enhancing images, designing graphics, and editing photos to achieve professional-quality results.",
    image: "/images/skills/photoshop.png",
    title: "Adobe Photoshop",
  },
  {
    quote:
      "Proficient in Adobe Illustrator, I specialize in vector graphic design, creating logos, illustrations, and intricate designs with precision and creativity.",
    image: "/images/skills/illustrator.png",
    title: "Adobe Illustrator",
  },
  {
    quote:
      "Skilled in Adobe Premiere Pro, I bring video projects to life through professional editing, color correction, and seamless transitions for compelling narratives.",
    image: "/images/skills/premiere-pro.png",
    title: "Adobe Premiere Pro",
  },
  {
    quote:
      "Expert in Adobe XD, I design intuitive and visually appealing user interfaces, focusing on user experience and interactive prototypes for digital products.",
    image: "/images/skills/xd.png",
    title: "Adobe XD",
  },
  {
    quote:
      "With Adobe Media Encoder, I efficiently manage video rendering and compression tasks, ensuring optimized output for multiple platforms with excellent quality.",
    image: "/images/skills/media-encoder.png",
    title: "Adobe Media Encoder",
  },
  {
    quote:
      "Proficient in Adobe After Effects, I create stunning motion graphics, visual effects, and animations, adding dynamic elements to videos and multimedia projects.",
    image: "/images/skills/after-effects.png",
    title: "Adobe After Effects",
  }
];


