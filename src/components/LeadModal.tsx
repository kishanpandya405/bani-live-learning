import { createContext, useContext, useState, type ReactNode } from "react";

type Ctx = { open: () => void; close: () => void; isOpen: boolean };
const ModalCtx = createContext<Ctx>({ open: () => {}, close: () => {}, isOpen: false });

export const useLeadModal = () => useContext(ModalCtx);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const close = () => {
    setIsOpen(false);
    setTimeout(() => { setSubmitted(false); setError(""); setName(""); setMobile(""); setCity(""); }, 200);
  };
  const open = () => setIsOpen(true);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !city.trim()) { setError("Please fill all fields"); return; }
    if (!/^\d{10}$/.test(mobile.replace(/\D/g, "").slice(-10))) { setError("Enter a valid 10-digit mobile"); return; }
    setError("");
    const url = `https://wa.me/919289241133?text=${encodeURIComponent(`Hi, I'd like to join the Vedic Astrology course. Name: ${name}, City: ${city}`)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <ModalCtx.Provider value={{ open, close, isOpen }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4" style={{ background: "rgba(28,28,28,0.7)", backdropFilter: "blur(4px)" }} onClick={close}>
          <div className="relative w-full max-w-[460px] rounded-[20px] p-10" style={{ background: "var(--ivory)" }} onClick={(e) => e.stopPropagation()}>
            <button onClick={close} className="absolute top-4 right-5 text-2xl" style={{ color: "var(--brown)" }}>✕</button>
            {!submitted ? (
              <>
                <h3 className="font-display text-[32px] leading-tight" style={{ color: "var(--ink)" }}>Reserve Your Seat</h3>
                <p className="text-sm mt-2" style={{ color: "var(--brown)" }}>Batch begins 13 August 2026 · Only a few seats remain.</p>
                <form onSubmit={submit} className="mt-6 space-y-3">
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border bg-white text-sm outline-none focus:border-[var(--gold)]" style={{ borderColor: "var(--stone)" }} />
                  <input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="+91 XXXXX XXXXX" type="tel" className="w-full px-4 py-3 rounded-lg border bg-white text-sm outline-none focus:border-[var(--gold)]" style={{ borderColor: "var(--stone)" }} />
                  <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City / Location" className="w-full px-4 py-3 rounded-lg border bg-white text-sm outline-none focus:border-[var(--gold)]" style={{ borderColor: "var(--stone)" }} />
                  {error && <p className="text-xs" style={{ color: "#a33" }}>{error}</p>}
                  <button type="submit" className="w-full rounded-full py-3.5 text-sm font-medium" style={{ background: "var(--ink)", color: "var(--ivory)" }}>Join Class Now →</button>
                </form>
                <a href="https://wa.me/919289241133?text=Hi%2C%20I%27d%20like%20to%20register%20for%20the%20free%20trial%20class%20on%2013%20August%202026." target="_blank" rel="noreferrer" className="block text-center text-[13px] mt-4" style={{ color: "var(--gold)" }}>✦ Register for Free Trial →</a>
              </>
            ) : (
              <div className="text-center py-6">
                <h3 className="font-display text-[28px]" style={{ color: "var(--ink)" }}>Thank you!</h3>
                <p className="mt-3 text-sm" style={{ color: "var(--gold)" }}>We've received your details! Bani's team will reach out shortly.</p>
                <button onClick={close} className="mt-6 btn-pill-dark">Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </ModalCtx.Provider>
  );
}
