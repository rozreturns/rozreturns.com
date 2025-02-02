"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Deepankur Kansal has always been passionate about identifying patterns - both human and mathematical. At RozReturns, he applies this expertise to build intelligent trading algorithms that anticipate the market.",
      name: "Deepankur Kansal",
      designation: "CEO – A strategist at heart and a scientist in execution",
      src: "https://upload.wikimedia.org/wikipedia/commons/0/03/Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg",
    },
    {
      quote:
        "Ayush is obsessed with optimizing performance at every level. From designing low latency systems to scaling cutting-edge trading infrastructure, he ensures that technology remains RozReturns’ strongest competitive advantage.",
      name: "Ayush Kumar Gupta",
      designation: "CTO The architect of high-speed innovation",
      src: "https://upload.wikimedia.org/wikipedia/commons/0/03/Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
