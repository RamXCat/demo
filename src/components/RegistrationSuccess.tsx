import React from 'react';
import { CheckCircle, Terminal, Info, Users, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface RegistrationSuccessProps {
  onGoToDashboard: () => void;
}

export default function RegistrationSuccess({ onGoToDashboard }: RegistrationSuccessProps) {
  return (
    <div className="flex-grow flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-tertiary/5 rounded-full blur-[100px] -z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full flex flex-col items-center text-center"
      >
        {/* Icon with Glow Effect */}
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl group-hover:bg-primary/50 transition-all duration-700"></div>
          <div className="relative w-32 h-32 bg-slate-950/80 rounded-full border-2 border-primary/40 flex items-center justify-center shadow-[0_0_50px_rgba(125,211,252,0.2)]">
            <CheckCircle className="text-primary w-16 h-16" fill="currentColor" fillOpacity={0.2} />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
          Registration Successful!
        </h1>
        <p className="text-on-surface-variant text-lg max-w-lg mb-10 leading-relaxed">
          Welcome to the forge. Your journey into the future of decentralized development starts now.
        </p>

        {/* Team ID Bento Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="glass-card-elevated w-full p-8 rounded-xl shadow-[0_0_30px_rgba(125,211,252,0.05)] mb-8 flex flex-col items-center gap-4 group"
        >
          <p className="text-on-surface-variant text-sm uppercase tracking-widest">Team Identity Assigned</p>
          <div className="bg-slate-900/50 border border-primary/20 px-6 py-4 rounded-lg flex items-center gap-3">
            <Terminal className="text-primary w-6 h-6" />
            <span className="text-2xl md:text-3xl font-mono font-bold text-primary tracking-wider">HF-2024-88</span>
          </div>
          <div className="flex items-center gap-2 text-primary/60 text-sm mt-2">
            <Info className="w-4 h-4" />
            <span>Keep this ID safe for check-in during the event.</span>
          </div>
        </motion.div>

        {/* Next Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-12">
          <div className="glass-card p-6 rounded-lg text-left flex gap-4 items-start">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Users className="text-primary w-5 h-5" />
            </div>
            <div>
              <h3 className="text-on-surface font-semibold mb-1">Join Discord</h3>
              <p className="text-on-surface-variant text-sm">Connect with 500+ hackers and find your mentors.</p>
            </div>
          </div>
          <div className="glass-card p-6 rounded-lg text-left flex gap-4 items-start">
            <div className="bg-tertiary/10 p-2 rounded-lg">
              <BookOpen className="text-tertiary w-5 h-5" />
            </div>
            <div>
              <h3 className="text-on-surface font-semibold mb-1">Pre-hack Guide</h3>
              <p className="text-on-surface-variant text-sm">Download the technical brief and API documentation.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button 
            onClick={onGoToDashboard}
            className="bg-primary/20 text-primary border border-primary/30 px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary hover:text-on-primary transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(125,211,252,0.1)] flex items-center justify-center gap-2"
          >
            <span>Go to Dashboard</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-transparent border border-white/10 text-on-surface-variant px-10 py-4 rounded-xl font-medium text-lg hover:border-on-surface-variant hover:text-on-surface transition-all duration-300">
            Resend Email
          </button>
        </div>
      </motion.div>

      <footer className="mt-24 py-12 flex flex-col items-center gap-4 opacity-50">
        <div className="flex items-center gap-2">
          <Terminal className="text-primary w-5 h-5" />
          <span className="font-black text-on-surface tracking-tighter">HackForge</span>
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-on-surface-variant">Forging the next generation</p>
      </footer>
    </div>
  );
}
