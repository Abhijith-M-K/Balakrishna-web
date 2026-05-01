'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import ThreeDCard from '../common/ThreeDCard';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video 
        className={styles.videoBackground}
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/banner.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <ThreeDCard>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="pt-20 md:pt-0"
          >
            <span className={styles.badge}>Established 1988</span>
            <h1 className={styles.title}>
              Master the Art <br /> of Driving
            </h1>
            <p className={styles.subtitle}>
              Experience Kerala's most trusted driving school. Over 35 years of excellence in creating safe, confident drivers.
            </p>
            
            <div className={styles.ctaGroup}>
              <a href="#contact" className="btn-primary">
                Start Learning <ArrowRight size={18} />
              </a>
              <a href="#fleet" className={styles.btnSecondary}>
                View Fleet <Play size={16} fill="currentColor" />
              </a>
            </div>
          </motion.div>
        </ThreeDCard>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </motion.div>

      <style jsx>{`
        .pt-20 { padding-top: 5rem; }
        @media (min-width: 768px) {
          .md\:pt-0 { padding-top: 0; }
          .md\:flex { display: flex; }
        }
        .hidden { display: none; }
        .absolute { position: absolute; }
        .bottom-10 { bottom: 2.5rem; }
        .left-1\/2 { left: 50%; }
        .-translate-x-1\/2 { transform: translateX(-50%); }
        .w-6 { width: 1.5rem; }
        .h-10 { height: 2.5rem; }
        .border-2 { border-width: 2px; }
        .border-white\/20 { border-color: rgba(255, 255, 255, 0.2); }
        .rounded-full { border-radius: 9999px; }
        .flex { display: flex; }
        .justify-center { justify-content: center; }
        .p-1 { padding: 0.25rem; }
        .w-1 { width: 0.25rem; }
        .h-2 { height: 0.5rem; }
        .bg-primary { background-color: var(--primary); }
      `}</style>
    </section>
  );
}
