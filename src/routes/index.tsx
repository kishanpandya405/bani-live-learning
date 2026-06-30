import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  User,
  FileText,
  Smartphone,
  GraduationCap,
  BookOpen,
  Sparkles,
  Gift,
  Award,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import { LeadModalProvider, useLeadModal } from "@/components/LeadModal";
import { Countdown } from "@/components/Countdown";
import birthChartImg from "@/assets/birth-chart.jpg";
import baniAsset from "@/assets/bani-img.png";
import heroBgAsset from "@/assets/hero-bg.png.asset.json";
import testimonial1 from "@/assets/testimonial-1.mp4.asset.json";
import testimonial2 from "@/assets/testimonial-2.mp4.asset.json";
import testimonial3 from "@/assets/testimonial-3.mp4.asset.json";
import zoomIconAsset from "@/assets/zoom-icon.png.asset.json";
import whatsappIconAsset from "@/assets/whatsapp-icon.png.asset.json";
import img1 from "../assets/forwho-1.png.asset.json";
import img2 from "../assets/forwho-2.png.asset.json";
import img3 from "../assets/forwho-3.png.asset.json";
import img4 from "../assets/forwho-4.png.asset.json";
import img5 from "../assets/forwho-5.png.asset.json";
import poster from "../assets/pricing-poster.png.asset.json";
import Star from "../assets/star.svg"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bani_Live — Vedic Astrology Beginner Course" },
      { name: "description", content: "Learn Vedic Astrology to understand karma, free will & your own birth chart. Guided by Bani Singh Chaddha." },
    ],
  }),
  component: () => (
    <LeadModalProvider>
      <Page />
    </LeadModalProvider>
  ),
});

const WA_GENERAL = "https://wa.me/919289241133";

function CTAJoin({ label = "Join Class Now", variant = "dark" as "dark" | "light", className = "" }) {
  const { open } = useLeadModal();
  return (
    <button onClick={open} className={`${variant === "dark" ? "btn-pill-dark" : "btn-pill-light"} ${className}`}>{label}</button>
  );
}
function CTACallback({ variant = "dark" as "dark" | "ghost", className = "" }) {
  const { open } = useLeadModal();
  return (
    <button onClick={open} className={`${variant === "dark" ? "btn-pill-outline" : "btn-pill-ghost"} ${className}`}>Request a Callback</button>
  );
}

function Eyebrow({ children, light = false, withLines = false, color }: { children: React.ReactNode; light?: boolean; withLines?: boolean; color?: string }) {
  const style: React.CSSProperties = {};
  if (color) style.color = color;
  else if (light) style.color = "rgba(184,149,106,0.9)";

  if (withLines) {
    return (
      <div className="eyebrow flex flex-row items-center justify-center gap-8" style={style}>
        <div className="w-10 h-[1px]" style={{ background: "rgba(184,149,106,0.5)" }} />
        <div className="text-center leading-[1.4]">{children}</div>
        <div className="w-10 h-[1px]" style={{ background: "rgba(184,149,106,0.5)" }} />
      </div>
    );
  }

  return (
    <div className="eyebrow" style={style}>
      {children}
    </div>
  );
}

function Navbar() {
  const { open } = useLeadModal();
  return (
    <header className="sticky top-0 z-[100]" style={{ background: "var(--forest)" }}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 h-[70px] md:h-16">
        <div className="flex flex-col items-start justify-center md:flex-row md:items-center gap-2 md:gap-4">
          <span className="font-display italic text-xl md:text-[22px] leading-none" style={{ color: "var(--linen)" }}>Bani_Live</span>
          <span className="hidden md:inline" style={{ color: "rgba(242,237,230,0.3)" }}>|</span>
          <div className="flex flex-row items-center md:item-start mt-1 md:mt-0 md:flex-row md:items-center gap-1 md:gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/64?img=${i + 10}`} alt="" className="w-5 h-5 md:w-7 md:h-7 rounded-full" style={{ border: "2px solid var(--gold)" }} />
              ))}
            </div>
            <span className="text-[11px] md:text-[13px] font-medium leading-none" style={{ color: "#FFCD28" }}>127+ Joined Now!</span>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <button onClick={open} className="hidden md:inline-block rounded-full text-[13px] px-4 py-2" style={{ border: "1.5px solid rgba(242,237,230,0.5)", color: "var(--linen)" }}>Request a Callback</button>
          <button onClick={open} className="rounded-full text-[12px] md:text-[13px] px-4 py-2 font-medium" style={{ background: "var(--ink)", color: "var(--linen)" }}>Join Class Now</button>
        </div>
      </div>
    </header>
  );
}

