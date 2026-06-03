import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mic, AlertCircle, Globe, Sparkles, Pause, Play, Headphones } from "lucide-react";

export const Route = createFileRoute("/app/live")({
  component: Live,
});

function Live() {
  const [seconds, setSeconds] = useState(842);
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="p-6 lg:p-10">
      <header className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-xs uppercase tracking-wider text-saffron font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" /> Live · Class 8
          </p>
          <h1 className="text-2xl md:text-3xl font-bold mt-1">Photosynthesis</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-4 py-2 rounded-full bg-card border border-border/40 font-mono font-semibold tabular-nums">{mm}:{ss}</div>
          <button className="w-11 h-11 rounded-full bg-card border border-border/40 flex items-center justify-center">
            <Pause className="w-4 h-4" />
          </button>
          <button className="w-11 h-11 rounded-full bg-card border border-border/40 flex items-center justify-center">
            <Globe className="w-4 h-4" />
          </button>
          <Link to="/app/session" className="ml-1 inline-flex items-center gap-2 pl-4 pr-5 h-11 rounded-full gradient-hero text-white font-semibold text-sm shadow-glow hover:opacity-95 transition">
            <Play className="w-4 h-4 fill-current" /> Start Session
          </Link>
        </div>
      </header>

      <Link to="/app/session" className="mt-6 group relative block overflow-hidden rounded-3xl gradient-hero p-6 text-white shadow-glow">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, white, transparent 50%)" }} />
        <div className="relative flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
            <Headphones className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.22em] opacity-80 font-semibold">Whisper Mode</p>
            <p className="text-lg font-display font-semibold mt-0.5">Enter immersive live session</p>
            <p className="text-sm opacity-80">Pair your earbuds. Guruko teaches alongside you in real time.</p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur text-sm font-semibold group-hover:bg-white/30 transition">
            <Play className="w-4 h-4 fill-current" /> Start
          </span>
        </div>
      </Link>

      <div className="mt-6 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="rounded-3xl bg-card border border-border/40 p-6 shadow-card">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">Session Progress</p>
            <div className="flex items-center gap-2">
              <Phase label="Hook" status="done" />
              <PhaseLine />
              <Phase label="Core Loop" status="active" />
              <PhaseLine />
              <Phase label="Anchor" status="pending" />
            </div>
            <div className="mt-6 p-4 rounded-2xl bg-indigo/5 border border-indigo/10">
              <p className="text-xs text-indigo font-semibold uppercase tracking-wider">Now</p>
              <p className="mt-1 font-medium">Core Loop · Explain the photosynthesis recipe using the tiffin-box analogy.</p>
            </div>
          </div>

          <div className="rounded-3xl bg-card border border-border/40 p-6">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">Quick Adaptive Prompts</p>
            <div className="flex flex-wrap gap-2">
              {["Ask: who packs your tiffin?", "Draw chloroplast on board", "Volunteer for the equation", "Pause for 2 questions"].map((p) => (
                <button key={p} className="px-4 py-2 rounded-full bg-muted hover:bg-indigo hover:text-white text-sm transition-all">
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity }} className="rounded-3xl gradient-hero p-5 text-white shadow-glow">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <p className="font-semibold">Guruko</p>
            </div>
            <p className="mt-2 text-sm text-white/90">Class energy is shifting — try standing and walking to the back row in 3 minutes.</p>
            <button className="mt-4 w-full bg-white/20 backdrop-blur rounded-full py-2 text-sm">Got it</button>
          </motion.div>

          <button className="w-full rounded-3xl bg-saffron text-white p-5 shadow-soft hover:opacity-90 transition">
            <AlertCircle className="w-5 h-5 mx-auto" />
            <p className="mt-2 font-semibold">Recover Attention</p>
            <p className="text-xs opacity-90 mt-0.5">Trigger a 60s energy reset</p>
          </button>

          <button className="w-full rounded-3xl bg-card border border-border/40 p-5 hover:border-indigo/40 transition">
            <Mic className="w-5 h-5 mx-auto text-indigo" />
            <p className="mt-2 font-semibold">Voice Ask</p>
            <p className="text-xs text-muted-foreground mt-0.5">Whisper a question to Guruko</p>
          </button>
        </div>
      </div>
    </div>
  );
}

function Phase({ label, status }: { label: string; status: "done" | "active" | "pending" }) {
  const cls = status === "done" ? "bg-teal text-white" : status === "active" ? "bg-indigo text-white shadow-soft" : "bg-muted text-muted-foreground";
  return <div className={`px-4 py-2 rounded-full text-sm font-semibold ${cls}`}>{label}</div>;
}
function PhaseLine() {
  return <div className="flex-1 h-0.5 bg-border" />;
}