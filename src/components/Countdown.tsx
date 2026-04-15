import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Countdown() {
  const targetDate = new Date('2026-05-08T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-6 py-20 relative" id="countdown">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-mono text-xs text-cyber tracking-[0.3em] uppercase mb-8">System Initialization</h2>
        <div className="flex justify-center gap-4 sm:gap-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <div className="glass-morphism w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center rounded-xl border border-white/10 mb-2 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <span className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-widest">{String(value).padStart(2, '0')}</span>
              </div>
              <span className="font-mono text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest">{unit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
