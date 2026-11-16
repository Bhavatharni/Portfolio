import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { MiloProfile } from '../types/portfolio';

interface HeaderProps {
  profile: MiloProfile;
}

export const Header: React.FC<HeaderProps> = ({ profile }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#F6F6F3]/85 dark:bg-zinc-950/85 border-b border-zinc-900/10 dark:border-zinc-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#top"
          className="text-lg font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 font-display"
        >
          {profile.name}
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a
            href="#about"
            className="hover:text-zinc-950 dark:hover:text-zinc-100 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-zinc-950 dark:hover:text-zinc-100 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="hover:text-zinc-950 dark:hover:text-zinc-100 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="hover:text-zinc-950 dark:hover:text-zinc-100 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Toolkit
          </a>
          <a
            href="#contact"
            className="hover:text-zinc-950 dark:hover:text-zinc-100 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center shrink-0">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-zinc-900 hover:bg-blue-600 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-blue-400 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
