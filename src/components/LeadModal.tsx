import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

type Ctx = { open: () => void; close: () => void; isOpen: boolean };
const ModalCtx = createContext<Ctx>({ open: () => { }, close: () => { }, isOpen: false });

export const useLeadModal = () => useContext(ModalCtx);

const ZOHO_SRC =
  "https://forms.zohopublic.in/banisingh/form/RegistrationforLevel1IntroductiontoJyotish10thJanu/formperma/cn614aXcu4eIl_0DSPw-ha0gyKajKF1gzTavmaDSPIY";

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  // Lock scroll + Escape + focus
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    // animate-in
    const t = setTimeout(() => setMounted(true), 10);
    setTimeout(() => closeBtnRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
      setMounted(false);
    };
  }, [isOpen]);

  return (
    <ModalCtx.Provider value={{ open, close, isOpen }}>
      {children}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Course Registration"
          className="fixed inset-0 z-[300] flex items-center justify-center p-0 sm:p-6"
          style={{
            background: "rgba(28,28,28,0.7)",
            backdropFilter: "blur(4px)",
            opacity: mounted ? 1 : 0,
            transition: "opacity 200ms ease-out",
          }}
          onClick={close}
        >
          <div
            className="relative w-full max-w-[760px] rounded-2xl bg-white shadow-2xl flex flex-col"
            style={{
              height: "calc(100dvh - 24px)",
              maxHeight: "calc(100dvh - 24px)",
              transform: mounted ? "scale(1)" : "scale(0.96)",
              opacity: mounted ? 1 : 0,
              transition: "transform 220ms ease-out, opacity 220ms ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeBtnRef}
              onClick={close}
              aria-label="Close registration form"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center text-xl bg-white shadow-md hover:bg-gray-100 transition-colors"
              style={{ color: "var(--brown, #3D3730)" }}
            >
              ✕
            </button>
            <div className="flex-1 p-0 overflow-hidden rounded-2xl" style={{ WebkitOverflowScrolling: "touch" }}>
              <iframe
                aria-label="Registration for Level 1 - Introduction to Jyotish - 13th August 2026"
                frameBorder={0}
                style={{ height: "100%", minHeight: "500px", width: "100%", border: "none" }}
                src={ZOHO_SRC}
              />
            </div>
          </div>
        </div>
      )}
    </ModalCtx.Provider>
  );
}
