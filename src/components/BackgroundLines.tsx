import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Highlight } from "./ui/highlight";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center mt-16 w-full  flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20+\ font-bold tracking-tight">
        Welcome to
        <Highlight className="text-white  dark:text-white">
          CholoDownload
        </Highlight>
      </h2>
      <p className="max-w-4xl mt-4 mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Fb, Yt video download 1080p - 2K - 4K. Free for All devices</p>

    </BackgroundLines>
  );
}
