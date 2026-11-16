import React, { useState } from 'react';
import { X, Save, RotateCcw, Check, SlidersHorizontal } from 'lucide-react';
import { MiloProfile } from '../types/portfolio';
import { MILO_DEFAULT_PROFILE } from '../data/portfolioData';

interface CustomizeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: MiloProfile;
  onSaveProfile: (updated: MiloProfile) => void;
}

export const CustomizeDrawer: React.FC<CustomizeDrawerProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
}) => {
  const [formData, setFormData] = useState<MiloProfile>(profile);
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field: keyof MiloProfile, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 900);
  };

  const handleReset = () => {
    setFormData(MILO_DEFAULT_PROFILE);
    onSaveProfile(MILO_DEFAULT_PROFILE);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-zinc-950/50 backdrop-blur-sm">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-lg bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl z-10 flex flex-col h-full overflow-hidden text-zinc-900 dark:text-zinc-100">
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <h3 className="text-base font-bold text-zinc-950 dark:text-zinc-100 font-display">
              Customize Portfolio
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Close customizer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-5 text-xs">
          {savedNotice && (
            <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Portfolio details updated!</span>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="font-mono text-zinc-600 dark:text-zinc-400">Display Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-3 py-2 bg-[#F6F6F3] dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-600 font-mono"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-mono text-zinc-600 dark:text-zinc-400">Greeting</label>
              <input
                type="text"
                value={formData.greeting}
                onChange={(e) => handleChange('greeting', e.target.value)}
                className="w-full px-3 py-2 bg-[#F6F6F3] dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-mono text-zinc-600 dark:text-zinc-400">Headline</label>
            <input
              type="text"
              value={formData.headline}
              onChange={(e) => handleChange('headline', e.target.value)}
              className="w-full px-3 py-2 bg-[#F6F6F3] dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-600"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-mono text-zinc-600 dark:text-zinc-400">Availability</label>
            <input
              type="text"
              value={formData.availability}
              onChange={(e) => handleChange('availability', e.target.value)}
              className="w-full px-3 py-2 bg-[#F6F6F3] dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-600"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-mono text-zinc-600 dark:text-zinc-400">Hero Bio</label>
            <textarea
              rows={3}
              value={formData.heroBio}
              onChange={(e) => handleChange('heroBio', e.target.value)}
              className="w-full px-3 py-2 bg-[#F6F6F3] dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-600 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="font-mono text-zinc-600 dark:text-zinc-400">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3 py-2 bg-[#F6F6F3] dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-600 font-mono"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-mono text-zinc-600 dark:text-zinc-400">CGPA</label>
              <input
                type="text"
                value={formData.cgpa}
                onChange={(e) => handleChange('cgpa', e.target.value)}
                className="w-full px-3 py-2 bg-[#F6F6F3] dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-600 font-mono"
              />
            </div>
          </div>

          <div className="space-y-3 pt-2 border-t border-zinc-200 dark:border-zinc-800">
            <div className="font-mono font-bold text-blue-600 dark:text-blue-400">
              Social Links
            </div>

            <div className="space-y-1.5">
              <label className="text-zinc-600 dark:text-zinc-400">GitHub URL</label>
              <input
                type="text"
                value={formData.github}
                onChange={(e) => handleChange('github', e.target.value)}
                className="w-full px-3 py-2 bg-[#F6F6F3] dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-zinc-600 dark:text-zinc-400">LinkedIn URL</label>
              <input
                type="text"
                value={formData.linkedin}
                onChange={(e) => handleChange('linkedin', e.target.value)}
                className="w-full px-3 py-2 bg-[#F6F6F3] dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save & Apply</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
