import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
  {
    title: "8M Variables",
    description:
      "Advanced models analyze over 1.8 million variables daily for unparalleled precision.",
  },
  {
    title: "Just 2 Hours",
    description:
      "Seamless and efficient pipeline ensures strategies are deployed within 2 hours.",
  },
  {
    title: "Diversified portfolio",
    description:
      "Portfolio spanning five distinct financial products for optimized returns.",
  },
];

export default function Advantages() {
  return (
    <div className="max-w-5xl mx-auto antialiased font-sans px-2">
      <HoverEffect items={projects} />
    </div>
  );
}
