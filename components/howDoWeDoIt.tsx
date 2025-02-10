"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function TabsDemo() {
  const tabsList = [
    {
      name: "Machine Learning",
      src: "./ml.jpg",
      description: (
        <p className="text-left">
          Technology is at the heart of everything we do.{" "}
          <span
            style={{ fontStyle: "italic", color: "white", fontWeight: 700 }}
          >
            {" "}
            Harnessing the power of artificial intelligence,{" "}
          </span>{" "}
          our trading models integrate advanced machine learning techniques to
          identify patterns, predict trends, and execute trades with minimal
          latency. <br /> <br />
          Our deep learning frameworks process vast datasets in real-time,
          enabling intelligent decision-making and adaptive market strategies.
          We top this off with the brilliant minds in our research teams
          collaborating closely with our engineers to implement innovative
          solutions that push the boundaries of algorithmic trading.,
        </p>
      ),
    },
    {
      name: "Problem Solving",
      src: "./problemSolving.png",
      description: (
        <p className="text-left">
          Our team at RozReturns thrives on solving complex financial problems
          through rigorous and quality quantitative research.{" "}
          <span
            style={{ fontStyle: "italic", color: "white", fontWeight: 700 }}
          >
            Our goal is to make 1% consistently everyday.
          </span>{" "}
          Data is behind every one of our decisions as vast amounts of
          structured and unstructured data are analyzed to uncover hidden
          opportunities.
          <br />
          We employ sophisticated statistical models and automated trading
          systems to solve complex market inefficiencies and adapt to evolving
          financial conditions in real time. Our expertise spans equities,
          derivatives, and digital assets.
        </p>
      ),
    },
  ];

  const tabs = tabsList.map((tab) => {
    return {
      title: tab.name,
      value: tab.name.toLowerCase(),
      description: tab.description,
      content: (
        <div className=" h-60 w-full overflow-hidden relative rounded-2xl text-xl font-bold bg-transparent">
          <Image
            src={tab.src}
            alt={tab.name}
            width="300"
            height="300"
            className="object-cover absolute -bottom-10 inset-x-0 h-[100%] w-[100%] rounded-xl mx-auto"
          />
        </div>
      ),
    };
  });

  return (
    <div className="[perspective:1000px] align-top  relative flex max-w-5xl flex-col md:flex-row items-start md:items-center justify-start md:justify-center my-72 lg:my-0  mt-0">
      <Tabs tabs={tabs} />
    </div>
  );
}
