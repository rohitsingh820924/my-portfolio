"use client";
import { HeroSection } from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSections";
import React from "react";
import TimelineSection from '@/components/TimelineSection'
import FormSection from "@/components/FormSection";
import CollageCard from "@/components/CollageCard";
export default function Home() {
  console.log(process.env.NEXT_URL_SMTP_HOST)
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <CollageCard />
      <ProjectSection />
      <TimelineSection />
      <FormSection />
    </div>
  );
}