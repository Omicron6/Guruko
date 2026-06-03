import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TrendingUp, Award, Sparkles } from "lucide-react";

export const Route = createFileRoute("/app/evolution")({
  component: Evolution,
});

const DATA = [62, 68, 65, 74, 78, 76, 84, 82, 88, 85, 90, 92];

function Evolution() {
  const max = Math.max(...DATA);
  return (
    <div className="p-6 lg:p-10">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-wider text-indigo font-semibold">Your Evolution</p>
        <h1 className="text-3xl font-bold mt-1">You're growing, beautifully.</h1>
        <p className="text-muted-foreground mt-2">12 weeks of teaching, gently tracked.</p>
      </header>

      <div className="grid lg:grid-cols-3 gap-4 mb-6">
        <Stat label="Avg. Engagement" value="84%" delta="+12%" color="text-teal" />
        <Stat label="Sessions Run" value="47" delta="+8 this month" color="text-indigo" />
        <Stat label="Top Style" value="Storytelling" delta="9.2 / 10" color="text-saffron" />
      </div>

      <div className="bg-card border border-border/40 rounded-3xl p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Engagement Trend</p>
            <p className="font-semibold mt-1">Last 12 weeks</p>
          </div>
          <TrendingUp className="w-5 h-5 text-teal" />
        </div>
        <div className="flex items-end gap-2 h-40">
          {DATA.map((v, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${(v / max) * 100}%` }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              className="flex-1 rounded-t-lg gradient-hero opacity-80 hover:opacity-100"
            />
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-card border border-border/40 rounded-3xl p-6">
          <Award className="w-5 h-5 text-saffron mb-3" />
          <p className="font-semibold">Milestone unlocked</p>
          <p className="text-sm text-muted-foreground mt-1">You've used localized analogies in 20 sessions. Your students remember 34% more.</p>
        </div>
        <div className="bg-card border border-border/40 rounded-3xl p-6">
          <Sparkles className="w-5 h-5 text-indigo mb-3" />
          <p className="font-semibold">Try next</p>
          <p className="text-sm text-muted-foreground mt-1">Debate-led sessions for Class 9 — your structured style + your students' energy match well here.</p>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, delta, color }: any) {
  return (
    <div className="bg-card border border-border/40 rounded-3xl p-6">
      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{label}</p>
      <p className={`mt-2 text-3xl font-bold ${color}`}>{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{delta}</p>
    </div>
  );
}