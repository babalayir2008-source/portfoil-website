/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award, Building } from 'lucide-react';
import { educationData } from '../portfolioData';

export default function Education() {
  const getIcon = (type: 'school' | 'college' | 'university') => {
    switch (type) {
      case 'university':
        return <GraduationCap size={20} className="text-lux-gold" />;
      case 'college':
        return <Building size={20} className="text-lux-wine" />;
      default:
        return <Award size={20} className="text-lux-wine-light" />;
    }
  };

  const getThemeColors = (type: 'school' | 'college' | 'university') => {
    switch (type) {
      case 'university':
        return 'text-lux-gold border-lux-gold/20 bg-lux-gold/5';
      case 'college':
        return 'text-lux-wine border-lux-wine/20 bg-lux-wine/5';
      default:
        return 'text-lux-wine-light border-lux-wine-light/20 bg-lux-wine-light/5';
    }
  };

  return (
    <section
      id="education"
      className="py-20 bg-lux-cream/30 dark:bg-lux-dark transition-colors duration-300 relative overflow-hidden border-t border-slate-200/40 dark:border-white/5"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-lux-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs text-lux-gold font-bold tracking-widest uppercase font-mono mb-2"
          >
            My Timeline
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Education History
          </motion.h3>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-lux-wine to-lux-gold mx-auto rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-white/10 space-y-8 py-4">
          {educationData.map((item, index) => {
            const theme = getThemeColors(item.type);
            const themeArray = theme.split(' ');
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Bullet node indicator */}
                <span className={`absolute -left-[35px] sm:-left-[43px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full border bg-white dark:bg-lux-dark border-slate-200 dark:border-white/10 shadow-sm group-hover:scale-110 transition-all`}>
                  {getIcon(item.type)}
                </span>

                {/* Core Timeline Card Content (Bento Style) */}
                <div className="p-6 rounded-3xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-md hover:shadow-lg transition-all backdrop-blur-md">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                    <div>
                      <span className={`inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${themeArray[1]} ${themeArray[0]} ${themeArray[2]} mb-2`}>
                        {item.type}
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-tight">
                        {item.degree}
                      </h4>
                    </div>
                    {/* Year badge */}
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/10 px-2.5 py-1 rounded-md self-start shrink-0">
                      <Calendar size={12} />
                      {item.year}
                    </span>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 font-semibold text-sm mb-3">
                    {item.institution}
                  </p>

                  <div className="flex items-center gap-1.5 text-sm">
                    <span className="text-slate-400 dark:text-slate-500 font-mono text-xs uppercase tracking-wider">Result:</span>
                    <span className="font-mono font-bold text-lux-wine dark:text-lux-gold bg-lux-wine/5 dark:bg-lux-gold/10 px-2 py-0.5 rounded-md text-xs">
                      {item.grade}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
