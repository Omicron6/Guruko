import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, Zap, Repeat, MapPin, Eye, Beaker, RefreshCw, Play, Download, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/app/experience")({
  component: Experience,
});

const SECTIONS = [
  { id: "hook", icon: Zap, color: "text-saffron bg-saffron/15 border-saffron/30", title: "The Hook", time: "60s", body: "Hold up a leaf. Ask: 'If your phone could eat sunlight, would you ever charge it again?' Wait for laughter. Then: 'Today we meet the world's oldest solar engineers.'" },
  { id: "loop", icon: Repeat, color: "text-indigo bg-indigo/10 border-indigo/20", title: "Core Loop", time: "20 min", body: "Walk through the photosynthesis equation as a 'recipe' — sunlight + water + CO₂ → glucose + oxygen. Pause every 3 minutes for a quick check-in question." },
  { id: "analogy", icon: MapPin, color: "text-teal bg-teal/15 border-teal/20", title: "Localized Analogy", time: "5 min", body: "Compare the leaf to a tiffin box: it takes raw ingredients (light, water, air) and packs them into a ready meal (glucose). Every Indian kid knows tiffin." },
  { id: "visual", icon: Eye, color: "text-soft-purple bg-soft-purple/15 border-soft-purple/20", title: "Visual Suggestions", time: "Board", body: "Draw the leaf cross-section with chloroplasts as tiny green kitchens. Use yellow chalk for sunlight arrows, blue for water. Smart board: pull up the animation." },
  { id: "activity", icon: Beaker, color: "text-saffron bg-saffron/15 border-saffron/30", title: "Practical Activity", time: "10 min", body: "Group of 4: cover one plant leaf with foil for the next day. Predict what happens. Builds anticipation across two classes." },
  { id: "recovery", icon: RefreshCw, color: "text-indigo bg-indigo/10 border-indigo/20", title: "Recovery Strategy", time: "If energy drops", body: "Stand up. Pretend to be a leaf. Stretch arms toward an imaginary sun. 30 seconds of movement, then return to the equation." },
];

function Experience() {
  const [open, setOpen] = useState<string | null>("hook");
  return (
    <div className="p-6 lg:p-10 max-w-4xl mx-auto">
      <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-saffron/15 text-saffron text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> Experience Generated
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mt-4">Photosynthesis — Class 8</h1>
        <p className="text-muted-foreground mt-2">A 45-minute story-led experience designed for a slightly distracted class with a smart board.</p>
      </motion.header>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-3xl gradient-hero p-6 text-white shadow-soft mb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-wider text-saffron font-semibold">Audio Briefing</p>
            <p className="font-semibold mt-1">2 minute walk-through</p>
          </div>
          <div className="flex gap-2">
            <button className="w-11 h-11 rounded-full bg-white text-indigo flex items-center justify-center shadow-card">
              <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
            </button>
            <button className="w-11 h-11 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>

      <div className="space-y-3">
        {SECTIONS.map((s, i) => {
          const isOpen = open === s.id;
          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.05 }}
              className="bg-card border border-border/40 rounded-2xl overflow-hidden"
            >
              <button onClick={() => setOpen(isOpen ? null : s.id)} className="w-full p-5 flex items-center gap-4 text-left">
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${s.color} shrink-0`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg">{s.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{s.time}</span>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="px-5 pb-5">
                  <div className="pl-16 text-foreground/80 leading-relaxed">{s.body}</div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 flex gap-3 justify-center">
        <button className="px-6 py-3 rounded-full bg-card border border-border text-sm font-semibold hover:bg-muted">Save Offline</button>
        <button className="px-6 py-3 rounded-full gradient-hero text-white text-sm font-semibold shadow-soft">Start Live Session →</button>
      </div>
    </div>
  );
}