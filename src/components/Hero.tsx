/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileText, Github, Linkedin, Instagram } from 'lucide-react';
import { personalInfo } from '../portfolioData';
import BackgroundParticles from './BackgroundParticles';

interface HeroProps {
  isDarkMode: boolean;
}

export default function Hero({ isDarkMode }: HeroProps) {
  const titles = [
    "Full-Stack Developer",
    "Web Developer",
    "Computer Science Student",
    "Tech Enthusiast"
  ];

  const [currentText, setCurrentText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleType = () => {
      const currentFullText = titles[titleIndex];
      
      if (!isDeleting) {
        setCurrentText(currentFullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentFullText.length) {
          // Pause at full word
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(currentFullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const speed = isDeleting ? 40 : 100;
    const timer = setTimeout(handleType, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-lux-cream dark:bg-lux-dark transition-colors duration-300"
    >
      {/* Animated Particles */}
      <BackgroundParticles isDarkMode={isDarkMode} />

      {/* Decorative Bento Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-80 h-80 bg-lux-wine/10 dark:bg-lux-wine/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-lux-gold/10 dark:bg-lux-gold/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        {/* Bento Grid Layout Pattern */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Box 1: Left Main Hero Intro Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-white/70 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between backdrop-blur-md shadow-xl"
          >
            {/* Ambient gradients within bento box */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-lux-gold/10 dark:bg-lux-gold/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-48 h-48 bg-lux-wine/10 dark:bg-lux-wine/20 blur-[60px] rounded-full pointer-events-none" />

            <div className="relative z-10 space-y-6 flex-1 flex flex-col justify-center">
              <div className="flex flex-col items-start gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lux-wine/10 border border-lux-wine/20 text-lux-wine dark:text-lux-gold text-xs font-mono font-bold uppercase tracking-widest">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lux-gold opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-lux-gold" />
                  </span>
                  Available for Internships &amp; Projects
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                  Building digital <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-lux-wine via-lux-wine-light to-lux-gold text-transparent bg-clip-text">
                    experiences
                  </span>{" "}
                  that scale.
                </h1>
              </div>

              {/* Typing Subtitle */}
              <div className="h-8 flex items-center text-lg sm:text-xl font-mono text-slate-700 dark:text-slate-300 font-bold">
                <span className="text-lux-gold">&gt; </span>
                <span className="ml-2">{currentText}</span>
                <span className="animate-pulse ml-1 text-lux-wine font-bold">|</span>
              </div>

              <p className="max-w-xl text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                {personalInfo.bio}
              </p>

              {/* Social links bar */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-lux-wine dark:hover:text-lux-gold border border-slate-200/50 dark:border-white/10 hover:scale-105 shadow-sm transition-all text-xs font-semibold flex items-center gap-2"
                  aria-label="GitHub Profile"
                >
                  <Github size={16} />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-lux-wine dark:hover:text-lux-gold border border-slate-200/50 dark:border-white/10 hover:scale-105 shadow-sm transition-all text-xs font-semibold flex items-center gap-2"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={16} />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-lux-wine dark:hover:text-lux-gold border border-slate-200/50 dark:border-white/10 hover:scale-105 shadow-sm transition-all text-xs font-semibold flex items-center gap-2"
                  aria-label="Instagram Profile"
                >
                  <Instagram size={16} />
                  <span className="hidden sm:inline">Instagram</span>
                </a>
              </div>
            </div>

            {/* Action Buttons at the bottom */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-8 border-t border-slate-200/50 dark:border-white/5 mt-8">
              <button
                id="hero-contact-btn"
                onClick={() => handleScrollTo('#contact')}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-lux-wine hover:bg-lux-wine-light text-white font-bold shadow-lg hover:shadow-lux-wine/25 transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm"
              >
                Get In Touch
                <ArrowRight size={16} />
              </button>
              <button
                id="hero-resume-btn"
                onClick={() => handleScrollTo('#resume')}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white dark:bg-white/10 text-slate-900 dark:text-white font-bold border border-slate-200 dark:border-white/10 hover:bg-slate-55 dark:hover:bg-white/15 shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm"
              >
                <FileText size={16} />
                View Resume
              </button>
            </div>
          </motion.div>

          {/* Bento Box 2: Right Profile Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 bg-gradient-to-br from-lux-wine/10 to-lux-gold/10 dark:from-lux-wine/25 dark:to-lux-gold/10 border border-lux-wine/20 dark:border-white/10 rounded-3xl overflow-hidden relative flex flex-col justify-between shadow-xl min-h-[350px]"
          >
            {/* Visual Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10 pointer-events-none" />

            {/* Simulated Bento Banner Image */}
            <div className="w-full h-full absolute inset-0 bg-slate-900 flex items-center justify-center">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Bento Pill Labels Floating Inside */}
            <div className="absolute top-4 left-4 z-20 flex gap-2">
              <span className="bg-slate-950/75 border border-white/10 text-lux-gold text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-md shadow-md">
                ⚡ Computer Science
              </span>
            </div>

            {/* Bottom Floating Info */}
            <div className="relative z-20 p-6 mt-auto text-white">
              <p className="text-xs text-lux-gold font-bold uppercase tracking-widest font-mono mb-1">
                Aspiring Engineer
              </p>
              <h3 className="text-2xl font-bold tracking-tight">{personalInfo.name}</h3>
              <p className="text-xs text-slate-300 font-medium font-mono mt-0.5">{personalInfo.location}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
