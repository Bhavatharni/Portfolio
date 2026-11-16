import React from 'react';
import { CheckCircle2, GraduationCap, Code2 } from 'lucide-react';
import { MiloProfile } from '../types/portfolio';

interface AboutSectionProps {
  profile: MiloProfile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="pb-8 border-b border-zinc-900/10 dark:border-zinc-800">
          <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
            02. About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight mt-1 font-display [text-wrap:balance]">
            {profile.aboutHeadline}
          </h2>
        </div>

        {/* Bento About Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Narrative Bento Card */}
          <div className="lg:col-span-7 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 p-7 sm:p-9 space-y-5 shadow-xs flex flex-col justify-between">
            <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {profile.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-[#F6F6F3] dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 space-y-1.5">
              <div className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
                HTIC — IIT Madras Research Park Highlight
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Hands-on exposure to sensor-level RAW data pipelines, four-channel ROGB CFA demosaicing, Color Correction Matrix (CCM) mathematical optimization, Delta E color accuracy evaluation, and yellow tissue enhancement for surgical imaging.
              </p>
            </div>
          </div>

          {/* Personal Highlights Bento Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex-1 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 p-7 space-y-4 shadow-xs">
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                Personal Highlights
              </div>

              <div className="space-y-3.5">
                {profile.personalHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 pb-3 border-b border-zinc-100 dark:border-zinc-800 last:border-b-0 last:pb-0"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">{highlight.label}</div>
                      <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{highlight.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2 Mini Bento Stat Tiles */}
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 p-5 shadow-xs space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400">
                  <GraduationCap className="w-4 h-4" />
                  <span>CGPA</span>
                </div>
                <div className="text-2xl font-extrabold font-mono text-zinc-950 dark:text-zinc-50 tabular-nums">
                  {profile.cgpa.split('/')[0].trim()}
                </div>
                <div className="text-xs text-zinc-500">B.E. CSE (2022–2026)</div>
              </div>

              <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 p-5 shadow-xs space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400">
                  <Code2 className="w-4 h-4" />
                  <span>LeetCode</span>
                </div>
                <div className="text-2xl font-extrabold font-mono text-zinc-950 dark:text-zinc-50 tabular-nums">
                  180+
                </div>
                <div className="text-xs text-zinc-500">Problems Solved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
