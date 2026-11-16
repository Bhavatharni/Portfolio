import React from 'react';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';
import { MILO_EDUCATION } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const edu = MILO_EDUCATION;

  return (
    <section id="education" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="pb-8 border-b border-zinc-900/10 dark:border-zinc-800">
          <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
            05. Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight mt-1 font-display">
            Academic Background & Foundations
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Degree Card (8 Cols) */}
          <div className="lg:col-span-8 rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-7 sm:p-9 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>{edu.degree}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 font-display">
                {edu.major}
              </h3>
              <div className="text-base text-zinc-700 dark:text-zinc-300 font-medium">
                {edu.institution}
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono pt-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{edu.duration}</span>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <div className="text-xs font-mono font-semibold text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Academic Focus</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {edu.academicFocus.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#F6F6F3] dark:bg-zinc-950 border border-zinc-200/70 dark:border-zinc-800 text-xs font-mono text-zinc-800 dark:text-zinc-200"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mr-1.5">·</span>
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CGPA Bento Highlight Card (4 Cols) */}
          <div className="lg:col-span-4 rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-7 sm:p-9 shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                Cumulative Standing
              </div>
              <div className="text-5xl font-extrabold text-zinc-950 dark:text-zinc-50 font-mono tabular-nums tracking-tight">
                {edu.cgpa.split('/')[0].trim()}
              </div>
              <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 font-mono">
                Out of 10.0 CGPA
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="font-semibold text-zinc-900 dark:text-zinc-100">
                Sri Ramakrishna Engineering College
              </div>
              <div>Coimbatore · Class of 2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
