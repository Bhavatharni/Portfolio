import React from 'react';

export const MarqueeRibbon: React.FC = () => {
  const items = [
    "Java & Spring Boot",
    "OpenCV & Image Processing",
    "Scalable REST APIs",
    "Surgical Imaging (HTIC IIT-M)",
    "ROGB CFA Demosaicing",
    "Color Correction Matrix (CCM)",
    "180+ LeetCode Solved",
    "MySQL & MongoDB",
    "Full-Stack WebSocket",
    "Digital Forensics",
  ];

  return (
    <div
      className="py-3.5 border-y border-zinc-900/10 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/60 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite] gap-8 text-xs font-mono tracking-wider text-zinc-500 dark:text-zinc-400">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">{item}</span>
            <span className="text-zinc-300 dark:text-zinc-700">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};
