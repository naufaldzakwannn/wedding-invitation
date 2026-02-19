import { useState, useEffect } from "react";

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
  <svg viewBox="0 0 400 24" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-6">
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

// ── Komponen Utama ─────────────────────────────────────────────────────────────
export default function InvitationCover({ onOpen }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animasi setelah mount
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-center items-center text-center overflow-hidden" style={{ background: "linear-gradient(160deg, #0d0404 0%, #1a0a00 50%, #0d0404 100%)" }}>
      {/* ── Dekorasi latar ───────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {/* Gonjong besar tengah */}
        <GonjongIcon
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] max-w-2xl text-yellow-900 opacity-8 transition-all duration-[2000ms]"
          style={{
            transform: animate ? "translateX(-50%) scale(1)" : "translateX(-50%) scale(0.8)",
            opacity: animate ? 0.08 : 0,
          }}
        />

        {/* Motif pojok dengan animasi pulse */}
        <MinangMotif className="absolute top-8 left-8 w-16 text-yellow-700 opacity-15 animate-pulse" style={{ animationDelay: "0s" }} />
        <MinangMotif className="absolute top-8 right-8 w-16 text-yellow-700 opacity-15 animate-pulse" style={{ animationDelay: "0.5s" }} />
        <MinangMotif className="absolute bottom-8 left-8 w-14 text-red-900 opacity-15 animate-pulse" style={{ animationDelay: "1s" }} />
        <MinangMotif className="absolute bottom-8 right-8 w-14 text-red-900 opacity-15 animate-pulse" style={{ animationDelay: "1.5s" }} />

        {/* Gonjong kecil floating */}
        <GonjongIcon className="absolute top-20 left-20 w-12 text-yellow-600 opacity-20 animate-bounce" style={{ animationDuration: "3s", animationDelay: "0.3s" }} />
        <GonjongIcon className="absolute top-32 right-24 w-10 text-yellow-600 opacity-20 animate-bounce scale-x-[-1]" style={{ animationDuration: "3.5s", animationDelay: "0.7s" }} />
        <GonjongIcon className="absolute bottom-24 left-1/4 w-10 text-red-800 opacity-20 animate-bounce" style={{ animationDuration: "3.2s", animationDelay: "1s" }} />
        <GonjongIcon className="absolute bottom-32 right-1/3 w-12 text-red-800 opacity-20 animate-bounce scale-x-[-1]" style={{ animationDuration: "3.8s", animationDelay: "0.5s" }} />

        {/* Blur orbs untuk depth */}
        <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full opacity-20 blur-3xl animate-pulse" style={{ background: "radial-gradient(circle, #C9A84C, transparent)", animationDuration: "4s" }} />
        <div className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full opacity-20 blur-3xl animate-pulse" style={{ background: "radial-gradient(circle, #8B1A1A, transparent)", animationDuration: "5s", animationDelay: "1s" }} />
      </div>

      {/* Border songket atas */}
      <div className="absolute top-0 left-0 right-0">
        <SongketBorder />
      </div>

      {/* Border songket bawah */}
      <div className="absolute bottom-0 left-0 right-0 rotate-180">
        <SongketBorder />
      </div>

      {/* ── Konten utama ─────────────────────────────────────────────────── */}
      <div className="relative z-10 px-6 max-w-2xl mx-auto">
        {/* Label atas dengan animasi slide down */}
        <div
          className="mb-8 transition-all duration-1000 ease-out"
          style={{
            transform: animate ? "translateY(0)" : "translateY(-30px)",
            opacity: animate ? 1 : 0,
          }}
        >
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase mb-2" style={{ color: "rgba(201,168,76,0.7)" }}>
            Undangan Pernikahan
          </p>
          <MinangMotif className="w-10 mx-auto text-yellow-600 opacity-60" />
        </div>

        {/* Bismillah (opsional, sesuai keyakinan) */}
        <p
          className="text-sm md:text-base font-arabic mb-8 transition-all duration-1000 ease-out delay-200"
          style={{
            color: "rgba(245,230,192,0.8)",
            transform: animate ? "translateY(0)" : "translateY(-20px)",
            opacity: animate ? 1 : 0,
          }}
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        {/* Nama pasangan dengan animasi scale */}
        <div
          className="mb-10 transition-all duration-1200 ease-out delay-300"
          style={{
            transform: animate ? "scale(1)" : "scale(0.9)",
            opacity: animate ? 1 : 0,
          }}
        >
          <h1 className="font-serif mb-3">
            <span className="block text-5xl md:text-7xl font-bold tracking-wide leading-tight mb-2" style={{ color: "#f5e6c0" }}>
              Ahmad Fauzi
            </span>

            {/* Simbol tengah dengan pulse */}
            <div className="flex items-center justify-center gap-3 my-4">
              <div className="flex-1 h-px max-w-[80px]" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
              <MinangMotif className="w-8 text-yellow-500 animate-pulse" />
              <div className="flex-1 h-px max-w-[80px]" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
            </div>

            <span className="block text-5xl md:text-7xl font-bold tracking-wide leading-tight" style={{ color: "#f5e6c0" }}>
              Aisyah Putri
            </span>
          </h1>
        </div>

        {/* Tanggal dengan animasi fade */}
        <p
          className="text-base md:text-lg tracking-[0.3em] uppercase mb-10 transition-all duration-1000 ease-out delay-500"
          style={{
            color: "rgba(201,168,76,0.75)",
            transform: animate ? "translateY(0)" : "translateY(20px)",
            opacity: animate ? 1 : 0,
          }}
        >
          12 • 08 • 2026
        </p>

        {/* Tombol Buka dengan hover effect */}
        <button
          onClick={onOpen}
          className="group relative px-10 py-4 text-sm tracking-[0.3em] uppercase font-semibold transition-all duration-500 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #C9A84C, #8B1A1A, #C9A84C)",
            color: "#1a0a00",
            border: "1px solid rgba(201,168,76,0.6)",
            transform: animate ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
            opacity: animate ? 1 : 0,
            transitionDelay: "700ms",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(201,168,76,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* Shimmer effect */}
          <span
            className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              animation: "shimmer 2s infinite",
            }}
          />

          <span className="relative z-10 flex items-center justify-center gap-3">
            <MinangMotif className="w-4 opacity-70" />
            Buka Undangan
            <MinangMotif className="w-4 opacity-70" />
          </span>
        </button>

        {/* Pepatah bawah */}
        <p
          className="mt-10 text-xs md:text-sm italic transition-all duration-1000 ease-out delay-900"
          style={{
            color: "rgba(245,230,192,0.4)",
            transform: animate ? "translateY(0)" : "translateY(20px)",
            opacity: animate ? 1 : 0,
          }}
        >
          "Kok elok baiyo, kok rancak baiak"
        </p>
      </div>

      {/* CSS untuk shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @font-face {
          font-family: 'arabic';
          /* Anda bisa tambahkan font Arabic jika ada */
        }
        .font-arabic {
          font-family: 'Times New Roman', serif;
        }
      `}</style>
    </div>
  );
}
