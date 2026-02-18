import { useState } from "react";
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

// ── SVG: Ikon Hadiah ──────────────────────────────────────────────────────────
const GiftIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect x="8" y="14" width="24" height="22" stroke="#C9A84C" strokeWidth="2" fill="none" />
    <rect x="6" y="10" width="28" height="4" fill="#C9A84C" opacity="0.8" />
    <path d="M20 10 L20 36" stroke="#C9A84C" strokeWidth="2" />
    <path d="M8 14 L32 14" stroke="#C9A84C" strokeWidth="2" />
    <circle cx="15" cy="7" r="3" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
    <circle cx="25" cy="7" r="3" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
    <path d="M15 7 Q20 3 25 7" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
  </svg>
);

// ── SVG: Ikon Copy ────────────────────────────────────────────────────────────
const CopyIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
    <rect x="2" y="2" width="11" height="11" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <rect x="7" y="7" width="11" height="11" rx="1" fill="currentColor" opacity="0.3" />
  </svg>
);

// ── Komponen Utama ─────────────────────────────────────────────────────────────
export default function Gift() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-20 text-center overflow-hidden" style={{ background: "linear-gradient(160deg, #1a0a00 0%, #2d0f0f 50%, #1a0a00 100%)" }}>
      {/* ── Dekorasi latar ───────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <GonjongIcon className="absolute top-0 left-1/2 -translate-x-1/2 w-[55vw] max-w-xl text-yellow-900 opacity-10" />
        <MinangMotif className="absolute top-8 left-8 w-12 text-yellow-700 opacity-15" />
        <MinangMotif className="absolute top-8 right-8 w-12 text-yellow-700 opacity-15" />
        <MinangMotif className="absolute bottom-8 left-12 w-10 text-red-900 opacity-15" />
        <MinangMotif className="absolute bottom-8 right-12 w-10 text-red-900 opacity-15" />
      </div>

      {/* Border songket atas */}
      <div className="absolute top-0 left-0 right-0">
        <SongketBorder />
      </div>

      <Animate>
        <div className="relative z-10 px-6 max-w-lg mx-auto">
          {/* Judul */}
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-3 tracking-wide" style={{ color: "#f5e6c0" }}>
            Kirim Hadiah
          </h2>

          {/* Divider judul */}
          <div className="flex items-center gap-3 my-5 max-w-xs mx-auto">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
            <MinangMotif className="w-5 text-yellow-500" />
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
          </div>

          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-12" style={{ color: "rgba(201,168,76,0.65)" }}>
            Doa Restu Anda adalah hadiah terindah
          </p>

          {/* Kartu Rekening */}
          <div
            className="relative p-8 md:p-10 transition-transform duration-300 hover:-translate-y-2"
            style={{
              background: "linear-gradient(160deg, #2a0d0d 0%, #1a0a00 100%)",
              border: "1px solid rgba(201,168,76,0.35)",
            }}
          >
            {/* Gonjong pojok */}
            <GonjongIcon className="absolute top-0 left-3 w-8 text-yellow-700 opacity-30" />
            <GonjongIcon className="absolute top-0 right-3 w-8 text-yellow-700 opacity-30 scale-x-[-1]" />

            {/* Garis emas atas & bawah */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }} />
            <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }} />

            {/* Motif watermark */}
            <MinangMotif className="absolute bottom-8 right-8 opacity-5 w-24 text-yellow-500 pointer-events-none" />

            {/* Ikon Hadiah */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-6" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.4)" }}>
              <GiftIcon />
            </div>

            {/* Judul Kartu */}
            <h3 className="text-xl md:text-2xl font-serif font-bold mb-6 tracking-wide" style={{ color: "#f5e6c0" }}>
              Transfer Bank
            </h3>

            {/* Divider */}
            <div className="flex items-center gap-2 mb-6 w-full max-w-[200px] mx-auto">
              <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
              <div className="w-1 h-1 rounded-full" style={{ background: "#C9A84C" }} />
              <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
            </div>

            {/* Info Rekening */}
            <div className="space-y-3 mb-6">
              <p className="text-sm tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.7)" }}>
                Bank BCA
              </p>
              <p className="text-2xl md:text-3xl font-bold tracking-wider font-mono" style={{ color: "#C9A84C" }}>
                1234567890
              </p>
              <p className="text-sm italic" style={{ color: "rgba(245,230,192,0.6)" }}>
                a.n. Ahmad Fauzi
              </p>
            </div>

            {/* Tombol Copy */}
            <button
              onClick={() => copyToClipboard("1234567890")}
              className="w-full py-3 px-6 text-sm tracking-widest uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-3"
              style={{
                background: copied ? "rgba(76, 175, 80, 0.2)" : "rgba(201,168,76,0.1)",
                border: `1px solid ${copied ? "rgba(76, 175, 80, 0.5)" : "rgba(201,168,76,0.4)"}`,
                color: copied ? "#4CAF50" : "#C9A84C",
              }}
              onMouseEnter={(e) => {
                if (!copied) {
                  e.currentTarget.style.background = "rgba(201,168,76,0.18)";
                }
              }}
              onMouseLeave={(e) => {
                if (!copied) {
                  e.currentTarget.style.background = "rgba(201,168,76,0.1)";
                }
              }}
            >
              {copied ? (
                <>
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Tersalin!
                </>
              ) : (
                <>
                  <CopyIcon />
                  Salin Nomor Rekening
                </>
              )}
            </button>
          </div>

          {/* Divider bawah */}
          <div className="flex items-center gap-3 mt-12 max-w-xs mx-auto">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
            <MinangMotif className="w-5 text-yellow-500" />
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
          </div>

          {/* Pepatah */}
          <p className="mt-6 text-sm md:text-base italic" style={{ color: "rgba(245,230,192,0.45)" }}>
            "Baik pakaian dek kain, baik budi dek laku"
          </p>
        </div>
      </Animate>

      {/* Border songket bawah */}
      <div className="absolute bottom-0 left-0 right-0 rotate-180">
        <SongketBorder />
      </div>
    </section>
  );
}
