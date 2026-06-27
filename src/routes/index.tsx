import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { LeadModalProvider, useLeadModal } from "@/components/LeadModal";
import { Countdown } from "@/components/Countdown";
import birthChartImg from "@/assets/birth-chart.jpg";

import manuscriptImg from "@/assets/manuscript.jpg";
import baniAsset from "@/assets/bani.webp.asset.json";
import heroBgAsset from "@/assets/hero-bg.png.asset.json";
import testimonial1 from "@/assets/testimonial-1.mp4.asset.json";
import testimonial2 from "@/assets/testimonial-2.mp4.asset.json";
import testimonial3 from "@/assets/testimonial-3.mp4.asset.json";
import zoomIconAsset from "@/assets/zoom-icon.png.asset.json";
import whatsappIconAsset from "@/assets/whatsapp-icon.png.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bani_Live — Vedic Astrology Beginner Course" },
      { name: "description", content: "Learn Basic Vedic Astrology to understand karma, free will & planetary influences. Guided by Bani Singh Chaddha." },
    ],
  }),
  component: () => (
    <LeadModalProvider>
      <Page />
    </LeadModalProvider>
  ),
});

const WA_TRIAL = "https://wa.me/919289241133?text=Hi%2C%20I%27d%20like%20to%20register%20for%20the%20free%20trial%20class%20on%2013%20August%202026.";
const WA_GENERAL = "https://wa.me/919289241133";

function CTAJoin({ label = "Join Class Now", variant = "dark" as "dark" | "light" }) {
  const { open } = useLeadModal();
  return (
    <button onClick={open} className={variant === "dark" ? "btn-pill-dark" : "btn-pill-light"}>{label}</button>
  );
}
function CTACallback({ variant = "dark" as "dark" | "ghost" }) {
  const { open } = useLeadModal();
  return (
    <button onClick={open} className={variant === "dark" ? "btn-pill-outline" : "btn-pill-ghost"}>Request a Callback</button>
  );
}

function Eyebrow({ children, light = false, withLines = false }: { children: React.ReactNode; light?: boolean; withLines?: boolean }) {
  return (
    <div className={`eyebrow ${withLines ? "eyebrow-line" : ""}`} style={light ? { color: "rgba(184,149,106,0.9)" } : undefined}>
      {children}
    </div>
  );
}

function Navbar() {
  const { open } = useLeadModal();
  return (
    <header className="sticky top-0 z-[100]" style={{ background: "var(--forest)" }}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 h-14 md:h-16">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="font-display italic text-xl md:text-[22px]" style={{ color: "var(--linen)" }}>Bani_Live</span>
          <span className="hidden sm:inline" style={{ color: "rgba(242,237,230,0.3)" }}>|</span>
          <div className="hidden sm:flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1,2,3].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/64?img=${i + 10}`} alt="" className="w-7 h-7 rounded-full" style={{ border: "2px solid var(--gold)" }} />
              ))}
            </div>
            <span className="text-[13px]" style={{ color: "var(--linen)" }}>127+ Joined Now!</span>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <button onClick={open} className="hidden md:inline-block rounded-full text-[13px] px-4 py-2" style={{ border: "1.5px solid rgba(242,237,230,0.5)", color: "var(--linen)" }}>Request a Callback</button>
          <button onClick={open} className="rounded-full text-[13px] px-4 py-2 font-medium" style={{ background: "var(--ink)", color: "var(--linen)" }}>Join Class Now</button>
        </div>
      </div>
    </header>
  );
}

