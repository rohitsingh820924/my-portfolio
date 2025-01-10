"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import EmailGroup from "@/components/EmailGroup";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-40 bg-white dark:bg-black">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Explore My Expertise
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
          <div
            className="bg-[#F5F5F7] dark:bg-neutral-800 px-10 py-1 rounded-3xl mb-4"
          >
            <EmailGroup />
          </div>
        );
};

const data = [
    {
      category: "Web Design",
      title: "Responsive Web Design for Modern Businesses.",
      src: "/images/products/web-design.jpg",
      content: <DummyContent />,
    },
    {
      category: "UI/UX Design",
      title: "Crafting Intuitive and Engaging Interfaces.",
      src: "/images/products/ui-ux-design.jpg",
      content: <DummyContent />,
    },
    {
      category: "React.js Development",
      title: "Building High-Performance Frontend Applications.",
      src: "/images/products/reactjs.jpg",
      content: <DummyContent />,
    },
    {
      category: "Next.js Development",
      title: "SEO-Friendly and Server-Rendered Web Apps.",
      src: "/images/products/nextjs.jpg",
      content: <DummyContent />,
    },
    {
      category: "MERN Stack",
      title: "Full-Stack Development with MongoDB, Express, React, and Node.js.",
      src: "/images/products/web-design.jpg",
      content: <DummyContent />,
    },
    {
      category: "WordPress Development",
      title: "Custom WordPress Websites Tailored to Your Needs.",
      src: "/images/products/wordpress.jpg",
      content: <DummyContent />,
    },
    {
      category: "Graphic Design",
      title: "Visual Content That Captivates and Engages.",
      src: "/images/products/graphic.jpg",
      content: <DummyContent />,
    },
    {
      category: "Video Editing",
      title: "Professional Video Editing to Bring Your Stories to Life.",
      src: "/images/products/video.jpg",
      content: <DummyContent />,
    },
  ];
  
