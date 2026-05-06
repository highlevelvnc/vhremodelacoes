"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerating progress curve — slightly slower for breathing room
        const increment = prev < 50 ? 3 : prev < 85 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  // Lock scroll during loading
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background ambient glow */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(20,33,61,0.04) 0%, rgba(230,57,70,0.06) 50%, rgba(255,255,255,0) 70%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-[#e63946]/40"
                style={{
                  left: `${20 + i * 12}%`,
                  top: `${30 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 2.5 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Center content */}
          <div className="relative flex flex-col items-center gap-10">
            {/* Brand logo — animated reveal */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/vhremodelacaologo.png"
                alt="VH Remodelações"
                width={320}
                height={90}
                priority
                className="h-20 md:h-24 w-auto relative z-10"
              />
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="w-56 flex flex-col items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-full h-[2px] bg-[#e7e7eb] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #e63946, #c8102e, #e63946)",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              </div>
              <motion.span
                className="text-on-surface-variant text-[10px] font-mono tracking-wider"
                animate={{ opacity: progress === 100 ? 0 : 1 }}
              >
                {progress}%
              </motion.span>
            </motion.div>
          </div>

          {/* Bottom decorative line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[1px]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(230,57,70,0.4) 50%, transparent 100%)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
