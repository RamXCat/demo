import React from 'react';
import { Gavel, Terminal, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function RulesFAQ() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const faqs = [
    { q: "Can I use AI to generate my project's code?", a: "AI assistance (GitHub Copilot, GPT-4, etc.) is permitted as a tool, but the project's unique logic and architectural decisions must be your own. Purely AI-generated boilerplate without custom implementation will be scored lower." },
    { q: "What hardware will be provided?", a: "We provide high-speed 1Gbps internet, power outlets, and ergonomic seating. You are responsible for your own laptops, chargers, and any specialized hardware (VR headsets, IoT boards, etc.)." },
    { q: "Is there an age limit for participation?", a: "HackForge is open to anyone 18 years or older. Students under 18 may participate with a signed parental consent form and a chaperone present." },
    { q: "Do I need to be a developer to join?", a: "No! We love designers, product managers, and domain experts. Great hacks require more than just code—they need UX, business viability, and clear communication." }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <section className="mb-16">
        <div className="flex flex-col gap-4">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Guidelines & Resources</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface">
            Rules of <span className="ice-gradient-text">Engagement.</span>
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            Everything you need to know about participating in the HackForge 2024 season. Build fast, break things, but follow the protocol.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="md:col-span-2 glass-card rounded-xl p-8 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Gavel className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">General Conduct</h3>
          </div>
          <ul className="space-y-4 text-on-surface-variant">
            {[
              "Projects must be built entirely during the 48-hour hackathon window. No pre-existing code.",
              "Open source libraries and frameworks are permitted and encouraged.",
              "Teams can consist of 1 to 4 members. Cross-disciplinary teams are prioritized.",
              "Respect the community. Harassment of any kind will lead to immediate disqualification."
            ].map((rule, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-primary font-bold">0{i + 1}</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card-elevated rounded-xl p-8 flex flex-col gap-6 shadow-[0_0_30px_rgba(125,211,252,0.05)]">
          <div className="h-12 w-12 rounded-lg bg-tertiary/10 flex items-center justify-center">
            <Terminal className="text-tertiary w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold">Submissions</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            All code must be hosted on GitHub. 
            <br/><br/>
            Include a detailed README.md and a 2-minute video demonstration of your functional prototype.
          </p>
          <div className="mt-auto pt-6 border-t border-white/5">
            <button className="w-full py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary font-bold hover:bg-primary/20 transition-all active:scale-95">
              View Template
            </button>
          </div>
        </div>
      </div>

      <section className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Frequently Asked Questions</h3>
          <p className="text-on-surface-variant">Quick answers to common queries about HackForge.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-all text-left"
              >
                <span className="font-semibold text-lg pr-4">{faq.q}</span>
                <ChevronDown className={cn("text-primary transition-transform duration-300", openFaq === i && "rotate-180")} />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-on-surface-variant leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <div className="relative h-64 w-full rounded-2xl overflow-hidden glass-card flex items-center justify-center">
          <div className="absolute inset-0 z-0 opacity-40">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU4MWrnOYFNtjXvlxtLAwWnw2bh0VcP005L1UGlzXmU6A-ofH-60odWTej9eNdTsMD4NOfy6fefBptY722HHNa7ZeMzZd3q_T4JPFx02pgvr0_6PEeqI4arA-SyCFk_mYOdCS64MFvtRK2zE1jAgyOD_bc9LBu8ROgpny_p2NqvWqFk2EfNyN7jlVhsOb-CNNgcL9EO6KyOg6WSD54wLJFHoQCHoUf-rKPIO7nMiNv08MR_M68g_lXI7QAhanj9qZK7cafGXUeBjnE" 
              alt="HackForge Hero"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 text-center px-6">
            <h4 className="text-3xl font-black mb-4">Still have questions?</h4>
            <p className="text-on-surface-variant mb-6">Join our community Discord and chat with the organizers directly.</p>
            <button className="px-8 py-3 rounded-full bg-primary text-on-primary font-bold hover:shadow-[0_0_20px_rgba(125,211,252,0.4)] transition-all active:scale-95">
              Join Discord
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
