/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2, Award } from 'lucide-react';
import { experienceData } from '../portfolioData';

export default function Experience() {
  const getBadgeStyle = (type: 'internship' | 'freelance' | 'academic') => {
    switch (type) {
      case 'internship':
        return 'bg-lux-wine/10 text-lux-wine border-lux-wine/25';
      case 'freelance':
        return 'bg-lux-gold/10 text-lux-gold border-lux-gold/25';
      default:
        return 'bg-lux-wine-light/10 text-lux-wine-light border-lux-wine-light/25';
    }
  };

  return (
    <section
      id="experience"
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
            My Experience
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Work &amp; Internships
          </motion.h3>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-lux-wine to-lux-gold mx-auto rounded-full" />
        </div>

        {/* Experience Cards Grid (Bento Boxes layout) */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 hover:border-lux-gold/25 dark:hover:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                {/* Left Side Info */}
                <div className="flex gap-4 items-start">
                  <span className="p-3 bg-slate-100 dark:bg-white/10 rounded-2xl shadow-sm border border-slate-200/40 dark:border-white/5 text-lux-gold shrink-0">
                    <Briefcase size={20} />
                  </span>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 font-medium">
                      {item.company}
                    </p>
                  </div>
                </div>

                {/* Right Side badges */}
                <div className="flex md:flex-col items-start md:items-end gap-2.5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/10 px-3 py-1 rounded-md">
                    <Calendar size={12} />
                    {item.period}
                  </span>
                  <span className={`inline-block text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-md border ${getBadgeStyle(item.type)}`}>
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Responsibilities bullet points */}
              <ul className="space-y-3.5 pl-0.5">
                {item.description.map((bullet, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    <CheckCircle2 size={16} className="text-lux-wine dark:text-lux-gold shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
