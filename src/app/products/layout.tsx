'use client'
import Sidemenu from "@/components/Sidemenu"
import { cn } from "@/lib/utils"
import { useSelector } from 'react-redux';
import { RootState } from "@/lib/store/store";

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  const openMenu = useSelector((state:RootState) => state.openMenu.isMenuOpen)
    return (
        <div className="bg-gray-100 dark:bg-neutral-800 min-h-svh">
            <div className={cn(
                "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                "h-full" // for your use case, use `h-screen` instead of `h-[60vh]`
            )}>
                <Sidemenu />
                <div className={`transition-all ${openMenu ? 'md:w-[calc(100%-200px)]' : 'md:w-[calc(100%-60px)]'}`}>
                  {children}
                </div>
            </div>
        </div>
    )
  }