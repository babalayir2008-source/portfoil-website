/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Quick validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all the required fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');

    // Simulate server POST submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      // Reset success notification after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
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
            Get In Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Contact Details &amp; Form
          </motion.h3>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-lux-wine to-lux-gold mx-auto rounded-full" />
        </div>

        {/* Contact Layout Grid (Bento style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto items-stretch">
          
          {/* Left Column Contact details (Bento Box) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-lg backdrop-blur-md flex flex-col justify-between w-full">
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  Let's discuss your next project!
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  Whether you have an internship offer, a freelance project, a university assignment query, or just want to say hi, feel free to connect. I will do my best to respond within 24 hours.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-6">
                {/* Email link */}
                <div className="flex gap-4 items-center">
                  <span className="p-3 bg-slate-100 dark:bg-white/10 text-lux-wine rounded-2xl shadow-sm border border-slate-200/40 dark:border-white/5">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider">Email Me</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-lux-wine dark:hover:text-lux-gold transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone link */}
                <div className="flex gap-4 items-center">
                  <span className="p-3 bg-slate-100 dark:bg-white/10 text-lux-gold rounded-2xl shadow-sm border border-slate-200/40 dark:border-white/5">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider">Call Me</p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-lux-wine dark:hover:text-lux-gold transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location display */}
                <div className="flex gap-4 items-center">
                  <span className="p-3 bg-slate-100 dark:bg-white/10 text-lux-wine-light rounded-2xl shadow-sm border border-slate-200/40 dark:border-white/5">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider">Find Me</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Glassmorphic Form (Bento Box) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              id="portfolio-contact-form"
              className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-lg space-y-6 backdrop-blur-md"
            >
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Send a Message
              </h4>

              {/* Status Alert Panels */}
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium"
                  >
                    <CheckCircle2 size={18} className="shrink-0" />
                    <span>Thank you! Your message was sent successfully.</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm font-medium"
                  >
                    <AlertCircle size={18} className="shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Inputs */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="name-input" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 font-mono">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name-input"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-lux-wine dark:focus:border-lux-gold focus:ring-1 focus:ring-lux-wine dark:focus:ring-lux-gold transition-all text-sm font-medium"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email-input" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 font-mono">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email-input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-lux-wine dark:focus:border-lux-gold focus:ring-1 focus:ring-lux-wine dark:focus:ring-lux-gold transition-all text-sm font-medium"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message-input" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 font-mono">
                    Message
                  </label>
                  <textarea
                    id="message-input"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-lux-wine dark:focus:border-lux-gold focus:ring-1 focus:ring-lux-wine dark:focus:ring-lux-gold transition-all text-sm font-medium resize-none"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="submit-form-btn"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-lux-wine hover:bg-lux-wine-light text-white font-bold shadow-lg shadow-lux-wine/10 hover:shadow-lux-wine/20 disabled:bg-lux-wine/70 disabled:cursor-not-allowed cursor-pointer transition-all hover:scale-[1.01]"
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting Message...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
