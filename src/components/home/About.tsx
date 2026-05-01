'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className={`${styles.about} section-padding`}>
      <div className={styles.grid}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.imageContainer}
        >
          <Image 
            src="/about-bg.png" 
            alt="Driving Excellence" 
            fill 
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.placeholderImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Legacy of Trust</span>
          <h2 className={styles.heading}>
            Driving Towards <br /> <span className="text-primary">Excellence</span> Since 1988
          </h2>
          <p className={styles.description}>
            With over <span className={styles.highlight}>35 years of experience</span>, Balakrishna Driving Institute has been a pioneer in road safety and driver education in Kerala. We don't just teach you how to drive; we build your confidence and instill a culture of safety.
          </p>
          <p className={styles.description}>
            Our team of <span className={styles.highlight}>certified professional trainers</span> uses modern techniques and personalized curriculum to ensure every student masters the road with precision.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>35+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>15k+</span>
              <span className={styles.statLabel}>Safe Drivers</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
        .bg-gradient-to-t { background-image: linear-gradient(to top, var(--tw-gradient-stops)); }
        .from-black\/60 { --tw-gradient-from: rgba(0, 0, 0, 0.6); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
        .to-transparent { --tw-gradient-to: transparent; }
        .mb-4 { margin-bottom: 1rem; }
        .block { display: block; }
        .text-sm { font-size: 0.875rem; }
        .tracking-widest { letter-spacing: 0.1em; }
        .font-bold { font-weight: 700; }
        .text-primary { color: var(--primary); }
      `}</style>
    </section>
  );
}
