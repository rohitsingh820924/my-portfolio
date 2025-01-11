import React from 'react'
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Page({ params }: { params: { slug: string } }) {
  function getServiceDetails(slug:string) {
    const service = services.find(service => service.slug === slug);
    if (service) {
      return {
        title: service.sectionTitle,
        description: service.sectionDescription
      };
    } else return {
      title: "Comprehensive Web and Design Solutions",
      description: "From web development to design, I offer a range of services that cater to all your digital needs. Whether you're looking for a stunning website, intuitive UI/UX design, or powerful web applications, I've got you covered."
    };
  }
  const serviceDetails = getServiceDetails(params.slug);
  console.log(serviceDetails);
  
  return (
    <div>
         <HeroParallax products={products} serviceDetails={serviceDetails} />
    </div>
  )
}

const products = [
  {
    title: "SportsWiz",
    link: "https://sportswiz.live",
    thumbnail: "/images/projects/sportswiz.png",
  },
  {
    title: "Vantage Commercial Realty",
    link: "https://vantagecr.com/",
    thumbnail: "/images/projects/vantage.png",
  },
  {
    title: "Quadra",
    link: "https://www.quadrafreelancers.com/",
    thumbnail: "/images/projects/quadra.png",
  },
  {
    title: "AffordableDreamz",
    link: "https://affordabledreamz.com/",
    thumbnail: "/images/projects/affordabledreamz.png",
  },
  {
    title: "Socket Prosthetics",
    link: "https://socketprosthetics.com/",
    thumbnail: "/images/projects/socketprosthetics.png",
  },
  {
    title: "Pulse - Social Media Website",
    link: "https://demourls.xyz/Pulse-development/home-story.html",
    thumbnail: "/images/projects/pulse.png",
  },
  {
    title: "DigiHomes - Real Estate",
    link: "https://digihomes.io/",
    thumbnail: "/images/projects/digi-homes.png",
  },
  {
    title: "Flikka - Job Search",
    link: "https://flikka.com/",
    thumbnail: "/images/projects/flikka.png",
  },
  {
    title: "AR Academy",
    link: "https://www.aracademyras.com/",
    thumbnail: "/images/projects/aracademy.png",
  },
  {
    title: "BubuPod",
    link: "https://bubupod.com/",
    thumbnail: "/images/projects/bubupod.png",
  },
  {
    title: "Habot",
    link: "https://habot-ten.vercel.app/",
    thumbnail: "/images/projects/habot.png",
  },
  {
    title: "mAIstory",
    link: "https://www.figma.com/file/8C4PbNyE11bhgPeX53BnX0?type=design&node-id=0%3A1&mode=design",
    thumbnail: "/images/timeline/hawkscode/mAIstory.png",
  },
  {
    title: "mAitutor",
    link: "https://www.figma.com/file/6YllF8bWDQuTLvlc25nR73?type=design&node-id=0%3A1&mode=design",
    thumbnail: "/images/timeline/hawkscode/mAitutor.png",
  },
  {
    title: "Quadra",
    link: "https://www.quadrafreelancers.com/",
    thumbnail: "/images/projects/quadra.png",
  },
  {
    title: "AffordableDreamz",
    link: "https://affordabledreamz.com/",
    thumbnail: "/images/projects/affordabledreamz.png",
  },
];


const services = [
  {
    sectionTitle: "Custom Web Design for Exceptional User Experiences",
    sectionDescription: "Crafting responsive, mobile-friendly websites that align with your brand and deliver seamless user experiences. Let’s create a website that stands out.",
    slug: "web-design"
  },
  {
    sectionTitle: "Intuitive UI/UX Design to Delight Your Users",
    sectionDescription: "Creating user-centric designs that combine functionality with aesthetics. Enhance user interaction and satisfaction with designs that feel as good as they look.",
    slug: "ui-ux-design"
  },
  {
    sectionTitle: "High-Performance React.js Development",
    sectionDescription: "Build dynamic, fast, and scalable web applications with React.js. Let’s bring your ideas to life with modern, responsive frontend solutions.",
    slug: "react-js"
  },
  {
    sectionTitle: "Next.js Development for SEO-Friendly Web Apps",
    sectionDescription: "Leverage the power of server-side rendering and static site generation with Next.js. Let’s build fast, SEO-optimized web apps that engage your audience.",
    slug: "next-js"
  },
  {
    sectionTitle: "Full-Stack Development with the MERN Stack",
    sectionDescription: "Build robust, scalable web applications with MongoDB, Express, React, and Node.js. Let’s create seamless end-to-end solutions with the MERN stack.",
    slug: "mern-stack"
  },
  {
    sectionTitle: "Custom WordPress Websites for Your Business",
    sectionDescription: "Develop personalized WordPress websites tailored to your needs. Let’s build a site that’s easy to manage, visually appealing, and functional.",
    slug: "wordpress"
  },
  {
    sectionTitle: "Creative Graphic Design to Enhance Your Brand",
    sectionDescription: "Transform your brand vision into stunning visual designs. From logos to marketing materials, let’s create graphics that capture attention and tell your story.",
    slug: "graphic-design"
  },
  {
    sectionTitle: "Professional Video Editing for Impactful Content",
    sectionDescription: "Bring your footage to life with expert video editing. Whether it’s promotional videos or social media content, let’s create videos that resonate with your audience.",
    slug: "video-editing"
  },
];