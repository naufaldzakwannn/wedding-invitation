import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Animate from "./Animate";

// ── SVG: Atap Gonjong ─────────────────────────────────────────────────────────
const GonjongIcon = ({ className }) => (
  <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10 70 L60 10 L110 70 Z" fill="currentColor" opacity="0.85" />
    <path d="M90 45 Q115 20 118 8 Q112 22 94 42 Z" fill="currentColor" />
    <path d="M30 45 Q5 20 2 8 Q8 22 26 42 Z" fill="currentColor" />
    <line x1="10" y1="70" x2="110" y2="70" stroke="currentColor" strokeWidth="2" opacity="0.5" />
  </svg>
);

// ── SVG: Motif bunga rosetta ukiran Minang ────────────────────────────────────
const MinangMotif = ({ className }) => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="30" cy="30" r="5" fill="currentColor" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <ellipse
        key={i}
        cx={30 + 13 * Math.cos((angle * Math.PI) / 180)}
        cy={30 + 13 * Math.sin((angle * Math.PI) / 180)}
        rx="5"
        ry="8"
        transform={`rotate(${angle} ${30 + 13 * Math.cos((angle * Math.PI) / 180)} ${30 + 13 * Math.sin((angle * Math.PI) / 180)})`}
        fill="currentColor"
        opacity="0.7"
      />
    ))}
    <circle cx="30" cy="30" r="22" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
  </svg>
);

// ── SVG: Border songket ───────────────────────────────────────────────────────
const SongketBorder = () => (
  <svg viewBox="0 0 400 24" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-5">
    <rect width="400" height="24" fill="#1a0a00" />
    {Array.from({ length: 40 }).map((_, i) => (
      <g key={i}>
        <rect x={i * 10} y="4" width="5" height="5" fill="#C9A84C" opacity="0.9" />
        <rect x={i * 10 + 5} y="4" width="5" height="5" fill="#8B1A1A" opacity="0.9" />
        <rect x={i * 10 + 2} y="13" width="5" height="5" fill="#C9A84C" opacity="0.6" />
      </g>
    ))}
    <line x1="0" y1="2" x2="400" y2="2" stroke="#C9A84C" strokeWidth="1" />
    <line x1="0" y1="22" x2="400" y2="22" stroke="#C9A84C" strokeWidth="1" />
  </svg>
);

// ── Kartu Waktu ───────────────────────────────────────────────────────────────
const TimeCard = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <GonjongIcon className="w-10 text-yellow-700 opacity-50 mb-1" />
    <div
      className="relative flex flex-col items-center justify-center w-full aspect-square rounded-sm shadow-2xl overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #2a0d0d 0%, #1a0a00 100%)",
        border: "1px solid rgba(201,168,76,0.35)",
        minWidth: "72px",
      }}
    >
      <MinangMotif className="absolute inset-0 m-auto w-16 text-yellow-900 opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "rgba(201,168,76,0.5)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "rgba(201,168,76,0.5)" }} />
      <span className="text-3xl md:text-5xl font-bold font-serif relative z-10 tabular-nums" style={{ color: "#C9A84C" }}>
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <p className="mt-3 text-xs md:text-sm tracking-[0.25em] uppercase font-medium" style={{ color: "rgba(201,168,76,0.75)" }}>
      {label}
    </p>
  </div>
);

// ── Komponen Utama ─────────────────────────────────────────────────────────────
export default function Countdown({ date }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    const tick = () => {
      const diff = dayjs(date).diff(dayjs(), "second");

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsOver(true);
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (24 * 60 * 60)),
        hours: Math.floor((diff % (24 * 60 * 60)) / (60 * 60)),
        minutes: Math.floor((diff % (60 * 60)) / 60),
        seconds: diff % 60,
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [date]);

  return (
    <Animate>
      <section className="relative py-20 text-center overflow-hidden" style={{ background: "linear-gradient(160deg, #1a0a00 0%, #2d0f0f 50%, #1a0a00 100%)" }}>
        {/* ── Dekorasi latar ─────────────────────────────────────────────── */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <GonjongIcon className="absolute top-0 left-1/2 -translate-x-1/2 w-[50vw] max-w-lg text-yellow-900 opacity-10" />
          <MinangMotif className="absolute top-6 left-6 w-12 text-yellow-700 opacity-15" />
          <MinangMotif className="absolute top-6 right-6 w-12 text-yellow-700 opacity-15" />
          <MinangMotif className="absolute bottom-6 left-10 w-10 text-red-900 opacity-15" />
          <MinangMotif className="absolute bottom-6 right-10 w-10 text-red-900 opacity-15" />
        </div>

        {/* Border songket atas */}
        <div className="absolute top-0 left-0 right-0">
          <SongketBorder />
        </div>

        {/* ── Konten utama ─────────────────────────────────────────────── */}
        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          {/* Judul */}
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-2 tracking-wide" style={{ color: "#f5e6c0" }}>
            Hitung Mundur
          </h2>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5 max-w-xs mx-auto">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
            <MinangMotif className="w-5 text-yellow-500" />
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
          </div>

          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-12" style={{ color: "rgba(201,168,76,0.65)" }}>
            Menuju Hari Perkawinan
          </p>

          {/* Kartu Waktu atau pesan selesai */}
          {isOver ? (
            <p className="text-xl md:text-3xl font-serif italic" style={{ color: "#C9A84C" }}>
              ✦ Semoga bahagia selamanya ✦
            </p>
          ) : (
            <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-sm md:max-w-xl mx-auto">
              <TimeCard value={timeLeft.days} label="Hari" />
              <TimeCard value={timeLeft.hours} label="Jam" />
              <TimeCard value={timeLeft.minutes} label="Menit" />
              <TimeCard value={timeLeft.seconds} label="Detik" />
            </div>
          )}

          {/* Pepatah */}
          <p className="mt-12 text-sm md:text-base italic" style={{ color: "rgba(245,230,192,0.45)" }}>
            "Nan elok dek awak, katuju dek urang"
          </p>
        </div>

        {/* Border songket bawah */}
        <div className="absolute bottom-0 left-0 right-0 rotate-180">
          <SongketBorder />
        </div>
      </section>
    </Animate>
  );
}
