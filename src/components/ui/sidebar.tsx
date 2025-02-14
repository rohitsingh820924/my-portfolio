"use client";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React, { useState, createContext, useContext, ReactNode, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX, IconArrowLeft } from "@tabler/icons-react";
import { BiHomeAlt2 } from "react-icons/bi";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
interface Links {
  label: string;
  href: string;
  icon: ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<any>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <>
    <motion.div
  className={cn(
    "h-svh px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[200px] flex-shrink-0 relative",
    className // Ensure className is passed as a prop
  )}
  animate={{
    width: animate ? (open ? "200px" : "60px") : "200px",
  }}
  {...props} // Ensure other props are passed down
>
  <span
    onClick={() => setOpen(!open)}
    className={`fixed cursor-pointer z-10 top-4 transition-all ${open ? "translate-x-36" : ""}`}
  >
    <IconArrowLeft
      className={`text-neutral-700 dark:text-neutral-200 h-5 w-5 transition-all flex-shrink-0 ${open ? "rotate-0" : "rotate-180"}`}
    />
  </span>
  {children} 
</motion.div>
    </>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
    <div
      className={cn(
        "h-12 px-4 z-50 flex flex-row md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full fixed top-0 shadow-md",
        className
      )}
      {...props}
    >
      <div className="flex justify-between w-full items-center">
      <Link href={"/"} className="bg-black dark:bg-white px-3 py-1.5 flex gap-2 dark:text-neutral-800 text-neutral-200 font-medium text-xs rounded-full"><BiHomeAlt2 className="text-sm"/>About Me</Link>
        <div className="flex justify-between align-middle gap-3">
        <ThemeSwitcher className="h-6" />
        <IconMenu2
          className="text-neutral-800 dark:text-neutral-200"
          onClick={() => setOpen(!open)}
        />
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={cn(
              "fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between",
              className
            )}
          >
            <div
              className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200"
              onClick={() => setOpen(!open)}
            >
              <IconX />
            </div>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const SidebarLink = ({
  link,
  className,
  setOpen,
  ...props
}: {
  link: Links;
  className?: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  props?: Omit<LinkProps, "href">;
}) => {
  const isMobile = useSelector((state:RootState) => state.openMenu.isMobile);
  const { open, animate } = useSidebar();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <Link
      href={link.href}
      className={cn(
        "flex items-center justify-start gap-2 group/sidebar py-2",
        className
      )}
      onClick={() => isMobile ? setOpen(false) : ''}
      {...props}
    >
      {link.icon}
      <motion.span
        style={{
          display: isLoaded
            ? animate
              ? open
                ? "inline-block"
                : "none"
              : "none"
            : "none",
          opacity: isLoaded && animate ? (open ? 1 : 0) : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
        className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
