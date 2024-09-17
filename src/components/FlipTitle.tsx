import React from "react";
import { FlipWords } from "./ui/flip-words";

export default function FlipTitle() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-auto flex justify-center items-center dark:bg-black bg-white p-4">
      <div className="text-4xl mx-auto font-bold text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites for your business!
      </div>
    </div>
  );
}
