import React from 'react';
import { Download, Search, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function AdminPanel() {
  const teams = [
    { id: 'NB', name: 'NebulaBytes', project: 'Quantum Sync', status: 'Pending', color: 'bg-sky-400' },
    { id: 'CO', name: 'CyberOps', project: 'ZeroTrust Net', status: 'Approved', color: 'bg-tertiary' },
    { id: 'VX', name: 'VoidX', project: 'DarkMatter UI', status: 'Pending', color: 'bg-pink-400' },
    { id: 'FL', name: 'FrostLayer', project: 'Cryo Ledger', status: 'Rejected', color: 'bg-amber-400' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-on-surface tracking-tight">Admin Panel</h2>
          <p className="text-on-surface-variant text-sm">Reviewing 24 active team submissions</p>
        </div>
        <button className="bg-sky-400/10 border border-sky-300/30 text-sky-300 px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-sky-400/20 transition-all font-medium active:scale-95 shadow-[0_0_15px_rgba(125,211,252,0.1)]">
          <Download className="w-5 h-5" />
          Export CSV
        </button>
      </div>

      <div className="mb-8 relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-sky-300 w-5 h-5" />
        <input 
          className="w-full glass-card bg-slate-900/40 pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-primary transition-all text-on-surface placeholder:text-slate-600" 
          placeholder="Search teams, projects, or status..." 
          type="text"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Teams', value: '128', border: 'border-l-sky-400' },
          { label: 'Pending', value: '14', border: 'border-l-tertiary' },
          { label: 'Approved', value: '84', border: 'border-l-emerald-400' },
          { label: 'Rejected', value: '30', border: 'border-l-error' }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className={cn("glass-card p-4 rounded-xl border-l-4", stat.border)}
          >
            <p className="text-on-surface-variant text-[10px] uppercase tracking-widest font-semibold mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-on-surface">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="hidden md:grid grid-cols-12 px-6 py-3 text-on-surface-variant text-[10px] font-bold uppercase tracking-widest border-b border-sky-400/10">
          <div className="col-span-4">Team Name</div>
          <div className="col-span-4">Project Title</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        {teams.map((team, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-5 md:px-6 md:py-4 transition-all hover:bg-slate-900/40 border border-sky-400/5 hover:border-sky-400/20 group"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="col-span-4 flex items-center gap-3">
                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center font-bold border border-white/10", team.color.replace('bg-', 'text-'), team.color + '/10')}>
                  {team.id}
                </div>
                <div>
                  <p className="font-bold text-on-surface">{team.name}</p>
                  <p className="text-xs text-on-surface-variant md:hidden">Project: {team.project}</p>
                </div>
              </div>
              
              <div className="col-span-4 hidden md:block">
                <p className="text-sm font-medium text-slate-300">{team.project}</p>
              </div>
              
              <div className="col-span-2">
                <span className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border",
                  team.status === 'Pending' ? "bg-amber-400/10 text-amber-300 border-amber-400/20" :
                  team.status === 'Approved' ? "bg-sky-400/10 text-sky-300 border-sky-400/20" :
                  "bg-error/10 text-error border-error/20"
                )}>
                  <span className={cn("w-1.5 h-1.5 rounded-full", 
                    team.status === 'Pending' ? "bg-amber-400 animate-pulse" :
                    team.status === 'Approved' ? "bg-sky-400" : "bg-error"
                  )}></span>
                  {team.status}
                </span>
              </div>
              
              <div className="col-span-2 flex justify-end gap-2">
                {team.status === 'Pending' ? (
                  <>
                    <button className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center hover:bg-emerald-500/20 transition-all active:scale-90" title="Approve">
                      <CheckCircle className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-error/10 text-error border border-error/20 flex items-center justify-center hover:bg-error/20 transition-all active:scale-90" title="Reject">
                      <XCircle className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <span className="text-xs text-on-surface-variant italic opacity-50">Decision Made</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
