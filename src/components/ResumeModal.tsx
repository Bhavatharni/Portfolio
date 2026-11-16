import React, { useState } from 'react';
import { X, Printer, Copy, Check, FileText } from 'lucide-react';
import { MiloProfile, MiloProject, MiloExperience, MiloEducation } from '../types/portfolio';
import { MILO_SKILL_GROUPS, MILO_ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: MiloProfile;
  projects: MiloProject[];
  experience: MiloExperience;
  education: MiloEducation;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  projects,
  experience,
  education,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const md = `# ${profile.name} — Bhavatharni J
**${profile.headline}**
${profile.email} | [GitHub](${profile.github}) | [LinkedIn](${profile.linkedin})

---

## Summary
${profile.heroBio}
${profile.aboutParagraphs.join('\n\n')}

---

## Education
**${education.degree} in ${education.major}**
*${education.institution}* (${education.duration}) | **CGPA: ${education.cgpa}**
*Coursework:* ${education.academicFocus.join(', ')}

---

## Experience
**${experience.role}** — ${experience.company} (${experience.organizationDivision})
*${experience.location} | ${experience.domain}*
${experience.contributions.map((c) => `- ${c}`).join('\n')}

---

## Featured Projects
${projects
  .map(
    (p) => `### ${p.projectNumber} — ${p.title}
*Category: ${p.category} | Tech: ${p.technologies.join(', ')}*
${p.summary}
${p.keyAreas.map((k) => `- ${k}`).join('\n')}
`
  )
  .join('\n')}

---

## Technical Skills
${MILO_SKILL_GROUPS.map((g) => `- **${g.category}:** ${g.skills.join(', ')}`).join('\n')}

---

## Achievements & Certifications
- **LeetCode:** ${MILO_ACHIEVEMENTS.problemSolving.count}
- **Certifications:** ${MILO_ACHIEVEMENTS.certifications.map((c) => `${c.issuer} ${c.title}`).join(', ')}
`;

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-zinc-950/70 backdrop-blur-md overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl z-10 text-zinc-900 dark:text-zinc-100 flex flex-col">
        {/* Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm">
          <div className="flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-bold text-zinc-950 dark:text-zinc-100 font-display">
              Resume — {profile.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Markdown</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors ml-1"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Sheet */}
        <div className="p-8 sm:p-12 space-y-8 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans print:bg-white print:text-black">
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6 print:border-zinc-300">
            <h1 className="text-3xl font-extrabold tracking-tight font-display text-zinc-950 dark:text-zinc-100 print:text-black">
              {profile.name} — Bhavatharni J
            </h1>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1 font-mono print:text-zinc-700">
              {profile.headline}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400 mt-3 font-mono print:text-zinc-600">
              <a href={`mailto:${profile.email}`} className="hover:underline text-zinc-800 dark:text-zinc-300">{profile.email}</a>
              <span aria-hidden="true">·</span>
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:underline text-zinc-800 dark:text-zinc-300">GitHub</a>
              <span aria-hidden="true">·</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:underline text-zinc-800 dark:text-zinc-300">LinkedIn</a>
              <span aria-hidden="true">·</span>
              <span>{profile.cgpa.split('/')[0].trim()} CGPA · B.E. CSE</span>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 print:text-zinc-900">
              Summary
            </h2>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed print:text-zinc-800">
              {profile.heroBio}
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 print:text-zinc-900">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <span className="text-sm font-bold text-zinc-950 dark:text-zinc-100 print:text-black">
                {education.degree} in {education.major}
              </span>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 print:text-zinc-600">
                {education.duration} · CGPA: {education.cgpa}
              </span>
            </div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400 print:text-zinc-700">
              {education.institution}
            </div>
            <div className="text-xs text-zinc-500 font-mono pt-1 print:text-zinc-600">
              Focus: {education.academicFocus.join(', ')}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 print:text-zinc-900">
              Professional Experience
            </h2>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <span className="text-sm font-bold text-zinc-950 dark:text-zinc-100 print:text-black">
                  {experience.role} <span className="text-blue-600 dark:text-blue-400 font-medium print:text-zinc-800">@ {experience.company}</span>
                </span>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 print:text-zinc-600">
                  {experience.location}
                </span>
              </div>
              <ul className="space-y-1 list-disc pl-4 text-xs text-zinc-700 dark:text-zinc-300 print:text-zinc-800 leading-relaxed">
                {experience.contributions.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 print:text-zinc-900">
              Featured Projects
            </h2>
            {projects.map((p) => (
              <div key={p.id} className="space-y-1">
                <div className="flex items-baseline justify-between text-xs">
                  <span className="font-bold text-zinc-950 dark:text-zinc-200 print:text-black font-mono">
                    {p.projectNumber}: {p.title}
                  </span>
                  <span className="text-zinc-500 font-mono">
                    {p.technologies.join(', ')}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 print:text-zinc-700">
                  {p.summary}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 print:text-zinc-900">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {MILO_SKILL_GROUPS.map((g, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-[#F6F6F3] dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 print:bg-zinc-50 print:border-zinc-200">
                  <span className="font-bold text-zinc-950 dark:text-zinc-200 print:text-black">{g.category}: </span>
                  <span className="text-zinc-600 dark:text-zinc-400 print:text-zinc-700">{g.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 border-t border-zinc-200 dark:border-zinc-800 pt-4 print:border-zinc-300">
            <h2 className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 print:text-zinc-900">
              Achievements & Certifications
            </h2>
            <div className="text-xs text-zinc-700 dark:text-zinc-300 print:text-zinc-800">
              • LeetCode: 180+ problems solved across Data Structures and Algorithms.
            </div>
            <div className="text-xs text-zinc-700 dark:text-zinc-300 print:text-zinc-800">
              • HackerRank: Java Certification and Problem Solving Certification.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
