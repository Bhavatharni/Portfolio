import React from 'react';
import { Building2, Calendar, MapPin, CheckCircle2, Cpu } from 'lucide-react';
import { MILO_EXPERIENCE } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const exp = MILO_EXPERIENCE;

  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="pb-8 border-b border-zinc-900/10 dark:border-zinc-800">
          <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
            04. Professional Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight mt-1 font-display">
            Research & Industry Experience
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
            Applied computer vision, surgical imaging signal processing, and sensor pipeline engineering.
          </p>
        </div>

        {/* Experience Bento Container */}
        <div className="mt-10 rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-7 sm:p-10 shadow-xs space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-zinc-100 dark:border-zinc-800">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
                <Building2 className="w-4 h-4" />
                <span>{exp.organizationDivision}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 font-display">
                {exp.company}
              </h3>

              <div className="text-base font-semibold text-zinc-800 dark:text-zinc-200">
                {exp.role}
              </div>

              <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-500 dark:text-zinc-400 font-mono pt-1">
                <span className="text-zinc-700 dark:text-zinc-300 font-medium">{exp.domain}</span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{exp.location}</span>
                </span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#F6F6F3] dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 lg:max-w-sm space-y-1.5">
              <div className="text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300">
                Research Scope
              </div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {exp.summary}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>Technical Contributions</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {exp.contributions.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F6F6F3]/80 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-zinc-800 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-5 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-2 font-mono text-zinc-600 dark:text-zinc-400">
              <span className="text-zinc-400 dark:text-zinc-500">Toolkit:</span>
              {exp.toolsUsed.map((tool, tIdx) => (
                <React.Fragment key={tIdx}>
                  <span className="text-zinc-900 dark:text-zinc-200 font-medium">{tool}</span>
                  {tIdx < exp.toolsUsed.length - 1 && (
                    <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="text-xs text-zinc-500 dark:text-zinc-400 italic">
              &ldquo;Strengthened my understanding of low-level image processing, color science, and practical engineering workflows.&rdquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
