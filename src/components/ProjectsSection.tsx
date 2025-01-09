"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { motion } from 'framer-motion';

const content = [
  {
    title: "SportsWiz",
    description:
      "Your go-to for live scores, stats, and sports news. Stay updated with real-time game updates and in-depth player info. Get the edge in every match with SportsWiz!",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/sportswiz.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="sportswiz"
        />
      </div>
    ),
    url: "https://sportswiz.live",
  },
  {
    title: "Vantage Commercial Realty",
    description:
      "Vantage Commercial Realty specializes in commercial real estate, offering services like property management and leasing to help clients manage and optimize their commercial properties.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
      <Image
        src="/images/projects/vantage.png"
        width={300}
        height={300}
        className="h-full w-full object-cover object-top"
        alt="sportswiz"
      />
    </div>
    ),
    url: "https://vantagecr.com/",
  },
  {
    title: "Quadra",
    description:
      "Empowering your freelance journey. Connect with top talent, manage projects effortlessly, and elevate your business with ease. Discover the freedom of flexible work and exceptional results with Quadra Freelancers.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/quadra.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="sportswiz"
        />
      </div>
    ),
    url: "https://www.quadrafreelancers.com/",
  },
  {
    title: "AffordableDreamz",
    description:
      "AffordableDreamz specializes in affordable housing, helping clients find budget-friendly properties and assisting first-time homebuyers.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/affordabledreamz.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="sportswiz"
        />
      </div>
    ),
    url: "https://affordabledreamz.com/",
  },
  {
    title: "Socket Prosthetics",
    description:
      "Socket Prosthetics designs and manufactures custom prosthetic sockets, focusing on comfort and functionality for amputees. They prioritize innovative solutions to improve mobility and enhance the quality of life for their users.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/socketprosthetics.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="sportswiz"
        />
      </div>
    ),
    url: "https://socketprosthetics.com/",
  },
  {
    title: "Pulse - Social Media Website",
    description:
      "Your go-to for real connections and exciting encounters. Find your match or make a new connection with ease on Pulse.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/pulse.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="sportswiz"
        />
      </div>
    ),
    url: "https://demourls.xyz/Pulse-development/home-story.html",
  },
  {
    title: "DigiHomes - Real Estate",
    description:
      "Your digital gateway to real estate. Explore, buy, and sell homes effortlessly with DigiHomes.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/digi-homes.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="sportswiz"
        />
      </div>
    ),
    url: "https://digihomes.io/",
  },
  {
    title: "Flikka - Job Search",
    description:
      "Find your next job with ease. Discover opportunities and connect with employers on Flikka.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/flikka.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="sportswiz"
        />
      </div>
    ),
    url: "https://flikka.com/",
  },
  {
    title: "AR Academy",
    description:
      "AR Academy offers coaching and resources for the RAS exam, providing study materials, mock tests, and expert guidance to help aspirants succeed.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/aracademy.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="sportswiz"
        />
      </div>
    ),
    url: "https://www.aracademyras.com/",
  },
  {
    title: "BubuPod",
    description:
      "Experience effortless, time-saving bottle care with Bubupod - designed to wash, sterilize, dry and store your baby bottles, pump parts, pacifiers, and teethers, giving your little one the safest, cleanest, feeding essentials.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/bubupod.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="bubupod"
        />
      </div>
    ),
    url: "https://bubupod.com/",
  },
  {
    title: "Habot",
    description:
      "Habot connects job seekers with top opportunities across the UAE. Discover full-time, part-time, and freelance roles with ease, all in one place.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/habot.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="habot"
        />
      </div>
    ),
    url: "https://habot-ten.vercel.app/",
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
