/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Layout, Server, Database, Wrench } from 'lucide-react';
import { skillsData } from '../portfolioData';
import { Skill } from '../types';

export default function Skills() {
  const categories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Layout className="text-lux-gold" size={22} />,
      gradient: 'from-lux-wine to-lux-gold'
    },
    {
      id: 'backend',
      title: 'Backend Engineering',
      icon: <Server className="text-lux-wine-light" size={22} />,
      gradient: 'from-lux-wine-light to-lux-gold'
    },
    {
      id: 'database',
      title: 'Database Management',
      icon: <Database className="text-lux-gold" size={22} />,
      gradient: 'from-lux-wine to-lux-gold'
    },
    {
      id: 'tools',
      title: 'Tools & Utilities',
      icon: <Wrench className="text-lux-wine-light" size={22} />,
      gradient: 'from-lux-wine-light to-lux-gold'
    }
  ];

  const getSkillsByCategory = (category: string): Skill[] => {
    return skillsData.filter(skill => skill.category === category);
  };

  return (
    <section
      id="skills"
      className="py-20 bg-lux-cream/20 dark:bg-lux-dark transition-colors duration-300 relative overflow-hidden border-t border-slate-200/40 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs text-lux-gold font-bold tracking-widest uppercase font-mono mb-2"
          >
            My Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Skills &amp; Technologies
          </motion.h3>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-lux-wine to-lux-gold mx-auto rounded-full" />
        </div>

        {/* Categories Grid (Bento Boxes layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, index) => {
            const catSkills = getSkillsByCategory(cat.id);
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-lg hover:shadow-xl transition-all hover:border-lux-gold/20 backdrop-blur-md relative overflow-hidden"
              >
                {/* Decorative glow behind categories */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-lux-gold/5 dark:bg-lux-wine/10 blur-[40px] rounded-full pointer-events-none" />

                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/50 dark:border-white/5">
                  <span className="p-2.5 bg-slate-100 dark:bg-white/10 rounded-2xl shadow-sm">
                    {cat.icon}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {cat.title}
                  </h4>
                </div>

                {/* Skills Progress List */}
                <div className="space-y-5">
                  {catSkills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-sm font-semibold">
                        <span className="text-slate-800 dark:text-slate-200">{skill.name}</span>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{skill.percentage}%</span>
                      </div>
                      
                      {/* Track */}
                      <div className="h-2 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                        {/* Progress */}
                        <motion.div
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${cat.gradient} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
