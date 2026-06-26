/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { Sparkles, Code, FolderGit, Cpu } from 'lucide-react';
import { achievementsData } from '../portfolioData';

// Custom single counter to animate metrics fluidly
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.floor(latest))
    });

    return () => controls.stop();
  }, [value]);

  return (
    <span className="font-mono font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-lux-wine via-lux-wine-light to-lux-gold">
      {displayValue}{suffix}
    </span>
  );
}

export default function Achievements() {
  const getIcon = (label: string) => {
    if (label.toLowerCase().includes('project')) {
      return <Code className="text-lux-gold" size={24} />;
    } else if (label.toLowerCase().includes('github') || label.toLowerCase().includes('repo')) {
      return <FolderGit className="text-lux-wine" size={24} />;
    }
    return <Cpu className="text-lux-wine-light" size={24} />;
  };

  return (
    <section
      id="achievements"
      className="py-16 bg-lux-cream/20 dark:bg-lux-dark transition-colors duration-300 relative overflow-hidden border-t border-slate-200/40 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Achievements Cards Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((ach, index) => {
            // Give one of the boxes a highly distinct bento gradient theme, just like the design spec!
            const isSpecialTheme = index === 1;

            if (isSpecialTheme) {
              return (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col justify-center items-center text-center p-6 rounded-3xl bg-gradient-to-br from-lux-wine to-lux-charcoal border border-lux-gold/25 text-white shadow-xl hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden group min-h-[140px]"
                >
                  <div className="absolute top-0 right-0 -mr-12 -mt-12 w-28 h-28 bg-white/5 blur-xl rounded-full pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="font-mono font-black text-4xl leading-none">
                      <Counter value={ach.value} suffix={ach.suffix} />
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-lux-gold mt-2">
                      {ach.label}
                    </span>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex items-center gap-5 p-6 rounded-3xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-lg hover:shadow-xl hover:border-lux-gold/25 backdrop-blur-md transition-all"
              >
                {/* Icon Bubble */}
                <div className="p-4 bg-slate-100 dark:bg-white/10 rounded-2xl shadow-sm border border-slate-200/40 dark:border-white/5 shrink-0">
                  {getIcon(ach.label)}
                </div>

                {/* Text Counters */}
                <div className="flex flex-col gap-0.5">
                  <Counter value={ach.value} suffix={ach.suffix} />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {ach.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
