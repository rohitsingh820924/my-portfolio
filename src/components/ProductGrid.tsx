"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function ProductGrid({blogs}:any) {


  return (
    <BentoGrid className="max-w-4xl mx-auto px-4 pb-4 pt-16 md:pt-4">
      {blogs?.map((item:any, i:any) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.bannerDescription}
          icon={item.badge}
          date={item.createdAt}
          image={item.bannerImage}
          slug={item.slug}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
  </BentoGrid>
  
  );


}