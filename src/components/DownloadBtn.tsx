"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";

export default function DownloadBtn() {
    const openPdf = () => {
        window.open('/Rohit_Singh_UI-Developer_Resume_3-Years.pdf', '_blank');
      };
  return (
    <div className="text-center mt-10">
      <Button
        onClick={openPdf}
        borderRadius="1.75rem"
        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        My Resume
      </Button>
    </div>
  );
}
