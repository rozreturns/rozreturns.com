"use client";

import { useEffect } from "react";

const StarsBackground = () => {
  useEffect(() => {
    const generateStars = (layerId: string, count: number, size: number, color: string) => {
      const layer = document.getElementById(layerId);
      if (!layer) return;

      let shadows = '';
      for (let i = 0; i < count; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        shadows += `${x}px ${y}px ${color},`;
      }
      
      layer.style.boxShadow = shadows.slice(0, -1);
      layer.style.width = `${size}px`;
      layer.style.height = `${size}px`;
    };

    generateStars('stars', 200, 1, '#fff');
    generateStars('stars2', 75, 2, '#7cb9e8');
    generateStars('stars3', 30, 3, '#b9d9eb');

    const handleResize = () => {
      generateStars('stars', 200, 1, '#fff');
      generateStars('stars2', 75, 2, '#7cb9e8');
      generateStars('stars3', 30, 3, '#b9d9eb');
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div id="stars" className="star-layer" />
      <div id="stars2" className="star-layer" />
      <div id="stars3" className="star-layer" />
    </>
  );
};

export default StarsBackground;
