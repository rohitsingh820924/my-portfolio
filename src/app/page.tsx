"use client";
import { HeroSection } from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSections";
import React from "react";
import TimelineSection from '@/components/TimelineSection'
import FormSection from "@/components/FormSection";
import CollageSection from "@/components/CollageSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <CollageSection />
      <ProjectSection />
      <TimelineSection />
      <FormSection />
    </>
  );
}