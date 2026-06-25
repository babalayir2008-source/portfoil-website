/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={18} />, href: personalInfo.github, label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: <Instagram size={18} />, href: personalInfo.instagram, label: 'Instagram' },
    { icon: <Mail size={18} />, href: `mailto:${personalInfo.email}`, label: 'Email' }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-lux-black text-slate-400 py-12 border-t border-white/10 transition-colors duration-300 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/5 pb-8 mb-8">
          
          {/* Brand Signoff */}
          <div className="text-center md:text-left space-y-2">
            <a href="#home" className="text-xl font-bold tracking-tight text-white flex items-center justify-center md:justify-start gap-1">
              <span className="bg-gradient-to-r from-lux-wine to-lux-gold text-transparent bg-clip-text font-mono">&lt;</span>
              <span>{personalInfo.name.split(' ')[0]}</span>
              <span className="text-lux-gold font-mono">/&gt;</span>
            </a>
            <p className="text-xs text-slate-500 font-mono">
              Computer Science Student &amp; Aspiring Full-Stack Developer
            </p>
          </div>

          {/* Quick links list */}
          <div className="flex gap-6 flex-wrap justify-center text-sm font-semibold text-slate-300">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-lux-gold transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(link.href);
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-lux-charcoal hover:bg-lux-wine/15 text-slate-300 hover:text-lux-gold border border-white/5 hover:scale-105 transition-all"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Copyright and signature */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Designed &amp; Developed with</span>
            <span className="text-rose-500">❤️</span>
            <span>in Mumbai, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
