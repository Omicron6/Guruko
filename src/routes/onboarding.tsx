import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { GurukoLogo } from "@/components/guruko-logo";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Welcome to Guruko" },
      { name: "description", content: "Set up your teaching profile in under a minute." },
    ],
  }),
  component: Onboarding,
});

const STEPS = ["Welcome", "Profile", "Subject", "Style", "Language", "Classroom"];

function Onboarding() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<any>({ subjects: [], grades: [], styles: [], langs: [], infra: [] });
  const navigate = useNavigate();

  const next = () => (step < STEPS.length - 1 ? setStep(step + 1) : navigate({ to: "/app" }));
  const back = () => step > 0 && setStep(step - 1);

  return (
    <div className="min-h-screen gradient-soft flex flex-col">
      <header className="px-6 py-5 flex items-center justify-between max-w-3xl mx-auto w-full">
        <Link to="/" className="flex items-center gap-2">
          <GurukoLogo size="sm" />
          <span className="flex flex-col leading-none">
            <span className="font-display font-bold text-teal">Guruko</span>
            <span className="text-[10px] font-medium text-soft-purple mt-0.5 tracking-wide">AI Classroom Agent</span>
          </span>
        </Link>
        <span className="text-xs text-muted-foreground">{step + 1} of {STEPS.length}</span>
      </header>

      <div className="px-6 max-w-3xl mx-auto w-full">
        <div className="h-1 bg-border/60 rounded-full overflow-hidden">
          <motion.div
            className="h-full gradient-hero"
            animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <main className="flex-1 flex items-center px-6 py-12">
        <div className="max-w-2xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {step === 0 && <Welcome />}
              {step === 1 && <Profile data={data} setData={setData} />}
              {step === 2 && <SubjectGrade data={data} setData={setData} />}
              {step === 3 && <Style data={data} setData={setData} />}
              {step === 4 && <Language data={data} setData={setData} />}
              {step === 5 && <Infra data={data} setData={setData} />}
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-between">
            <Button variant="ghost" onClick={back} disabled={step === 0} className="rounded-full">
              <ArrowLeft className="w-4 h-4" /> Back
            </Button>
            <Button onClick={next} className="rounded-full gradient-hero text-white border-0 shadow-soft h-11 px-6">
              {step === STEPS.length - 1 ? "Enter Guruko" : "Continue"} <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

function Welcome() {
  return (
    <div className="text-center">
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mx-auto"
      >
        <GurukoLogo size="hero" />
      </motion.div>
      <h1 className="mt-8 text-4xl md:text-5xl font-bold">Welcome to Guruko.</h1>
      <p className="mt-4 text-lg text-muted-foreground">Let's set up your teaching world. Takes under a minute.</p>
    </div>
  );
}

function Profile({ data, setData }: any) {
  return (
    <div>
      <h2 className="text-3xl font-bold">Tell us about you.</h2>
      <p className="mt-2 text-muted-foreground">We'll personalize Guruko around how you teach.</p>
      <div className="mt-8 space-y-4">
        <Input placeholder="Your name" className="h-14 rounded-2xl text-base px-5" value={data.name || ""} onChange={(e) => setData({ ...data, name: e.target.value })} />
        <Input placeholder="School (optional)" className="h-14 rounded-2xl text-base px-5" value={data.school || ""} onChange={(e) => setData({ ...data, school: e.target.value })} />
      </div>
    </div>
  );
}

function SubjectGrade({ data, setData }: any) {
  const subjects = ["Math", "Science", "English", "Social Studies", "Hindi", "Computer", "Art"];
  const grades = ["1-2", "3-5", "6-8", "9-10", "11-12"];
  return (
    <div>
      <h2 className="text-3xl font-bold">What do you teach?</h2>
      <p className="mt-2 text-muted-foreground">Pick all that apply.</p>
      <p className="mt-8 text-sm font-semibold text-muted-foreground">SUBJECTS</p>
      <ChipGroup options={subjects} selected={data.subjects} onChange={(v) => setData({ ...data, subjects: v })} />
      <p className="mt-6 text-sm font-semibold text-muted-foreground">GRADES</p>
      <ChipGroup options={grades} selected={data.grades} onChange={(v) => setData({ ...data, grades: v })} />
    </div>
  );
}

function Style({ data, setData }: any) {
  const styles = [
    { id: "storytelling", label: "Storytelling", desc: "Narratives, analogies, characters" },
    { id: "activity", label: "Activity-Based", desc: "Hands-on, group work, experiments" },
    { id: "debate", label: "Debate-Led", desc: "Discussions, perspectives, arguments" },
    { id: "structured", label: "Structured", desc: "Clear flow, organized, sequential" },
  ];
  return (
    <div>
      <h2 className="text-3xl font-bold">How do you love to teach?</h2>
      <p className="mt-2 text-muted-foreground">Choose your natural style — you can mix.</p>
      <div className="mt-8 grid sm:grid-cols-2 gap-3">
        {styles.map((s) => {
          const active = data.styles.includes(s.id);
          return (
            <button
              key={s.id}
              onClick={() => setData({ ...data, styles: active ? data.styles.filter((x: string) => x !== s.id) : [...data.styles, s.id] })}
              className={`text-left p-5 rounded-2xl border-2 transition-all ${active ? "border-indigo bg-indigo/5 shadow-card" : "border-border bg-card hover:border-indigo/40"}`}
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold">{s.label}</p>
                {active && <Check className="w-4 h-4 text-indigo" />}
              </div>
              <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Language({ data, setData }: any) {
  const langs = ["English", "Hindi", "Marathi", "Tamil", "Telugu", "Bengali", "Kannada", "Gujarati"];
  return (
    <div>
      <h2 className="text-3xl font-bold">Language preferences</h2>
      <p className="mt-2 text-muted-foreground">Guruko will localize content in these languages.</p>
      <div className="mt-8">
        <ChipGroup options={langs} selected={data.langs} onChange={(v) => setData({ ...data, langs: v })} />
      </div>
    </div>
  );
}

function Infra({ data, setData }: any) {
  const infra = [
    { id: "blackboard", label: "Blackboard Only", emoji: "📋" },
    { id: "projector", label: "Projector", emoji: "📽️" },
    { id: "smartboard", label: "Smart Board", emoji: "🖥️" },
    { id: "openspace", label: "Open Activity Space", emoji: "🌳" },
    { id: "lab", label: "Lab Access", emoji: "🧪" },
  ];
  return (
    <div>
      <h2 className="text-3xl font-bold">Your classroom setup</h2>
      <p className="mt-2 text-muted-foreground">We'll adapt activities to what you have.</p>
      <div className="mt-8 grid sm:grid-cols-2 gap-3">
        {infra.map((i) => {
          const active = data.infra.includes(i.id);
          return (
            <button
              key={i.id}
              onClick={() => setData({ ...data, infra: active ? data.infra.filter((x: string) => x !== i.id) : [...data.infra, i.id] })}
              className={`text-left p-5 rounded-2xl border-2 flex items-center gap-3 transition-all ${active ? "border-indigo bg-indigo/5 shadow-card" : "border-border bg-card hover:border-indigo/40"}`}
            >
              <span className="text-2xl">{i.emoji}</span>
              <span className="font-semibold flex-1">{i.label}</span>
              {active && <Check className="w-4 h-4 text-indigo" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ChipGroup({ options, selected, onChange }: { options: string[]; selected: string[]; onChange: (v: string[]) => void }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {options.map((o) => {
        const active = selected.includes(o);
        return (
          <motion.button
            key={o}
            whileTap={{ scale: 0.96 }}
            onClick={() => onChange(active ? selected.filter((x) => x !== o) : [...selected, o])}
            className={`px-4 py-2.5 rounded-full text-sm font-medium border-2 transition-all ${active ? "bg-indigo text-white border-indigo" : "bg-card border-border hover:border-indigo/40"}`}
          >
            {o}
          </motion.button>
        );
      })}
    </div>
  );
}