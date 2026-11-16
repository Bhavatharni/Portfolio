import React from 'react';
import { Server, Brain, Eye, Terminal } from 'lucide-react';
import { MILO_INTERESTS } from '../data/portfolioData';

export const InterestsSection: React.FC = () => {
  const getIcon = (title: string) => {
    switch (title) {
      case 'Backend Engineering': return <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Artificial Intelligence': return <Brain className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Computer Vision': return <Eye className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      case 'Problem Solving': return <Terminal className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      default: return <Server className="w-5 h-5 text-zinc-500" />;
    }
  };

  return (
    <section id="interests" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="pb-8 border-b border-zinc-900/10 dark:border-zinc-800">
          <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
            07. What I Am Interested In
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight mt-1 font-display">
            Areas I Love Exploring
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MILO_INTERESTS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 flex flex-col justify-between space-y-6 shadow-xs hover:border-blue-500/40 dark:hover:border-blue-400/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="p-2.5 w-fit rounded-xl bg-[#F6F6F3] dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800">
                  {getIcon(item.title)}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 font-display">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-medium mt-0.5">
                    {item.headline}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                {item.tags.map((tag, tIdx) => (
                  <React.Fragment key={tIdx}>
                    <span className="text-zinc-700 dark:text-zinc-300">{tag}</span>
                    {tIdx < item.tags.length - 1 && (
                      <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
