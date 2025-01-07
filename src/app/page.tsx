"use client";
import { HeroSection } from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSections";
import React, { useEffect } from "react";
import TimelineSection from '@/components/TimelineSection'
import FormSection from "@/components/FormSection";
import CollageSection from "@/components/CollageSection";

export default function Home() {
  useEffect(() => {
    const trackVisitor = async () => {
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);
      const visitorData = {
        ip: await fetch('https://api.ipify.org?format=json')
          .then(res => res.json())
          .then(data => data.ip),
        userAgent: navigator.userAgent,
        screenResolution: `${screen.width}x${screen.height}`,
        referrer: document.referrer || 'Direct',
        page: window.location.href,
        language: navigator.language,
        device: isMobile ? 'Mobile' : 'Desktop',
      };

      await fetch('/api/tracks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(visitorData),
      });
    };

    trackVisitor();
  }, []);
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