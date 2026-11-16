import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { MiloProfile } from '../types/portfolio';

interface FooterProps {
  profile: MiloProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-white dark:bg-zinc-950 border-t border-zinc-200/80 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
          <span className="font-extrabold text-zinc-950 dark:text-zinc-100 font-display text-base tracking-tight">
            {profile.name}.
          </span>
          <span aria-hidden="true" className="hidden sm:inline text-zinc-300 dark:text-zinc-700">·</span>
          <span>Building software. Solving problems. Exploring possibilities.</span>
          <span aria-hidden="true" className="hidden sm:inline text-zinc-300 dark:text-zinc-700">·</span>
          <span className="font-mono text-zinc-500">Java · Backend · Image Processing</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Direct Email"
            className="text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-zinc-500 font-mono">
            © 2026 Milo. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F6F6F3] hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
