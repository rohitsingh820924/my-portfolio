// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (

        <div className="rounded-full h-6 w-12 border dark:border-white/[0.2]" onClick={() => {  theme==="dark" ? setTheme("light") : setTheme("dark") }}>
            <div className="rounded-full bg-neutral-800 w-4 aspect-square translate-x-1 translate-y-[3px] dark:bg-neutral-100 dark:translate-x-7 transition-all"></div>
        </div>
  );
}
