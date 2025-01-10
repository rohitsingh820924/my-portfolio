"use client";
import FormSection from "@/components/FormSection";
import Header from "@/components/Header";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { cn } from "@/lib/utils"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="bg-gray-100 dark:bg-neutral-800 min-h-svh">
          <Header />
            {children}
            <TestimonialsSection />
            <FormSection />
        </div>
    )
  }