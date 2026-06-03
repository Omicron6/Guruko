import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Users, Target, Sparkles } from "lucide-react";

export const Route = createFileRoute("/app/activities")({
  component: Activities,
});

const KITS = [
  { title: "Tiffin Box Photosynthesis", subject: "Science", grade: "8", duration: "20m", engagement: "High", outcome: "Concept clarity via daily-life analogy", color: "from-saffron/20 to-saffron/5" },
  { title: "Fraction Pizza Party", subject: "Math", grade: "5", duration: "30m", engagement: "Very High", outcome: "Visual understanding of fractions", color: "from-indigo/20 to-indigo/5" },
  { title: "Debate: Was Akbar Great?", subject: "Social", grade: "7", duration: "40m", engagement: "High", outcome: "Critical thinking, perspective-taking", color: "from-soft-purple/20 to-soft-purple/5" },
  { title: "Sentence Building Relay", subject: "English", grade: "4", duration: "15m", engagement: "Medium", outcome: "Grammar practice, participation", color: "from-teal/20 to-teal/5" },
];

const FILTERS = ["All", "Math", "Science", "English", "Social"];

function Activities() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? KITS : KITS.filter((k) => k.subject === filter);
  return (
    <div className="p-6 lg:p-10">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-wider text-indigo font-semibold">Activity Kits</p>
        <h1 className="text-3xl font-bold mt-1">Plug-and-play classroom magic.</h1>
        <p className="text-muted-foreground mt-2">Ready-to-use activities filtered to your reality.</p>
      </header>

      <div className="flex flex-wrap gap-2 mb-6">
        {FILTERS.map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${filter === f ? "bg-indigo text-white" : "bg-card border border-border/40 hover:border-indigo/40"}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {list.map((k, i) => (
          <motion.div key={k.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className={`rounded-3xl p-6 bg-gradient-to-br ${k.color} border border-border/40 hover:shadow-card transition`}>
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{k.subject} · Class {k.grade}</p>
                <h3 className="mt-1 text-xl font-bold">{k.title}</h3>
              </div>
              <Sparkles className="w-5 h-5 text-indigo shrink-0" />
            </div>
            <p className="mt-3 text-sm text-foreground/80">{k.outcome}</p>
            <div className="mt-5 flex flex-wrap gap-3 text-xs">
              <span className="flex items-center gap-1.5 bg-white/70 backdrop-blur px-3 py-1.5 rounded-full"><Clock className="w-3.5 h-3.5" /> {k.duration}</span>
              <span className="flex items-center gap-1.5 bg-white/70 backdrop-blur px-3 py-1.5 rounded-full"><Users className="w-3.5 h-3.5" /> {k.engagement}</span>
              <span className="flex items-center gap-1.5 bg-white/70 backdrop-blur px-3 py-1.5 rounded-full"><Target className="w-3.5 h-3.5" /> Concept</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}