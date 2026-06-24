import { useEffect, useState } from "react";

export function Countdown() {
  const target = new Date("2026-07-15T00:00:00+05:30").getTime();
  const [t, setT] = useState(() => target - Date.now());
  useEffect(() => {
    const i = setInterval(() => setT(target - Date.now()), 1000);
    return () => clearInterval(i);
  }, [target]);
  if (t <= 0) return <span className="text-sm font-medium" style={{ color: "var(--linen)" }}>Registrations Closed</span>;
  const d = Math.floor(t / 86400000);
  const h = Math.floor((t / 3600000) % 24);
  const m = Math.floor((t / 60000) % 60);
  const s = Math.floor((t / 1000) % 60);
  const Box = ({ v, l }: { v: number; l: string }) => (
    <div className="px-2.5 py-1.5 rounded-md text-center min-w-[44px]" style={{ background: "rgba(0,0,0,0.25)" }}>
      <div className="text-lg font-bold leading-none" style={{ color: "var(--linen)" }}>{String(v).padStart(2, "0")}</div>
      <div className="text-[9px] uppercase mt-0.5" style={{ color: "rgba(242,237,230,0.6)", letterSpacing: "0.1em" }}>{l}</div>
    </div>
  );
  return (
    <div className="flex gap-2">
      <Box v={d} l="Days" /><Box v={h} l="Hrs" /><Box v={m} l="Min" /><Box v={s} l="Sec" />
    </div>
  );
}
