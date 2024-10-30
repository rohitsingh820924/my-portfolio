// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface classNameType{
  className: string;
}

export function ThemeSwitcher({className} : classNameType) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`rounded-full p-1 aspect-square border cursor-pointer dark:border-white/[0.2] ${className}`}
      onClick={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      }}
    >
      {/* <svg
        id="sunmoon"
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid meet"
        className="hidden"
      >
        <defs>
          <mask id="hole">
            <rect width="100%" height="100%" fill="white" />
            <circle
              id="overlay"
              className="transition-all dark:translate-x-[-90px] dark:translate-y-[90px]"
              r="80"
              cx="230"
              cy="-30"
              fill="black"
            />
          </mask>
          <filter id="blur">
            <feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="gold" />
          </filter>
        </defs>
        <g filter="url(#blur)">
          <circle
            fill="gold"
            id="donut"
            r="80"
            cx="100"
            cy="100"
            mask="url(#hole)"
            className="transition-all dark:fill-white fill-yellow-400"
          />
        </g>
      </svg> */}
      <div className="rounded-full transition-all bg-yellow-400 dark:bg-white aspect-square w-full relative dark:clip-path-moon rotate-[-35deg]">
      </div>
    </div>
  );
}
