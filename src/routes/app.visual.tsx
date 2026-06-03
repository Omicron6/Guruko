import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ImageIcon, PenLine, Play, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/app/visual")({
  component: Visual,
});

const CARDS = [
  { type: "Diagram", icon: ImageIcon, color: "bg-indigo/10 text-indigo", title: "Leaf Cross-Section", desc: "Layered illustration of mesophyll, chloroplasts, stomata." },
  { type: "Drawing Guide", icon: PenLine, color: "bg-saffron/15 text-saffron", title: "Photosynthesis on Blackboard", desc: "Step-by-step chalk sketch in 5 strokes." },
  { type: "Animation", icon: Play, color: "bg-teal/15 text-teal", title: "Sunlight to Glucose", desc: "30-second smart board animation." },
  { type: "Explainer", icon: Lightbulb, color: "bg-soft-purple/15 text-soft-purple", title: "Why Leaves Are Green", desc: "Interactive concept walk-through." },
];

function Visual() {
  return (
    <div className="p-6 lg:p-10">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-wider text-indigo font-semibold">Visual Companion</p>
        <h1 className="text-3xl font-bold mt-1">See the lesson before you teach it.</h1>
        <p className="text-muted-foreground mt-2">Smart visuals matched to your topic and infrastructure.</p>
      </header>

      <div className="grid sm:grid-cols-2 gap-4">
        {CARDS.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-3xl border border-border/40 overflow-hidden hover:shadow-card transition"
          >
            <div className={`aspect-video flex items-center justify-center ${c.color}`}>
              <c.icon className="w-16 h-16 opacity-80" />
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{c.type}</p>
              <h3 className="mt-1 font-semibold text-lg">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}