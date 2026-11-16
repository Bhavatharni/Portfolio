import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { MiloProject } from '../types/portfolio';

interface ProjectsSectionProps {
  projects: MiloProject[];
  onSelectProject: (project: MiloProject) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'backend', label: 'Java & Backend' },
    { id: 'cv', label: 'Computer Vision & ISP' },
    { id: 'fullstack', label: 'Full-Stack' },
  ];

  const filtered = activeTab === 'all'
    ? projects
    : projects.filter((p) => {
        if (activeTab === 'backend') return p.category.includes('Backend');
        if (activeTab === 'cv') return p.category.includes('Vision') || p.category.includes('Image Processing');
        if (activeTab === 'fullstack') return p.category.includes('Full-Stack');
        return true;
      });

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header + Segmented Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-900/10 dark:border-zinc-800">
          <div>
            <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
              01. Selected Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight mt-1 font-display [text-wrap:balance]">
              Featured Projects & Case Studies
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
              Interactive builds across Spring Boot microservices, digital image forensics, and surgical ISP pipelines.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1 p-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shrink-0 shadow-xs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {filtered.map((project, idx) => {
            const isWide = idx === 0 || idx === 3;
            return (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500/40 dark:hover:border-blue-400/40 transition-all duration-200 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md ${
                  isWide ? 'lg:col-span-7' : 'lg:col-span-5'
                }`}
              >
                <div>
                  {/* Image Frame */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-3 right-3 p-2 rounded-lg bg-white/90 dark:bg-zinc-950/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    {/* Unboxed Metadata (Zero-Pill Discipline) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">{project.projectNumber}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.category}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-display">
                      {project.title}
                    </h3>

                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {project.summary}
                    </p>

                    <ul className="space-y-1.5 pt-1">
                      {project.keyAreas.slice(0, 3).map((area, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 sm:px-7 py-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex flex-wrap items-center gap-1.5 font-mono text-zinc-500 dark:text-zinc-400">
                    {project.technologies.slice(0, 4).map((tech, tIdx) => (
                      <React.Fragment key={tIdx}>
                        <span className="text-zinc-800 dark:text-zinc-200">{tech}</span>
                        {tIdx < Math.min(project.technologies.length, 4) - 1 && (
                          <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">/</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 font-medium">
                    {project.links.githubUrl && (
                      <a
                        href={project.links.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.links.demoUrl && (
                      <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400">
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Inspect</span>
                      </span>
                    )}
                    {!project.links.demoUrl && project.links.caseStudyUrl && (
                      <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400">
                        <FileText className="w-3.5 h-3.5" />
                        <span>Case Study</span>
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
