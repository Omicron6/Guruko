import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap, Sparkles, Play, NotebookPen, TrendingUp, Users, Clock } from "lucide-react";
import { GurukoLogo } from "@/components/guruko-logo";

export const Route = createFileRoute("/app/")({
  component: Home,
});

function Home() {
  const [greet, setGreet] = useState("Hello");
  useEffect(() => {
    const h = new Date().getHours();
    setGreet(h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening");
  }, []);
  return (
    <div className="p-6 lg:p-10 space-y-8">
      <header className="flex items-start gap-4">
        <GurukoLogo className="w-12 h-12 mt-1" />
        <div>
        <p className="text-sm text-muted-foreground">{greet},</p>
        <h1 className="text-3xl md:text-4xl font-bold mt-1">Ms. Priya 👋</h1>
        <p className="text-muted-foreground mt-2">Your classroom awaits. Let's make today memorable.</p>
        </div>
      </header>

      <section>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <QuickAction icon={Sparkles} label="Generate Experience" to="/app/quick-start" gradient />
          <QuickAction icon={Zap} label="Quick Hook" to="/app/quick-start" />
          <QuickAction icon={Play} label="Continue Session" to="/app/live" />
          <QuickAction icon={NotebookPen} label="Add Reflection" to="/app/reflection" />
        </div>
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-3xl gradient-hero p-6 md:p-8 text-white shadow-soft relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-saffron/20 blur-3xl" />
          <div className="relative">
            <p className="text-xs uppercase tracking-wider text-saffron font-semibold">Next Session · 10:30 AM</p>
            <h3 className="text-2xl md:text-3xl font-bold mt-2">Photosynthesis · Class 8</h3>
            <p className="mt-3 text-white/80">Your class felt distracted yesterday. I've prepared a story-led hook to bring them back.</p>
            <Link to="/app/quick-start" className="inline-flex mt-5 items-center gap-2 bg-white text-indigo px-5 py-2.5 rounded-full text-sm font-semibold">
              Open Session →
            </Link>
          </div>
        </div>
        <div className="rounded-3xl bg-card p-6 border border-border/40 shadow-card">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Today's Sessions</p>
          <div className="mt-4 space-y-3">
            {[
              { time: "10:30", subject: "Photosynthesis", grade: "8" },
              { time: "12:00", subject: "Fractions", grade: "5" },
              { time: "2:30", subject: "Indian Geography", grade: "7" },
            ].map((s) => (
              <div key={s.time} className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition">
                <div className="w-10 h-10 rounded-xl bg-indigo/10 flex items-center justify-center text-indigo text-xs font-semibold">{s.time}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{s.subject}</p>
                  <p className="text-xs text-muted-foreground">Class {s.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">AI Teaching Insights</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <InsightCard icon={TrendingUp} title="Engagement up 18%" desc="Your storytelling hooks are landing. Keep using analogies in Math." color="text-teal bg-teal/10" />
          <InsightCard icon={Users} title="Class 8 needs recovery" desc="Energy dipped Thursday. Try an activity-based opener tomorrow." color="text-saffron bg-saffron/15" />
          <InsightCard icon={Clock} title="Save 40 mins / week" desc="Reuse last week's 'Fractions Pizza' kit — it scored 9.1/10." color="text-indigo bg-indigo/10" />
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Recent Sessions</h2>
        <div className="space-y-2">
          {[
            { title: "The Solar System", grade: "Class 6", score: 8.7, when: "Yesterday" },
            { title: "Tenses Refresher", grade: "Class 7", score: 7.4, when: "2 days ago" },
            { title: "Algebraic Identities", grade: "Class 9", score: 9.1, when: "3 days ago" },
          ].map((s) => (
            <motion.div whileHover={{ x: 4 }} key={s.title} className="bg-card border border-border/40 rounded-2xl p-4 flex items-center gap-4">
              <div className="flex-1">
                <p className="font-semibold">{s.title}</p>
                <p className="text-xs text-muted-foreground">{s.grade} · {s.when}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-indigo">{s.score}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">engagement</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function QuickAction({ icon: Icon, label, to, gradient }: any) {
  return (
    <Link to={to}>
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className={`rounded-2xl p-4 h-full flex flex-col gap-3 border ${gradient ? "gradient-hero text-white border-transparent shadow-soft" : "bg-card border-border/40 hover:border-indigo/40"}`}>
        <Icon className="w-5 h-5" />
        <p className="text-sm font-semibold leading-tight">{label}</p>
      </motion.div>
    </Link>
  );
}

function InsightCard({ icon: Icon, title, desc, color }: any) {
  return (
    <div className="bg-card rounded-2xl p-5 border border-border/40">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color} mb-3`}>
        <Icon className="w-5 h-5" />
      </div>
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-muted-foreground mt-1">{desc}</p>
    </div>
  );
}