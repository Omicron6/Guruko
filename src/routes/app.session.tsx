import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Mic, MicOff, Globe, Pause, X, Headphones, Sparkles, Activity,
  Zap, Languages, Lightbulb, Users, Wand2, Radio,
} from "lucide-react";

export const Route = createFileRoute("/app/session")({
  component: LiveSession,
});

const WHISPERS = [
  { icon: Activity, text: "Energy dipping in back rows", tone: "amber" },
  { icon: Users, text: "Try a pair-share in 30 seconds", tone: "indigo" },
  { icon: Languages, text: "Switch to bilingual for this term", tone: "purple" },
  { icon: Lightbulb, text: "Use the tiffin-box analogy now", tone: "teal" },
  { icon: Wand2, text: "Visual diagram is ready to drop", tone: "indigo" },
  { icon: Zap, text: "Ask a challenge question", tone: "amber" },
];

function LiveSession() {
  const [seconds, setSeconds] = useState(0);
  const [muted, setMuted] = useState(false);
  const [energy, setEnergy] = useState(78);
  const [whisperIdx, setWhisperIdx] = useState(0);
  const [speaking, setSpeaking] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const t = setInterval(() => {
      setWhisperIdx((i) => (i + 1) % WHISPERS.length);
      setEnergy((e) => Math.max(45, Math.min(96, e + (Math.random() * 14 - 7))));
      setSpeaking((s) => !s);
    }, 3800);
    return () => clearInterval(t);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="relative min-h-screen overflow-hidden bg-[oklch(0.16_0.04_265)] text-white">
      {/* Ambient depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[oklch(0.55_0.18_290)] opacity-30 blur-[140px]" />
        <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[oklch(0.45_0.12_195)] opacity-30 blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-[oklch(0.7_0.16_75)] opacity-15 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      </div>

      {/* Top bar */}
      <header className="relative z-10 flex items-center justify-between gap-4 px-6 lg:px-10 py-5 border-b border-white/10 backdrop-blur-xl bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.8_0.16_75)] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[oklch(0.8_0.16_75)]" />
          </span>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">Live Session</p>
          <span className="hidden md:inline text-white/30">·</span>
          <p className="hidden md:block text-sm text-white/80">Class 8 · Photosynthesis</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/15 font-mono font-semibold tabular-nums text-sm">
            {mm}:{ss}
          </div>
          <button className="w-10 h-10 rounded-full bg-white/10 border border-white/15 backdrop-blur flex items-center justify-center hover:bg-white/20 transition">
            <Pause className="w-4 h-4" />
          </button>
          <Link to="/app/live" className="w-10 h-10 rounded-full bg-white/10 border border-white/15 backdrop-blur flex items-center justify-center hover:bg-destructive/40 transition">
            <X className="w-4 h-4" />
          </Link>
        </div>
      </header>

      <div className="relative z-10 grid lg:grid-cols-[300px_1fr_320px] gap-6 p-6 lg:p-8">
        {/* LEFT — Classroom flow */}
        <aside className="space-y-4">
          <Glass>
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/50 font-semibold">Classroom Flow</p>
            <h3 className="mt-2 text-lg font-display font-semibold">Photosynthesis</h3>
            <p className="text-xs text-white/60 mt-1">35 min · 28 students</p>

            <div className="mt-5 space-y-3">
              <Stage label="Hook" sub="Tiffin-box opener" status="done" />
              <Stage label="Core Loop" sub="Recipe explanation" status="active" />
              <Stage label="Anchor" sub="Pair quiz · reflection" status="pending" />
            </div>
          </Glass>

          <Glass>
            <div className="flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/50 font-semibold">Engagement</p>
              <span className="text-xs text-white/70">{Math.round(energy)}%</span>
            </div>
            <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                animate={{ width: `${energy}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-[oklch(0.7_0.16_75)] via-[oklch(0.62_0.14_295)] to-[oklch(0.55_0.18_290)]"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {["Focus", "Energy", "Voice"].map((l, i) => (
                <div key={l} className="rounded-xl bg-white/5 border border-white/10 p-2">
                  <p className="text-[9px] uppercase tracking-wider text-white/50">{l}</p>
                  <p className="text-sm font-semibold mt-0.5">{[82, Math.round(energy), 67][i]}</p>
                </div>
              ))}
            </div>
          </Glass>
        </aside>

        {/* CENTER — AI assistant */}
        <section className="relative flex flex-col items-center justify-between min-h-[640px]">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-semibold">Guruko · Whisper Mode</p>
            <div className="mt-2 inline-flex items-center gap-2 text-xs text-white/60">
              <Headphones className="w-3.5 h-3.5" />
              Connected to your earbuds
              <span className="w-1 h-1 rounded-full bg-[oklch(0.7_0.16_75)] animate-pulse" />
            </div>
          </div>

          {/* Orb */}
          <div className="relative flex items-center justify-center my-8" style={{ width: 360, height: 360 }}>
            {[0, 1, 2].map((r) => (
              <motion.div
                key={r}
                className="absolute rounded-full border border-white/15"
                style={{ width: 360 - r * 60, height: 360 - r * 60 }}
                animate={{ scale: speaking ? [1, 1.06, 1] : [1, 1.02, 1], opacity: [0.25, 0.6, 0.25] }}
                transition={{ duration: 3 + r * 0.6, repeat: Infinity, ease: "easeInOut", delay: r * 0.3 }}
              />
            ))}
            <motion.div
              animate={{ scale: speaking ? [1, 1.04, 1] : 1 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[200px] h-[200px] rounded-full"
              style={{
                background: "radial-gradient(circle at 30% 30%, oklch(0.85 0.15 290) 0%, oklch(0.55 0.18 290) 35%, oklch(0.35 0.14 240) 75%, oklch(0.25 0.1 200) 100%)",
                boxShadow: "0 0 80px 10px oklch(0.55 0.18 290 / 0.5), inset 0 0 60px oklch(0.95 0.05 290 / 0.3)",
              }}
            >
              <motion.div
                className="absolute inset-3 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                style={{
                  background: "conic-gradient(from 0deg, transparent, oklch(0.95 0.1 75 / 0.35), transparent 40%, oklch(0.85 0.12 290 / 0.4), transparent 80%)",
                  filter: "blur(8px)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center gap-1.5">
                {[...Array(7)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="w-1 rounded-full bg-white/90"
                    animate={{ height: speaking ? [8, 32 + (i % 3) * 10, 8] : [6, 10, 6] }}
                    transition={{ duration: 0.9 + (i % 3) * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating whisper cards orbiting */}
            <AnimatePresence mode="popLayout">
              <motion.div
                key={whisperIdx}
                initial={{ opacity: 0, y: 14, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[300px]"
              >
                <WhisperCard whisper={WHISPERS[whisperIdx]} />
              </motion.div>
            </AnimatePresence>

            <FloatingChip className="absolute top-2 -left-6" delay={0}>
              <Sparkles className="w-3 h-3" /> Listening
            </FloatingChip>
            <FloatingChip className="absolute top-10 -right-4" delay={0.8}>
              <Radio className="w-3 h-3" /> Low-latency
            </FloatingChip>
            <FloatingChip className="absolute -bottom-10 -right-2" delay={1.6}>
              <Headphones className="w-3 h-3" /> Earbud sync
            </FloatingChip>
          </div>

          {/* Transcript / mic */}
          <div className="w-full max-w-xl">
            <div className="rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl px-5 py-4 flex items-center gap-4">
              <button
                onClick={() => setMuted((m) => !m)}
                className={`relative w-12 h-12 rounded-full flex items-center justify-center transition ${muted ? "bg-white/10" : "bg-gradient-to-br from-[oklch(0.7_0.16_75)] to-[oklch(0.55_0.18_290)]"}`}
              >
                {muted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                {!muted && <span className="absolute inset-0 rounded-full animate-ping bg-[oklch(0.55_0.18_290)] opacity-30" />}
              </button>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/40 font-semibold">
                  {muted ? "Muted" : "Teacher said"}
                </p>
                <p className="text-sm text-white/90 truncate">
                  {muted ? "Tap to speak to Guruko" : "“Class is getting a bit distracted…”"}
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="w-0.5 rounded-full bg-white/60"
                    animate={{ height: muted ? 4 : [4, 12 + (i % 3) * 6, 4] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT — Quick actions */}
        <aside className="space-y-4">
          <Glass>
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/50 font-semibold">Real-time Assist</p>
            <p className="text-sm text-white/80 mt-2">Tap to deploy in-class.</p>
            <div className="mt-4 space-y-2">
              <QuickAction icon={Zap} label="Recover Attention" hint="60s energy reset" tone="saffron" />
              <QuickAction icon={Lightbulb} label="Simplify Explanation" hint="Drop one abstraction" />
              <QuickAction icon={Wand2} label="Add Real-World Analogy" hint="Tiffin · cricket · monsoon" />
              <QuickAction icon={Languages} label="Switch Language" hint="Hindi · Marathi · English" />
              <QuickAction icon={Users} label="Quick Activity" hint="Pair · think · share" />
            </div>
          </Glass>

          <Glass>
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/50 font-semibold">Earbud Channel</p>
            <div className="mt-3 flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Headphones className="w-5 h-5" />
                <span className="absolute -right-1 -top-1 w-2.5 h-2.5 rounded-full bg-[oklch(0.7_0.16_75)] animate-pulse" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">Whisper L · R</p>
                <p className="text-[11px] text-white/50">Latency 38ms · Clear</p>
              </div>
            </div>
            <div className="mt-3 flex gap-1">
              {[...Array(28)].map((_, i) => (
                <motion.span
                  key={i}
                  className="flex-1 rounded-full bg-white/40"
                  animate={{ height: [3, 4 + Math.random() * 14, 3] }}
                  transition={{ duration: 1 + Math.random(), repeat: Infinity, delay: i * 0.04 }}
                />
              ))}
            </div>
          </Glass>

          <Glass>
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/50 font-semibold">Language</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["EN", "हिं", "मरा", "தமி"].map((l, i) => (
                <button key={l} className={`px-3 py-1.5 rounded-full text-xs border transition ${i === 0 ? "bg-white text-[oklch(0.2_0.05_270)] border-white" : "bg-white/5 border-white/15 text-white/80 hover:bg-white/10"}`}>
                  <Globe className="w-3 h-3 inline -mt-0.5 mr-1" />{l}
                </button>
              ))}
            </div>
          </Glass>
        </aside>
      </div>
    </div>
  );
}

/* ——— building blocks ——— */

function Glass({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]">
      {children}
    </div>
  );
}

function Stage({ label, sub, status }: { label: string; sub: string; status: "done" | "active" | "pending" }) {
  const dot =
    status === "done" ? "bg-[oklch(0.45_0.09_195)]" :
    status === "active" ? "bg-[oklch(0.7_0.16_75)] shadow-[0_0_18px_oklch(0.7_0.16_75)]" :
    "bg-white/20";
  return (
    <div className={`flex items-start gap-3 rounded-2xl p-3 border ${status === "active" ? "border-white/20 bg-white/[0.06]" : "border-white/5"}`}>
      <div className="relative mt-1">
        <span className={`block w-2.5 h-2.5 rounded-full ${dot}`} />
        {status === "active" && (
          <motion.span
            className="absolute inset-0 rounded-full bg-[oklch(0.7_0.16_75)]"
            animate={{ scale: [1, 2.4, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>
      <div className="flex-1">
        <p className={`text-sm font-semibold ${status === "pending" ? "text-white/50" : "text-white"}`}>{label}</p>
        <p className="text-[11px] text-white/50 mt-0.5">{sub}</p>
      </div>
      <span className={`text-[10px] uppercase tracking-wider mt-1 ${status === "active" ? "text-[oklch(0.85_0.15_75)]" : "text-white/40"}`}>
        {status}
      </span>
    </div>
  );
}

function WhisperCard({ whisper }: { whisper: typeof WHISPERS[number] }) {
  const Icon = whisper.icon;
  return (
    <div className="rounded-2xl bg-white/[0.08] border border-white/20 backdrop-blur-2xl p-3.5 flex items-center gap-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[oklch(0.7_0.16_75)] to-[oklch(0.55_0.18_290)] flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] uppercase tracking-wider text-white/50 font-semibold">Guruko whispers</p>
        <p className="text-sm text-white/95 truncate">{whisper.text}</p>
      </div>
    </div>
  );
}

function FloatingChip({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur text-[11px] text-white/80 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function QuickAction({ icon: Icon, label, hint, tone }: { icon: any; label: string; hint: string; tone?: "saffron" }) {
  return (
    <button className={`w-full flex items-center gap-3 rounded-2xl p-3 border transition text-left group ${tone === "saffron" ? "bg-gradient-to-r from-[oklch(0.7_0.16_75)]/30 to-transparent border-[oklch(0.7_0.16_75)]/40 hover:from-[oklch(0.7_0.16_75)]/50" : "bg-white/[0.03] border-white/10 hover:bg-white/[0.08] hover:border-white/20"}`}>
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${tone === "saffron" ? "bg-[oklch(0.7_0.16_75)] text-white" : "bg-white/10 text-white"}`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-[11px] text-white/50">{hint}</p>
      </div>
    </button>
  );
}