/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { projectsData } from '../portfolioData';
import { Project } from '../types';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'fullstack'>('all');

  const filters = [
    { label: 'All Projects', value: 'all' as const },
    { label: 'Web Apps', value: 'web' as const },
    { label: 'Full Stack', value: 'fullstack' as const }
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section
      id="projects"
      className="py-20 bg-lux-cream/30 dark:bg-lux-dark transition-colors duration-300 relative overflow-hidden border-t border-slate-200/40 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs text-lux-gold font-bold tracking-widest uppercase font-mono mb-2"
          >
            My Portfolio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Featured Projects
          </motion.h3>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-lux-wine to-lux-gold mx-auto rounded-full" />
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;
            return (
              <button
                key={filter.value}
                id={`filter-${filter.value}`}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-lux-wine text-white shadow-md shadow-lux-wine/15 scale-102 border border-lux-wine-light'
                    : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col h-full bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-3xl overflow-hidden hover:shadow-xl hover:border-lux-wine/30 dark:hover:border-lux-gold/20 transition-all backdrop-blur-md"
              >
                {/* Product Thumbnail Screen */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <div className="absolute inset-0 bg-gradient-to-tr from-lux-wine/25 to-transparent z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/90 bg-slate-950/70 px-2.5 py-1 rounded-full backdrop-blur-md shadow-md border border-white/5">
                      {project.category === 'fullstack' ? 'Full Stack' : 'Web App'}
                    </span>
                  </div>
                </div>

                {/* Info & Tech Column */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-lux-wine dark:group-hover:text-lux-gold transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Badges and buttons */}
                  <div className="space-y-4 pt-2">
                    {/* Tech Badges */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {project.tech.map((badge) => (
                        <span
                          key={badge}
                          className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200/40 dark:border-white/5"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* CTA Links */}
                    <div className="flex items-center gap-3 pt-2">
                      <a
                        href={project.liveUrl}
                        className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-lux-wine hover:bg-lux-wine-light text-white text-xs font-bold shadow-md shadow-lux-wine/10 hover:shadow-lux-wine/20 transition-all cursor-pointer"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-200/40 dark:border-white/10 transition-all"
                      >
                        <Github size={14} />
                        GitHub Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
