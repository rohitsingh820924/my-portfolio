'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { cn } from "@/lib/utils";
import { ToastContainer } from "react-toastify";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useRouter } from "next/navigation";
import EmailGroup from "./EmailGroup";

export default function Navbar({ className }: { className?: string }) {
    const router = useRouter()
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services/web-design">Web Design</HoveredLink>
            <HoveredLink href="/services/ui-ux-design">UI/UX Design</HoveredLink>
            <HoveredLink href="/services/react-js">React.js Development</HoveredLink>
            <HoveredLink href="/services/next-js">Next.js Development</HoveredLink>
            <HoveredLink href="/services/mern-stack">MERN Stack Development</HoveredLink>
            <HoveredLink href="/services/wordpress">WordPress Development</HoveredLink>
            <HoveredLink href="/services/graphic-design">Graphic Design</HoveredLink>
            <HoveredLink href="/services/video-editing">Video Editing</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Products" className="md:ml-[70px]">
            <div className="text-sm grid md:grid-cols-2 grid-cols-1 gap-10 md:p-4 mx-auto">
              <ProductItem
                title="Development"
                href="/products/development"
                src="/images/services/frontend.jpg"
                description="Building responsive, dynamic, and interactive web interfaces."
              />
              <ProductItem
                title="Design"
                href="/products/design"
                src="/images/services/web-design.jpg"
                description="Crafting functional websites using modern web technologies."
              />
              <ProductItem
                title="UI/UX"
                href="/products/ui-ux"
                src="/images/services/ui-ux.png"
                description="Designing user-friendly, visually appealing digital experiences."
              />
              <ProductItem
                title="Grphics"
                href="/products/graphics"
                src="/images/services/graphic.jpg"
                description="Creating engaging videos and stunning visuals for branding."
              />
            </div>
          </MenuItem>
          <Modal>
        <ModalTrigger className="border text-xs md:text-sm relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white md:px-4 md:py-2 px-3 py-1.5 rounded-full">
          <span className="">
          Contact
          </span>
        </ModalTrigger>
        <ModalBody>
          <ModalContent className="overflow-y-auto no-scrollbar">
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Send Us an Email!
            </h4>
            <EmailGroup />
      <ToastContainer />
          </ModalContent>
        </ModalBody>
          </Modal>
        <ThemeSwitcher className="md:h-10 h-[30px]"/>
        </Menu>
      </div>
    );
  }