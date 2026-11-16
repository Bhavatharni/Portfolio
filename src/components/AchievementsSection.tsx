import React from 'react';
import { Code2, CheckCircle2 } from 'lucide-react';
import { MILO_ACHIEVEMENTS } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  const { problemSolving, certifications } = MILO_ACHIEVEMENTS;

  return (
    <section id="achievements" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="pb-8 border-b border-zinc-900/10 dark:border-zinc-800">
          <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
            06. Achievements & Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight mt-1 font-display">
            Problem Solving & Verified Credentials
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* LeetCode Mastery Card (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-7 sm:p-9 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
                  <Code2 className="w-4 h-4" />
                  <span>Competitive Problem Solving</span>
                </div>
                <span className="text-xs font-mono font-semibold text-zinc-900 dark:text-zinc-100 tabular-nums">
                  180+ Solved
                </span>
              </div>

              <h3 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50 font-display">
                {problemSolving.count}
              </h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {problemSolving.description}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                Practiced Topics
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {problemSolving.topics.map((topic, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#F6F6F3] dark:bg-zinc-950 border border-zinc-200/70 dark:border-zinc-800 text-xs font-mono text-zinc-800 dark:text-zinc-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* HackerRank Certifications Stack (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="flex-1 rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-7 shadow-xs flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{cert.issuer}</span>
                    <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 font-display">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {cert.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
