/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Download, Printer, FileText, CheckCircle } from 'lucide-react';
import { personalInfo, educationData, experienceData, skillsData } from '../portfolioData';

export default function ResumeSection() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    // Generate a beautifully formatted plain text version of the CV for immediate download
    const cvContent = `
==================================================================
${personalInfo.name.toUpperCase()} - RESUME / CURRICULUM VITAE
==================================================================
Title: ${personalInfo.title}
Email: ${personalInfo.email}
Phone: ${personalInfo.phone}
Location: ${personalInfo.location}
GitHub: ${personalInfo.github}
LinkedIn: ${personalInfo.linkedin}

CAREER OBJECTIVE:
------------------------------------------------------------------
${personalInfo.objective}

EDUCATION:
------------------------------------------------------------------
${educationData.map(edu => `- ${edu.degree}
  Institution: ${edu.institution}
  Period: ${edu.year}
  Result: ${edu.grade}`).join('\n\n')}

TECHNICAL SKILLS:
------------------------------------------------------------------
${skillsData.map(s => `- ${s.name} (${s.category.toUpperCase()}): ${s.percentage}%`).join('\n')}

PROFESSIONAL EXPERIENCE:
------------------------------------------------------------------
${experienceData.map(exp => `- ${exp.role} @ ${exp.company}
  Period: ${exp.period}
  Key Achievements:
${exp.description.map(desc => `    * ${desc}`).join('\n')}`).join('\n\n')}

==================================================================
Generated via Manshi Ayir's Developer Portfolio
==================================================================
    `;

    const blob = new Blob([cvContent.trim()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Manshi_Ayir_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="resume"
      className="py-20 bg-lux-cream/30 dark:bg-lux-dark transition-colors duration-300 relative overflow-hidden border-t border-slate-200/40 dark:border-white/5 print:bg-white print:p-0 print:m-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 print:max-w-full print:p-0">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 print:hidden">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs text-lux-gold font-bold tracking-widest uppercase font-mono mb-2"
          >
            My CV
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Resume &amp; Credentials
          </motion.h3>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-lux-wine to-lux-gold mx-auto rounded-full" />
        </div>

        {/* Action Controls */}
        <div className="flex justify-center items-center gap-4 mb-10 print:hidden flex-wrap">
          <button
            id="print-resume-btn"
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-lux-wine hover:bg-lux-wine-light text-white font-semibold shadow-md shadow-lux-wine/10 cursor-pointer transition-all hover:scale-[1.02]"
          >
            <Printer size={16} />
            Print Resume
          </button>
          
          <button
            id="download-resume-txt-btn"
            onClick={handleDownloadText}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/80 dark:bg-white/5 text-slate-900 dark:text-white font-semibold border border-slate-200/80 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 shadow-sm cursor-pointer transition-all hover:scale-[1.02]"
          >
            <Download size={16} />
            Download TEXT CV
          </button>
        </div>

        {/* Physical Paper Document Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white dark:bg-lux-dark border border-slate-200 dark:border-white/10 rounded-3xl shadow-xl overflow-hidden p-6 sm:p-12 text-slate-900 dark:text-slate-100 font-sans print:shadow-none print:border-none print:p-0 print:bg-white print:text-black"
        >
          {/* Resume Header */}
          <div className="border-b-2 border-slate-900 dark:border-white/10 pb-6 mb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-4 print:text-black print:border-black">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 text-slate-900 dark:text-white print:text-black">
                {personalInfo.name.toUpperCase()}
              </h1>
              <p className="text-md font-mono font-bold text-lux-gold print:text-blue-600">
                {personalInfo.title}
              </p>
            </div>
            {/* Quick Contact Rows */}
            <div className="text-sm space-y-1 text-slate-600 dark:text-slate-400 font-mono text-left md:text-right print:text-slate-800">
              <p>Email: {personalInfo.email}</p>
              <p>Phone: {personalInfo.phone}</p>
              <p>Location: {personalInfo.location}</p>
              <p className="print:hidden">GitHub: github.com/manshiayir</p>
            </div>
          </div>

          {/* Grid Columns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left side: Bio, Education, Skills */}
            <div className="md:col-span-5 space-y-8">
              {/* objective */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-450 dark:text-slate-400 mb-3 border-b border-slate-100 dark:border-white/10 pb-1.5 print:text-slate-600">
                  Career Objective
                </h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 print:text-black">
                  {personalInfo.objective}
                </p>
              </div>

              {/* skills */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-450 dark:text-slate-400 mb-3 border-b border-slate-100 dark:border-white/10 pb-1.5 print:text-slate-600">
                  Technical Core Skills
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  {skillsData.map(s => (
                    <div key={s.name} className="flex justify-between font-mono text-xs">
                      <span className="text-slate-700 dark:text-slate-300 print:text-black font-semibold">{s.name}</span>
                      <span className="text-lux-gold font-bold">{s.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* education */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-450 dark:text-slate-400 mb-4 border-b border-slate-100 dark:border-white/10 pb-1.5 print:text-slate-600">
                  Education Details
                </h3>
                <div className="space-y-4">
                  {educationData.map(edu => (
                    <div key={edu.id} className="space-y-1">
                      <p className="text-sm font-bold text-slate-900 dark:text-white print:text-black">
                        {edu.degree}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 print:text-slate-700">
                        {edu.institution}
                      </p>
                      <div className="flex justify-between text-xs font-mono text-slate-500 dark:text-slate-500">
                        <span>{edu.year}</span>
                        <span className="font-bold text-lux-gold">{edu.grade}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Experience & Projects */}
            <div className="md:col-span-7 space-y-8">
              {/* Experience */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-450 dark:text-slate-400 mb-4 border-b border-slate-100 dark:border-white/10 pb-1.5 print:text-slate-600">
                  Professional Experience
                </h3>
                <div className="space-y-6">
                  {experienceData.map(exp => (
                    <div key={exp.id} className="space-y-2">
                      <div className="flex justify-between items-start gap-2 flex-wrap">
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white print:text-black">
                            {exp.role}
                          </h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold print:text-slate-750">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-450 bg-slate-100 dark:bg-white/10 border border-slate-200/50 dark:border-white/5 px-2 py-0.5 rounded print:border-none print:bg-transparent">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed print:text-black">
                        {exp.description.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extra curricular projects */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-450 dark:text-slate-400 mb-4 border-b border-slate-100 dark:border-white/10 pb-1.5 print:text-slate-600">
                  Academics &amp; Key Projects
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white print:text-black">PRO-LIFETIME Watch</h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 print:text-slate-800 leading-snug">
                      Luxury watch store with cart modules and product filters. React, Tailwind.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white print:text-black">Mojito Shop Catalog</h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 print:text-slate-800 leading-snug">
                      Cocktail catalog featuring responsive layouts and custom scrolling effects. React.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white print:text-black">Student Management</h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 print:text-slate-800 leading-snug">
                      Educational portal with student database management and analytical metrics. Express.js, MySQL.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white print:text-black">Portfolio Website</h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 print:text-slate-800 leading-snug">
                      Modern glassmorphic developer platform with complete category filtration modules.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
