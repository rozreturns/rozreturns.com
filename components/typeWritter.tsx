"use client";
import { useState, useEffect } from "react";

const landingLines = ["Everyday", "Every hour", "Roz Returns"];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = landingLines[lineIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentLine.length) {
      // Type one more character
      timeout = setTimeout(() => {
        setText(currentLine.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 150);
    } else if (!isDeleting && charIndex === currentLine.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 170);
    } else if (isDeleting && charIndex > 0) {
      // Remove one character
      timeout = setTimeout(() => {
        setText(currentLine.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 100);
    } else if (isDeleting && charIndex === 0) {
      // Move to the next phrase and start typing again
      setIsDeleting(false);
      setLineIndex((lineIndex + 1) % landingLines.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, lineIndex]);

  return (
    <div className="mt-2 text-4xl lg:text-6xl text-white font-bold">
      <span>{text}</span>
      <span
        style={{
          borderRight: "2px solid #fff",
          marginLeft: "5px",
          animation: "blink 1s step-end infinite",
        }}
      ></span>
      <style jsx>{`
        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
      `}</style>
    </div>
  );
}