function TrialBar() {
  const { open } = useLeadModal();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[99]">
      <div className="relative w-full shadow-2xl" style={{ background: "var(--terra)" }}>
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 inline-block rounded-md px-3 py-1 text-[10px] uppercase font-medium shadow whitespace-nowrap" style={{ background: "var(--forest)", color: "var(--gold)", letterSpacing: "0.14em" }}>✦ FREE | ✦ NO PAYMENT REQUIRED.</span>
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 px-5 md:px-10 py-4 md:py-5">
          <span className="font-display italic text-base md:text-2xl" style={{ color: "var(--gold)" }}>Trail Class Registrations Ending Soon!</span>
          <div className="flex items-center gap-4 md:gap-8">
            <Countdown />
            <button onClick={open} className="text-[13px] uppercase font-medium whitespace-nowrap" style={{ color: "var(--linen)", letterSpacing: "0.1em" }}>Register Now →</button>
          </div>
        </div>
      </div>
    </div>

  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "var(--ivory)", backgroundImage: `url(${heroBgAsset.url})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      <div className="relative max-w-[900px] mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
        <Eyebrow withLines>Vedic Astrology Beginner Course</Eyebrow>
        <h1 className="font-display mt-8 text-[44px] md:text-[68px] leading-[1.05]" style={{ color: "var(--ink)" }}>
          Learn Vedic Astrology to Understand Karma,{" "}
          <span className="italic" style={{ color: "var(--gold)" }}>Free Will &amp; Your own birth chart</span>
        </h1>
        <p className="mt-6 text-base md:text-[16px] max-w-[640px] mx-auto leading-[1.7]" style={{ color: "var(--brown)" }}>
          A structured, beginner-friendly course on Vedic Astrology for deeper self-awareness, spiritual insight, and a strong Jyotish foundation—guided by Bani Singh Chaddha, with 16 + years of expertise.
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-y-6 max-w-[1000px] mx-auto">
          {[
            ["Class Duration", "1 hr (15+ Classes)"],
            ["Timings", "12–1 PM (Tue & Thur)"],
            ["Batch Begins On", "13 August, 2026"],
            ["No Expertise Req.", "Beginner Friendly"],
            ["Recording Access", "3 Months (G Drive)"],
          ].map(([label, val], i, arr) => (
            <div key={label} className={`px-4 md:px-6 ${i < arr.length - 1 ? "md:border-r" : ""}`} style={{ borderColor: "var(--stone)" }}>
              <div className="eyebrow text-[10px]">{label}</div>
              <div className="font-display text-[24px] md:text-[28px] mt-1" style={{ color: "var(--ink)" }}>
                {label === "No Expertise Req." ? (
                  <span className="inline-block rounded-full px-3 py-1 text-sm" style={{ background: "#3D1B3D", color: "#E8D8E8" }}>{val}</span>
                ) : val}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <CTAJoin />
          <CTACallback />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs" style={{ color: "var(--brown)" }}>
          <span className="inline-flex items-center gap-2"><img src={zoomIconAsset.url} alt="Zoom" className="h-4 w-4" />LIVE ON ZOOM</span>
          <span style={{ color: "var(--stone)" }}>·</span>
          <span className="inline-flex items-center gap-2"><img src={whatsappIconAsset.url} alt="WhatsApp" className="h-4 w-4" />WHATSAPP COMMUNITY INCLUDED</span>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    ["240+", "Students Taught"],
    ["4.9 / 5", "Course Rating"],
    ["18", "Batches Completed"],
    ["94%", "Reported Increased Self-Knowledge"],
    ["87%", "Students Recommended It"],
  ];
  return (
    <section style={{ background: "var(--ink)" }} className="py-16 md:py-20 px-6 md:px-12">
      <div className="text-center">
        <Eyebrow withLines>Success Stories by the Numbers</Eyebrow>
      </div>
      <div className="max-w-[1200px] mx-auto mt-12 grid grid-cols-2 md:grid-cols-5 gap-y-8">
        {stats.map(([num, label], i) => (
          <div key={label} className={`text-center px-4 ${i < stats.length - 1 ? "md:border-r" : ""}`} style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="font-display text-5xl md:text-6xl" style={{ color: "var(--ivory)" }}>{num}</div>
            <div className="eyebrow mt-3 text-[10px]" style={{ color: "rgba(242,237,230,0.45)" }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Outcome1() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12" style={{ background: "var(--ivory)" }}>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <img src={birthChartImg} alt="Vedic birth chart" loading="lazy" className="rounded-2xl w-full aspect-[4/3] object-cover" style={{ boxShadow: "0 20px 60px rgba(28,28,28,0.10)" }} />
        <div>
          <Eyebrow>{"\n"}</Eyebrow>
          <h2 className="font-display mt-4 text-[36px] md:text-[48px] leading-tight" style={{ color: "var(--ink)" }}>
            Learn <span className="italic" style={{ color: "var(--gold)" }}>Birth Chart Basics</span> :<br />
            The real reason why patterns keep repeating in life!
          </h2>
          <p className="mt-6 text-[15px] leading-[1.7]" style={{ color: "var(--brown)" }}>
            Your chart is a map. Bani teaches you to read it — through 15+ years of practice, rooted in classical Jyotish.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            {[["👥","Jargon Free","Explanations"],["📖","Guiding Principles","Explained"],["🗺","Decision's Guide","For Future"]].map(([ic,t,s]) => (
              <div key={t} className="flex items-center gap-3">
                <span className="text-lg" style={{ color: "var(--gold)" }}>{ic}</span>
                <div>
                  <div className="font-display italic text-base" style={{ color: "var(--brown)" }}>{t}</div>
                  <div className="text-[10px] uppercase" style={{ color: "rgba(61,55,48,0.5)", letterSpacing: "0.14em" }}>{s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



function Outcome3() {
  return (
    <section className="relative py-20 md:py-24 px-6 md:px-12 overflow-hidden" style={{ background: "var(--ivory)" }}>
      {["Surya","Mangala","Guru","Shani","Chandra","Budha","Shukra","Rahu"].map((n, i) => (
        <span key={n} className="absolute text-[11px] pointer-events-none select-none hidden md:block" style={{ color: "rgba(184,149,106,0.08)", top: `${10 + i * 10}%`, left: i % 2 ? "auto" : "2%", right: i % 2 ? "2%" : "auto", writingMode: "vertical-rl" }}>{n}</span>
      ))}
      <div className="relative max-w-[900px] mx-auto text-center">
        <Eyebrow withLines>{"\n"}</Eyebrow>
        <h2 className="font-display mt-6 text-[34px] md:text-[52px] leading-[1.1]" style={{ color: "var(--ink)" }}>
          Understand the <span className="italic" style={{ color: "var(--gold)" }}>Action - Reaction Impact</span> of how your karma moves across lifecycles
        </h2>
        <p className="mt-6 max-w-[680px] mx-auto text-base leading-[1.7]" style={{ color: "var(--brown)" }}>
          Every significant turning point in your life — the losses, the breakthroughs, the relationships that changed you — is connected to your chart and also correlates events to planetary periods, and uncertainty
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {[
            ["Echoes of the past", "Understand how past choices echo into your present."],
            ["Cycles of time", "Map life events to planetary periods (dashas)."],
            ["Clarity under uncertainty", "Make decisions grounded in spiritual perspective."],
          ].map(([t, b]) => (
            <div key={t} className="rounded-2xl p-8 text-left border" style={{ background: "var(--linen)", borderColor: "var(--stone)" }}>
              <div style={{ color: "var(--gold)" }} className="text-xl">✦</div>
              <h3 className="font-display text-[22px] mt-4" style={{ color: "var(--ink)" }}>{t}</h3>
              <p className="text-[13px] mt-2 leading-[1.6]" style={{ color: "var(--brown)" }}>{b}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-3">
          <CTAJoin />
          <p className="text-xs" style={{ color: "rgba(61,55,48,0.5)" }}>₹15,000 + GST ONLY</p>
        </div>
      </div>
    </section>
  );
}

const TOPICS = [
  "Introduction to Jyotish",
  "\n",
  "01. Karma, Fate & Free Will\nWhat Jyotish says about destiny, free will, and what can truly be changed.\n\n\n02. How Planets Influence Your Life\nUnderstand the logic behind planetary influences—not superstition, but the principles Jyotish is built on.",
  "03. Reading a Birth Chart\nLearn to decode a horoscope step by step, beginning with your own chart.The Nine Planets",
  "04. Zodiac Signs & Houses\nExplore the structure of the birth chart, what each house represents, and how they work together.",
  "05. The Science Behind Vedic Rituals\nUnderstand what happens during a puja, mantra, or Vedic practice—and the principles behind these traditions.",
  "06. Practical Remedies & Lifestyle Changes\n\nDiscover actionable remedies, including mantra, diet, daily routines, and gemstones, to help navigate challenging planetary influences.Understanding Dashas",
  "\n",
  "\n",
];

function Topics() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12" style={{ background: "var(--ink)" }}>
      <div className="max-w-[900px] mx-auto">
        <Eyebrow>—— Topics to be Covered</Eyebrow>
        <h2 className="font-display mt-4 text-[36px] md:text-[48px] leading-[1.1]" style={{ color: "var(--linen)" }}>
          15 live sessions. Every question answered in class.
        </h2>
        <ul className="mt-8">
          {TOPICS.map((t, i) => (
            <li key={i} className="py-4 text-[15px]" style={{
              color: "var(--linen)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              whiteSpace: "pre-line",
            }}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function UrgencyBar() {
  return (
    <div className="py-3.5 px-6 text-center text-sm" style={{ background: "#C9A97A", color: "var(--ink)" }}>
      ⚡ Registrations for the current batch close on <span className="font-display italic">15th July 2026</span> — <strong>Only a few seats remain</strong>
    </div>
  );
}

function MeetTeacher() {
  const { open } = useLeadModal();
  return (
    <>
      <UrgencyBar />
      <section className="py-20 md:py-24 px-6 md:px-12" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <img src={baniAsset.url} alt="Bani Singh Chadha" loading="lazy" className="rounded-2xl w-full object-cover aspect-[4/5]" />
          <div>
            <Eyebrow>—— Meet the Teacher</Eyebrow>
            <h2 className="font-display italic mt-4 text-[44px] md:text-[52px]" style={{ color: "var(--gold)" }}>Bani Singh Chadha</h2>
            <p className="mt-2 font-display text-[18px] md:text-[20px]" style={{ color: "var(--brown)" }}>Jyotish Acharya</p>
            <div className="flex flex-wrap gap-2.5 mt-5">
              {["15+ Years of Experience", "Ex - NDTV", "Cardiff University"].map((c) => (
                <span key={c} className="rounded-full px-4 py-1.5 text-[11px] uppercase" style={{ border: "1px solid var(--stone)", color: "var(--brown)", letterSpacing: "0.1em" }}>{c}</span>
              ))}
            </div>
            <div className="mt-6 space-y-5 text-[15px] leading-[1.7]" style={{ color: "var(--brown)" }}>
              <p>Bani has taught Jyotish full-time for seven years — courses, workshops, and talks reaching students across the world. She teaches from within a living lineage: the parampara of 16th-century Odia saint-poet Shri Achyutananda Das, carried forward through generations of the Rath family. This is not self-taught astrology.</p>
              <p>Before Jyotish, she spent 13 years in broadcast journalism at NDTV — producing flagship programming and anchoring news. That background shapes how she teaches: rigorously, without filler, for people who ask hard questions.</p>
            </div>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {[
                "Jyotish Acharya, Bharatiya Vidya Bhavan (2009)",
                "Advanced studies under Shri S. Ganesh, Sringeri Sharada Peetham lineage",
                "Parampara of Shri Achyutananda Das under Pandit Sanjay Rath & Sarbani Rath",
                "13 years at NDTV — producer & anchor, We the People with Barkha Dutt",
                "Lady Shri Ram College · Cardiff University · Welham Girls'",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-[14px]" style={{ color: "var(--brown)" }}>
                  <span style={{ color: "var(--gold)" }}>•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <button onClick={open} className="btn-pill-dark mt-8">Learn From Bani Directly!</button>
          </div>
        </div>
      </section>
    </>
  );
}

function BenefitsForAll() {
  const tags = ["Complete Beginners", "Spiritual Seekers", "Working Professionals", "Future Astrology Practitioners", "Existing Astrology Students", "Individuals Seeking Self-Understanding"];
  return (
    <section className="py-16 md:py-20 px-6 md:px-12" style={{ background: "var(--ivory)" }}>
      <div className="max-w-[900px] mx-auto text-center">
        <Eyebrow withLines>Benefits for All</Eyebrow>
        <h2 className="font-display mt-8 text-[34px] md:text-[48px] leading-tight" style={{ color: "var(--ink)" }}>
          This course builds a foundation <span className="italic" style={{ color: "var(--gold)" }}>that sharpens every practice.</span>
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {tags.map((t) => (
            <span key={t} className="rounded-full px-5 py-2 text-[13px]" style={{ border: "1px solid var(--stone)", color: "var(--brown)" }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard() {
  const { open } = useLeadModal();
  return (
    <section className="py-12 px-6 md:px-12" style={{ background: "var(--ivory)" }}>
      <div className="max-w-[1000px] mx-auto rounded-3xl p-8 md:p-12 grid md:grid-cols-5 gap-8" style={{ background: "var(--ink)" }}>
        <div className="md:col-span-3">
          <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase" style={{ background: "var(--forest)", color: "var(--gold)", letterSpacing: "0.12em" }}>• Trail Class Registrations Close on 15 July 2026</span>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-display text-[64px] md:text-[72px] leading-none" style={{ color: "var(--linen)" }}>₹15,000</span>
            <span className="text-lg" style={{ color: "rgba(242,237,230,0.5)" }}>+GST</span>
          </div>
          <p className="text-[13px] mt-2" style={{ color: "rgba(242,237,230,0.45)" }}>One-time payment · Lifetime access to recordings · Live cohort</p>
          <div className="mt-8 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {[
              ["✦", "Practical Knowledge", "Every concept taught in class is grounded in years of real-life chart analysis and practical application—not just theory."],
              ["🏆", "Certificate", "Digital certificate from Bani on completion of the course."],
              ["💬","WhatsApp Community","Get your doubts answered by Bani in a dedicated group."],
            ].map(([ic,t,b]) => (
              <div key={t}>
                <div style={{ color: "var(--gold)" }}>{ic}</div>
                <div className="font-display italic text-base mt-2" style={{ color: "var(--linen)" }}>{t}</div>
                <p className="text-[12px] mt-1 leading-[1.5]" style={{ color: "rgba(242,237,230,0.5)" }}>{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={open} className="btn-pill-light">Join Class Now</button>
            <button onClick={open} className="btn-pill-ghost">Request a Callback</button>
          </div>
        </div>
        <div className="md:col-span-2 rounded-2xl overflow-hidden flex items-center justify-center p-6" style={{ background: "linear-gradient(160deg, #2a1f15, #1c1410)" }}>
          <div className="text-center">
            <div className="eyebrow text-[10px]" style={{ color: "var(--gold)" }}>Vedic Astrology with Bani</div>
            <h3 className="font-display text-3xl mt-3" style={{ color: "var(--linen)" }}>New Batch Begins</h3>
            <p className="font-display text-2xl mt-2" style={{ color: "var(--gold)" }}>13th August 2026</p>
            <button onClick={open} className="mt-6 rounded-full px-5 py-2 text-sm" style={{ background: "var(--gold)", color: "var(--ink)" }}>Register Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

type Testimonial = { type: "A" | "B"; name: string; role: string; quote?: string; img: number; video?: string };
const TESTIMONIALS: Testimonial[] = [
  { type: "A", name: "Priya M.", role: "Student · Mumbai", quote: "I finally understand patterns I've been repeating for years. The birth chart session alone changed the way I see myself.", img: 1 },
  { type: "B", name: "Ananya R.", role: "Student · Delhi", img: 2, video: testimonial1.url },
  { type: "A", name: "Deepika S.", role: "Student · Bengaluru", quote: "Bani teaches in a way no one else does. I've taken other astrology courses. This one landed differently.", img: 3 },
  { type: "B", name: "Sunita B.", role: "Student · Chennai", img: 6, video: testimonial2.url },
  { type: "A", name: "Rohini K.", role: "Student · Pune", quote: "The karma and lifecycles module was the most clarifying thing I've experienced in years of seeking.", img: 4 },
  { type: "B", name: "Vandana P.", role: "Student · Kolkata", img: 8, video: testimonial3.url },
  { type: "A", name: "Meera T.", role: "Student · Hyderabad", quote: "As a tarot reader, this gave my practice an entirely new foundation. I recommend it to every reader I know.", img: 5 },
  { type: "A", name: "Kavitha N.", role: "Student · Ahmedabad", quote: "Practical, spiritual, and deeply personal. Bani's teaching style makes complex ideas feel like conversation.", img: 7 },
];

function Testimonials() {
  const { open } = useLeadModal();
  const [emblaRef] = useEmblaCarousel({ dragFree: true, loop: false });
  return (
    <section className="py-20 md:py-24" style={{ background: "var(--ivory)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <Eyebrow>Testimonials</Eyebrow>
        <h2 className="font-display mt-4 text-[38px] md:text-[56px] leading-[1.05]" style={{ color: "var(--ink)" }}>
          Don't take our word for it.<br />Hear it from our students.
        </h2>
      </div>
      <div className="mt-12 overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5 pl-6 md:pl-12">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="shrink-0">
              {t.type === "A" ? (
                <div className="w-[320px] min-h-[360px] rounded-2xl p-8 flex flex-col" style={{ background: "#fff", border: "1px solid var(--stone)" }}>
                  <img src={`https://i.pravatar.cc/96?img=${t.img}`} alt="" className="w-12 h-12 rounded-full" style={{ border: "2px solid var(--stone)" }} />
                  <p className="mt-5 text-[15px] leading-[1.7] flex-1" style={{ color: "var(--brown)" }}>"{t.quote}"</p>
                  <div className="mt-6 pt-6" style={{ borderTop: "1px solid var(--stone)" }}>
                    <div className="text-[12px] uppercase" style={{ color: "var(--ink)", letterSpacing: "0.14em" }}>{t.name}</div>
                    <div className="text-[11px] mt-0.5" style={{ color: "#7A6F65" }}>{t.role}</div>
                  </div>
                </div>
              ) : (
                <div className="w-[300px] sm:w-[340px] aspect-[9/16] rounded-2xl relative overflow-hidden group" style={{ background: "linear-gradient(135deg, #2A2218 0%, #1C1C1C 100%)" }}>
                  {t.video ? (
                    <video
                      src={t.video}
                      controls
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span style={{ color: "var(--gold)" }}>▶</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))" }}>
                    <div className="text-[12px] uppercase" style={{ color: "var(--linen)", letterSpacing: "0.14em" }}>{t.name}</div>
                    <div className="text-[11px] mt-0.5" style={{ color: "rgba(242,237,230,0.7)" }}>{t.role}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mt-12">
        <button onClick={open} className="btn-pill-dark">Join 2,400+ Students — Enrol Now →</button>
      </div>
    </section>
  );
}

