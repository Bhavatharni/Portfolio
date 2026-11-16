import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Github, Layers, Cpu, CheckCircle2 } from 'lucide-react';
import { MiloProject } from '../types/portfolio';

interface ProjectModalProps {
  project: MiloProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-zinc-950/70 backdrop-blur-md overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl z-10 text-zinc-900 dark:text-zinc-100 flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm">
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              {project.projectNumber}
            </span>
            <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-600">·</span>
            <span className="text-zinc-500 dark:text-zinc-400">{project.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 font-display">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-950 text-zinc-400 font-mono text-xs">
                Loading preview...
              </div>
            )}
          </div>

          {project.highlightMetrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-xl bg-[#F6F6F3] dark:bg-zinc-950/70 border border-zinc-200/80 dark:border-zinc-800">
              {project.highlightMetrics.map((metric, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {metric.label}
                  </div>
                  <div className="text-lg sm:text-xl font-bold font-mono text-blue-600 dark:text-blue-400 tabular-nums">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-3">
            <h3 className="text-sm font-mono font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>Project Scope & Architecture</span>
            </h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed p-4 rounded-xl bg-[#F6F6F3] dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-zinc-800/80">
              {project.fullDescription}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-mono font-bold text-zinc-700 dark:text-zinc-300">
              Key Engineering Areas
            </h3>
            <ul className="space-y-2">
              {project.keyAreas.map((area, aIdx) => (
                <li key={aIdx} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-mono font-bold text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Implementation Highlights</span>
            </h3>
            <ul className="space-y-2">
              {project.architectureDetails.map((detail, dIdx) => (
                <li key={dIdx} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  <span className="text-blue-600 dark:text-blue-400 mr-1 font-bold">›</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2 pt-3 border-t border-zinc-200 dark:border-zinc-800">
            <div className="text-xs font-mono text-zinc-500">
              Technologies Used
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-800 dark:text-zinc-200">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={idx}>
                  <span>{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.links.githubUrl && (
              <a
                href={project.links.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.links.demoUrl && (
              <a
                href={project.links.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
