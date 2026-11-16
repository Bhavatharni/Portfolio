import React, { useState, useEffect } from 'react';
import { MiloProfile, MiloProject } from './types/portfolio';
import {
  MILO_DEFAULT_PROFILE,
  MILO_PROJECTS,
  MILO_EXPERIENCE,
  MILO_EDUCATION,
} from './data/portfolioData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarqueeRibbon } from './components/MarqueeRibbon';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { AchievementsSection } from './components/AchievementsSection';
import { InterestsSection } from './components/InterestsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { CustomizeDrawer } from './components/CustomizeDrawer';

export default function App() {
  const [profile, setProfile] = useState<MiloProfile>(() => {
    try {
      const saved = localStorage.getItem('milo_developer_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        let migrated = false;
        if (parsed.github?.includes('milo-dev')) {
          parsed.github = 'https://github.com/Bhavatharni';
          migrated = true;
        }
        if (parsed.linkedin?.includes('milo-developer')) {
          parsed.linkedin = 'https://www.linkedin.com/in/bhavatharni-j/';
          migrated = true;
        }
        if (parsed.cgpa === '8.29 / 10') {
          parsed.cgpa = '8.38 / 10';
          migrated = true;
        }
        if (Array.isArray(parsed.personalHighlights)) {
          parsed.personalHighlights = parsed.personalHighlights.map(
            (h: { label: string; detail: string }) => {
              if (h.detail === '8.29 CGPA') {
                migrated = true;
                return { ...h, detail: '8.38 CGPA' };
              }
              return h;
            }
          );
        }
        if (migrated) {
          localStorage.setItem('milo_developer_profile', JSON.stringify(parsed));
        }
        return parsed;
      }
    } catch (e) {
      console.warn('Failed to load saved Milo profile', e);
    }
    return MILO_DEFAULT_PROFILE;
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('milo_theme');
    return saved ? saved === 'dark' : false;
  });

  const [selectedProject, setSelectedProject] = useState<MiloProject | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [customizeOpen, setCustomizeOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('milo_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('milo_theme', 'light');
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleSaveProfile = (updated: MiloProfile) => {
    setProfile(updated);
    try {
      localStorage.setItem('milo_developer_profile', JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to persist Milo profile', e);
    }
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-[#F6F6F3] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col selection:bg-blue-600/15 selection:text-blue-900 dark:selection:bg-blue-400/20 dark:selection:text-blue-200 transition-colors duration-200"
    >
      {/* Clean 3-Zone Top Bar */}
      <Header profile={profile} />

      <main className="flex-1">
        {/* Interactive Modular Bento Hero */}
        <Hero
          profile={profile}
          darkMode={darkMode}
          onToggleDarkMode={handleToggleDarkMode}
          onOpenResume={() => setResumeOpen(true)}
          onOpenCustomize={() => setCustomizeOpen(true)}
        />

        {/* Editorial Marquee Divider */}
        <MarqueeRibbon />

        {/* Asymmetric Bento Featured Projects */}
        <ProjectsSection
          projects={MILO_PROJECTS}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* About & Personal Highlights Bento */}
        <AboutSection profile={profile} />

        {/* Technical Toolkit Bento */}
        <SkillsSection />

        {/* Research & Industry Experience */}
        <ExperienceSection />

        {/* Education & Academic Standing */}
        <EducationSection />

        {/* LeetCode & Certifications */}
        <AchievementsSection />

        {/* Areas of Exploration */}
        <InterestsSection />

        {/* Contact & Direct Channels */}
        <ContactSection profile={profile} />
      </main>

      <Footer profile={profile} />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        profile={profile}
        projects={MILO_PROJECTS}
        experience={MILO_EXPERIENCE}
        education={MILO_EDUCATION}
      />

      <CustomizeDrawer
        isOpen={customizeOpen}
        onClose={() => setCustomizeOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
      />
    </div>
  );
}
