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
    <div className={`transition-all ${openMenu ? 'md:w-[200px]' : 'md:w-[60px]'}`}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="fixed mt-8 z-10 h-[calc(100svh-32px)] pb-10 flex flex-col flex-1 justify-between overflow-y-auto overflow-x-hidden">
            <div className="z-9 flex flex-col gap-2">
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

