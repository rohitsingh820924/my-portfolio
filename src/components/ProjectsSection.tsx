"use client";
import React, { useEffect, useRef, useState } from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "SportsWiz",
    description:
      "A dynamic sports platform offering live scores, real-time updates, and detailed player stats, powered by Next.js, Tailwind CSS, and Node.js.",
    imgUrl: "/images/projects/sportswiz.png",
    url: "https://sportswiz.live",
    tech: ["Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Vantage Commercial Realty",
    description:
      "A professional platform for commercial real estate services like property management and leasing, developed using React.js, Tailwind CSS, and Node.js.",
    imgUrl: "/images/projects/vantage.png",
    url: "https://vantagecr.com/",
    tech: ["React.js", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Quadra",
    description:
      "A seamless freelance management platform to connect talent with businesses, designed with React.js and Python for exceptional flexibility and efficiency.",
    imgUrl: "/images/projects/quadra.png",
    url: "https://www.quadrafreelancers.com/",
    tech: ["React.js", "Python"],
  },
  {
    title: "AffordableDreamz",
    description:
      "An intuitive platform for affordable housing solutions, assisting users in finding budget-friendly properties, built with Bootstrap, PHP, and MySQL.",
    imgUrl: "/images/projects/affordabledreamz.png",
    url: "https://affordabledreamz.com/",
    tech: ["Bootstrap", "PHP", "MySQL"],
  },
  {
    title: "Socket Prosthetics",
    description:
      "Innovative custom prosthetic solutions focused on improving mobility and comfort, powered by WordPress and PHP.",
    imgUrl: "/images/projects/socketprosthetics.png",
    url: "https://socketprosthetics.com/",
    tech: ["WordPress", "PHP"],
  },
  {
    title: "Pulse - Social Media Website",
    description:
      "A vibrant social media platform enabling real connections and engaging interactions, crafted with PHP, Bootstrap, and JavaScript.",
    imgUrl: "/images/projects/pulse.png",
    url: "https://demourls.xyz/Pulse-development/home-story.html",
    tech: ["PHP", "Bootstrap", "JavaScript"],
  },
  {
    title: "DigiHomes - Real Estate",
    description:
      "A streamlined real estate platform to explore, buy, and sell properties effortlessly, developed using PHP, Bootstrap, and MySQL.",
    imgUrl: "/images/projects/digi-homes.png",
    url: "https://digihomes.io/",
    tech: ["PHP", "Bootstrap", "MySQL"],
  },
  {
    title: "Flikka - Job Search",
    description:
      "A user-friendly job portal connecting seekers with employers, designed with PHP, Bootstrap, and MySQL for smooth functionality.",
    imgUrl: "/images/projects/flikka.png",
    url: "https://flikka.com/",
    tech: ["PHP", "Bootstrap", "MySQL"],
  },
  {
    title: "AR Academy",
    description:
      "An educational website offering comprehensive RAS exam preparation, including study materials and mock tests, built on WordPress and PHP.",
    imgUrl: "/images/projects/aracademy.png",
    url: "https://www.aracademyras.com/",
    tech: ["WordPress", "PHP", "MySQL"],
  },
  {
    title: "BubuPod",
    description:
      "An e-commerce solution for baby care essentials, offering sterilizers and storage solutions, built with WordPress and WooCommerce.",
    imgUrl: "/images/projects/bubupod.png",
    url: "https://bubupod.com/",
    tech: ["WordPress", "Bootstrap", "WooCommerce"],
  },
  {
    title: "Habot",
    description:
      "A versatile job platform connecting talent with opportunities across the UAE, developed with React.js, Tailwind CSS, and Node.js.",
    imgUrl: "/images/projects/habot.png",
    url: "https://habot-ten.vercel.app/",
    tech: ["React.js", "Tailwind CSS", "Node.js"],
  },
];



export function ProjectSection() {
  const [isPinned, setIsPinned] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the section is fully within the viewport
        if (entry.isIntersecting) {
          setIsPinned(true);
        } else {
          setIsPinned(false);
        }
      },
      {
        threshold: 1.0, // Fires when the entire section is fully in view
      }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  return (
    <div 
      // ref={sectionRef}
      // initial={{ opacity: 0, y: 50 }}
      // animate={isPinned ? { opacity: 1, y: 0, position: 'fixed', top: 0 } : { opacity: 1, y: 0 }}
      // transition={{ duration: 0.5 }}
      className="dark:bg-black bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center dark:text-neutral-300 text-neutral-950  pt-10 mb-20">My Projects</h2>
      <StickyScroll content={content} />
    </div>
  );
}
