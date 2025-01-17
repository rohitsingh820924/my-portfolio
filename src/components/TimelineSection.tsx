import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineSection() {
  const data = [
    {
      title: "2021",
      content: (
        <div>
          <h3 className="dark:text-white text-black text-3xl font-bold mb-5"><a href="https://hawkscode.com/">HawksCode Softwares Pvt. Ltd.</a></h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-5">
          I specialize in creating visually appealing and user-friendly web designs, with a strong focus on Figma for crafting detailed and innovative design layouts.
          </p>

          <div className="flex flex-wrap gap-2 mb-5 dark:text-neutral-100 text-neutral-950">
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">Figma</span>
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">HTML</span>
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">CSS</span>
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">JavaScript</span>
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">Bootstrap</span>
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">jQuery</span>
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">Adobe XD</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/timeline/hawkscode/mAIstory.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-top h-auto w-full aspect-video shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/timeline/hawkscode/mAitutor.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-top h-auto w-full aspect-video shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/projects/digi-homes.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-top h-auto w-full aspect-video shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/projects/pulse.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-top h-auto w-full aspect-video shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <ul className="text-base text-neutral-700 dark:text-neutral-300 list-disc ml-6 mt-5">
            <li className="mb-2">Designing user interfaces using Figma.</li>
            <li className="mb-2">Collaborating with developers for implementation of designs.</li>
            <li className="mb-2">Creating wireframes and prototypes to showcase design concepts.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h3 className="dark:text-white text-black text-3xl font-bold mb-5"><a href="https://www.dqotsolutions.com/">Dqot Solutions Pvt. Ltd.</a></h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-5">
        As a UI Developer specializing in React.js and Next.js, I focus on creating high-performance, server-rendered applications, enhancing SEO, and collaborating effectively with diverse teams.
          </p>
          <div className="flex flex-wrap gap-2 mb-5 dark:text-neutral-100 text-neutral-950">
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">HTML5</span>
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">SCSS</span>
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">TypeScript</span>
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">React.js</span>
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">Next.js</span>
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">Material-UI (MUI)</span>
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">Ant Design</span>
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">Redux</span>
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">Zustend</span>
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">WordPress</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/projects/sportswiz.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-top h-auto w-full aspect-video shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/projects/affordabledreamz.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-top h-auto w-full aspect-video shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/projects/socketprosthetics.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-top h-auto w-full aspect-video shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
             <Image
              src="/images/projects/aracademy.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-top h-auto w-full aspect-video shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/projects/quadra.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-top h-auto w-full aspect-video shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/projects/flikka.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-top h-auto w-full aspect-video shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <ul className="text-base text-neutral-700 dark:text-neutral-300 list-disc ml-6 mt-5">
            <li className="mb-2">Developing responsive, server-rendered applications using React.js and Next.js.</li>
            <li className="mb-2">Improving SEO performance and page load speeds.</li>
            <li className="mb-2">Collaborating with backend developers to integrate APIs.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h3 className="dark:text-white text-black text-3xl font-bold mb-5"><a href="https://www.rohitsingh.cloud/">Freelance Developer</a></h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-5">
          As a freelance developer with expertise in React.js, Next.js, Node.js, and WordPress, I focus on building high-performance, server-rendered applications, creating responsive designs, and enhancing SEO. I collaborate with clients to deliver custom solutions that meet their needs, whether it&apos;s a dynamic React application or a flexible WordPress site.
          </p>
          <div className="flex flex-wrap gap-2 mb-5 dark:text-neutral-100 text-neutral-950">
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">Node.js</span>
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">Express.js</span>
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">MongoDB</span>
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">React.js</span>
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">Next.js</span>
            <span className="bg-gray-200 dark:bg-neutral-900 text-xs rounded-full py-1.5 px-3 dark:text-white text-black">WordPress</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/projects/bubupod.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-top h-auto w-full aspect-video shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/projects/habot.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-top h-auto w-full aspect-video shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/projects/estate.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-top h-auto w-full aspect-video shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
             <Image
              src="/images/projects/swords.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-top h-auto w-full aspect-video shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>

          <ul className="text-base text-neutral-700 dark:text-neutral-300 list-disc ml-6 mt-5">
            <li className="mb-2">Creating custom React.js and WordPress websites based on client needs.</li>
            <li className="mb-2">Ensuring high-performance and SEO-friendly implementations.</li>
            <li className="mb-2">Collaborating with clients to build tailored solutions.</li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
