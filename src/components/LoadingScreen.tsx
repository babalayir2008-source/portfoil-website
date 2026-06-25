/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing workspace...");

  useEffect(() => {
    const statuses = [
      "Initializing portfolio workspace...",
      "Configuring styling nodes...",
      "Retrieving project statistics...",
      "Establishing interactive interfaces...",
      "Compilation successful! Welcome."
    ];

    let currentStatusIndex = 0;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 800);
          return 100;
        }

        const increment = Math.floor(Math.random() * 8) + 4;
        const nextProgress = Math.min(prev + increment, 100);

        // Update status texts based on percentage ranges
        const targetIndex = Math.min(
          Math.floor((nextProgress / 100) * statuses.length),
          statuses.length - 1
        );
        if (targetIndex !== currentStatusIndex) {
          currentStatusIndex = targetIndex;
          setStatusText(statuses[targetIndex]);
        }

        return nextProgress;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        id="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-lux-dark text-white font-mono select-none px-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md p-6 bg-lux-black/80 border border-white/5 rounded-2xl shadow-2xl backdrop-blur-md"
        >
          {/* Window Buttons */}
          <div className="flex gap-1.5 mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full opacity-80" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-80" />
            <div className="w-3 h-3 bg-green-500 rounded-full opacity-80" />
          </div>

          {/* Title & Terminal Logo */}
          <div className="flex items-center gap-2 text-lux-gold mb-6 font-semibold">
            <Terminal size={18} />
            <span>developer_port:~ $ init --portfolio</span>
          </div>

          {/* Loading bar */}
          <div className="relative h-2 w-full bg-slate-800 rounded-full overflow-hidden mb-4">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-lux-wine via-lux-wine-light to-lux-gold"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Stats & Logs */}
          <div className="flex justify-between items-center text-xs text-slate-400 mb-3">
            <span>Progress</span>
            <span className="font-bold text-lux-gold">{progress}%</span>
          </div>

          <div className="h-6 overflow-hidden text-xs text-lux-gold">
            <motion.span
              key={statusText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block"
            >
              &gt; {statusText}
            </motion.span>
          </div>
        </motion.div>

        {/* Brand Signoff */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-8 text-xs tracking-wider text-slate-500"
        >
          MANSHI AYIR • PORTFOLIO v2.0
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