/* ===== POINT 1: Trial Bar ===== */
function TrialBar() {
  const { open } = useLeadModal();
  const TERRA = "#7A3B1E";
  return (
    <div className="fixed bottom-0 md:bottom-4 left-0 right-0 z-[99] md:px-6">
      <div
        className="relative w-full md:max-w-[1280px] md:mx-auto shadow-2xl md:rounded-[40px]"
        style={{ background: TERRA }}
      >
        {/* Green badge */}
        <span
          className="absolute -top-3 left-4 md:left-10 inline-block rounded-full px-3 py-1 text-[10px] uppercase font-medium shadow whitespace-nowrap"
          style={{ background: "var(--forest)", color: "#fff", letterSpacing: "0.14em" }}
        >
          ✦ FREE | ✦ NO PAYMENT REQUIRED.
        </span>

        {/* Desktop layout */}
        <div className="hidden md:grid items-center px-8 lg:px-12 py-5" style={{ gridTemplateColumns: "1fr auto auto", gap: 24 }}>
          <span className="font-display italic text-xl lg:text-2xl" style={{ color: "#E8C77A" }}>
            Trial Class Registrations Ending Soon!
          </span>
          <Countdown />
          <button
            onClick={open}
            className="text-[13px] uppercase font-semibold whitespace-nowrap"
            style={{ color: "#fff", letterSpacing: "0.14em" }}
          >
            Register Now →
          </button>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col gap-3 px-5 py-4 pt-5">
          <span className="font-display italic text-base" style={{ color: "#E8C77A" }}>
            Trial Class Registrations Ending Soon!
          </span>
          <div className="flex items-center justify-between gap-4">
            <Countdown />
            <button
              onClick={open}
              className="text-right text-[13px] uppercase font-semibold flex items-center gap-1"
              style={{ color: "#fff", letterSpacing: "0.14em" }}
            >
              Register →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===== POINT 2: Hero ===== */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "var(--ivory)", backgroundImage: `url(${heroBgAsset.url})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      <div className="relative max-w-[1362px] mx-auto px-6 md:px-12 py-16 md:py-24 text-center flex flex-col gap-4">
        <Eyebrow withLines>
          <span className="block sm:inline">Vedic Astrology</span>{" "}
          <span className="block sm:inline">Beginner Course</span>
        </Eyebrow>
        <h1 className=" font-display mt-6 md:mt-10 text-[40px] md:text-[64px] leading-[48px] md:leading-[82px]" style={{ color: "var(--ink)" }}>
          Learn Basic Vedic Astrology to {" "}
          <span className="italic" style={{ color: "var(--gold)" }}>Understand Karma, Free Will &amp; Planerary Influences!</span>
        </h1>
        <p className="mt-5 md:mt-8 md:text-[16px] max-w-[316px] md:max-w-[640px] mx-auto md:leading-[1.7] font-regular text-[14px] leading-[28px]" style={{ color: "#000000" }}>
          A beginner-friendly introduction to Vedic Astrology for deeper self-awareness, spiritual insight, and a strong Jyotish foundation—guided by Bani Singh Chaddha, with 16 years of expertise.
        </p>

        {/* Stats grid: desktop 5 cols; mobile 2x2 + full-width 3rd row */}
        <div className="mt-8 md:mt-12 rounded-2xl bg-white shadow-sm border max-w-[1100px] mx-auto overflow-hidden" style={{ borderColor: "var(--stone)" }}>
          <div className="grid grid-cols-2 md:grid-cols-5">
            {[
              ["Class Duration", "1 hr (15+ Classes)"],
              ["Timings", "12–1 PM (Tue & Thur)"],
              ["Batch Begins On", "13 August, 2026"],
              ["No Expertise Req.", "Beginner Friendly"],
              ["Recording Access", "3 Months (G Drive)"],
            ].map(([label, val], i, arr) => {
              const isLast = i === arr.length - 1;
              return (
                <div
                  key={label}
                  className={[
                    "px-4 md:px-6 py-7 md:py-8 text-center",
                    // mobile borders
                    i % 2 === 0 ? "border-r md:border-r" : "",
                    i < 4 ? "border-b md:border-b-0" : "",
                    // mobile: last item spans full width
                    isLast ? "col-span-2 md:col-span-1 border-r-0 md:border-r-0" : "",
                    !isLast && i < arr.length - 1 ? "md:border-r" : "",
                  ].join(" ")}
                  style={{ borderColor: "var(--stone)" }}
                >
                  <div className="eyebrow text-[10px]">{label}</div>
                  <div className="font-display italic text-[18px] md:text-[20px] mt-2" style={{ color: "var(--ink)" }}>
                    {label === "No Expertise Req." ? (
                      <span className="inline-block rounded-md px-3 py-1 text-sm not-italic" style={{ background: "#5B1B47", color: "#F5E6F0" }}>{val}</span>
                    ) : val}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 md:mt-14 flex flex-wrap gap-4 justify-center ">
          <CTAJoin className="w-[248px] sm:w-auto justify-center" />
          <CTACallback className="w-[248px] sm:w-auto justify-center" />
        </div>

        <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs " style={{ color: "var(--brown)" }}>
          <span className="inline-flex items-center gap-2"><img src={zoomIconAsset.url} alt="Zoom" className="h-4 w-4" />LIVE ON ZOOM</span>
          <span style={{ color: "var(--stone)" }}>·</span>
          <span className="inline-flex items-center gap-2"><img src={whatsappIconAsset.url} alt="WhatsApp" className="h-4 w-4" />WHATSAPP COMMUNITY INCLUDED</span>
        </div>
      </div>
    </section>
  );
}

/* ===== POINT 4: Stats ===== */
function Stats() {
  const stats = [
    ["240+", "Students Taught"],
    ["4.9 / 5", "Course Rating"],
    ["18", "Batches Completed"],
    ["94%", "Reported Increased Self-Knowledge"],
    ["87%", "Students Recommended It"],
  ];
  const HEADING = "#B89A5A";
  return (
    <section style={{ background: "var(--ink)" }} className="py-16 md:py-20 px-6 md:px-12">
      <div className="text-center flex items-center justify-center gap-3">
        <span style={{ display: "inline-block", width: 40, height: 1, background: HEADING }} />
        <span className="eyebrow" style={{ color: HEADING }}>Success Stories by the Numbers</span>
        <span style={{ display: "inline-block", width: 40, height: 1, background: HEADING }} />
      </div>
      <div className="max-w-[1366px] mx-auto mt-12 grid grid-cols-2 md:grid-cols-5 gap-y-8">
        {stats.map(([num, label], i) => {
          const isLast = i === stats.length - 1;
          return (
            <div
              key={label}
              className={[
                "text-center px-4",
                isLast ? "col-span-2 md:col-span-1" : "",
                !isLast && i < stats.length - 1 ? "md:border-r" : "",
              ].join(" ")}
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="font-display text-5xl md:text-6xl" style={{ color: "var(--ivory)" }}>{num}</div>
              <div className="eyebrow mt-3 text-[10px]" style={{ color: "rgba(242,237,230,0.45)" }}>{label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ===== POINT 5: Outcome 1 ===== */
function Outcome1() {
  const items: { Icon: typeof User; t: string; s: string }[] = [
    { Icon: User, t: "Jargon Free", s: "Explanations" },
    { Icon: FileText, t: "Guiding Principles", s: "Explained" },
    { Icon: Smartphone, t: "Decision's Guide", s: "For Future" },
  ];
  return (
    <section
      className="py-20 md:py-24 px-6 md:px-12"
      style={{ background: "#F5EFE6", borderTop: "1px solid #D4B896", borderBottom: "1px solid #D4B896" }}
    >
      <div className="max-w-[1366px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image — pending asset */}
        <div
          className="rounded-2xl w-full aspect-[4/3] overflow-hidden flex items-center justify-center"
          style={{ background: "#E8D9C2", boxShadow: "0 20px 60px rgba(28,28,28,0.10)" }}
        >
          <img src={birthChartImg} alt="Vedic birth chart" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div>
          <Eyebrow>—— Outcome #1</Eyebrow>
          <h2 className="font-display mt-4 text-[36px] md:text-[48px] leading-tight" style={{ color: "var(--ink)" }}>
            Learn <span className="italic" style={{ color: "var(--gold)" }}>Birth Chart Basics</span> :<br />
            The real reason why patterns keep repeating in life!
          </h2>
          <p className="mt-6 text-[15px] leading-[1.7]" style={{ color: "var(--brown)" }}>
            Your chart is a map. Bani teaches you to read it — through 15+ years of practice, rooted in classical Jyotish.
          </p>
          <div className="mt-8 flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-x-8 md:gap-y-4">
            {items.map(({ Icon, t, s }) => (
              <div key={t} className="flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center rounded-full shrink-0"
                  style={{ width: 40, height: 40, border: "1.5px solid #B89A5A" }}
                >
                  <Icon size={20} color="#B89A5A" strokeWidth={1.5} />
                </span>
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

/* ===== ForWho Section ===== */
const imgs = [img1.url, img2.url, img3.url, img4.url, img5.url];
const tags = [
  "Complete Beginners",
  "Spiritual Seekers",
  "Working Professionals",
  "Future Astrology Practitioners",
  "Existing Astrology Students",
  "Individuals Seeking Self-Understanding",
];

function ForWho() {
  return (
    <section className="bg-ivory  md:px-12 py-12 md:py-16">
      <div className="max-w-[900px] mx-auto flex justify-center items-end overflow-x-auto md:overflow-visible">
        {imgs.map((src, i) => {
          const rot = i === 0 ? -8 : i === 1 ? -4 : i === 3 ? 4 : i === 4 ? 8 : 0;
          const scale = i === 2 ? 1.1 : 1;
          const z = i === 2 ? 3 : i === 1 || i === 3 ? 2 : 1;
          return (
            <img
              key={i}
              src={src}
              alt=""
              className="w-[173px] md:w-[173px] aspect-[3/4] rounded-xl object-cover ml-4 md:ml-5 shrink-0"
              style={{
                transform: `rotate(${rot}deg) scale(${scale})`,
                zIndex: z,
                boxShadow: "0 10px 28px rgba(28,28,28,0.18)",
              }}
            />
          );
        })}
      </div>

      {/* <div className="text-center mt-12 max-w-[1200px] mx-auto">
        <div className="flex justify-center items-center gap-3">
          <span className="inline-block w-10 h-px bg-gold" />
          <span className="font-sans text-[12px] uppercase tracking-[0.22em] text-gold">BENEFITS FOR ALL</span>
          <span className="inline-block w-10 h-px bg-gold" />
        </div>
        <h2 className="font-display text-[40px] md:text-[72px] leading-[1.1] text-ink mt-6">
          This course builds a foundation <span className="italic text-gold">that sharpens every practice.</span>
        </h2>
        <div className="flex flex-wrap gap-x-4 gap-y-3 justify-center mt-10 max-w-[1100px] mx-auto">
          {tags.map((t) => (
            <span key={t} className="border border-stone rounded-full px-6 py-[10px] font-sans text-[14px] text-brown bg-linen/40">
              {t}
            </span>
          ))}
        </div>
      </div> */}
    </section>
  );
}

/* ===== POINT 6: Outcome 2 (action-reaction) ===== */
function Outcome2() {
  return (
    <section className="relative py-20 md:py-24 px-6 md:px-12 overflow-hidden" style={{ background: "var(--ivory)" }}>
      <div className="relative max-w-[1100px] mx-auto flex flex-col gap-8">
        {/* Placeholder collage image */}
        {/* <div
          className="w-full rounded-2xl overflow-hidden mb-10 flex items-center justify-center text-center"
          style={{
            height: 220,
            background: "linear-gradient(135deg, #E8D9C2, #D4B896)",
            border: "1px dashed rgba(184,149,106,0.5)",
          }}
        >
          <span className="font-display italic text-base md:text-lg px-4" style={{ color: "var(--brown)" }}>
            [Pending: Student/Teacher collage — 5 portraits, fanned layout, warm tones]
          </span>
        </div> */}

        <div className="text-center flex flex-col gap-8">
          <Eyebrow withLines>Outcome #2</Eyebrow>
          <h2 className="font-display mt-6 text-[34px] md:text-[52px] leading-[1.1]" style={{ color: "var(--ink)" }}>
            Understand the <span className="italic" style={{ color: "var(--gold)" }}>Action - Reaction Impact</span> of how your karma moves across lifecycles
          </h2>
          <p className="mt-6 max-w-[680px] mx-auto text-base leading-[1.7]" style={{ color: "var(--brown)" }}>
            Every significant turning point in your life — the losses, the breakthroughs, the relationships that changed you — is connected to your chart and also correlates events to planetary periods, and uncertainty
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {[
            ["Echoes of the past", "Understand how past choices echo into your present."],
            ["Cycles of time", "Map life events to planetary periods (dashas)."],
            ["Clarity under uncertainty", "Make decisions grounded in spiritual perspective."],
          ].map(([t, b]) => (
            <div key={t} className="rounded-2xl p-8 text-left border" style={{ background: "#EAE0CB", borderColor: "#EAE0CB" }}>
              <div style={{ color: "var(--gold)" }} className="text-xl bg-[#FBF7ED] rounded-full w-10 h-10 flex items-center justify-center">
                <img src={Star} alt="Star" className="" />
              </div>
              <h3 className="font-display text-[22px] mt-4" style={{ color: "#2C2A28" }}>{t}</h3>
              <p className="text-[13px] mt-2 leading-[1.6]" style={{ color: "#6E6963" }}>{b}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-5">
          <CTAJoin label="Reserve Your Seat Now" />
          <p className="text-[16px] leading-[16px] traking-[3px] font-regular " style={{ color: "rgba(61,55,48,0.5)" }}>₹15,000 + GST ONLY</p>
        </div>
      </div>
    </section>
  );
}

/* ===== POINT 7: Topics accordion ===== */
type TopicItem = { title: string; desc: string; chips: string[] };
const TOPICS: TopicItem[] = [
  {
    title: "01. Karma, Fate & Free Will",
    desc: "What Jyotish says about destiny, free will, and what can truly be changed.",
    chips: ["Understanding Karma", "Fate vs Free Will", "Karmic Bondages", "Life Patterns"],
  },
  {
    title: "02. How Planets Influence Your Life",
    desc: "Understand the logic behind planetary influences—not superstition, but the principles Jyotish is built on.",
    chips: ["The Nine Planets", "Planetary Logic", "Influences Decoded"],
  },
  {
    title: "03. Reading a Birth Chart",
    desc: "Learn to decode a horoscope step by step, beginning with your own chart.",
    chips: ["Chart Anatomy", "Step-by-Step Reading", "Your Own Chart"],
  },
  {
    title: "04. Zodiac Signs & Houses",
    desc: "Explore the structure of the birth chart, what each house represents, and how they work together.",
    chips: ["12 Zodiac Signs", "12 Houses", "Sign + House Interplay"],
  },
  {
    title: "05. The Science Behind Vedic Rituals",
    desc: "Understand what happens during a puja, mantra, or Vedic practice—and the principles behind these traditions.",
    chips: ["Puja Principles", "Mantra Science", "Daily Practice"],
  },
  {
    title: "06. Practical Remedies & Lifestyle Changes",
    desc: "Discover actionable remedies, including mantra, diet, daily routines, and gemstones, to help navigate challenging planetary influences.",
    chips: ["Mantra", "Diet & Routine", "Gemstones", "Dashas"],
  },
];

function Topics() {
  const [active, setActive] = useState(0);
  return (
    <section className="py-20 md:py-24 px-6 md:px-12" style={{ background: "var(--ink)" }}>
      <div className="max-w-[900px] mx-auto">
        <Eyebrow>—— Topics to be Covered</Eyebrow>
        <h2 className="font-display mt-4 text-[36px] md:text-[48px] leading-[1.1]" style={{ color: "var(--linen)" }}>
          15 live sessions. Every question answered in class.
        </h2>
        <ul className="mt-8">
          {TOPICS.map((t, i) => {
            const open = active === i;
            return (
              <li
                key={t.title}
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  background: open ? "rgba(184,149,106,0.06)" : "transparent",
                }}
              >
                <button
                  onClick={() => setActive(open ? -1 : i)}
                  className="w-full flex items-center gap-3 text-left py-5 px-2 min-h-[48px]"
                >
                  <span className="bg-[#00000033] w-[35px] h-[35px] rounded-full flex items-center justify-center" style={{ color: "#00000033" }}>
                    <img src={Star} alt="Star" className="" />
                  </span>
                  <span className="flex-1 text-[15px] md:text-[16px]" style={{ color: "#BA7530" }}>{t.title}</span>
                  <span className="text-xl" style={{ color: open ? "#7E7E7E" : "#FFFFFF" }}>{open ? "−" : "+"}</span>
                </button>
                <div className="overflow-hidden transition-all" style={{ maxHeight: open ? 400 : 0 }}>
                  <div className="px-2 pb-6 pl-8">
                    <p className="text-[14px] leading-[1.7]" style={{ color: "#F2EDE699" }}>{t.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {t.chips.map((c) => (
                        <span
                          key={c}
                          className="rounded-full px-3 py-1 text-[11px]"
                          style={{ border: "1px solid rgba(184,149,106,0.5)", color: "var(--gold)" }}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ===== POINT 8: Urgency strip ===== */
function UrgencyBar() {
  return (
    <div
      className="py-3.5 px-6 text-center text-sm font-medium text-[18px] leading-[32px]"
      style={{ background: "#F0A800", color: "#2D1F0E" }}
    >
      ⚡ Registrations for the current batch close on{" "}
      <span className="font-display italic text-[#0E0E1A]">15th July 2026</span> —{" "}
      <strong style={{ color: "#8B1A1A" }}>Only a few seats remain</strong>
    </div>
  );
}

/* ===== POINT 9: Meet the Teacher ===== */
function MeetTeacher() {
  const { open } = useLeadModal();
  const creds: { Icon: typeof GraduationCap; text: string }[] = [
    { Icon: GraduationCap, text: "Jyotish Acharya — Bharatiya Vidya Bhavan (2009)" },
    { Icon: BookOpen, text: "Advanced studies under Shri S. Ganesh, Sringeri Sharada Peetham lineage" },
    { Icon: Sparkles, text: "Currently in the parampara of Shri Achyutananda Das under Pandit Sanjay Rath & Sarbani Rath" },
  ];
  return (
    <>
      <UrgencyBar />
      <section className="py-20 md:py-[80px] px-6 md:px-12" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[1366px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="relative">
            <img src={baniAsset} alt="Bani Singh Chadha" loading="lazy" className="rounded-2xl w-full object-cover aspect-[4/5]" />
            {/* Mobile play overlay */}
            <button
              aria-label="Play intro"
              className="md:hidden absolute inset-0 flex items-end justify-end mb-10 mr-6"
              style={{ background: "rgba(0,0,0,0.0)" }}
            >
              <span
                className="rounded-full flex items-center justify-center"
                style={{ width: 64, height: 64, background: "#FFFFFF" }}
              >
                <Play size={26} color="#2C2A28" fill="#2C2A28" />
              </span>
            </button>
          </div>
          <div>
            <Eyebrow>— Meet the Teacher</Eyebrow>
            <h2 className="font-display italic mt-4 text-[44px] md:text-[52px]" style={{ color: "#BA7530" }}>Bani Singh Chadha</h2>
            <div className="flex flex-wrap gap-2.5 mt-5">
              {["15+ Years of Experience", "Ex - NDTV", "Cardiff University"].map((c) => (
                <span key={c} className="rounded-full px-4 py-1.5 text-[11px] uppercase bg-[#FFFDF9]" style={{ border: "1px solid var(--stone)", color: "#6E6963", letterSpacing: "0.1em" }}>{c}</span>
              ))}
            </div>
            <div className="mt-8 space-y-5 text-[15px] leading-[1.7]" style={{ color: "" }}>
              <p className="text-[#00000] tetxt-[16px] font-regular leading-[26px] ">For over seven years, Bani has taught Jyotish full-time to students worldwide through courses, workshops, and talks. She teaches Vedic Astrology as a spiritual tradition rooted in mantra, sadhana, and the timeless wisdom of the rishis.</p>
              {/* <p>Before Jyotish, she spent 13 years in broadcast journalism at NDTV — producing flagship programming and anchoring news. That background shapes how she teaches: rigorously, without filler, for people who ask hard questions.</p> */}
            </div>
            <div className="w-[328px] h-[2px] bg-[#E5E5E5] mt-10 mb-2  md:hidden"></div>
            <ul className="mt-8 flex flex-col gap-10">
              {creds.map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-[14px]" style={{ color: "var(--brown)" }}>
                  <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#F8F6F2] border-[#E2DDD5] border-[1px] shrink-0">
                    <Icon size={30} color="#B89A5A" strokeWidth={1.5} />
                  </div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <button onClick={open} className="btn-pill-dark mt-9 w-full md:w-auto">Learn From Bani Directly!</button>
          </div>
        </div>
      </section>
    </>
  );
}

/* ===== POINT 10: Pricing / Benefits card ===== */
const pricingItems = [
  { i: "🎁", t: "Free Birth Chart PDF", b: "Receive our Birth Chart Reading Introduction PDF instantly in your inbox." },
  { i: "🏆", t: "Certificate", b: "Digital certificate from Bani on completion of the course." },
  { i: "💬", t: "WhatsApp Community", b: "Get your doubts answered by Bani in a dedicated group." },
];

function PricingCard() {
  const { open } = useLeadModal();
  return (
    <section className="bg-ivory px-6 md:px-12 py-12 md:py-16">
      <div
        style={{ background: "#1F2D1B" }}
        className="max-w-[940px] mx-auto rounded-[20px] overflow-hidden grid md:grid-cols-[60%_40%]"
      >
        <div className="p-8 md:p-12">
          <span
            style={{ background: "#6B7C2E" }}
            className="inline-block rounded-full px-[14px] py-[5px] font-sans text-[11px] uppercase tracking-[0.13em] text-linen"
          >
            • TRIAL CLASS REGISTRATIONS CLOSE ON 15 JULY 2026
          </span>
          <div className="mt-5 flex items-baseline gap-2">
            <span className="font-display text-[56px] md:text-[72px] text-linen leading-none">₹15,000</span>
            <span className="font-sans text-[18px] text-linen/45">+ GST</span>
          </div>
          <p className="font-sans text-[13px] text-linen/40 mt-2">
            One-time payment · Lifetime access to recordings · Live cohort
          </p>
          <div className="mt-8 pt-7 border-t border-white/[0.08] grid md:grid-cols-3 gap-6">
            {pricingItems.map((it) => (
              <div key={it.t} className="flex flex-col gap-[6px]">
                <span className="font-sans text-[20px] text-gold">{it.i}</span>
                <span className="font-sans text-[14px] font-medium text-linen">{it.t}</span>
                <span className="font-sans text-[12px] text-linen/45 leading-[1.55]">{it.b}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-3 flex-wrap">
            <button onClick={open} className="cursor-pointer rounded-full bg-linen text-ink px-7 py-[13px] font-sans text-[14px] font-medium">
              Join Class Now
            </button>
            <button onClick={open} className="cursor-pointer rounded-full border-[1.5px] border-linen/30 text-linen px-7 py-[13px] font-sans text-[14px]">
              Request a Callback
            </button>
          </div>
        </div>
        <div className="relative p-3 md:p-4">
          <img
            src={poster.url}
            alt="Vedic Astrology with Bani — New Batch Begins 13 August 2026"
            className="w-full h-full object-cover"
            style={{ borderRadius: "16px", border: "1px solid #E2DDD5" }}
          />
          <button
            aria-label="Next"
            className="absolute top-1/2 -translate-y-1/2 right-1 md:right-2 w-8 h-8 rounded-full bg-ivory/90 text-ink flex items-center justify-center shadow-md"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

/* ===== POINT 11: Testimonials ===== */
type Testimonial = { name: string; role: string; img: number; quote?: string; video?: string };
const TESTIMONIALS: Testimonial[] = [
  { name: "Priya M.", role: "Student · Mumbai", img: 1, quote: "I finally understand patterns I've been repeating for years. The birth chart session alone changed the way I see myself." },
  { name: "Ananya R.", role: "Student · Delhi", img: 2, quote: "Bani's teaching transformed my understanding of life's deeper patterns.", video: testimonial1.url },
  { name: "Deepika S.", role: "Student · Bengaluru", img: 3, quote: "Bani teaches in a way no one else does. I've taken other astrology courses. This one landed differently." },
  { name: "Sunita B.", role: "Student · Chennai", img: 6, quote: "A truly transformative spiritual journey, beautifully guided.", video: testimonial2.url },
  { name: "Rohini K.", role: "Student · Pune", img: 4, quote: "The karma and lifecycles module was the most clarifying thing I've experienced in years of seeking." },
  { name: "Vandana P.", role: "Student · Kolkata", img: 8, quote: "Practical wisdom rooted in tradition — exactly what I was searching for.", video: testimonial3.url },
  { name: "Meera T.", role: "Student · Hyderabad", img: 5, quote: "As a tarot reader, this gave my practice an entirely new foundation. I recommend it to every reader I know." },
  { name: "Kavitha N.", role: "Student · Ahmedabad", img: 7, quote: "Practical, spiritual, and deeply personal. Bani's teaching style makes complex ideas feel like conversation." },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const play = () => {
    if (!t.video) return;
    setPlaying(true);
    setTimeout(() => videoRef.current?.play(), 30);
  };
  return (
    <div
      className="w-[280px] sm:w-[320px] aspect-[3/4] rounded-2xl relative overflow-hidden shrink-0"
      style={{ background: "linear-gradient(135deg, #2A2218 0%, #1C1C1C 100%)" }}
    >
      {/* Static thumbnail */}
      <img
        src={`https://i.pravatar.cc/600?img=${t.img}`}
        alt={t.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ display: playing ? "none" : "block" }}
      />
      {t.video && playing && (
        <video
          ref={videoRef}
          src={t.video}
          controls
          playsInline
          className="absolute inset-0 w-full h-full object-cover bg-black"
        />
      )}
      {/* Dark gradient overlay */}
      {!playing && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.75) 100%)" }}
        />
      )}
      {!playing && (
        <div className="absolute inset-0 p-5 flex flex-col justify-end">
          {t.quote && (
            <p className="font-display italic text-[14px] leading-[1.5] mb-4" style={{ color: "#fff" }}>
              "{t.quote}"
            </p>
          )}
          <div className="flex items-center gap-3">
            <img
              src={`https://i.pravatar.cc/96?img=${t.img}`}
              alt=""
              className="w-10 h-10 rounded-full"
              style={{ border: "2px solid rgba(255,255,255,0.4)" }}
            />
            <div className="flex-1">
              <div className="text-[12px] uppercase font-semibold" style={{ color: "#fff", letterSpacing: "0.1em" }}>{t.name}</div>
              <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.7)" }}>{t.role}</div>
            </div>
            {t.video && (
              <button
                onClick={play}
                aria-label="Watch story"
                className="flex items-center gap-2 text-[11px] uppercase"
                style={{ color: "#fff", letterSpacing: "0.1em" }}
              >
                <span
                  className="rounded-full flex items-center justify-center"
                  style={{ width: 32, height: 32, background: "rgba(0,0,0,0.7)" }}
                >
                  <Play size={14} color="#fff" fill="#fff" />
                </span>
              </button>
            )}
          </div>
          {t.video && (
            <div className="text-[10px] uppercase mt-2" style={{ color: "rgba(255,255,255,0.7)", letterSpacing: "0.14em" }}>
              ▶ Watch Story
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Testimonials() {
  const { open } = useLeadModal();
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, loop: false, align: "start" });
  return (
    <section className="py-20 md:py-24" style={{ background: "var(--ink)" }}>
      <div className="max-w-[1366px] mx-auto px-6 md:px-12 text-center">
        <Eyebrow withLines color="#B89A5A">Happy Students</Eyebrow>
        <h2 className="font-display mt-6 text-[38px] md:text-[56px] leading-[1.05]" style={{ color: "var(--linen)" }}>
          <span className="italic" style={{ color: "var(--gold)" }}>500+ Students</span> have changed their lives!
        </h2>
      </div>
      <div className="mt-12 overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5 pl-6 md:pl-12">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
      <div className="max-w-[1366px] mx-auto px-6 md:px-12 mt-8 flex items-center gap-3">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Previous"
          className="rounded-full flex items-center justify-center"
          style={{ width: 40, height: 40, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)" }}
        >
          <ChevronLeft size={18} color="#fff" />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Next"
          className="rounded-full flex items-center justify-center"
          style={{ width: 40, height: 40, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)" }}
        >
          <ChevronRight size={18} color="#fff" />
        </button>
        <button onClick={open} className="ml-auto btn-pill-light">Join 500+ Students — Enrol Now →</button>
      </div>
    </section>
  );
}

/* ===== POINT 13: FAQ ===== */
function FAQ() {
  const items = [
    ["Do I need prior astrology knowledge?", "No. The course is designed for complete beginners starting from zero."],
    ["Will recordings be available?", "Yes. All sessions are recorded and available on Google Drive for 3 months."],
    ["How are classes conducted?", "Live on Zoom, every Tuesday and Thursday, 12–1 PM IST."],
    ["What is the course fee?", "₹15,000 + GST i.e 17700 INR.\u00a0"],
    ["Is there a free trial?", "Yes! Register for the free trial class on 13 August 2026 — no payment required."],
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

/* ===== POINT 14: Final CTA ===== */
function FinalCTA() {
  return (
    <section className="px-6 md:px-12" style={{ background: "var(--ivory)", paddingTop: 60, paddingBottom: 60 }}>
      <div className="md:pt-[20px]" />
      <div className="text-center">
        <span className="inline-block rounded-full px-5 py-2 text-xs uppercase" style={{ background: "var(--forest)", color: "var(--linen)", letterSpacing: "0.12em" }}>Registration Ends on July 15, 2026</span>
        <div className="mt-6">
          <Eyebrow withLines color="#B89A5A">Join the Course Now</Eyebrow>
        </div>
        <h2 className="font-display mt-10 text-[34px] md:text-[52px] leading-[1.1] max-w-[900px] mx-auto" style={{ color: "var(--ink)" }}>
          Begin Your Journey to <span className="italic" style={{ color: "var(--gold)" }}>Vedic Astrology</span>{" "}
          and <span className="italic" style={{ color: "var(--gold)" }}>Transform into a Spiritually Guided Human</span>
        </h2>
      </div>
      <div className="mt-10 md:mt-[40px] max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
        {[
          ["Have a curious mind", "No prior knowledge of astrology required."],
          ["A phone or laptop for Classes", "Sessions are fully online on Zoom."],
          ["Register with Us", "Make a payment of ₹15,000 + GST to book slot."],
          ["Ask Anything in the WhatsApp Group", "Bani will directly answer your questions."],
        ].map(([t, s]) => (
          <div
            key={t}
            className="rounded-xl flex gap-4 items-start"
            style={{ background: "#fff", border: "1px solid #E8DDD0", padding: "24px 20px" }}
          >
            <div
              className="rounded-full mt-1 flex items-center justify-center text-[11px] shrink-0"
              style={{ width: 22, height: 22, border: "1.5px solid #B89A5A", color: "#B89A5A" }}
            >
              ✓
            </div>
            <div>
              <h3 className="font-display text-lg" style={{ color: "var(--ink)" }}>{t}</h3>
              <p className="text-[13px] mt-1" style={{ color: "var(--brown)", opacity: 0.65 }}>{s}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 md:mt-[40px] flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-center">
        <CTAJoin className="w-[248px] sm:w-auto justify-center" />
        <CTACallback className="w-[248px] sm:w-auto justify-center" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-5 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-3 mb-24 md:mb-0" style={{ background: "var(--ink)" }}>
      <span className="font-display italic text-xl" style={{ color: "var(--linen)" }}>Bani_Live</span>
      <span className="text-xs" style={{ color: "rgba(242,237,230,0.4)" }}>© 2026 Bani Singh Chadha · All rights reserved</span>
    </footer>
  );
}

function WhatsAppFAB() {
  return (
    <a href={WA_GENERAL} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-32 md:bottom-8 right-6 z-[200] w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-110" style={{ background: "#25D366", boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}>
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#fff"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.547-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" /></svg>
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
        <ForWho />
        <Outcome2 />
        <Topics />
        <MeetTeacher />
        <PricingCard />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
