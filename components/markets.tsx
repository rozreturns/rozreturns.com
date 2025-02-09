import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
  {
    title: "8 M Variables",
    description:
      "Advanced models analyze over 1.8 million variables daily for unparalleled precision.",
    // link: "https://stripe.com",
  },
  {
    title: "Just 2 Hours",
    description:
      "Seamless and efficient pipeline ensures strategies are deployed within 2 hours.",
    // link: "https://netflix.com",
  },
  {
    title: "Diversified portfolio",
    description:
      "Portfolio spanning five distinct financial products for optimized returns.",
    // link: "https://google.com",
  },
];

export default function Advantages() {
  return (
    <div className="max-w-4xl mx-auto antialiased font-sans px-4 mt-72 lg:-mt-20">
      <HoverEffect items={projects} />
    </div>
  );
}
