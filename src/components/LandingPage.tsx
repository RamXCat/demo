import React from 'react';
import { Rocket, ShieldCheck, Cloud, Zap, Shield, Network, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function LandingPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-300 text-xs font-bold tracking-widest uppercase mb-6">
            Global Developer Summit 2024
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-on-surface">
            HackForge
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light tracking-wide mb-10 max-w-2xl mx-auto">
            Forge the Future of Tech through intense coding, collaborative spirit, and groundbreaking innovation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-primary text-on-primary font-bold rounded-xl neon-glow active:scale-95 transition-transform">
              Register Now
            </button>
            <button className="px-8 py-4 glass-card text-primary font-bold rounded-xl hover:bg-sky-400/10 transition-all active:scale-95">
              View Schedule
            </button>
          </div>
        </motion.div>
      </section>

      {/* Bento About Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 glass-card p-8 rounded-3xl flex flex-col justify-end min-h-[320px] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8">
              <Rocket className="text-sky-300/20 w-32 h-32 group-hover:text-sky-300/40 transition-colors" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-primary">About the Forge</h3>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              HackForge isn't just a competition; it's a crucible where ideas are hammered into reality. Join 500+ developers, designers, and visionaries for 48 hours of pure creation.
            </p>
          </motion.div>
          
          <div className="glass-card p-8 rounded-3xl flex flex-col items-center justify-center text-center">
            <div className="text-5xl font-black text-sky-300 mb-2">48H</div>
            <div className="text-on-surface-variant uppercase tracking-widest text-sm font-bold">Of Non-Stop Hacking</div>
          </div>
          
          <div className="glass-card p-8 rounded-3xl flex flex-col items-center justify-center text-center">
            <div className="text-5xl font-black text-tertiary mb-2">$50k</div>
            <div className="text-on-surface-variant uppercase tracking-widest text-sm font-bold">Total Prize Pool</div>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 glass-card-elevated p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-center border-sky-400/20"
          >
            <div className="w-full md:w-1/3 h-48 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSOtwZlQn1j_sOyOP_smCuKXbF5J594C2dM2t3EGMBgX7y3FqBpD6EcJagDEIHPqvhYOYSqq7JJC7Ar_DwBxZ9rmSa_GxDKW9cLDKyboQVnGR1gto4hFtpxp-RrqbBskE5TWz7ZhKhgMi8YXZdiBHk-v34bJztKShYNjiOyimiun-PX2HexdaYnftqWx95VTxVQ9hpihdWxioDVDdbydmreE5Q_DQCqU3ZCcT72peR0d7hOqg6TojB8hY7CXeLBAoyNjBRRLr-PbAF" 
                alt="Tech"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold mb-2 text-on-surface">The Theme: Cyber-Physical Systems</h4>
              <p className="text-on-surface-variant text-sm">This year we bridge the gap between digital intelligence and physical hardware. Show us how software changes the world around us.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The Journey</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="relative border-l-2 border-sky-400/20 ml-4 space-y-12 pb-8">
          {[
            { time: 'Friday, 18:00', title: 'Kickoff & Team Forming', desc: 'Opening ceremony followed by networking sessions to find your perfect squad.', color: 'border-sky-300' },
            { time: 'Saturday, 09:00', title: 'Hacking Commences', desc: 'The forge is lit. Start building your MVP with help from our world-class mentors.', color: 'border-tertiary' },
            { time: 'Sunday, 12:00', title: 'Final Polish', desc: 'Submission window opens. Refine your pitch and prepare your live demo.', color: 'border-sky-300' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-10 group"
            >
              <div className={cn("absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-slate-950 border-4 group-hover:scale-125 transition-transform", item.color)}></div>
              <div className="glass-card p-6 rounded-2xl">
                <div className={cn("font-bold mb-1", item.color.replace('border-', 'text-'))}>{item.time}</div>
                <h4 className="text-xl font-bold text-on-surface mb-2">{item.title}</h4>
                <p className="text-on-surface-variant text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sponsor Grid */}
      <section className="max-w-5xl mx-auto px-6 py-24 bg-surface-container/30 rounded-[4rem] mb-24">
        <h2 className="text-center text-on-surface-variant uppercase tracking-[0.3em] text-xs font-black mb-12">Forged with Support From</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-60">
          {[
            { icon: Cloud, name: 'CLOUD_CORE' },
            { icon: Zap, name: 'VOLT_DB' },
            { icon: Shield, name: 'SAFE_NET' },
            { icon: Network, name: 'NEXUS' }
          ].map((sponsor, i) => (
            <div key={i} className="flex justify-center">
              <div className="text-2xl font-bold text-slate-400 flex items-center gap-2">
                <sponsor.icon className="w-6 h-6" /> {sponsor.name}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
