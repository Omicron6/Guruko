import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, Sparkles, Check } from "lucide-react";

export const Route = createFileRoute("/app/quick-start")({
  component: QuickStart,
});

const STEPS = ["Topic", "Energy", "Infrastructure", "Language", "Goal", "Generate"];

function QuickStart() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<any>({});
  const navigate = useNavigate();

  const next = () => (step < STEPS.length - 1 ? setStep(step + 1) : navigate({ to: "/app/experience" }));

  return (
    <div className="p-6 lg:p-10 max-w-3xl mx-auto">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-wider text-indigo font-semibold">Quick Start</p>
        <h1 className="text-3xl font-bold mt-1">Design today's class.</h1>
        <div className="mt-6 flex gap-1.5">
          {STEPS.map((_, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full transition-all ${i <= step ? "bg-indigo" : "bg-border"}`} />
          ))}
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
          {step === 0 && <Topic data={data} setData={setData} />}
          {step === 1 && <Picker title="What's the classroom energy?" subtitle="I'll adapt the flow." field="energy" data={data} setData={setData} options={[
            { id: "hyper", label: "Hyper", emoji: "⚡" },
            { id: "sleepy", label: "Sleepy", emoji: "😴" },
            { id: "distracted", label: "Distracted", emoji: "🌀" },
            { id: "passive", label: "Passive", emoji: "😐" },
            { id: "competitive", label: "Competitive", emoji: "🔥" },
          ]} />}
          {step === 2 && <Picker title="What infrastructure do you have?" subtitle="Pick the best you have access to." field="infra" data={data} setData={setData} options={[
            { id: "blackboard", label: "Blackboard", emoji: "📋" },
            { id: "projector", label: "Projector", emoji: "📽️" },
            { id: "smartboard", label: "Smart Board", emoji: "🖥️" },
            { id: "openspace", label: "Open Space", emoji: "🌳" },
            { id: "lab", label: "Lab", emoji: "🧪" },
          ]} />}
          {step === 3 && <Picker title="Language mode" subtitle="Mix is fine." field="lang" data={data} setData={setData} options={[
            { id: "english", label: "English", emoji: "🇬🇧" },
            { id: "hindi", label: "Hindi", emoji: "🇮🇳" },
            { id: "mix", label: "Bilingual", emoji: "🔁" },
            { id: "regional", label: "Regional", emoji: "🗣️" },
          ]} />}
          {step === 4 && <Picker title="Teaching goal" subtitle="What matters most today?" field="goal" data={data} setData={setData} options={[
            { id: "clarity", label: "Concept Clarity", emoji: "💡" },
            { id: "participation", label: "Participation", emoji: "🙋" },
            { id: "revision", label: "Revision", emoji: "🔁" },
            { id: "critical", label: "Critical Thinking", emoji: "🧠" },
            { id: "practical", label: "Practical", emoji: "🛠️" },
          ]} />}
          {step === 5 && <Generate data={data} />}
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 flex items-center justify-between">
        <Button variant="ghost" disabled={step === 0} onClick={() => setStep(step - 1)} className="rounded-full">
          <ArrowLeft className="w-4 h-4" /> Back
        </Button>
        <Button onClick={next} className="rounded-full gradient-hero text-white border-0 shadow-soft h-12 px-7">
          {step === STEPS.length - 1 ? "Generate Classroom Experience" : "Continue"} <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

function Topic({ data, setData }: any) {
  return (
    <div>
      <h2 className="text-2xl font-bold">What are you teaching?</h2>
      <p className="mt-1 text-muted-foreground">Topic and grade — one line each.</p>
      <div className="mt-6 space-y-3">
        <Input className="h-14 rounded-2xl px-5 text-base" placeholder="Topic e.g. Photosynthesis" value={data.topic || ""} onChange={(e) => setData({ ...data, topic: e.target.value })} />
        <Input className="h-14 rounded-2xl px-5 text-base" placeholder="Grade e.g. Class 8" value={data.grade || ""} onChange={(e) => setData({ ...data, grade: e.target.value })} />
      </div>
    </div>
  );
}

function Picker({ title, subtitle, field, data, setData, options }: any) {
  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-1 text-muted-foreground">{subtitle}</p>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {options.map((o: any) => {
          const active = data[field] === o.id;
          return (
            <motion.button
              key={o.id}
              whileTap={{ scale: 0.96 }}
              onClick={() => setData({ ...data, [field]: o.id })}
              className={`p-5 rounded-2xl border-2 text-left transition-all ${active ? "border-indigo bg-indigo/5 shadow-card" : "border-border bg-card hover:border-indigo/40"}`}
            >
              <div className="text-2xl">{o.emoji}</div>
              <p className="mt-2 font-semibold text-sm">{o.label}</p>
              {active && <Check className="w-4 h-4 text-indigo mt-1" />}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function Generate({ data }: any) {
  return (
    <div className="text-center py-8">
      <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-20 h-20 rounded-3xl gradient-hero mx-auto flex items-center justify-center shadow-glow">
        <Sparkles className="w-10 h-10 text-white" />
      </motion.div>
      <h2 className="mt-6 text-2xl font-bold">Ready to create something beautiful?</h2>
      <p className="mt-2 text-muted-foreground">I'll design a {data.topic || "topic"} experience for {data.grade || "your class"} — energy-matched, infrastructure-aware, goal-aligned.</p>
      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        {Object.entries(data).filter(([_, v]) => v).map(([k, v]: any) => (
          <span key={k} className="px-3 py-1.5 rounded-full bg-muted text-xs font-medium">{String(v)}</span>
        ))}
      </div>
    </div>
  );
}