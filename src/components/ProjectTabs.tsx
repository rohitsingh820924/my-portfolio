"use client";
import { Tabs } from "@/components/ui/tabs";
type Tab = {
    title: string;
    value: string;
    content?: string | React.ReactNode | any;
  };
export default function ProjectTabs({ tabs }: { tabs: Tab[] }) {

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-10 mb-24">
      <Tabs tabs={tabs} />
    </div>
  );
}
