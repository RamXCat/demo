import React from 'react';
import { Shield, Bolt, CheckCheck, MessageSquare, Calendar, Database, Sparkles, Coins } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function ParticipantDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <section className="mb-10">
        <h1 className="text-3xl font-bold text-on-surface tracking-tight mb-2">Participant Dashboard</h1>
        <p className="text-on-surface-variant">Welcome back, Architect. Your forge is heating up.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Team Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card-elevated rounded-xl p-8 shadow-[0_0_40px_rgba(125,211,252,0.05)]"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-2 text-tertiary mb-1">
                  <Shield className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Active Team</span>
                </div>
                <h2 className="text-4xl font-black text-on-surface tracking-tighter">Cyber Knights</h2>
              </div>
              <div className="flex -space-x-3">
                {[
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuB3P8hX3AYGGPd0APx0YLMmGchfH7BWAN66P_0Xaz-_2MeG19ghG6Ik0ccMoSbis00x86Bc-9w88dTBl6h93K6h4Qw-MxFrN2IXzB55oce18mhfyYIucAzmmV2FGEG9mjkmDQ7wDfg5ME6OVHcI4ucgddIIoNK8gDdjVPAyL888wWbgKlFByi17ydk41FKPs8K00NZGQJKtXNId4y_zFeToLfDOoyQ7mSKkD8GMI2xcHPns3deHOEwM9F_5IMk-01wBRmsq2JTLOPNG",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCpsXRlLjWDZ8YU4wPdsH3i9SUH2TjFBYTZG9muCw6fY5ziKKm5KTys0Zwz_eWMbb0PYzmWiV-7EnXYghjxtBK2fVv0h6gY-tR08yG6dtRCskNAF0I2zWiMsmD48snyripZrMBIGzAVOafJdbBHFfe9AzQ4qVL3_mI8mbUWzsKT5U9unhWrJAF37-QVF6S8h-KctTxvtQ0rQdP92xQJy_2S4nBzp0YAifhnQTXb58twttBgjkmFEt3HTS3Fzyp5etC0xZ3vTk25PWPy",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBbUX8lMioswDLXv93eEX-qQYooKnL31ebqu2BWb-U2U7oopMZ0KJG676tDpxstVCqCy6C4CTESfnxUxXl40M9pqGhmumJYtzmizK5EBsXzNw32Z9Kt39ynz_djwEswAGZo3az2FEFGfXQ2E0wjC4HQqQAJ96TMcXz1inpp3LWqVWGd8mcNPxJL4b7ZW82vMz62QW3_TOpTKtDmXO2qO83Bi4ovzAx_f_6LA704Zy-u02qhoC9KlfDzJdf5y5nWrARnY-eF2rUdIVjc"
                ].map((src, i) => (
                  <img 
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-surface-container" 
                    src={src} 
                    alt="Member"
                    referrerPolicy="no-referrer"
                  />
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-surface-container bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">+2</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card rounded-lg p-6 border-l-4 border-primary">
                <h3 className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider mb-2">Project Title</h3>
                <p className="text-2xl font-bold text-primary tracking-tight">Decentralized Forge</p>
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest">Approved</span>
                </div>
              </div>
              
              <div className="glass-card rounded-lg p-6">
                <h3 className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider mb-4">Milestone Progress</h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div><span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary/10">Phase 2: Execution</span></div>
                    <div className="text-right"><span className="text-xs font-semibold inline-block text-primary">65%</span></div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-surface-container">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '65%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-on-surface text-lg font-bold mb-3">Project Description</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Building a resilient, p2p decentralized infrastructure for collaborative software synthesis. The "Forge" leverages distributed ledger technology to verify code contributions and maintain an immutable lineage of architectural decisions, ensuring maximum transparency for high-stakes open source development.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-xl p-6 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h4 className="text-on-surface font-bold mb-2">Next Workshop</h4>
                <p className="text-on-surface-variant text-sm">Advanced Sharding Patterns</p>
                <div className="mt-4 flex items-center gap-2 text-primary font-bold text-sm">
                  <Calendar className="w-4 h-4" />
                  Today at 18:00
                </div>
              </div>
              <Sparkles className="absolute top-4 right-4 w-12 h-12 text-primary opacity-10 group-hover:opacity-20 transition-opacity" />
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-xl p-6 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h4 className="text-on-surface font-bold mb-2">Active Bounties</h4>
                <p className="text-on-surface-variant text-sm">3 UI components needed</p>
                <div className="mt-4 flex items-center gap-2 text-tertiary font-bold text-sm">
                  <Database className="w-4 h-4" />
                  1,200 FORGE Token
                </div>
              </div>
              <Coins className="absolute top-4 right-4 w-12 h-12 text-tertiary opacity-10 group-hover:opacity-20 transition-opacity" />
            </motion.div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-on-surface font-bold mb-4 flex items-center gap-2">
              <Bolt className="text-primary w-5 h-5" />
              Quick Stats
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Commits this week', value: '24' },
                { label: 'Peer Reviews', value: '8' },
                { label: 'Global Rank', value: '#14', color: 'text-tertiary' }
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                  <span className="text-on-surface-variant text-sm">{stat.label}</span>
                  <span className={cn("font-bold", stat.color || "text-primary")}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-xl p-6">
            <h3 className="text-on-surface font-bold mb-4">Feed</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCheck className="text-primary w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Design System merged</p>
                  <p className="text-xs text-on-surface-variant">2 hours ago</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-tertiary/20 flex items-center justify-center shrink-0">
                  <MessageSquare className="text-tertiary w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">New feedback on Forge API</p>
                  <p className="text-xs text-on-surface-variant">5 hours ago</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-2 rounded-lg bg-white/5 text-primary text-sm font-bold hover:bg-primary/10 transition-colors">
              View All Activity
            </button>
          </div>

          <div className="rounded-xl overflow-hidden aspect-video relative group">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFCEMys1WMYaAeT8A2dQmDPONS0rLvMjxqo7MlpoHBioCWVQh1qJXf-35BtJThY4sf_44fKvknM-T48EZqckkNCPEDMHlnS7uKCX9Wwi05gSNu2_6aOrPN5qJpKUKaQM5ugognooISUcekhhqyg9iiBdyLlDTH9yRaKxZPwI9FtGI9mrd_97gQqhY2dG6fDzgFCVz8dpjAPK1o-UAD_BRCaBQaCLpvdKLo9vC4PVYPT944Eg3k07Z15oZscVsnZzMuQzjPilUKx3zS" 
              alt="Innovation Lab"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-4">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Innovation Lab</span>
              <h4 className="text-on-surface font-bold">Forging the Future</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
