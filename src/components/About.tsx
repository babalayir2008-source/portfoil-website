/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Target, Code, Award, Flame, User, GraduationCap, MapPin, Phone, Mail } from 'lucide-react';
import { personalInfo } from '../portfolioData';

export default function About() {
  const qualities = [
    {
      icon: <Target className="text-lux-wine" size={24} />,
      title: "Objective-Driven",
      desc: "Dedicated to achieving scalable architectural designs and writing efficient clean code."
    },
    {
      icon: <Code className="text-lux-gold" size={24} />,
      title: "Modern Tech Stack",
      desc: "Adept with React, Tailwind CSS, Express, Supabase, and SQL database services."
    },
    {
      icon: <Flame className="text-lux-wine-light" size={24} />,
      title: "Passionate Coder",
      desc: "Love exploring modern web tools and engineering user-centric web applications."
    },
    {
      icon: <Award className="text-lux-gold" size={24} />,
      title: "Detail Oriented",
      desc: "Focused on polished UI layouts, accessibility, and stellar typography pairings."
    }
  ];

  return (
    <section
      id="about"
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
            About Me
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            My Story &amp; Objective
          </motion.h3>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-lux-wine to-lux-gold mx-auto rounded-full" />
        </div>

        {/* Bento Grid Story Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Main Bio Bento Card (Spans 8 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md shadow-lg"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-200/60 dark:border-white/5">
                <div className="w-8 h-8 rounded-lg bg-lux-wine/10 flex items-center justify-center">
                  <User size={18} className="text-lux-wine" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  The Journey so Far...
                </h4>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                I am currently pursuing my **B.Sc. in Computer Science** in Mumbai. Throughout my academic career, I developed a strong passion for programming and interactive web layout construction. Building products like watch shops, student management systems, and high-performance frontends has equipped me with practical, user-centric problem-solving insights.
              </p>
              
              <div className="flex items-center gap-2 pt-4 pb-2">
                <div className="w-8 h-8 rounded-lg bg-lux-gold/15 flex items-center justify-center">
                  <Target size={18} className="text-lux-gold" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Career Objective
                </h4>
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed italic bg-slate-50 dark:bg-white/5 p-4 rounded-2xl border border-slate-200/50 dark:border-white/5">
                "{personalInfo.objective}"
              </p>
            </div>

            {/* Quick Details Grid inside Bento Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200/60 dark:border-white/5">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 hover:border-lux-gold/20 transition-colors">
                <div className="p-2 bg-lux-wine/10 rounded-lg">
                  <Mail className="text-lux-wine shrink-0" size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-xs font-semibold text-slate-800 dark:text-white hover:text-lux-wine dark:hover:text-lux-gold transition-colors truncate block">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 hover:border-lux-gold/20 transition-colors">
                <div className="p-2 bg-lux-wine/10 rounded-lg">
                  <Phone className="text-lux-wine shrink-0" size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Phone</p>
                  <a href={`tel:${personalInfo.phone}`} className="text-xs font-semibold text-slate-800 dark:text-white hover:text-lux-wine dark:hover:text-lux-gold transition-colors block">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 hover:border-lux-gold/20 transition-colors">
                <div className="p-2 bg-lux-gold/10 rounded-lg">
                  <MapPin className="text-lux-gold shrink-0" size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Location</p>
                  <p className="text-xs font-semibold text-slate-800 dark:text-white">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 hover:border-lux-gold/20 transition-colors">
                <div className="p-2 bg-lux-gold/10 rounded-lg">
                  <GraduationCap className="text-lux-gold shrink-0" size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Status</p>
                  <p className="text-xs font-semibold text-slate-800 dark:text-white">Active Undergraduate</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Bento Cards Qualities Column (Spans 5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {qualities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex gap-4 p-5 rounded-3xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 hover:border-lux-wine/30 dark:hover:border-lux-gold/20 hover:shadow-md transition-all duration-300 backdrop-blur-md flex-1 items-center"
              >
                <div className="p-3 bg-slate-100 dark:bg-white/10 rounded-2xl shadow-sm self-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
