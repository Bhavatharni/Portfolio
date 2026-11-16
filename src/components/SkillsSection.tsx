import React, { useState } from 'react';
import { Code2, Server, Layout, Database, Eye, Wrench, Search } from 'lucide-react';
import { MILO_SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [filterQuery, setFilterQuery] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code': return <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'server': return <Server className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'layout': return <Layout className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      case 'database': return <Database className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case 'eye': return <Eye className="w-4 h-4 text-rose-600 dark:text-rose-400" />;
      case 'wrench': return <Wrench className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />;
      default: return <Code2 className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />;
    }
  };

  const filteredGroups = MILO_SKILL_GROUPS.map((group) => {
    const matchedSkills = group.skills.filter(
      (skill) =>
        skill.toLowerCase().includes(filterQuery.toLowerCase()) ||
        group.category.toLowerCase().includes(filterQuery.toLowerCase())
    );
    return { ...group, matchedSkills };
  }).filter((group) => filterQuery === '' || group.matchedSkills.length > 0);

  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-900/10 dark:border-zinc-800">
          <div>
            <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
              03. Technical Skills
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight mt-1 font-display">
              My Technical Toolkit
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
              Languages, backend frameworks, computer vision algorithms, and engineering tools I use daily.
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search skills (e.g. Spring Boot, OpenCV)..."
              className="w-full pl-9 pr-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors shadow-xs"
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 flex flex-col justify-between space-y-5 shadow-xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#F6F6F3] dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800">
                      {getCategoryIcon(group.icon)}
                    </div>
                    <h3 className="text-base font-bold text-zinc-950 dark:text-zinc-50 font-display">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 tabular-nums">
                    {group.skills.length}
                  </span>
                </div>

                {/* Clean unboxed typographic separator list (Zero-pill discipline) */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs font-mono text-zinc-700 dark:text-zinc-300 pt-1">
                  {(filterQuery ? group.matchedSkills : group.skills).map((skill, sIdx, arr) => (
                    <React.Fragment key={sIdx}>
                      <span className="text-zinc-900 dark:text-zinc-100 font-medium">{skill}</span>
                      {sIdx < arr.length - 1 && (
                        <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
