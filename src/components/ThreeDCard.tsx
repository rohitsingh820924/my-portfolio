"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import CopyIcon from "./CopyIcon";

export default function ThreeDCard() {
  return (
    <CardContainer className="inter-var h-full">
      <CardBody className="bg-gray-50 h-full relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto md:w-[20rem] lg:w-[30rem] rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Hi, I’m Rohit Singh!
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-5 dark:text-neutral-300"
        >
          Looking to collaborate or have a project in mind? I’d love to hear from you! Let’s create something amazing together!
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-5 dark:text-neutral-300"
        >
          Mobile: <a href="tel:+918209243183">+91 8209243183</a> <CopyIcon text="+918209243183" />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Email: <a href="mailto:rohitsingh820924@gmail.com">rohitsingh820924@gmail.com</a> <CopyIcon text="rohitsingh820924@gmail.com" />
        </CardItem>
        
        {/* <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/projects/me.jpeg"
            height="1000"
            width="1000"
            className="h-[300px] mx-auto w-auto object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem> */}
      </CardBody>
    </CardContainer>
  );
}
