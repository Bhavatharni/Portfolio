import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  FileText,
  Copy,
  Check,
  Github,
  Linkedin,
  MapPin,
  Clock,
  Sun,
  Moon,
  SlidersHorizontal,
  Sliders,
} from 'lucide-react';
import { MiloProfile } from '../types/portfolio';

interface HeroProps {
  profile: MiloProfile;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenResume: () => void;
  onOpenCustomize: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  darkMode,
  onToggleDarkMode,
  onOpenResume,
  onOpenCustomize,
}) => {
  const [copied, setCopied] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [localTime, setLocalTime] = useState('');
  const [ispSlider, setIspSlider] = useState(68);
  const [activeTopic, setActiveTopic] = useState(0);

  const dsaTopics = [
    { name: 'Arrays & Strings', solved: 54 },
    { name: 'Trees & Graphs', solved: 46 },
    { name: 'Dynamic Programming', solved: 38 },
    { name: 'Backtracking & Recursion', solved: 42 },
  ];

  useEffect(() => {
    const updateClock = () => {
      try {
        setLocalTime(
          new Date().toLocaleTimeString('en-IN', {
            timeZone: 'Asia/Kolkata',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          })
        );
      } catch {
        setLocalTime(
          new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          })
        );
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 15000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="pt-8 pb-16 md:pt-12 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Interactive Modular Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* Tile 1: Main Intro & CTA Card (7 cols) */}
          <div className="md:col-span-7 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 p-7 sm:p-10 flex flex-col justify-between space-y-8 shadow-xs">
            <div className="space-y-5">
              {/* Unboxed Kicker Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{profile.greeting}</span>
                  <span aria-hidden="true">·</span>
                  <span>{profile.availability}</span>
                </div>

                {/* Tactile Theme & Edit Controls inside Bento */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={onOpenCustomize}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-md transition-colors whitespace-nowrap"
                    title="Edit portfolio details"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={onToggleDarkMode}
                    aria-label="Toggle color mode"
                    className="p-1.5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-md transition-colors"
                  >
                    {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Balanced Display Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.1] [text-wrap:balance] font-display">
                {profile.headline}
              </h1>

              {/* Bio */}
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
                {profile.heroBio}
              </p>

              {/* Clean Unboxed Tech Highlights */}
              <div className="pt-1 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span className="text-zinc-400 dark:text-zinc-500">Focus:</span>
                {profile.techHighlights.map((tech, idx) => (
                  <React.Fragment key={idx}>
                    <span className="text-zinc-800 dark:text-zinc-200 font-medium">{tech}</span>
                    {idx < profile.techHighlights.length - 1 && (
                      <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 dark:text-zinc-950 rounded-lg transition-colors whitespace-nowrap shadow-xs"
              >
                <span>Explore My Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-lg transition-colors whitespace-nowrap"
              >
                <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors whitespace-nowrap"
                title={`Copy ${profile.email}`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{profile.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Tile 2: Studio Portrait Card (5 cols) */}
          <div className="md:col-span-5 rounded-2xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 relative min-h-[340px] shadow-xs group">
            <img
              src="/src/assets/images/milo_portrait_1794382396697.jpg"
              alt="Portrait of Bhavatharni J (Milo), Java Developer and Image Processing Engineer"
              referrerPolicy="no-referrer"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {!imageLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-900 p-6 text-center">
                <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100 font-display">{profile.name}</span>
                <span className="text-xs text-zinc-500 mt-1">Java & Computer Vision</span>
              </div>
            )}

            {/* Measured contrast scrim */}
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/85 via-black/45 to-transparent text-white">
              <div className="text-xs font-mono text-blue-300">
                B.E. Computer Science · {profile.cgpa.split('/')[0].trim()} CGPA
              </div>
              <div className="text-lg font-bold font-display mt-0.5">
                {profile.name} — Bhavatharni J
              </div>
              <div className="text-xs text-zinc-300 mt-0.5">
                Former Intern at HTIC, IIT Madras Research Park
              </div>
            </div>
          </div>

          {/* Tile 3: Interactive Live Location, Clock & Social Connections (4 cols) */}
          <div className="md:col-span-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 p-6 flex flex-col justify-between space-y-6 shadow-xs">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Coimbatore & Chennai, IN</span>
                </div>
                <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-100 tabular-nums">
                  {localTime || '05:30 PM'} <span className="text-xs font-normal text-zinc-500">IST</span>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                <Clock className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-zinc-100 dark:border-zinc-800">
              <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Connect & Repositories
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-950 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-950 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Tile 4: Interactive Surgical ISP Pipeline Slider Widget (4 cols) */}
          <div className="md:col-span-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 p-6 flex flex-col justify-between space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
                  Interactive Lab Preview
                </div>
                <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 font-display mt-0.5">
                  ROGB Demosaicing & CCM Calibration
                </h2>
              </div>
              <Sliders className="w-4 h-4 text-zinc-400" />
            </div>

            {/* Visual Compare Box */}
            <div className="relative h-24 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 select-none">
              <img
                src="/src/assets/images/project_rogb_surgical_pipeline_1794382394378.jpg"
                alt="ROGB Image Signal Processing calibrated view"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {/* Unprocessed RAW mosaic overlay clipped by slider */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-blue-500"
                style={{ width: `${100 - ispSlider}%` }}
              >
                <img
                  src="/src/assets/images/project_rogb_surgical_pipeline_1794382394378.jpg"
                  alt="Unprocessed RAW sensor input"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-75 max-w-none"
                  style={{ width: '400px' }}
                />
              </div>

              <div className="absolute bottom-1.5 left-2 text-[10px] font-mono text-white/90 bg-black/60 px-1.5 py-0.5 rounded">
                RAW Mosaic
              </div>
              <div className="absolute bottom-1.5 right-2 text-[10px] font-mono text-white/90 bg-blue-600/80 px-1.5 py-0.5 rounded">
                CCM Calibrated ({ispSlider}%)
              </div>
            </div>

            {/* Interactive Range Slider */}
            <div className="space-y-1">
              <input
                type="range"
                min={10}
                max={95}
                value={ispSlider}
                onChange={(e) => setIspSlider(Number(e.target.value))}
                aria-label="Slide to compare RAW sensor data vs ROGB reconstructed output"
                className="w-full accent-blue-600 cursor-pointer h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg"
              />
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                <span>Drag slider to inspect ISP stage</span>
                <span className="tabular-nums text-zinc-800 dark:text-zinc-200 font-medium">
                  ΔE: {(4.8 - (ispSlider / 100) * 3.1).toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Tile 5: Interactive DSA & Academic Metrics Widget (4 cols) */}
          <div className="md:col-span-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 p-6 flex flex-col justify-between space-y-4 shadow-xs">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  Algorithmic Practice
                </div>
                <div className="text-3xl font-extrabold font-mono text-zinc-900 dark:text-zinc-100 tabular-nums mt-0.5">
                  {profile.leetcodeCount}+ <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">LeetCode</span>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">CGPA</div>
                <div className="text-xl font-bold font-mono text-zinc-900 dark:text-zinc-100 tabular-nums">
                  {profile.cgpa}
                </div>
              </div>
            </div>

            {/* Interactive Topic Segmented Switcher */}
            <div className="space-y-2.5 pt-2 border-t border-zinc-100 dark:border-zinc-800">
              <div className="flex flex-wrap gap-1">
                {dsaTopics.map((topic, idx) => (
                  <button
                    key={topic.name}
                    onClick={() => setActiveTopic(idx)}
                    className={`px-2 py-1 text-[11px] font-medium rounded transition-colors ${
                      activeTopic === idx
                        ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950'
                        : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                    }`}
                  >
                    {topic.name.split(' ')[0]}
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                  {dsaTopics[activeTopic].name}
                </span>
                <span className="font-mono text-blue-600 dark:text-blue-400 font-semibold tabular-nums">
                  {dsaTopics[activeTopic].solved} problems
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
