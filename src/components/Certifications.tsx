/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, ShieldCheck, Calendar } from 'lucide-react';
import { certificationsData } from '../portfolioData';

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 bg-lux-cream/30 dark:bg-lux-dark transition-colors duration-300 relative overflow-hidden border-t border-slate-200/40 dark:border-white/5"
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
            My Badges
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Certifications &amp; Accreditation
          </motion.h3>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-lux-wine to-lux-gold mx-auto rounded-full" />
        </div>

        {/* Certifications Grid (Bento Boxes layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-3xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-lg hover:shadow-xl hover:border-lux-gold/25 dark:hover:border-white/20 transition-all flex flex-col justify-between backdrop-blur-md"
            >
              <div className="space-y-4">
                {/* Header Badge Row */}
                <div className="flex justify-between items-start">
                  <span className="p-2.5 bg-lux-wine/10 text-lux-wine rounded-xl">
                    <Award size={20} />
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-lux-gold bg-lux-gold/10 px-2.5 py-1 rounded-full border border-lux-gold/15">
                    <ShieldCheck size={12} />
                    Verified
                  </span>
                </div>

                {/* Cert Details */}
                <div className="space-y-2">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold font-mono uppercase tracking-wider">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Footer Date Range */}
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 dark:text-slate-500 border-t border-slate-200/50 dark:border-white/5 pt-4 mt-6">
                <Calendar size={12} />
                <span>Earned {cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
