import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import {
  Sparkles, ArrowRight, Mic, Eye, Languages, Activity, Radio, Pause,
  Hand, ChevronRight, Layers, Wand2, Heart, BookOpen,
  Smartphone, Globe, Brain, Users, MessageCircle, PlayCircle,
  Headphones, Youtube, Tv, Zap, Volume2, Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GurukoLogo } from "@/components/guruko-logo";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guruko — The AI Classroom Agent for the New Generation" },
      { name: "description", content: "Guruko is the calm, intelligent classroom co-pilot helping teachers adapt to a generation raised on screens. Real-time engagement, localized teaching, India-ready." },
      { property: "og:title", content: "Guruko — AI Classroom Agent" },
      { property: "og:description", content: "The future classroom starts with empowered teachers." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-indigo/20 selection:text-indigo">
      <AmbientBackground />
      <Nav />
      <Hero />
      <Marquee />
      <GenerationShift />
      <TeacherStrain />
      <BridgeIntro />
      <HowItWorks />
      <EarbudCopilot />
      <LiveCopilot />
      <RememberedStatement />
      <VisualKits />
      <IndiaReady />
      <Evolution />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------- Ambient global gradient blobs ---------------- */
function AmbientBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute -top-32 -left-32 w-[42rem] h-[42rem] rounded-full bg-soft-purple/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 w-[40rem] h-[40rem] rounded-full bg-teal/15 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[36rem] h-[36rem] rounded-full bg-saffron/15 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,oklch(0.99_0.005_200)_0%,transparent_60%)]" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.025]">
        <filter id="n">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
        </filter>
        <rect width="100%" height="100%" filter="url(#n)" />
      </svg>
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#vision", label: "Vision" },
    { href: "#features", label: "Features" },
    { href: "#india", label: "For India" },
    { href: "#experience", label: "Experience" },
  ];

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 inset-x-0 z-50 px-4"
    >
      <div
        className={`max-w-6xl mx-auto rounded-2xl border transition-all duration-500 ${
          scrolled
            ? "bg-background/70 border-border/60 backdrop-blur-xl shadow-card"
            : "bg-background/30 border-white/40 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-6 py-2.5">
          <Link to="/" className="flex items-center gap-2.5 group">
            <GurukoLogo size="md" className="relative z-10" />
            <span className="flex flex-col leading-none">
              <span className="font-display font-bold text-base text-teal">Guruko</span>
              <span className="text-[9px] font-medium text-soft-purple mt-0.5 tracking-[0.12em] uppercase">AI Classroom Agent</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-3.5 py-1.5 rounded-full text-muted-foreground hover:text-foreground transition-colors story-link"
              >
                {l.label}
              </a>
            ))}
          </div>

          <Link to="/onboarding">
            <Button className="rounded-full h-9 px-5 text-sm bg-foreground text-background hover:bg-foreground/90 border-0 shadow-soft">
              Get Started <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative pt-36 md:pt-44 pb-24 px-6">
      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-8 items-center">
          <HeroLeft />
          <HeroStage />
        </div>
      </motion.div>

      <ScrollHint />
    </section>
  );
}

function HeroLeft() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur border border-border/50 shadow-card"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-saffron" />
        </span>
        <span className="text-xs font-medium text-muted-foreground">Now teaching across 24 Indian states</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.08 }}
        className="mt-6 text-[2.75rem] sm:text-6xl lg:text-[4.5rem] font-bold leading-[1.02] tracking-[-0.03em]"
      >
        Transforming classrooms into{" "}
        <span className="relative inline-block">
          <span className="text-gradient">engaging</span>
          <motion.svg
            viewBox="0 0 300 14"
            className="absolute -bottom-2 left-0 w-full h-3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
          >
            <motion.path
              d="M2 10 Q 80 2, 150 8 T 298 6"
              stroke="url(#u)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="u" x1="0" x2="1">
                <stop offset="0" stopColor="oklch(0.7 0.13 295)" />
                <stop offset="1" stopColor="oklch(0.8 0.16 75)" />
              </linearGradient>
            </defs>
          </motion.svg>
        </span>{" "}
        learning experiences.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-7 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
      >
        Guruko helps teachers adapt to the new generation with AI-powered classroom engagement and real-time teaching support — calm, intelligent, deeply human.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.32 }}
        className="mt-9 flex flex-col sm:flex-row gap-3"
      >
        <Link to="/onboarding">
          <Button size="lg" className="rounded-full h-12 px-6 text-base gradient-hero text-white border-0 shadow-soft hover:shadow-glow transition-shadow">
            Start Teaching Smarter <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
        <Link to="/app">
          <Button size="lg" variant="outline" className="rounded-full h-12 px-6 text-base bg-white/60 backdrop-blur border-border/60 hover:bg-white">
            <PlayCircle className="w-4 h-4" /> Explore Live Demo
          </Button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-10 flex items-center gap-6 text-xs text-muted-foreground"
      >
        <div className="flex -space-x-2">
          {["#F4B860", "#8B7CF6", "#0F8B8D", "#5B5BD6"].map((c, i) => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-background" style={{ background: c }} />
          ))}
        </div>
        <div>
          <p className="font-semibold text-foreground">12,400+ teachers</p>
          <p>leading more engaged classrooms</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------------- Hero stage — floating 3D-ish tablet + cards ---------------- */
function HeroStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 80, damping: 14 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 80, damping: 14 });

  const onMove = (e: React.MouseEvent) => {
    const r = stageRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={stageRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative h-[560px] sm:h-[620px] lg:h-[640px] [perspective:1400px]"
    >
      {/* Glow halo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] h-[70%] rounded-[3rem] bg-gradient-to-br from-soft-purple/40 via-indigo/30 to-teal/30 blur-3xl" />
      </div>

      {/* Orbital ring */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-[88%] h-[88%] rounded-full border border-dashed border-soft-purple/30" />
      </motion.div>

      {/* Tablet */}
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-[300px] sm:w-[340px] h-[480px] sm:h-[540px] rounded-[2.4rem] bg-gradient-to-b from-white to-white/80 backdrop-blur-xl border border-white/70 shadow-glow p-2.5"
        >
          <div className="w-full h-full rounded-[1.9rem] bg-gradient-to-b from-[oklch(0.97_0.02_295)] to-[oklch(0.95_0.03_250)] overflow-hidden relative">
            {/* Tablet status bar */}
            <div className="flex items-center justify-between px-5 py-3 text-[10px] text-muted-foreground">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <Radio className="w-3 h-3" />
                <span>Live · Class 8</span>
              </div>
            </div>

            {/* Session header */}
            <div className="px-4">
              <div className="rounded-2xl gradient-hero p-3.5 text-white shadow-soft">
                <p className="text-[10px] uppercase tracking-wider opacity-80">Now teaching</p>
                <p className="text-base font-semibold mt-0.5">Photosynthesis</p>
                <div className="mt-3 flex items-center gap-1.5">
                  {["Hook", "Core Loop", "Anchor"].map((s, i) => (
                    <div key={s} className="flex-1">
                      <div className={`h-1 rounded-full ${i === 0 ? "bg-saffron" : i === 1 ? "bg-white/60" : "bg-white/20"}`} />
                      <p className="text-[9px] mt-1 opacity-80">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Live prompt */}
            <div className="px-4 mt-3 space-y-2">
              <PromptRow color="saffron" label="HOOK" text="“Why do leaves never get tired?”" />
              <PromptRow color="indigo" label="LOOP" text="Tap to ask 3 students for their guesses" />
              <PromptRow color="teal" label="VISUAL" text="Diagram ready · Send to board" />
            </div>

            {/* Engagement meter */}
            <div className="px-4 mt-3">
              <div className="rounded-xl bg-white p-3 border border-border/50 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-muted-foreground">Class energy</span>
                  <span className="text-[10px] font-semibold text-teal">82%</span>
                </div>
                <div className="mt-2 flex items-end gap-1 h-8">
                  {[40, 55, 70, 60, 80, 90, 75, 82, 88, 92, 80, 78].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.8, delay: 0.5 + i * 0.05 }}
                      className="flex-1 rounded-sm bg-gradient-to-t from-teal/40 to-indigo/80"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Recover attention */}
            <div className="absolute bottom-3 inset-x-3">
              <button className="w-full rounded-2xl bg-foreground/90 backdrop-blur text-background py-3 text-xs font-semibold flex items-center justify-center gap-2">
                <Hand className="w-3.5 h-3.5 text-saffron" />
                Recover Attention
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating AI cards */}
      <FloatingCard
        className="left-[2%] top-[12%]"
        delay={0.5}
        icon={Eye}
        title="Students losing attention"
        sub="Suggest activity break?"
        accent="text-saffron"
      />
      <FloatingCard
        className="right-[2%] top-[22%]"
        delay={0.8}
        icon={Languages}
        title="Switch to Hindi?"
        sub="3 students need it"
        accent="text-soft-purple"
      />
      <FloatingCard
        className="left-[0%] bottom-[18%]"
        delay={1.05}
        icon={Wand2}
        title="Local analogy ready"
        sub="“Like a phone charging…”"
        accent="text-teal"
      />
      <FloatingCard
        className="right-[3%] bottom-[10%]"
        delay={1.25}
        icon={Mic}
        title="Voice assistant"
        sub="Listening · ready to help"
        accent="text-indigo"
        pulse
      />
    </div>
  );
}

function PromptRow({ color, label, text }: { color: "saffron" | "indigo" | "teal"; label: string; text: string }) {
  const map = {
    saffron: "bg-saffron/15 text-saffron border-saffron/30",
    indigo: "bg-indigo/10 text-indigo border-indigo/20",
    teal: "bg-teal/15 text-teal border-teal/20",
  };
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-border/40 shadow-card">
      <span className={`text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded-md border font-semibold ${map[color]}`}>{label}</span>
      <span className="text-[11px] text-foreground/80 truncate">{text}</span>
    </div>
  );
}

function FloatingCard({
  className, delay, icon: Icon, title, sub, accent, pulse,
}: {
  className: string; delay: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string; sub: string; accent: string; pulse?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay }}
      className={`absolute ${className} z-20`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-2xl bg-white/80 backdrop-blur-xl border border-white/70 shadow-card p-3 w-[200px]"
      >
        <div className="flex items-start gap-2.5">
          <div className={`w-8 h-8 rounded-xl bg-background flex items-center justify-center ${accent} shrink-0 relative`}>
            <Icon className="w-4 h-4" />
            {pulse && <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-saffron animate-ping" />}
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold leading-tight">{title}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{sub}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ScrollHint() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.8 }}
      className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-[10px] text-muted-foreground uppercase tracking-[0.2em]"
    >
      <span>Scroll</span>
      <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="w-px h-6 bg-muted-foreground/40" />
    </motion.div>
  );
}

/* ---------------- Marquee of teacher quotes ---------------- */
function Marquee() {
  const items = [
    "“My class actually listens now.” — Ms. Priya, Pune",
    "“60-second prep. Real.” — Mr. Anand, Hyderabad",
    "“The Hindi switch is magic.” — Ms. Reema, Jaipur",
    "“It feels like I have a TA.” — Mr. Karim, Lucknow",
    "“Students ask better questions.” — Ms. Anu, Kochi",
    "“My evenings are mine again.” — Ms. Sneha, Mumbai",
  ];
  return (
    <section id="vision" className="relative py-10 border-y border-border/40 bg-white/40 backdrop-blur-sm overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 shrink-0"
        >
          {[...items, ...items].map((q, i) => (
            <span key={i} className="text-sm text-muted-foreground flex items-center gap-3">
              <Sparkles className="w-3.5 h-3.5 text-saffron" />
              {q}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Generation shift — cinematic split ---------------- */
function GenerationShift() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold text-indigo uppercase tracking-[0.2em]">Chapter 01 · The Shift</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.04] tracking-[-0.02em]">
            The classroom was built for a <span className="text-muted-foreground">different generation.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Knowledge is no longer scarce. Students learn concepts in seconds — from creators, AI, shorts, simulations. The room hasn't changed, but the minds inside it have.
          </p>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          {/* Left — muted yesterday classroom */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden p-8 md:p-10 bg-gradient-to-br from-[oklch(0.93_0.012_220)] to-[oklch(0.88_0.015_240)] border border-border/40 min-h-[440px]"
          >
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>Yesterday</span>
              <span className="flex items-center gap-1.5"><Pause className="w-3 h-3" /> Quiet · slow</span>
            </div>

            {/* blackboard */}
            <div className="mt-6 rounded-2xl bg-[oklch(0.28_0.04_180)] border border-black/20 aspect-[5/3] flex items-center justify-center shadow-inner relative overflow-hidden">
              <p className="font-display text-white/70 text-2xl tracking-wider" style={{ fontFamily: "cursive" }}>
                Chapter 4 · Photosynthesis
              </p>
              <div className="absolute bottom-2 right-3 text-[10px] text-white/30">— 1998</div>
            </div>

            {/* passive student rows */}
            <div className="mt-6 space-y-2">
              {[0, 1, 2].map((r) => (
                <div key={r} className="flex gap-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex-1 h-6 rounded-md bg-[oklch(0.78_0.02_240)] border border-[oklch(0.72_0.02_240)]" />
                  ))}
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted-foreground italic">
              One voice. One pace. One direction.
            </p>
          </motion.div>

          {/* Right — vivid today reality */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden p-8 md:p-10 bg-gradient-to-br from-foreground to-[oklch(0.18_0.05_280)] text-background min-h-[440px]"
          >
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-saffron/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-10 w-72 h-72 rounded-full bg-soft-purple/40 blur-3xl" />

            <div className="relative flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-saffron">
              <span>Today</span>
              <span className="flex items-center gap-1.5"><Zap className="w-3 h-3" /> Live · infinite</span>
            </div>

            {/* phone screen with feed */}
            <div className="relative mt-6 mx-auto w-[180px] rounded-[1.8rem] border-4 border-white/20 bg-black aspect-[9/16] overflow-hidden shadow-glow">
              <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="flex flex-col"
              >
                {[
                  { icon: Youtube, c: "from-red-500 to-rose-600", t: "Photosynthesis in 60s" },
                  { icon: Sparkles, c: "from-soft-purple to-indigo", t: "Ask AI: why leaves are green" },
                  { icon: Tv, c: "from-saffron to-orange-500", t: "Interactive sim · plants" },
                  { icon: Volume2, c: "from-teal to-cyan-500", t: "Podcast · 5-min biology" },
                  { icon: Youtube, c: "from-red-500 to-rose-600", t: "Photosynthesis in 60s" },
                  { icon: Sparkles, c: "from-soft-purple to-indigo", t: "Ask AI: why leaves are green" },
                  { icon: Tv, c: "from-saffron to-orange-500", t: "Interactive sim · plants" },
                  { icon: Volume2, c: "from-teal to-cyan-500", t: "Podcast · 5-min biology" },
                ].map((f, i) => (
                  <div key={i} className={`h-[280px] shrink-0 bg-gradient-to-br ${f.c} flex flex-col items-center justify-center text-white p-3 border-b border-white/10`}>
                    <f.icon className="w-8 h-8 mb-2" />
                    <p className="text-[10px] text-center font-semibold leading-tight">{f.t}</p>
                  </div>
                ))}
              </motion.div>
              {/* gradient masks */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black to-transparent" />
            </div>

            <p className="relative mt-6 text-sm text-background/70 italic text-center">
              Infinite voices. Instant answers. Endless stimulation.
            </p>
          </motion.div>
        </div>

        {/* center cinematic statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-5xl md:text-7xl font-bold leading-[1.02] tracking-[-0.03em]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="block text-muted-foreground"
            >
              The classroom didn't fail.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block mt-2 text-gradient"
            >
              The world changed.
            </motion.span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Teacher strain — what teachers face today ---------------- */
function TeacherStrain() {
  const pressures = [
    { icon: Smartphone, label: "Compete with infinite feeds" },
    { icon: Eye, label: "Hold attention by the second" },
    { icon: Users, label: "Personalize for every learner" },
    { icon: Sparkles, label: "Create experiences, not lectures" },
    { icon: Activity, label: "Manage engagement live" },
    { icon: Brain, label: "Adapt in real-time" },
  ];
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold text-indigo uppercase tracking-[0.2em]">Chapter 02 · The Gap</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.04] tracking-[-0.02em]">
            Teachers were never trained <br />
            <span className="text-muted-foreground">for this generation.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            They're now expected to do everything a stage performer, a content creator, and a coach does — alone, in real-time, with no contextual support.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pressures.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl bg-white/70 backdrop-blur border border-border/50 p-5 hover:shadow-card transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron/20 to-soft-purple/20 flex items-center justify-center text-indigo">
                  <p.icon className="w-4.5 h-4.5" />
                </div>
                <span className="text-sm font-medium">{p.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 text-2xl md:text-3xl font-display font-semibold tracking-tight max-w-3xl leading-snug"
        >
          The system never gave them tools for this shift —{" "}
          <span className="text-gradient">so we built one.</span>
        </motion.p>
      </div>
    </section>
  );
}

/* ---------------- Bridge intro — positioning Guruko ---------------- */
function BridgeIntro() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur border border-border/50 text-xs font-medium text-indigo">
            <GurukoLogo size="xs" className="w-6 h-6" /> Introducing Guruko
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.03] tracking-[-0.02em]">
            Helping teachers <span className="text-gradient">evolve</span> with the modern classroom.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Guruko transforms traditional lessons into engaging classroom experiences through real-time AI-powered teaching support. Not another lesson planner. A real-time classroom co-pilot.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- TWS Earbud co-pilot — the differentiator ---------------- */
function EarbudCopilot() {
  const whispers = [
    { t: "0:42", text: "Students losing attention." },
    { t: "0:58", text: "Try switching to activity mode." },
    { t: "1:14", text: "Use bilingual explanation." },
    { t: "1:31", text: "Energy levels dropping." },
    { t: "1:47", text: "Use local analogy — phone charging." },
    { t: "2:02", text: "Visual diagram ready." },
  ];
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-40 w-[40rem] h-[40rem] rounded-full bg-soft-purple/15 blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-[40rem] h-[40rem] rounded-full bg-saffron/15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold text-indigo uppercase tracking-[0.2em]">The Core Innovation</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.03] tracking-[-0.02em]">
            Your classroom. <br/>
            <span className="text-gradient">Your AI co-pilot.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Turn any pair of TWS earbuds into a personal real-time teaching assistant. Guruko whispers — only when it matters.
          </p>
        </motion.div>

        <div className="mt-20 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          {/* Teacher + earbud stage */}
          <div className="relative h-[520px] sm:h-[580px] rounded-[2rem] overflow-hidden bg-gradient-to-br from-[oklch(0.95_0.02_280)] via-white to-[oklch(0.96_0.025_75)] border border-border/40 shadow-card">
            {/* live tag */}
            <div className="absolute top-5 left-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-border/50 text-[10px] font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Live session · Class 8B
            </div>

            {/* teacher silhouette */}
            <div className="absolute inset-0 flex items-end justify-center">
              <svg viewBox="0 0 240 320" className="h-[88%] w-auto opacity-95">
                <defs>
                  <linearGradient id="teacher-g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="oklch(0.55 0.15 290)" />
                    <stop offset="1" stopColor="oklch(0.45 0.09 195)" />
                  </linearGradient>
                </defs>
                {/* head */}
                <circle cx="120" cy="78" r="42" fill="url(#teacher-g)" />
                {/* shoulders / body */}
                <path d="M40 320 C50 220 80 180 120 178 C160 180 190 220 200 320 Z" fill="url(#teacher-g)" />
                {/* hair accent */}
                <path d="M82 60 Q120 28 158 60 Q150 50 120 46 Q90 50 82 60 Z" fill="oklch(0.25 0.04 280)" />
              </svg>
            </div>

            {/* earbud indicator */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[28%] right-[40%] w-20 h-20 rounded-full bg-saffron/40 blur-2xl"
            />
            <div className="absolute top-[31%] right-[42%] flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-white border border-border shadow-card flex items-center justify-center text-saffron">
                <Headphones className="w-5 h-5" />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-saffron">TWS · Connected</span>
                <span className="text-[10px] text-muted-foreground">Whisper mode</span>
              </div>
            </div>

            {/* sound waves */}
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-[34%] right-[58%] text-soft-purple"
            >
              <Waves className="w-6 h-6" />
            </motion.div>

            {/* floating whisper card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[18%] left-5 max-w-[220px] rounded-2xl bg-foreground text-background p-3 shadow-glow"
            >
              <div className="flex items-center gap-2 text-[9px] uppercase tracking-wider text-saffron font-bold">
                <Mic className="w-3 h-3" /> Guruko whispers
              </div>
              <p className="mt-1.5 text-sm font-medium leading-snug">
                "Students losing attention — try a 30-second activity?"
              </p>
            </motion.div>

            {/* students dot row */}
            <div className="absolute bottom-5 inset-x-5 flex items-end justify-center gap-1.5">
              {[40, 60, 35, 70, 50, 80, 45, 65, 55, 40, 75, 60].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [`${h * 0.6}%`, `${h}%`, `${h * 0.7}%`] }}
                  transition={{ duration: 2 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                  className="w-2 rounded-full bg-gradient-to-t from-soft-purple/40 to-indigo/70"
                  style={{ minHeight: 8 }}
                />
              ))}
            </div>
          </div>

          {/* Whisper feed */}
          <div>
            <div className="rounded-3xl bg-white/80 backdrop-blur border border-border/50 shadow-card overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-border/40">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-soft-purple to-indigo flex items-center justify-center text-white">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight">Whisper Feed</p>
                    <p className="text-[10px] text-muted-foreground">Only what matters · in your ear</p>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-teal/10 text-teal font-semibold">Live</span>
              </div>
              <div className="divide-y divide-border/40">
                {whispers.map((w, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-start gap-3 px-5 py-3.5 hover:bg-muted/40 transition-colors"
                  >
                    <span className="text-[10px] tabular-nums text-muted-foreground mt-0.5 w-10 shrink-0">{w.t}</span>
                    <Mic className="w-3.5 h-3.5 text-soft-purple mt-1 shrink-0" />
                    <p className="text-sm font-medium leading-snug">{w.text}</p>
                  </motion.div>
                ))}
              </div>
              <div className="px-5 py-3 bg-muted/30 text-[10px] text-muted-foreground uppercase tracking-wider">
                Adaptive · contextual · never robotic
              </div>
            </div>

            {/* flow chips */}
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {["Session starts", "AI reads room", "Whispers in TWS", "Teacher adapts", "Students engage", "System learns"].map((s, i) => (
                <span key={s} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-border/50 shadow-card">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                  {s}
                  {i < 5 && <ChevronRight className="w-3 h-3 text-muted-foreground" />}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Remembered statement — cinematic ---------------- */
function RememberedStatement() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="w-[70%] h-[70%] rounded-full bg-gradient-to-br from-soft-purple/25 via-indigo/15 to-saffron/25 blur-3xl" />
      </motion.div>
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.03em]"
        >
          In the future, the best classrooms <br className="hidden md:block" />
          <span className="text-muted-foreground">won't be the ones with the most information.</span>
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.03em] text-gradient"
        >
          They'll be the ones students remember.
        </motion.h3>
      </div>
    </section>
  );
}

/* kept for reference / fallback */
function _UnusedSideCardRef() { return null; }

function SideCard({
  tone, label, title, points,
}: {
  tone: "muted" | "vivid"; label: string; title: string;
  points: { icon: React.ComponentType<{ className?: string }>; text: string }[];
}) {
  const isVivid = tone === "vivid";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`relative rounded-3xl p-8 md:p-10 overflow-hidden ${
        isVivid
          ? "bg-gradient-to-br from-foreground to-[oklch(0.18_0.04_260)] text-background"
          : "bg-white border border-border/40 shadow-card"
      }`}
    >
      {isVivid && (
        <>
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-soft-purple/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-saffron/20 blur-3xl" />
        </>
      )}
      <div className="relative">
        <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${isVivid ? "text-saffron" : "text-muted-foreground"}`}>
          {label}
        </p>
        <h3 className="mt-4 text-2xl md:text-3xl font-bold leading-tight">{title}</h3>
        <div className="mt-8 space-y-3">
          {points.map((p, i) => (
            <div key={i} className={`flex items-center gap-3 rounded-xl p-3 ${isVivid ? "bg-white/10 backdrop-blur" : "bg-muted/60"}`}>
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isVivid ? "bg-white/10 text-saffron" : "bg-background text-indigo"}`}>
                <p.icon className="w-4 h-4" />
              </div>
              <span className="text-sm">{p.text}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- How it works — horizontal storytelling ---------------- */
function HowItWorks() {
  const steps = [
    { icon: PlayCircle, title: "Teacher starts session", desc: "60 seconds. One tap. Class is ready.", color: "saffron" },
    { icon: Brain, title: "AI adapts to the room", desc: "Energy, language, and pace — read in real-time.", color: "indigo" },
    { icon: Users, title: "Students engage", desc: "Hooks, loops, and anchors keep them in.", color: "purple" },
    { icon: Heart, title: "Teacher reflects", desc: "Voice journaling, not corporate dashboards.", color: "teal" },
    { icon: Sparkles, title: "System evolves", desc: "Every class makes the next one better.", color: "saffron" },
  ];
  return (
    <section id="features" className="py-32 px-6 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold text-indigo uppercase tracking-[0.2em]">How Guruko Works</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            From the first tap to the next great lesson.
          </h2>
        </div>

        <div className="relative mt-20">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-soft-purple/40 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative group"
              >
                <div className={`relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center mb-5 mx-auto lg:mx-0 ${
                  s.color === "saffron" ? "bg-saffron/15 text-saffron" :
                  s.color === "indigo" ? "bg-indigo/10 text-indigo" :
                  s.color === "purple" ? "bg-soft-purple/15 text-soft-purple" :
                  "bg-teal/15 text-teal"
                }`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Step {i + 1}</p>
                <h3 className="mt-1 text-lg font-semibold leading-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute top-4 -right-3 w-4 h-4 text-muted-foreground/40" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Live copilot — showstopper ---------------- */
function LiveCopilot() {
  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] rounded-full bg-indigo/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-teal/15 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs font-semibold text-indigo uppercase tracking-[0.2em]">Live Classroom Mode</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            A calm presence beside you. <br/>
            <span className="text-gradient">Never in your way.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Think Jarvis for teachers — except it whispers. Guruko listens to the class, reads the energy, and surfaces only what matters in the moment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-20 relative rounded-[2rem] overflow-hidden border border-white/60 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl shadow-glow"
        >
          <div className="grid lg:grid-cols-[1.4fr_1fr]">
            {/* Classroom scene */}
            <div className="relative bg-gradient-to-br from-foreground to-[oklch(0.2_0.05_260)] text-background p-8 md:p-12 min-h-[460px] overflow-hidden">
              <div className="absolute top-6 left-6 flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
                <span className="text-background/70 tracking-wider uppercase">Live · 10:34 AM · Class 8B</span>
              </div>

              {/* board / abstract */}
              <div className="absolute inset-x-8 top-20 bottom-32 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xs text-background/50 tracking-wider uppercase">On the board</p>
                  <p className="mt-2 text-2xl md:text-3xl font-display font-bold">Photosynthesis = Sun + Water + CO₂</p>
                  <p className="mt-2 text-sm text-background/60">→ Glucose + Oxygen</p>
                </div>
              </div>

              {/* Teacher avatar */}
              <div className="absolute bottom-6 left-8 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-warm flex items-center justify-center text-foreground font-bold">P</div>
                <div>
                  <p className="text-sm font-semibold">Ms. Priya</p>
                  <p className="text-xs text-background/60">teaching · 6 min in</p>
                </div>
              </div>

              {/* AI listening orb */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute bottom-6 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-soft-purple to-indigo blur-md"
              />
              <div className="absolute bottom-6 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-soft-purple to-indigo flex items-center justify-center text-white shadow-glow">
                <Mic className="w-6 h-6" />
              </div>
            </div>

            {/* AI suggestions stream */}
            <div className="p-6 md:p-8 bg-white/60 backdrop-blur space-y-3 border-t lg:border-t-0 lg:border-l border-border/40">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Guruko · Live Stream</p>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal/10 text-teal font-semibold">Listening</span>
              </div>
              <SuggestionItem time="6:02" icon={Activity} color="saffron" title="Energy dropping in back row" action="Try a 30-sec movement break" />
              <SuggestionItem time="6:04" icon={Languages} color="purple" title="3 students need Hindi" action="Switch analogy to Hindi?" />
              <SuggestionItem time="6:06" icon={Wand2} color="teal" title="Local analogy ready" action="“Like a phone charging in the sun”" />
              <SuggestionItem time="6:07" icon={MessageCircle} color="indigo" title="Question prompt" action="Ask: what would YOU eat to power up?" />
              <SuggestionItem time="6:08" icon={Hand} color="saffron" title="Recover attention" action="Tap to launch quick poll" highlighted />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SuggestionItem({
  time, icon: Icon, color, title, action, highlighted,
}: {
  time: string; icon: React.ComponentType<{ className?: string }>;
  color: "saffron" | "purple" | "teal" | "indigo"; title: string; action: string; highlighted?: boolean;
}) {
  const colorMap = {
    saffron: "text-saffron bg-saffron/10",
    purple: "text-soft-purple bg-soft-purple/10",
    teal: "text-teal bg-teal/10",
    indigo: "text-indigo bg-indigo/10",
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex gap-3 p-3 rounded-2xl border transition-all ${
        highlighted ? "bg-foreground text-background border-foreground shadow-soft" : "bg-white border-border/40 hover:shadow-card"
      }`}
    >
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${highlighted ? "bg-white/10 text-saffron" : colorMap[color]}`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-semibold truncate">{title}</p>
          <span className={`text-[10px] tabular-nums ${highlighted ? "text-background/60" : "text-muted-foreground"}`}>{time}</span>
        </div>
        <p className={`text-xs mt-0.5 ${highlighted ? "text-background/70" : "text-muted-foreground"}`}>{action}</p>
      </div>
    </motion.div>
  );
}

/* ---------------- Visual learning kits ---------------- */
function VisualKits() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold text-indigo uppercase tracking-[0.2em]">Visual + Activity Kits</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight">
            Diagrams, drawings, and activities — ready before the bell rings.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Smart-board diagrams. Chalkboard drawing guides. Group activities. Worksheets. Guruko prepares the operational details so you can focus on the moment.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Diagrams", "Worksheets", "Group Activities", "Role-play", "Quick Quizzes", "Story Cards"].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-border/50 shadow-card">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="relative h-[520px]">
          <KitCard
            className="left-0 top-0 w-[68%]"
            delay={0}
            title="Photosynthesis · Diagram"
            tag="SMART BOARD"
            color="teal"
            preview={<DiagramPreview />}
          />
          <KitCard
            className="right-0 top-16 w-[60%]"
            delay={0.15}
            title="Group Activity · Roleplay"
            tag="ACTIVITY KIT"
            color="saffron"
            preview={<RolePlayPreview />}
          />
          <KitCard
            className="left-8 bottom-0 w-[64%]"
            delay={0.3}
            title="Quick Quiz · 8 questions"
            tag="ANCHOR"
            color="indigo"
            preview={<QuizPreview />}
          />
        </div>
      </div>
    </section>
  );
}

function KitCard({
  className, delay, title, tag, color, preview,
}: {
  className: string; delay: number; title: string; tag: string;
  color: "teal" | "saffron" | "indigo"; preview: React.ReactNode;
}) {
  const map = { teal: "text-teal bg-teal/10", saffron: "text-saffron bg-saffron/10", indigo: "text-indigo bg-indigo/10" };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -6 }}
      className={`absolute ${className} rounded-3xl bg-white border border-border/40 shadow-card p-5 backdrop-blur`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className={`text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-md ${map[color]}`}>{tag}</span>
        <Layers className="w-3.5 h-3.5 text-muted-foreground" />
      </div>
      <p className="text-sm font-semibold mb-3">{title}</p>
      <div className="rounded-xl bg-muted/50 h-32 overflow-hidden">{preview}</div>
    </motion.div>
  );
}

function DiagramPreview() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full">
      <circle cx="50" cy="50" r="20" fill="oklch(0.8 0.16 75 / 0.5)" />
      <circle cx="50" cy="50" r="10" fill="oklch(0.8 0.16 75)" />
      <path d="M70 50 Q100 30 130 50" stroke="oklch(0.45 0.09 195)" strokeWidth="2" fill="none" strokeDasharray="3 3" />
      <rect x="130" y="35" width="50" height="30" rx="6" fill="oklch(0.45 0.09 195 / 0.15)" />
      <text x="155" y="54" textAnchor="middle" fontSize="9" fill="oklch(0.45 0.09 195)" fontWeight="600">LEAF</text>
      <text x="50" y="85" textAnchor="middle" fontSize="8" fill="oklch(0.5 0.04 220)">SUN</text>
    </svg>
  );
}
function RolePlayPreview() {
  return (
    <div className="p-3 flex flex-wrap gap-1.5 items-center justify-center h-full">
      {["Sun", "Leaf", "Water", "CO₂", "Student", "Energy"].map((r, i) => (
        <span key={r} className="text-[10px] px-2 py-1 rounded-full" style={{ background: `oklch(0.85 0.12 ${50 + i * 40} / 0.4)`, color: `oklch(0.35 0.08 ${50 + i * 40})` }}>
          {r}
        </span>
      ))}
    </div>
  );
}
function QuizPreview() {
  return (
    <div className="p-3 space-y-1.5">
      {[80, 60, 70].map((w, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-indigo" />
          <div className="h-2 rounded-full bg-indigo/20" style={{ width: `${w}%` }} />
        </div>
      ))}
    </div>
  );
}

/* ---------------- India ready ---------------- */
function IndiaReady() {
  return (
    <section id="india" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-16 lg:p-20 gradient-hero text-white shadow-glow"
        >
          {/* animated blobs */}
          <motion.div
            animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-[28rem] h-[28rem] rounded-full bg-saffron/30 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 -left-20 w-[28rem] h-[28rem] rounded-full bg-soft-purple/30 blur-3xl"
          />

          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <p className="text-saffron text-xs font-semibold uppercase tracking-[0.2em]">India-Ready</p>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.02] tracking-tight">
                Built for every <br/>
                <span className="italic font-display">Indian</span> classroom.
              </h2>
              <p className="mt-6 text-white/80 text-lg max-w-xl">
                From government schools in Bihar to international academies in Bangalore. From chalk to smart boards. From English to Tamil. Guruko adapts to your reality — not the other way around.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Blackboard", "Projector", "Smart Board", "Open Space", "Lab Access", "Low Bandwidth", "Offline Mode"].map((t) => (
                  <span key={t} className="px-3.5 py-1.5 rounded-full text-sm bg-white/15 backdrop-blur border border-white/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "24", label: "States" },
                { num: "11", label: "Languages" },
                { num: "12.4K", label: "Teachers" },
                { num: "380K", label: "Students reached" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-6"
                >
                  <p className="text-4xl md:text-5xl font-bold font-display tracking-tight">{s.num}</p>
                  <p className="mt-1 text-sm text-white/70">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Teacher evolution ---------------- */
function Evolution() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs font-semibold text-indigo uppercase tracking-[0.2em]">Teacher Evolution</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight">
            Not analytics. <br/>
            <span className="text-muted-foreground">A gentle mirror.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            After each class, Guruko offers a quiet reflection — what worked, what to try next, what your students felt. No scores. No leaderboards. Just growth.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-white border border-border/40 shadow-card p-8 overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-teal/15 blur-3xl" />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full gradient-warm flex items-center justify-center text-sm font-bold">P</div>
            <div>
              <p className="text-sm font-semibold">Ms. Priya's reflection</p>
              <p className="text-xs text-muted-foreground">Tuesday · 11:12 AM · Photosynthesis</p>
            </div>
          </div>

          <div className="rounded-2xl bg-muted/50 p-4 mb-4">
            <p className="text-xs font-semibold text-saffron mb-1">YOUR MOMENT</p>
            <p className="text-sm">“The phone-charging analogy made the back row sit up. That's the one to keep.”</p>
          </div>

          <div className="space-y-2">
            {[
              { k: "What landed", v: "Local analogies + visual diagram", c: "teal" },
              { k: "Try next time", v: "Quick poll after the hook", c: "saffron" },
              { k: "Class felt", v: "Curious · Engaged · A little tired", c: "purple" },
            ].map((r) => (
              <div key={r.k} className="flex items-center gap-3 text-sm">
                <span className={`w-1.5 h-1.5 rounded-full ${r.c === "teal" ? "bg-teal" : r.c === "saffron" ? "bg-saffron" : "bg-soft-purple"}`} />
                <span className="text-muted-foreground w-28 shrink-0 text-xs uppercase tracking-wider">{r.k}</span>
                <span className="font-medium">{r.v}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-border/40 flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Week 3 · 8 reflections</span>
            <span className="flex items-center gap-1.5 text-teal font-semibold">
              <Heart className="w-3.5 h-3.5" /> Growing steadily
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="w-[80%] h-[60%] rounded-full bg-gradient-to-br from-soft-purple/30 via-indigo/20 to-teal/30 blur-3xl" />
      </motion.div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-[1.02] tracking-[-0.03em]"
        >
          The future classroom starts with{" "}
          <span className="text-gradient">empowered teachers.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Start with one class. Feel the difference. Bring Guruko in beside you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link to="/onboarding">
            <Button size="lg" className="rounded-full h-14 px-8 text-base gradient-hero text-white border-0 shadow-glow hover:opacity-95">
              Start Teaching Smarter <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/app">
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-white/60 backdrop-blur border-border/60">
              Explore Live Demo
            </Button>
          </Link>
        </motion.div>

        <p className="mt-8 text-xs text-muted-foreground">Free for the first class. No card. No commitment.</p>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border/50 py-14 px-6 bg-white/40 backdrop-blur">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <GurukoLogo size="md" />
            <span className="flex flex-col leading-none">
              <span className="font-display font-bold text-teal">Guruko</span>
              <span className="text-[9px] font-medium text-soft-purple mt-0.5 tracking-[0.12em] uppercase">AI Classroom Agent</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">Helping teachers teach the new generation — calmly, intelligently, humanly.</p>
        </div>
        {[
          { title: "Product", items: ["Features", "Live Mode", "Visual Kits", "Reflection"] },
          { title: "For India", items: ["Schools", "Languages", "Infrastructure", "Pricing"] },
          { title: "Company", items: ["Vision", "Teachers", "Press", "Contact"] },
        ].map((c) => (
          <div key={c.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{c.title}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {c.items.map((i) => (
                <li key={i}><a href="#" className="hover:text-foreground text-muted-foreground transition">{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© 2026 Guruko · Made with care for teachers in India</p>
        <p className="flex items-center gap-1.5"><Globe className="w-3 h-3" /> English · हिंदी · தமிழ் · বাংলা · 8 more</p>
      </div>
    </footer>
  );
}

// Suppress unused warning for AnimatePresence (kept for future expansion)
void AnimatePresence;
