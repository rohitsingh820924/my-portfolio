"use client";
import { HeroSection } from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSections";
import React from "react";
import TimelineSection from '@/components/TimelineSection'
import FormSection from "@/components/FormSection";
export default function Home() {
  console.log(process.env.NEXT_URL_SMTP_HOST)
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <TimelineSection />
      {/* <InputSection /> */}
      <FormSection />
    </div>
  );
}