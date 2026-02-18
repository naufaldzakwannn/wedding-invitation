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

// ── SVG: Ikon WhatsApp ────────────────────────────────────────────────────────
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// ── Komponen Utama ─────────────────────────────────────────────────────────────
export default function RSVP() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsApp = () => {
    if (!name.trim()) {
      alert("Mohon masukkan nama Anda terlebih dahulu.");
      return;
    }
    const text = `Assalamu'alaikum,\n\nSaya ${name}.\n\n${message || "Mengkonfirmasi kehadiran di acara pernikahan Anda."}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, "_blank");
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
        <div className="relative z-10 px-6 max-w-2xl mx-auto">
          {/* Judul */}
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-3 tracking-wide" style={{ color: "#f5e6c0" }}>
            Konfirmasi Kehadiran
          </h2>

          {/* Divider judul */}
          <div className="flex items-center gap-3 my-5 max-w-xs mx-auto">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
            <MinangMotif className="w-5 text-yellow-500" />
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
          </div>

          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-12" style={{ color: "rgba(201,168,76,0.65)" }}>
            Mohon sampaikan konfirmasi kehadiran Anda
          </p>

          {/* Form */}
          <div
            className="relative p-8 md:p-10"
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
            <MinangMotif className="absolute bottom-10 right-10 opacity-5 w-24 text-yellow-500 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Input Nama */}
              <div>
                <label htmlFor="name" className="block text-left text-sm tracking-wider uppercase mb-2 font-medium" style={{ color: "#C9A84C" }}>
                  Nama Lengkap
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Masukkan nama Anda"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-4 text-sm transition-all duration-300"
                  style={{
                    background: "rgba(201,168,76,0.05)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "#f5e6c0",
                    outline: "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.border = "1px solid rgba(201,168,76,0.6)";
                    e.target.style.background = "rgba(201,168,76,0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = "1px solid rgba(201,168,76,0.3)";
                    e.target.style.background = "rgba(201,168,76,0.05)";
                  }}
                />
              </div>

              {/* Textarea Ucapan */}
              <div>
                <label htmlFor="message" className="block text-left text-sm tracking-wider uppercase mb-2 font-medium" style={{ color: "#C9A84C" }}>
                  Ucapan & Doa
                </label>
                <textarea
                  id="message"
                  placeholder="Tulis ucapan dan doa untuk mempelai..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full p-4 text-sm resize-none transition-all duration-300"
                  style={{
                    background: "rgba(201,168,76,0.05)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "#f5e6c0",
                    outline: "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.border = "1px solid rgba(201,168,76,0.6)";
                    e.target.style.background = "rgba(201,168,76,0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = "1px solid rgba(201,168,76,0.3)";
                    e.target.style.background = "rgba(201,168,76,0.05)";
                  }}
                />
              </div>

              {/* Tombol Kirim */}
              <button
                onClick={sendWhatsApp}
                className="w-full py-4 px-6 text-sm tracking-widest uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-3"
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #8B1A1A, #C9A84C)",
                  color: "#1a0a00",
                  border: "1px solid rgba(201,168,76,0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(201,168,76,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <WhatsAppIcon />
                Kirim via WhatsApp
              </button>
            </div>
          </div>

          {/* Divider bawah */}
          <div className="flex items-center gap-3 mt-12 max-w-xs mx-auto">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
            <MinangMotif className="w-5 text-yellow-500" />
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
          </div>

          {/* Pepatah */}
          <p className="mt-6 text-sm md:text-base italic" style={{ color: "rgba(245,230,192,0.45)" }}>
            "Kehadiran Anda adalah berkah untuk kami"
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