function WhatYouNeed() {
  const { open } = useLeadModal();
  return (
    <section className="relative min-h-[92vh] overflow-hidden flex items-stretch" style={{ background: "var(--ink)" }}>
      <img src={manuscriptImg} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to left, rgba(28,28,28,0.75) 45%, rgba(28,28,28,0.2) 100%)" }} />
      <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-24 flex md:justify-end">
        <div className="md:w-[52%] flex flex-col justify-center">
          <Eyebrow light>— All You Need to Begin —</Eyebrow>
          <h2 className="font-display mt-6 text-[44px] md:text-[68px] leading-[1.0] lowercase" style={{ color: "var(--linen)" }}>
            a curious mind.<br />a willingness<br />to look within.
          </h2>
          <div className="mt-10 pt-8" style={{ borderTop: "1px solid rgba(242,237,230,0.2)" }}>
            <div className="pb-6 mb-6" style={{ borderBottom: "1px solid rgba(242,237,230,0.15)" }}>
              <div className="font-display italic text-[24px] md:text-[28px]" style={{ color: "var(--gold)" }}>"No prior knowledge."</div>
              <p className="text-[13px] mt-1.5" style={{ color: "rgba(242,237,230,0.6)" }}>This course is designed for complete beginners. We start from zero.</p>
            </div>
            <div>
              <div className="font-display italic text-[24px] md:text-[28px]" style={{ color: "var(--gold)" }}>"No special tools."</div>
              <p className="text-[13px] mt-1.5" style={{ color: "rgba(242,237,230,0.6)" }}>A phone or laptop is all you need. Classes are live on Zoom.</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-start gap-3">
            <button onClick={open} className="btn-pill-light">Join Batch Now →</button>
            <button onClick={open} className="btn-pill-ghost inline-block">✦ Register for Free Trial →</button>
            <p className="text-[11px] mt-2" style={{ color: "rgba(242,237,230,0.45)" }}>₹15,000 + GST · Batch begins 13 August 2026 · Seats closing 15 July</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    ["Do I need prior astrology knowledge?", "No. The course is designed for complete beginners starting from zero."],
    ["Will recordings be available?", "Yes. All sessions are recorded and available on Google Drive for 3 months."],
    ["How are classes conducted?", "Live on Zoom, every Tuesday and Thursday, 12–1 PM IST."],
    ["What is the course fee?", "₹15,000 + GST i.e 17700 INR.\u00a0"],
    ["Is there a free trial?", "Yes! Register for the free trial class on 13 August 2026 — no payment required."],
    ["How do I get my birth chart?", "You'll receive a free Birth Chart PDF in your inbox after registration."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-24 px-6 md:px-12" style={{ background: "var(--ivory)" }}>
      <div className="max-w-[760px] mx-auto">
        <h2 className="font-display text-center text-[36px] md:text-[48px]" style={{ color: "var(--ink)" }}>Frequently Asked Question (FAQs)</h2>
        <div className="mt-10">
          {items.map(([q, a], i) => (
            <div key={q} className="py-5" style={{ borderBottom: "1px solid var(--stone)" }}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center text-left">
                <span className="font-display text-[19px] md:text-[20px]" style={{ color: "var(--ink)" }}>{q}</span>
                <span className="text-2xl" style={{ color: "var(--gold)" }}>{open === i ? "×" : "+"}</span>
              </button>
              <div className="overflow-hidden transition-all" style={{ maxHeight: open === i ? 200 : 0 }}>
                <p className="mt-3 text-[14px] leading-[1.7]" style={{ color: "var(--brown)" }}>{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12" style={{ background: "var(--ivory)" }}>
      <div className="text-center">
        <span className="inline-block rounded-full px-5 py-2 text-xs uppercase" style={{ background: "var(--forest)", color: "var(--linen)", letterSpacing: "0.12em" }}>Registration Ends on July 15, 2026</span>
        <h2 className="font-display mt-8 text-[34px] md:text-[52px] leading-[1.1] max-w-[900px] mx-auto" style={{ color: "var(--ink)" }}>
          Begin Your Journey to <span className="italic" style={{ color: "var(--gold)" }}>Vedic Astrology</span><br />
          and <span className="italic" style={{ color: "var(--gold)" }}>Transform into a Spiritually Guided Human</span>
        </h2>
      </div>
      <div className="mt-12 max-w-[900px] mx-auto grid sm:grid-cols-2 gap-5">
        {[
          ["Have a curious mind", "No prior knowledge of astrology required."],
          ["A phone or laptop for Classes", "Sessions are fully online on Zoom."],
          ["Register with Us", "Make a payment of ₹15,000 + GST to book slot."],
          ["Ask Anything in the WhatsApp Group", "Bani will directly answer your questions."],
        ].map(([t, s]) => (
          <div key={t} className="rounded-xl p-6 flex gap-4 items-start" style={{ background: "#fff", border: "1px solid var(--stone)" }}>
            <div className="w-5 h-5 rounded-full mt-1 flex items-center justify-center text-[11px]" style={{ border: "1.5px solid var(--gold)", color: "var(--gold)" }}>✓</div>
            <div>
              <h3 className="font-display text-lg" style={{ color: "var(--ink)" }}>{t}</h3>
              <p className="text-[13px] mt-1" style={{ color: "var(--brown)", opacity: 0.65 }}>{s}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        <CTAJoin />
        <CTACallback />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-5 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-3" style={{ background: "var(--ink)" }}>
      <span className="font-display italic text-xl" style={{ color: "var(--linen)" }}>Bani_Live</span>
      <span className="text-xs" style={{ color: "rgba(242,237,230,0.4)" }}>© 2026 Bani Singh Chadha · All rights reserved</span>
    </footer>
  );
}

function WhatsAppFAB() {
  return (
    <a href={WA_GENERAL} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-[200] w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-110" style={{ background: "#25D366", boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}>
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#fff"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z"/></svg>
    </a>
  );
}

function Page() {
  return (
    <>
      <Navbar />
      <TrialBar />
      <main>
        <Hero />
        <Stats />
        <Outcome1 />
        <Outcome3 />
        <Topics />
        <MeetTeacher />
        <BenefitsForAll />
        <PricingCard />
        <Testimonials />
        <WhatYouNeed />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
