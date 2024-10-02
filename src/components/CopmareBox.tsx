import React from "react";
import { Compare } from "@/components/ui/compare";

export default function CompareBox() {
  return (
    <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
      <Compare
        firstImage="/images/figma/figma-1.png"
        secondImage="/images/figma/figma-2.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="w-full h-auto aspect-[1.95/1]"
        slideMode="hover"
      />
    </div>
  );
}
