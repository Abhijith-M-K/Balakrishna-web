'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ThreeDCard from '../common/ThreeDCard';
import { Shield, Clock, Users, Award, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Certified Trainers",
      description: "Learn from industry veterans with decades of on-road experience and safety expertise.",
      icon: <Award className="text-primary" size={32} />
    },
    {
      title: "Flexible Timings",
      description: "Morning or evening sessions tailored to your schedule. We value your time.",
      icon: <Clock className="text-primary" size={32} />
    },
    {
      title: "Personalized Care",
      description: "One-on-one attention ensures you progress at your own pace without pressure.",
      icon: <Users className="text-primary" size={32} />
    },
    {
      title: "Safety First",
      description: "Dual-control vehicles and comprehensive road safety theory for absolute confidence.",
      icon: <Shield className="text-primary" size={32} />
    }
  ];

  const fleet = [
    { name: "Maruti Suzuki Swift", type: "Premium Hatchback", icon: "🚗" },
    { name: "Maruti Suzuki Spresso", type: "Mini SUV", icon: "SUV" },
    { name: "Maruti Suzuki Alto 800", type: "Compact", icon: "🚙" },
    { name: "Mahindra Bolero", type: "Full SUV / Heavy", icon: "🚐" }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="text-center mb-16">
        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Services</span>
        <h2 className="text-5xl font-heading mb-6">Why Choose <span className="text-primary">Balakrishna</span>?</h2>
        <p className="text-text-muted max-w-2xl mx-auto">
          We provide a comprehensive learning experience that goes beyond the basic mechanics of driving.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="glass-card p-8 h-full rounded-2xl flex flex-col items-center text-center">
              <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div id="fleet" className="pt-20">
        <div className="glass-card overflow-hidden rounded-3xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="text-4xl font-heading mb-8">Our Modern <span className="text-primary">Training Fleet</span></h2>
            <div className="space-y-6">
              {fleet.map((car) => (
                <div key={car.name} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-none mb-1">{car.name}</h4>
                    <span className="text-xs text-text-muted uppercase tracking-wider">{car.type}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <a href="#contact" className="btn-primary">Book a Test Session</a>
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[500px]">
            <Image
              src="/fleet-bg.png"
              alt="Fleet"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent hidden lg:block"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 768px) {
          .md\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .lg\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
          .lg\:w-1\/2 { width: 50%; }
          .lg\:flex-row { flex-direction: row; }
          .lg\:block { display: block; }
        }
        .gap-6 { gap: 1.5rem; }
        .gap-4 { gap: 1rem; }
        .mb-16 { margin-bottom: 4rem; }
        .mb-24 { margin-bottom: 6rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mt-10 { margin-top: 2.5rem; }
        .pt-20 { padding-top: 5rem; }
        .text-center { text-align: center; }
        .max-w-2xl { max-width: 42rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .text-5xl { font-size: 3rem; }
        .text-4xl { font-size: 2.25rem; }
        .text-xl { font-size: 1.25rem; }
        .text-lg { font-size: 1.125rem; }
        .text-sm { font-size: 0.875rem; }
        .text-xs { font-size: 0.75rem; }
        .text-text-muted { color: var(--text-muted); }
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .items-center { align-items: center; }
        .justify-center { justify-content: center; }
        .p-8 { padding: 2rem; }
        .p-4 { padding: 1rem; }
        .p-12 { padding: 3rem; }
        .lg\:p-20 { padding: 5rem; }
        .rounded-2xl { border-radius: 1rem; }
        .rounded-3xl { border-radius: 1.5rem; }
        .rounded-lg { border-radius: 0.5rem; }
        .rounded-full { border-radius: 9999px; }
        .bg-white\/5 { background-color: rgba(255, 255, 255, 0.05); }
        .bg-primary\/20 { background-color: rgba(var(--primary-rgb), 0.2); }
        .border-white\/10 { border-color: rgba(255, 255, 255, 0.1); }
        .space-y-6 > * + * { margin-top: 1.5rem; }
        .overflow-hidden { overflow: hidden; }
        .relative { position: relative; }
        .absolute { position: absolute; }
        .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
        .object-cover { object-fit: cover; }
        .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
        .from-background { --tw-gradient-from: #050505; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
        .via-transparent { --tw-gradient-to: transparent; --tw-gradient-stops: var(--tw-gradient-from), transparent, var(--tw-gradient-to); }
      `}</style>
    </section>
  );
}
