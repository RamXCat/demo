import { motion } from 'motion/react';
import Background from './components/Background';
import Countdown from './components/Countdown';


const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function App() {
  return (
    <div className="relative z-10">
      <Background />
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-morphism border-b border-white/5 px-6 flex justify-between items-center transition-all duration-300 py-4 bg-black/80">
        <div className="font-mono font-bold text-cyber tracking-tighter text-lg">
          HACKVERSE
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-[90vh] flex flex-col items-center justify-center px-6 text-center pt-10 pb-20 relative overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          <div className="mb-6 flex flex-col items-center">
            <p className="text-[9px] sm:text-xs text-slate-500 uppercase tracking-[0.4em] font-bold mb-8 opacity-80">Sri Devaraj Urs Educational Trust (R)</p>
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-4">
              <div className="logo-glow-container h-16 sm:h-24 w-16 sm:w-24">
                <div className="logo-spinning-glow"></div>
                <div className="logo-inner">
                  <img src="/logo/jalappa_logo.png" alt="Jalappa Logo" className="h-full w-full object-contain" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-1 max-w-[200px] sm:max-w-none shadow-cyber/20">
                <span className="font-mono text-xl sm:text-2xl font-bold uppercase tracking-widest text-cyber text-center">R.L. Jalappa Institute of Technology</span>
                <p className="text-[7px] sm:text-[9px] text-slate-500 uppercase tracking-wider opacity-70 italic text-center">
                  (Approved by AICTE, New Delhi | Affiliated to Visvewaraya Technological University, Belagavi)
                </p>
              </div>
              <div className="logo-glow-container h-16 sm:h-24 w-16 sm:w-24">
                <div className="logo-spinning-glow"></div>
                <div className="logo-inner">
                  <img src="/logo/college_logo.png" alt="College Logo" className="h-full w-full object-contain" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2">
                <div className="logo-glow-container h-12 sm:h-16 w-12 sm:w-16">
                  <div className="logo-spinning-glow"></div>
                  <div className="logo-inner">
                    <img src="/logo/cse(ai)_logo.png" alt="CSE(AI) Logo" className="h-full w-full object-contain" />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[10px] sm:text-xs text-slate-500 uppercase font-bold tracking-[0.2em] mb-1">Organised by</span>
                  <span className="text-sm sm:text-base text-slate-300 uppercase font-bold tracking-wider text-center max-w-[300px] sm:max-w-none">
                    Computer Science & Engineering<br/>
                    <span className="text-cyber opacity-80">(Artificial Intelligence & Machine Learning)</span>
                  </span>
                </div>
                <div className="logo-glow-container h-12 sm:h-16 w-12 sm:w-16">
                  <div className="logo-spinning-glow"></div>
                  <div className="logo-inner">
                    <img src="/logo/nuxes.jpeg" alt="Nexus Logo" className="h-full w-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="font-mono font-bold leading-none mb-10 animate-float flex flex-col items-center">
            <span className="text-sm sm:text-lg text-slate-400 uppercase font-bold tracking-[0.4em] mb-0 opacity-75">AI Nexus Presents</span>
            <span className="text-7xl sm:text-8xl block text-gradient tracking-tighter -mt-2">HACKVERSE</span>
          </h1>
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="logo-glow-container h-14 sm:h-16 w-14 sm:w-16">
              <div className="logo-spinning-glow"></div>
              <div className="logo-inner">
                <img src="/logo/iic_logo.png" alt="IIC Logo" className="h-full w-full object-contain" />
              </div>
            </div>
            <p className="font-mono text-xs tracking-[0.5em] text-slate-500">CODE TILL DAWN</p>
            <div className="logo-glow-container h-14 sm:h-16 w-14 sm:w-16">
              <div className="logo-spinning-glow"></div>
              <div className="logo-inner">
                <img src="/logo/IQAC_logo.png" alt="IQAC Logo" className="h-full w-full object-contain" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 gap-4 w-full max-w-sm mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          transition={{ delay: 0.2 }}
        >
          <div className="glass-morphism rounded-xl p-4 text-left border-l-2 border-l-cyber group transition-all hover:translate-y-[-4px]">
            <p className="text-[10px] font-mono text-slate-500 uppercase mb-1">Date</p>
            <p className="text-sm font-bold group-hover:text-cyber transition-colors">May 8-9, 2026</p>
          </div>
          <div className="glass-morphism rounded-xl p-4 text-left border-l-2 border-l-neon group transition-all hover:translate-y-[-4px]">
            <p className="text-[10px] font-mono text-slate-500 uppercase mb-1">Prize Pool</p>
            <p className="text-sm font-bold group-hover:text-neon transition-colors">₹20,000</p>
          </div>
          <div className="glass-morphism rounded-xl p-4 text-left border-l-2 border-l-white/20 group transition-all hover:translate-y-[-4px]">
            <p className="text-[10px] font-mono text-slate-500 uppercase mb-1">Team Size</p>
            <p className="text-sm font-bold">2 - 4 Members</p>
          </div>
          <div className="glass-morphism rounded-xl p-4 text-left border-l-2 border-l-white/20 group transition-all hover:translate-y-[-4px]">
            <p className="text-[10px] font-mono text-slate-500 uppercase mb-1">Entry Fee</p>
            <p className="text-sm font-bold">₹599 / Team</p>
          </div>
          <div className="glass-morphism rounded-xl p-4 text-left border-l-2 border-l-cyber group transition-all hover:translate-y-[-4px]">
            <p className="text-[10px] font-mono text-slate-500 uppercase mb-1">Reporting</p>
            <p className="text-sm font-bold group-hover:text-cyber transition-colors">09:00 AM</p>
          </div>
          <a 
            href="https://maps.app.goo.gl/YkiEB8JC96HwJpFv9" 
            target="_blank" 
            rel="noreferrer"
            className="col-span-2 glass-morphism rounded-xl p-4 text-left border-l-2 border-l-blue-500 group transition-all hover:translate-y-[-4px]"
          >
            <p className="text-[10px] font-mono text-slate-500 uppercase mb-1">Venue</p>
            <p className="text-sm font-bold group-hover:text-blue-400 transition-colors flex items-center gap-2">
              RLJIT, Doddaballapur <span className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
            </p>
          </a>
        </motion.div>

        <motion.div 
          className="flex flex-col w-full max-w-xs gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          transition={{ delay: 0.4 }}
        >
          <a 
            href="https://forms.gle/5dHgd6RcS3w8tShFA" 
            target="_blank" 
            rel="noreferrer"
            className="relative group bg-gradient-to-r from-blue-600 to-neon p-4 rounded-xl font-bold text-white text-lg shadow-lg animate-glow overflow-hidden text-center"
          >
            <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover:animate-shimmer"></div>
            <span className="relative z-10">Register Your Team →</span>
          </a>
          <a className="text-slate-400 text-sm font-medium hover:text-cyber transition-colors flex items-center justify-center gap-2" href="#countdown">
            View Event Details <span className="animate-bounce">↓</span>
          </a>
        </motion.div>
      </header>

      <Countdown />

      {/* Poster Section */}
      <section className="px-6 py-20 relative" id="poster">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          <div className="mb-12 text-center">
            <h2 className="font-mono text-xs text-neon tracking-[0.3em] uppercase mb-1">Visuals</h2>
            <h3 className="text-4xl font-bold text-white tracking-tight">Event Poster</h3>
          </div>
          <div className="flex justify-center">
            <div className="relative group p-2 glass-morphism rounded-3xl overflow-hidden border border-white/10 w-full max-w-xl mx-auto shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber/20 to-neon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"></div>
              <img 
                src="/poster.jpeg" 
                alt="HACKVERSE 2K26 Poster" 
                className="w-full h-auto rounded-2xl border border-white/5 relative z-10 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Prize Section */}
      <section className="px-6 py-20" id="prizes">
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          <h2 className="font-mono text-xs text-cyber tracking-[0.3em] uppercase mb-1">Rewards</h2>
          <h3 className="text-4xl font-bold text-white tracking-tight">Prize Pool</h3>
          <p className="text-slate-500 text-sm mt-2">Winning isn't everything, but ₹20,000 helps.</p>
        </motion.div>

        <div className="space-y-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ delay: 0.1 }}
          >
            <div className="glass-morphism relative p-6 rounded-2xl border border-yellow-500/30 flex items-center gap-6 group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:border-yellow-500/60 transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-5xl group-hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">🥇</div>
              <div className="relative z-10">
                <p className="text-[10px] font-mono text-yellow-500 tracking-widest uppercase mb-1">First Place</p>
                <p className="text-3xl font-bold font-mono text-white group-hover:text-yellow-400 transition-colors duration-300">₹10,000</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-morphism relative p-6 rounded-2xl border border-slate-400/30 flex items-center gap-6 group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(148,163,184,0.3)] hover:border-slate-300/60 transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-5xl group-hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(148,163,184,0.5)]">🥈</div>
              <div className="relative z-10">
                <p className="text-[10px] font-mono text-slate-400 tracking-widest uppercase mb-1">Second Place</p>
                <p className="text-3xl font-bold font-mono text-white group-hover:text-slate-200 transition-colors duration-300">₹6,000</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-morphism relative p-6 rounded-2xl border border-orange-500/30 flex items-center gap-6 group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:border-orange-500/60 transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-5xl group-hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">🥉</div>
              <div className="relative z-10">
                <p className="text-[10px] font-mono text-orange-400 tracking-widest uppercase mb-1">Third Place</p>
                <p className="text-3xl font-bold font-mono text-white group-hover:text-orange-300 transition-colors duration-300">₹4,000</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-black/40 to-transparent" id="domains">
        <motion.div 
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          <h2 className="font-mono text-xs text-neon tracking-[0.3em] uppercase mb-1">Problem Spaces</h2>
          <h3 className="text-3xl font-bold text-white tracking-tight">Domains</h3>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div 
            className="group h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ delay: 0.1 }}
          >
            <div className="glass-morphism p-7 rounded-[2rem] border-white/5 relative overflow-hidden transition-all hover:translate-y-[-8px] hover:border-cyber/30 h-full flex flex-col">
              <div className="absolute -top-4 -right-4 text-8xl opacity-5 group-hover:opacity-20 transition-opacity grayscale group-hover:grayscale-0">🤖</div>
              <div className="relative z-10 flex flex-col h-full">
                <h4 className="text-xl font-bold text-cyber mb-2">1. AI for Social Impact</h4>
                <p className="text-sm text-slate-400 italic mb-6 leading-relaxed">"Code with a conscience, not just caffeine."</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {['Education', 'Accessibility', 'Rural Tech', 'Bias Detection', 'Mental Health', 'Smart Governance'].map(tag => (
                    <span key={tag} className="text-[9px] px-3 py-1.5 bg-cyber/10 text-cyber border border-cyber/20 rounded-full font-bold uppercase tracking-tighter">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="group h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-morphism p-7 rounded-[2rem] border-white/5 relative overflow-hidden transition-all hover:translate-y-[-8px] hover:border-neon/30 h-full flex flex-col">
              <div className="absolute -top-4 -right-4 text-8xl opacity-5 group-hover:opacity-20 transition-opacity grayscale group-hover:grayscale-0">🔐</div>
              <div className="relative z-10 flex flex-col h-full">
                <h4 className="text-xl font-bold text-neon mb-2">2. Cybersecurity & Blockchain</h4>
                <p className="text-sm text-slate-400 italic mb-6 leading-relaxed">"Basically the wild west with WiFi."</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {['Phishing Detection', 'Web3 Security', 'Blockchain Voting', 'Privacy Tools', 'Fraud Prevention'].map(tag => (
                    <span key={tag} className="text-[9px] px-3 py-1.5 bg-neon/10 text-neon border border-neon/20 rounded-full font-bold uppercase tracking-tighter">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="group h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-morphism p-7 rounded-[2rem] border-white/5 relative overflow-hidden transition-all hover:translate-y-[-8px] hover:border-white/30 h-full flex flex-col">
              <div className="absolute -top-4 -right-4 text-8xl opacity-5 group-hover:opacity-20 transition-opacity grayscale group-hover:grayscale-0">🌐</div>
              <div className="relative z-10 flex flex-col h-full">
                <h4 className="text-xl font-bold text-white mb-2">3. IoT & Smart Systems</h4>
                <p className="text-sm text-slate-400 italic mb-6 leading-relaxed">"Turning dumb objects into overachievers."</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {['Smart Cities', 'Wearables', 'Automation', 'Environment', 'Smart Homes'].map(tag => (
                    <span key={tag} className="text-[9px] px-3 py-1.5 bg-white/5 text-white border border-white/10 rounded-full font-bold uppercase tracking-tighter">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="group h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ delay: 0.4 }}
          >
            <div className="glass-morphism p-7 rounded-[2rem] border-white/5 relative overflow-hidden transition-all hover:translate-y-[-8px] hover:border-white/30 h-full flex flex-col">
              <div className="absolute -top-4 -right-4 text-8xl opacity-5 group-hover:opacity-20 transition-opacity grayscale group-hover:grayscale-0">🏥</div>
              <div className="relative z-10 flex flex-col h-full">
                <h4 className="text-xl font-bold text-white mb-2">4. Healthcare & Wellness Tech</h4>
                <p className="text-sm text-slate-400 italic mb-6 leading-relaxed">"Keeping humans alive so they can attend more hackathons."</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {['Health Apps', 'AI Diagnosis', 'Mental Wellness', 'Telemedicine'].map(tag => (
                    <span key={tag} className="text-[9px] px-3 py-1.5 bg-white/5 text-white border border-white/10 rounded-full font-bold uppercase tracking-tighter">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rules & Scoring */}
      <section className="px-6 py-24" id="rules">
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          <h2 className="font-mono text-xs text-cyber tracking-[0.3em] uppercase mb-1">Execution</h2>
          <h3 className="text-3xl font-bold text-white tracking-tight">Rules & Scoring</h3>
        </motion.div>

        <div className="space-y-8">
          <motion.div 
            className="flex gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ delay: 0.1 }}
          >
            <span className="font-mono text-neon font-bold text-lg">01</span>
            <p className="text-sm text-slate-300 leading-relaxed pt-1">All development must happen during the 24-hour window. Pre-built projects are strictly prohibited.</p>
          </motion.div>
          <motion.div 
            className="flex gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ delay: 0.2 }}
          >
            <span className="font-mono text-neon font-bold text-lg">02</span>
            <p className="text-sm text-slate-300 leading-relaxed pt-1">Open-source libraries are allowed, but core logic must be your own work created on-site.</p>
          </motion.div>
          <motion.div 
            className="flex gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ delay: 0.3 }}
          >
            <span className="font-mono text-neon font-bold text-lg">03</span>
            <p className="text-sm text-slate-300 leading-relaxed pt-1">Final submission: Source code, Presentation (PPT), and a functional live demo.</p>
          </motion.div>


        </div>
      </section>

      {/* Coordinators Section */}
      <section className="px-6 py-24 bg-gradient-to-t from-black to-transparent" id="contact">
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          <h2 className="font-mono text-xs text-neon tracking-[0.3em] uppercase mb-1">Human Interface</h2>
          <h3 className="text-3xl font-bold text-white tracking-tight">Coordinators</h3>
        </motion.div>

        <div className="grid gap-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-mono text-[10px] uppercase text-cyber mb-6 tracking-widest flex items-center gap-2">
              <span className="w-8 h-[1px] bg-cyber/30"></span> Student Leads
            </h4>
            <div className="space-y-2">
              {[
                { name: 'Bhaskar P', phone: '9380293876' },
                { name: 'Chandan V', phone: '9741521788' },
                { name: 'Syed fouzan', phone: '8431558655' }
              ].map((lead) => (
                <div key={lead.name} className="flex justify-between items-center py-4 border-b border-white/5 group hover:border-white/20 transition-colors">
                  <span className="text-sm font-medium text-slate-300">{lead.name}</span>
                  <a className="font-mono text-xs text-cyber hover:text-white transition-colors underline decoration-cyber/30 underline-offset-4" href={`tel:${lead.phone}`}>{lead.phone}</a>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-mono text-[10px] uppercase text-neon mb-6 tracking-widest flex items-center gap-2">
              <span className="w-8 h-[1px] bg-neon/30"></span> Faculty Advisory
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-4 border-b border-white/5 group hover:border-white/20 transition-colors">
                <span className="text-sm font-medium text-slate-300">Mrs. Nandini K V</span>
                <a className="font-mono text-xs text-neon hover:text-white transition-colors underline decoration-neon/30 underline-offset-4" href="tel:9972002194">9972002194</a>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-white/5 group hover:border-white/20 transition-colors">
                <span className="text-sm font-medium text-slate-300">Mrs. Rekha K P</span>
                <a className="font-mono text-xs text-neon hover:text-white transition-colors underline decoration-neon/30 underline-offset-4" href="tel:9620016205">9620016205</a>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-white/5 group hover:border-white/20 transition-colors">
                <span className="text-sm font-medium text-slate-300">Official Email</span>
                <a className="font-mono text-xs text-cyber hover:text-white transition-colors underline decoration-cyber/30 underline-offset-4" href="mailto:hackverserljit26@gmail.com">hackverserljit26@gmail.com</a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-24 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          <p className="text-slate-500 text-xs mb-8 font-mono tracking-widest">STILL STANDING? PROVE IT.</p>
          <a 
            href="https://forms.gle/5dHgd6RcS3w8tShFA" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block relative overflow-hidden bg-white text-black px-12 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 group"
          >
            <span className="relative z-10">Secure Your Slot</span>
            <div className="absolute inset-0 bg-cyber translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 border-t border-white/5 bg-black text-center">
        <div className="font-mono font-bold text-cyber mb-6 tracking-widest">HACKVERSE 2K26</div>
        <div className="text-slate-500 text-[10px] sm:text-[11px] uppercase tracking-widest mb-6 leading-relaxed font-medium px-4">
          Sri Devaraj Urs Educational Trust (R)<br/>
          <span className="text-white font-bold">R.L. JALAPPA INSTITUTE OF TECHNOLOGY</span><br/>
          Kodigehalli, Doddaballapur 561203, Bengaluru Rural District, Karnataka, India.
        </div>
        <a 
          href="https://maps.app.goo.gl/YkiEB8JC96HwJpFv9" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-[10px] text-cyber hover:text-white transition-colors uppercase font-bold tracking-tighter"
        >
          View on Maps ↗
        </a>
        <div className="flex justify-center gap-6 text-xs text-slate-400 mt-8">
          <a className="hover:text-white transition-colors underline decoration-white/10 underline-offset-4" href="https://maps.app.goo.gl/YkiEB8JC96HwJpFv9" target="_blank" rel="noreferrer">Location</a>
          <a className="hover:text-white transition-colors underline decoration-white/10 underline-offset-4" href="https://rljit.in" target="_blank" rel="noreferrer">Institution</a>
          <a className="hover:text-white transition-colors underline decoration-white/10 underline-offset-4" href="mailto:hackverserljit26@gmail.com">Contact</a>
        </div>
        <div className="mt-12 opacity-40 grayscale invert brightness-200">
          <img 
            alt="Logo" 
            className="mx-auto h-8" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxbOWzSV3hdhhzPNFF9uHAbyuO6kgL_uXOEK1EjH_VSVlriP1iRputb2WM1M272oUFuufJpJdNeJET177PlGtU0Bill6RQnhUbmneb83DIItOkSOb7EZ7ydBwGmbonhpVL9Gg3xxpGm1KbeTmUrxXe0NWkpaR1Rk2SDOStyhesO0gfuCbGVm49IBRqw5E6ueQOZlIzGuVvvbM7HrmgGXl1qQaQiH8rmxPEQ_9YxBe4hZDr910QoqKJ6gGtiuHLT4DNJHzNzkeJ7HIN"
            referrerPolicy="no-referrer"
          />
        </div>
        <p className="mt-10 text-[9px] text-slate-700 font-mono">ENCRYPTED CONNECTION // EST. 2026</p>
      </footer>
    </div>
  );
}
