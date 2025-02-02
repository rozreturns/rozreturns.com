"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  sentences,
  className,
  filter = true,
  duration = 2,
}: {
  sentences: string[];
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {sentences.map((sentence, id) => {
          const wordsArray = sentence.split(" ");
          return (
            <div key={id}>
              {wordsArray.map((word, idx) => {
                return (
                  <motion.span
                    key={word + idx}
                    className="opacity-0"
                    style={{
                      filter: filter ? "blur(10px)" : "none",
                      color:
                        id == 1
                          ? "red"
                          : id == 2
                          ? "green"
                          : id == 3
                          ? "gold"
                          : "white",
                    }}
                  >
                    {word}{" "}
                  </motion.span>
                );
              })}
              <br />
            </div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="leading-snug text-white font-mono tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
