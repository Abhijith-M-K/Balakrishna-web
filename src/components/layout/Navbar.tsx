'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'h-20 glass shadow-2xl' : 'h-24 bg-transparent'
      }`}
    >
      <div className="section-padding py-0 h-full w-full flex items-center justify-between">
        <Link href="/" className="group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: 'auto' }}>
          <div className="font-heading font-extrabold text-3xl leading-none tracking-tight text-white mb-1">Balakrishna</div>
          <div className="subtext">driving institute</div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <a href="#contact" className="btn-primary py-2 px-6 text-sm">
            Enroll Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center">
          <button 
            className="text-white p-2 w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 active:scale-90 transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full glass border-t border-white/10 overflow-hidden md:hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-white border-b border-white/5 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="#contact" 
                className="btn-primary mt-4 py-4 px-8 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .section-padding {
          padding-top: 0;
          padding-bottom: 0;
          width: 100%;
        }
        nav {
          display: flex;
          align-items: center;
        }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .hidden { display: none; }
        @media (min-width: 768px) {
          .md\:flex { display: flex; }
          .md\:hidden { display: none; }
        }
        .gap-2 { gap: 0.5rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-10 { gap: 2.5rem; }
        .flex-col { flex-direction: column; }
        .font-bold { font-weight: 700; }
        .text-2xl { font-size: 1.5rem; }
        .text-sm { font-size: 0.875rem; }
        .text-xs { font-size: 0.75rem; }
        .text-lg { font-size: 1.125rem; }
        .font-medium { font-weight: 500; }
        .uppercase { text-transform: uppercase; }
        .tracking-tight { letter-spacing: -0.025em; }
        .tracking-\[0\.3em\] { letter-spacing: 0.3em; }
        .text-white\/70 { color: rgba(255, 255, 255, 0.7); }
        .text-white { color: white; }
        .text-primary { color: var(--primary); }
        .bg-primary { background-color: var(--primary); }
        .rounded-full { border-radius: 9999px; }
        .z-50 { z-index: 50; }
        .fixed { position: fixed; }
        .top-0 { top: 0; }
        .left-0 { left: 0; }
        .w-full { width: 100%; }
        .h-20 { height: 70px; }
        .h-24 { height: 90px; }
        .transition-all { transition-property: all; }
        .duration-300 { duration: 300ms; }
        .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
        .bg-transparent { background-color: transparent; }
        .py-1\.5 { padding-top: 0.375rem; padding-bottom: 0.375rem; }
        .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .p-2 { padding: 0.5rem; }
        .p-8 { padding: 2rem; }
        .mb-1 { margin-bottom: 0.25rem; }
        .mt-4 { margin-top: 1rem; }
        .pb-2 { padding-bottom: 0.5rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .px-8 { padding-left: 2rem; padding-right: 2rem; }
        .text-center { text-align: center; }
        .border-t { border-top-width: 1px; }
        .border-b { border-bottom-width: 1px; }
        .border-white\/5 { border-color: rgba(255, 255, 255, 0.05); }
        .rounded-lg { border-radius: 0.5rem; }
        .bg-white\/5 { background-color: rgba(255, 255, 255, 0.05); }
        .border-white\/10 { border-color: rgba(255, 255, 255, 0.1); }
        .active\:scale-90:active { transform: scale(0.9); }
        .overflow-hidden { overflow: hidden; }
        .w-10 { width: 2.5rem; }
        .h-10 { height: 2.5rem; }
        .logo-container {
          display: flex;
          flex-direction: column;
        }
        .subtext { 
          color: white; 
          opacity: 0.7; 
          font-size: 13px;
          letter-spacing: 0.15em;
          font-weight: 500;
          text-transform: lowercase;
        }
        .text-3xl { font-size: 1.875rem; }
        .font-extrabold { font-weight: 800; }
        @media (max-width: 480px) {
          .text-3xl { font-size: 1.5rem; }
          .subtext { font-size: 11px; }
        }
      `}</style>
    </nav>
  );
}
