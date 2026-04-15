import React from 'react';
import { Terminal, Search, Bell, LayoutDashboard, Users, Trophy, ShieldAlert } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Layout({ children, activeTab, setActiveTab }: LayoutProps) {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'teams', label: 'Teams', icon: Users },
    { id: 'prizes', label: 'Prizes', icon: Trophy },
    { id: 'admin', label: 'Admin', icon: ShieldAlert },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl border-b border-sky-400/10 shadow-[0_0_30px_rgba(125,211,252,0.05)]">
        <div className="flex justify-between items-center w-full px-6 py-3 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('landing')}>
            <Terminal className="text-sky-300 w-6 h-6" />
            <h1 className="text-xl font-black text-sky-300 drop-shadow-[0_0_10px_rgba(125,211,252,0.3)] tracking-tight">
              HackForge
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "text-sm font-medium transition-all duration-300",
                  activeTab === tab.id ? "text-sky-300 border-b-2 border-sky-300 pb-1" : "text-slate-400 hover:text-sky-200"
                )}
              >
                {tab.label}
              </button>
            ))}
            <button 
              onClick={() => setActiveTab('rules')}
              className={cn(
                "text-sm font-medium transition-all duration-300",
                activeTab === 'rules' ? "text-sky-300 border-b-2 border-sky-300 pb-1" : "text-slate-400 hover:text-sky-200"
              )}
            >
              Rules & FAQ
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-sky-200 transition-all">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-slate-400 hover:text-sky-200 transition-all relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full neon-glow" />
            </button>
            <div className="w-8 h-8 rounded-full border border-sky-400/30 overflow-hidden cursor-pointer" onClick={() => setActiveTab('success')}>
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWINP-4VDk7ahSq_3O-b1qSusV0sbDKLKlscAXhmzo0u8-H0ojnLRibjYFG19r9KabV9fSCv8e7JrIoef53DhEsP897u4gi_lDmpbRxw8lJkrrD2Udu2qec2Dlm7GbD4lu4lmRvvGQPZ-9pB8YxY3pBqRPi7xNM9wFWWzMZwbpF1NnbzcZDGAfvUp8oCOhqMphlgz0FSYILdJAedRt0WRDT-vLxbyL80fK0mn6AxIOZR541PKiGwyR4RgXxmPWJ_EMl5mldO2ddJSP" 
                alt="Profile"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 pb-24 md:pb-0">
        {children}
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-slate-950/75 backdrop-blur-2xl border-t border-sky-400/10 rounded-t-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)] md:hidden">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex flex-col items-center justify-center px-4 py-1 transition-all duration-200 active:scale-90",
              activeTab === tab.id 
                ? "bg-sky-400/15 text-sky-300 rounded-xl shadow-[0_0_15px_rgba(125,211,252,0.2)]" 
                : "text-slate-500 hover:text-sky-200"
            )}
          >
            <tab.icon className="w-6 h-6" />
            <span className="text-[10px] font-medium uppercase tracking-widest mt-1">{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
