"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function TabsDemo() {
  const tabsList = [
    { name: "Machine Learning", src: "/ml.jpg" },
    { name: "Problem Solving", src: "/ml.jpg" },
    { name: "Markets", src: "/ml.jpg" },
  ];

  const tabs = tabsList.map((tab) => {
    return {
      title: tab.name,
      value: tab.name.toLowerCase(),
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold bg-gradient-to-br from-white to-gray-300">
          <p>{tab.name} Tab</p>
          <Image
            src={tab.src}
            alt={tab.name}
            width="100"
            height="100"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    };
  });

  return (
    <div className="h-[15rem] md:h-[30rem] [perspective:1000px] relative flex max-w-5xl mx-auto w-full flex-col md:flex-row items-start md:items-center justify-start md:justify-center align-middle my-40 mt-6">
      <Tabs tabs={tabs} />
    </div>
  );
}
