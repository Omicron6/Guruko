import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Zap, Radio, Image as ImageIcon, Boxes, Heart, TrendingUp, Sparkles, Menu, X, LogOut, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GurukoLogo } from "@/components/guruko-logo";

const NAV = [
  { to: "/app", label: "Home", icon: Home, exact: true },
  { to: "/app/quick-start", label: "Quick Start", icon: Zap },
  { to: "/app/live", label: "Live Session", icon: Radio },
  { to: "/app/visual", label: "Visual Companion", icon: ImageIcon },
  { to: "/app/activities", label: "Activity Kits", icon: Boxes },
  { to: "/app/reflection", label: "Reflection", icon: Heart },
  { to: "/app/evolution", label: "Evolution", icon: TrendingUp },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="min-h-screen flex bg-muted/30">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-64 p-4 sticky top-0 h-screen">
        <SidebarContent />
      </aside>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50 px-4 py-3 flex items-center justify-between">
        <Link to="/app" className="flex items-center gap-2">
          <GurukoLogo size="sm" />
          <span className="flex flex-col leading-none">
            <span className="font-display font-bold text-teal">Guruko</span>
            <span className="text-[9px] font-medium text-soft-purple mt-0.5 tracking-wide">AI Classroom Agent</span>
          </span>
        </Link>
        <button onClick={() => setMobileOpen(true)} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
          <Menu className="w-5 h-5" />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="lg:hidden fixed inset-0 bg-foreground/30 backdrop-blur-sm z-50" />
            <motion.aside initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "spring", damping: 25 }} className="lg:hidden fixed top-0 left-0 bottom-0 w-72 bg-background z-50 p-4 flex flex-col">
              <div className="flex justify-end mb-2">
                <button onClick={() => setMobileOpen(false)} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <SidebarContent onNavigate={() => setMobileOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <main className="flex-1 min-w-0 pt-16 lg:pt-0">
        <div className="lg:p-4">
          <div className="bg-background lg:rounded-3xl lg:shadow-card lg:border lg:border-border/40 min-h-screen lg:min-h-[calc(100vh-2rem)]">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <>
      <Link to="/app" className="flex items-center gap-2 px-3 py-2 mb-6">
        <GurukoLogo size="md" />
        <div>
          <p className="font-display font-bold leading-none text-teal">Guruko</p>
          <p className="text-[10px] font-medium text-soft-purple mt-1 tracking-wide">AI Classroom Agent</p>
        </div>
      </Link>

      <nav className="flex-1 space-y-1">
        {NAV.map((item) => {
          const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
          return (
            <Link key={item.to} to={item.to} onClick={onNavigate} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${active ? "bg-indigo text-white shadow-soft" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-4 space-y-1 border-t border-border/50 pt-3">
        <Link to="/" onClick={onNavigate} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all">
          <ArrowLeft className="w-4 h-4" />
          Back to landing
        </Link>
        <Link to="/" onClick={onNavigate} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all">
          <LogOut className="w-4 h-4" />
          Log out
        </Link>
      </div>

      <div className="mt-4 p-4 rounded-2xl gradient-warm text-white">
        <p className="text-xs font-semibold opacity-90">Today's Vibe</p>
        <p className="text-sm mt-1">You're 3 sessions away from your weekly goal ✨</p>
      </div>
    </>
  );
}