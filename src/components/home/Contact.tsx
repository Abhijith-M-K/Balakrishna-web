'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ExternalLink, MessageCircle } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      title: "Call Us",
      numbers: [
        { label: "Main Office", value: "+91 7510335355", link: "tel:+917510335355" },
        { label: "Support Line", value: "+91 9446258277", link: "tel:+919446258277" },
        { label: "Office Line", value: "+91 9846738555", link: "tel:+919846738555" }
      ],
      icon: <Phone size={24} />,
    },
    {
      title: "Email",
      value: "mdsbalakrishna555@gmail.com",
      sub: "Inquiries",
      icon: <Mail size={24} />,
      link: "mailto:mdsbalakrishna555@gmail.com"
    }
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -mr-64 -mt-64 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full -ml-64 -mb-64 z-0"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
          <h2 className="text-6xl font-heading mb-8">Let's Get You <br /> Behind the <span className="text-primary">Wheel</span></h2>
          <p className="text-text-muted mb-12 text-lg">
            Ready to start your journey? Visit us or contact our team to enroll in our upcoming batch. We're here to help you every step of the way.
          </p>

          <div className="space-y-6">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-3xl bg-white/5 border border-white/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {contact.icon}
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-3 opacity-70">{contact.title}</span>
                  {contact.numbers ? (
                    <div className="space-y-6">
                      {contact.numbers.map((n) => (
                        <a key={n.value} href={n.link} className="block group border-b border-white/5 pb-4 last:border-0 last:pb-0">
                          <p className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight mb-1">{n.value}</p>
                          <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">{n.label}</span>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a href={contact.link} className="group">
                      <p className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight">{contact.value}</p>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="glass-card p-10 rounded-3xl flex-1 flex flex-col justify-between text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Location</h3>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                Almansoori Business Centre, <br />
                Pookad, Koyilandy, <br />
                Kozhikode, Kerala 673307
              </p>
            </div>

            <div className="w-full h-48 rounded-2xl overflow-hidden mb-8 grayscale hover:grayscale-0 transition-all duration-500 border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.365147814472!2d75.7275037!3d11.4533036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba663be6064975d%3A0x6b262a632c7e090f!2sBalakrishna%20Driving%20Institute!5e0!3m2!1sen!2sin!4v1714550000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              href="https://maps.google.com/?q=Balakrishna+Driving+Institute+Pookad"
              target="_blank"
              className="btn-primary w-full justify-center"
            >
              Get Directions <ExternalLink size={18} />
            </a>
          </div>

          <div className="mt-auto pt-8 border-t border-white/10 opacity-50">
            <p className="text-center text-xs font-medium uppercase tracking-widest">
              © {new Date().getFullYear()} Balakrishna Driving Institute <br />
              Crafted for Excellence
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 1024px) {
          .lg\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        .gap-16 { gap: 4rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-8 { gap: 2rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-12 { margin-bottom: 3rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-1 { margin-bottom: 0.25rem; }
        .text-5xl { font-size: 3rem; }
        .text-2xl { font-size: 1.5rem; }
        .text-xl { font-size: 1.25rem; }
        .text-lg { font-size: 1.125rem; }
        .text-sm { font-size: 0.875rem; }
        .font-bold { font-weight: 700; }
        .font-medium { font-weight: 500; }
        .tracking-widest { letter-spacing: 0.1em; }
        .uppercase { text-transform: uppercase; }
        .text-primary { color: var(--primary); }
        .text-text-muted { color: var(--text-muted); }
        .text-white\/60 { color: rgba(255, 255, 255, 0.6); }
        .text-white\/40 { color: rgba(255, 255, 255, 0.4); }
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .items-center { align-items: center; }
        .justify-center { justify-content: center; }
        .flex-1 { flex: 1 1 0%; }
        .justify-between { justify-content: space-between; }
        .w-full { width: 100%; }
        .w-14 { width: 3.5rem; }
        .h-14 { height: 3.5rem; }
        .w-12 { width: 3rem; }
        .h-12 { height: 3rem; }
        .rounded-full { border-radius: 9999px; }
        .rounded-2xl { border-radius: 1rem; }
        .rounded-3xl { border-radius: 1.5rem; }
        .rounded-xl { border-radius: 0.75rem; }
        .bg-primary\/10 { background-color: rgba(var(--primary-rgb), 0.1); }
        .bg-primary\/20 { background-color: rgba(var(--primary-rgb), 0.2); }
        .bg-primary\/5 { background-color: rgba(var(--primary-rgb), 0.05); }
        .border-white\/5 { border-color: rgba(255, 255, 255, 0.05); }
        .hover\:border-primary\/20:hover { border-color: rgba(var(--primary-rgb), 0.2); }
        .group-hover\:bg-primary:hover { background-color: var(--primary); }
        .group-hover\:text-white:hover { color: #fff; }
        .duration-300 { transition-duration: 300ms; }
        .leading-tight { line-height: 1.25; }
        .opacity-70 { opacity: 0.7; }
        .text-6xl { font-size: 3.75rem; }
        .mt-auto { margin-top: auto; }
        .pt-8 { padding-top: 2rem; }
        .border-t { border-top-width: 1px; border-color: rgba(255, 255, 255, 0.1); }
        .opacity-50 { opacity: 0.5; }
        .bg-secondary\/30 { background-color: rgba(26, 26, 26, 0.3); }
        .h-48 { height: 12rem; }
        .grayscale { filter: grayscale(1); }
        .hover\:grayscale-0:hover { filter: grayscale(0); }
        .duration-500 { transition-duration: 500ms; }
        .text-center { text-align: center; }
        .flex-shrink-0 { flex-shrink: 0; }
        .space-y-4 > * + * { margin-top: 1rem; }
        .tracking-tighter { letter-spacing: -0.05em; }
        .mb-3 { margin-bottom: 0.75rem; }
        .pb-4 { padding-bottom: 1rem; }
        .border-b { border-bottom-width: 1px; border-color: rgba(255, 255, 255, 0.05); }
        .last\:border-0:last-child { border-bottom-width: 0; }
        .last\:pb-0:last-child { padding-bottom: 0; }
        .absolute { position: absolute; }
        .relative { position: relative; }
        .top-0 { top: 0; }
        .right-0 { right: 0; }
        .bottom-0 { bottom: 0; }
        .left-0 { left: 0; }
        .w-\[500px\] { width: 500px; }
        .h-\[500px\] { height: 500px; }
        .bg-primary\/10 { background-color: rgba(var(--primary-rgb), 0.1); }
        .bg-primary\/5 { background-color: rgba(var(--primary-rgb), 0.05); }
        .blur-\[120px\] { filter: blur(120px); }
        .blur-\[100px\] { filter: blur(100px); }
        .rounded-full { border-radius: 9999px; }
        .-mr-64 { margin-right: -16rem; }
        .-mt-64 { margin-top: -16rem; }
        .-ml-64 { margin-left: -16rem; }
        .-mb-64 { margin-bottom: -16rem; }
        .z-0 { z-index: 0; }
        .z-10 { z-index: 10; }
        .overflow-hidden { overflow: hidden; }
        .space-y-6 > * + * { margin-top: 1.5rem; }
      `}</style>
    </section>
  );
}
