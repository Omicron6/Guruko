import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mic, Heart } from "lucide-react";
import { GurukoLogo } from "@/components/guruko-logo";

export const Route = createFileRoute("/app/reflection")({
  component: Reflection,
});

const CHIPS = ["Storytelling worked", "Group activity clicked", "Strong opener", "Good recovery", "Clear board work", "Energetic Q&A"];

function Reflection() {
  const [participation, setParticipation] = useState(70);
  const [engagement, setEngagement] = useState(80);
  const [chips, setChips] = useState<string[]>([]);

  return (
    <div className="p-6 lg:p-10 max-w-3xl mx-auto">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-wider text-indigo font-semibold">Reflection</p>
        <h1 className="text-3xl font-bold mt-1">How did class feel today?</h1>
        <p className="text-muted-foreground mt-2">A small pause to grow. No judgment, just noticing.</p>
      </header>

      <div className="space-y-6">
        <div className="bg-card border border-border/40 rounded-3xl p-6">
          <label className="text-sm font-semibold">Participation</label>
          <div className="flex items-center gap-4 mt-3">
            <input type="range" min={0} max={100} value={participation} onChange={(e) => setParticipation(+e.target.value)} className="flex-1 accent-indigo" />
            <span className="w-12 text-right font-bold text-indigo">{participation}%</span>
          </div>
        </div>
        <div className="bg-card border border-border/40 rounded-3xl p-6">
          <label className="text-sm font-semibold">Engagement</label>
          <div className="flex items-center gap-4 mt-3">
            <input type="range" min={0} max={100} value={engagement} onChange={(e) => setEngagement(+e.target.value)} className="flex-1 accent-saffron" />
            <span className="w-12 text-right font-bold text-saffron">{engagement}%</span>
          </div>
        </div>

        <div className="bg-card border border-border/40 rounded-3xl p-6">
          <p className="text-sm font-semibold">What worked?</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {CHIPS.map((c) => {
              const a = chips.includes(c);
              return (
                <motion.button whileTap={{ scale: 0.95 }} key={c} onClick={() => setChips(a ? chips.filter((x) => x !== c) : [...chips, c])} className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition ${a ? "bg-teal border-teal text-white" : "bg-card border-border hover:border-teal/40"}`}>
                  {c}
                </motion.button>
              );
            })}
          </div>
        </div>

        <button className="w-full bg-card border-2 border-dashed border-border rounded-3xl p-6 hover:border-indigo/40 transition flex items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-2xl bg-indigo/10 flex items-center justify-center">
            <Mic className="w-5 h-5 text-indigo" />
          </div>
          <div>
            <p className="font-semibold">Voice reflection</p>
            <p className="text-sm text-muted-foreground">Tap to speak — 30 seconds is enough.</p>
          </div>
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl gradient-hero p-6 text-white shadow-soft">
          <div className="flex items-center gap-2.5 mb-3">
            <GurukoLogo className="w-8 h-8" />
            <p className="font-semibold">Guruko's note</p>
          </div>
          <p className="text-white/90">Your engagement was 12 points higher when you used real-life analogies. Tomorrow's photosynthesis class is already set up to lean on this strength.</p>
        </motion.div>

        <button className="w-full bg-indigo text-white rounded-full py-4 font-semibold flex items-center justify-center gap-2 hover:opacity-90 shadow-soft">
          <Heart className="w-4 h-4" /> Save Reflection
        </button>
      </div>
    </div>
  );
}