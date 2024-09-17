"use client";
import { HeroSection } from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { ProjectSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSections";
import React from "react";
import TimelineSection from '@/components/TimelineSection'
import FlipTitle from '@/components/FlipTitle'
import InputSection from '@/components/InputSection'
import FormSection from "@/components/FormSection";
export default function Home() {
  console.log(process.env.NEXT_URL_SMTP_HOST)
  return (
    <div className="relative">
      <Navbar className="top-5" />
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <TimelineSection />
      <FlipTitle />
      {/* <InputSection /> */}
      <FormSection />
    </div>
  );
}