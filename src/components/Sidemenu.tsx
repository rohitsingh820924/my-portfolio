"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { FaReact, FaNodeJs, FaDesktop } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { setOpenMenu } from "@/lib/store/slices/sidemenuSlice";

export default function Sidemenu() {
  const links = [
    {
      label: "ReactJs",
      href: "#",
      icon: (
        <FaReact className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "NextJs",
      href: "#",
      icon: (
        <SiVercel className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "NodeJs",
      href: "#",
      icon: (
        <FaNodeJs className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Web Design",
      href: "#",
      icon: (
        <FaDesktop className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const openMenu = useSelector((state:any) => state.openMenu.value)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);

  useEffect(()=> {
    dispatch(setOpenMenu(open));
  },[open])
  return (
    <div className={`transition-all ${open ? 'md:w-[200px]' : 'md:w-[60px]'}`}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="fixed mt-8 z-10 h-[calc(100svh-32px)] pb-10 flex flex-col flex-1 justify-between overflow-y-auto overflow-x-hidden">
            <div className="z-9 flex flex-col gap-2">
            <div>
            <svg width="100" height="30" className={`h-auto transition-all ${open ? 'md:w-[100px]' : 'md:w-[25px]'}`} viewBox="0 0 184 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_322_2)">
              <path d="M103.44 19.13H84.44C84.0034 19.0971 83.5647 19.1542 83.151 19.2977C82.7373 19.4412 82.3575 19.6681 82.035 19.9643C81.7126 20.2605 81.4544 20.6198 81.2763 21.0198C81.0983 21.4198 81.0042 21.8521 81 22.29H77.12L80.41 10.83C80.41 10.64 80.51 10.46 80.55 10.28C80.918 8.97841 80.9796 7.60932 80.73 6.27997C80.4758 5.01543 79.8771 3.84573 79 2.89997C78.0563 1.92005 76.8899 1.18248 75.6 0.74997C74.1209 0.238494 72.565 -0.0151926 71 -2.97638e-05H9.9L14.38 12.05L0 62.29H53.14C54.8341 62.2821 56.5181 62.0294 58.14 61.54C59.7801 61.0618 61.338 60.3368 62.76 59.39C63.3357 59.0098 63.8807 58.5852 64.39 58.12C65.7619 56.931 66.8953 55.4921 67.73 53.88C68.139 53.1067 68.4738 52.2964 68.73 51.46L74.92 29.94C77.4866 28.4299 80.4348 27.6937 83.41 27.82H102.41C102.856 27.8657 103.306 27.8185 103.733 27.6813C104.159 27.5441 104.553 27.32 104.888 27.023C105.224 26.726 105.494 26.3627 105.682 25.956C105.87 25.5492 105.971 25.1079 105.98 24.66L106.26 22.29C106.493 20.1833 105.553 19.13 103.44 19.13ZM51.18 45.48H24.18L32.4 16.81H59.4L51.18 45.48Z" fill="#ED1C24" className="fill-neutral-700 dark:fill-neutral-200"/>
              <path d="M183.51 6.30998C183.264 5.03585 182.668 3.85524 181.79 2.89998C180.843 1.9187 179.673 1.18105 178.38 0.749978C176.891 0.235099 175.325 -0.0186352 173.75 -2.20547e-05H112.68L117.16 12.05L115.67 17.24L110.77 34.38C108.43 36.33 105.24 37.29 101.2 37.29H82.2C81.7554 37.2425 81.3059 37.2886 80.8803 37.4255C80.4547 37.5624 80.0625 37.7869 79.7289 38.0846C79.3954 38.3823 79.128 38.7466 78.9439 39.154C78.7598 39.5614 78.6631 40.0029 78.66 40.45L78.18 44.4H107.9L105.19 53.88L102.78 62.29H155.92C157.614 62.2821 159.298 62.0295 160.92 61.54C162.56 61.0618 164.118 60.3368 165.54 59.39C166.948 58.4749 168.193 57.3288 169.22 56C170.262 54.6515 171.039 53.1178 171.51 51.48L183.19 10.85C183.671 9.38642 183.781 7.82648 183.51 6.30998ZM154 45.48H127L135.22 16.81H162.22L154 45.48Z" fill="#ED1C24" className="fill-neutral-700 dark:fill-neutral-200"/>
              </g>
              <defs>
              <clipPath id="clip0_322_2">
              <rect width="183.66" height="62.29" fill="white" className="fill-white dark:fill-black"/>
              </clipPath>
              </defs>
              </svg>

            </div>
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
            <div>
                <ThemeSwitcher className="h-6" />
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

