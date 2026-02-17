import Animate from "./Animate";
import groomImg from "../assets/images/groom.jpg";
import brideImg from "../assets/images/bride.jpg";

// ── SVG: Atap Gonjong (ikon rumah gadang) ─────────────────────────────────────
const GonjongIcon = ({ className }) => (
  <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10 70 L60 10 L110 70 Z" fill="currentColor" opacity="0.85" />
    <path d="M90 45 Q115 20 118 8 Q112 22 94 42 Z" fill="currentColor" />
    <path d="M30 45 Q5 20 2 8 Q8 22 26 42 Z" fill="currentColor" />
    <line x1="10" y1="70" x2="110" y2="70" stroke="currentColor" strokeWidth="2" opacity="0.5" />
  </svg>
);

// ── SVG: Motif bunga rosetta ukiran Minang ─────────────────────────────────────
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
    <circle cx="30" cy="30" r="27" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.25" strokeDasharray="3 3" />
  </svg>
);

// ── SVG: Border songket (pola tenun) ───────────────────────────────────────────
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
export default function Hero({ groomName, brideName, date }) {
  return (
    <Animate>
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden" style={{ background: "linear-gradient(160deg, #1a0a00 0%, #2d0f0f 40%, #1a0a00 100%)" }}>
        {/* ── Dekorasi latar ─────────────────────────────────────────────── */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <GonjongIcon className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] max-w-xl text-yellow-900 opacity-10" />
          <GonjongIcon className="absolute top-4 left-4 w-20 text-yellow-700 opacity-20" />
          <GonjongIcon className="absolute top-4 right-4 w-20 text-yellow-700 opacity-20 scale-x-[-1]" />
          <MinangMotif className="absolute bottom-16 left-8 w-14 text-yellow-600 opacity-15" />
          <MinangMotif className="absolute bottom-16 right-8 w-14 text-yellow-600 opacity-15" />
          <MinangMotif className="absolute top-1/3 left-6 w-10 text-red-800 opacity-20" />
          <MinangMotif className="absolute top-1/3 right-6 w-10 text-red-800 opacity-20" />
          {[
            { top: "15%", left: "10%" },
            { top: "25%", left: "85%" },
            { top: "60%", left: "5%" },
            { top: "70%", left: "92%" },
          ].map((pos, i) => (
            <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-yellow-400" style={{ top: pos.top, left: pos.left, opacity: 0.25 }} />
          ))}
        </div>

        {/* Border songket atas */}
        <div className="absolute top-0 left-0 right-0">
          <SongketBorder />
        </div>

        {/* ── Konten utama ─────────────────────────────────────────────── */}
        <div className="relative z-10 flex flex-col items-center px-6 py-24 w-full max-w-4xl mx-auto">
          {/* Label */}
          <div className="mb-8 px-6 py-1.5 text-xs md:text-sm font-medium" style={{ color: "#C9A84C", border: "1px solid rgba(201,168,76,0.4)", background: "rgba(201,168,76,0.07)", letterSpacing: "0.3em", textTransform: "uppercase" }}>
            Undangan Pernikahan
          </div>

          <GonjongIcon className="w-14 text-yellow-600 mb-4 opacity-60" />

          {/* Foto pasangan */}
          <div className="flex gap-4 md:gap-12 mb-10 items-center">
            {/* Groom */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative" style={{ padding: "4px", background: "linear-gradient(135deg, #C9A84C, #8B1A1A, #C9A84C)", borderRadius: "50%" }}>
                <img src={groomImg} alt="Groom" className="w-28 h-28 md:w-44 md:h-44 object-cover rounded-full transition-transform duration-500 hover:scale-105 block" />
                <div className="absolute inset-0 rounded-full pointer-events-none" style={{ border: "2px dashed rgba(201,168,76,0.4)", margin: "-7px", borderRadius: "50%" }} />
              </div>
              <span className="text-xs tracking-widest uppercase mt-1" style={{ color: "#C9A84C", opacity: 0.75 }}>
                Marapulai
              </span>
            </div>

            {/* Simbol tengah */}
            <div className="flex flex-col items-center justify-center gap-1">
              <MinangMotif className="w-8 md:w-12 text-yellow-600 opacity-80" />
              <span className="text-xl md:text-3xl" style={{ color: "#C9A84C", lineHeight: 1 }}>
                ♦
              </span>
              <MinangMotif className="w-8 md:w-12 text-yellow-600 opacity-80" />
            </div>

            {/* Bride */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative" style={{ padding: "4px", background: "linear-gradient(135deg, #C9A84C, #8B1A1A, #C9A84C)", borderRadius: "50%" }}>
                <img src={brideImg} alt="Bride" className="w-28 h-28 md:w-44 md:h-44 object-cover rounded-full transition-transform duration-500 hover:scale-105 block" />
                <div className="absolute inset-0 rounded-full pointer-events-none" style={{ border: "2px dashed rgba(201,168,76,0.4)", margin: "-7px", borderRadius: "50%" }} />
              </div>
              <span className="text-xs tracking-widest uppercase mt-1" style={{ color: "#C9A84C", opacity: 0.75 }}>
                Anak Daro
              </span>
            </div>
          </div>

          {/* Divider atas nama */}
          <div className="flex items-center gap-3 mb-6 w-full max-w-xs md:max-w-md">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
            <MinangMotif className="w-5 text-yellow-500" />
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
          </div>

          {/* Nama */}
          <h1 className="font-serif mb-2">
            <span className="block text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-tight" style={{ color: "#f5e6c0" }}>
              {groomName}
            </span>
            <span className="block text-base md:text-lg my-2" style={{ color: "#C9A84C", opacity: 0.85, letterSpacing: "0.5em", textTransform: "uppercase" }}>
              &amp;
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-tight" style={{ color: "#f5e6c0" }}>
              {brideName}
            </span>
          </h1>

          {/* Divider bawah nama */}
          <div className="flex items-center gap-3 mt-6 mb-8 w-full max-w-xs md:max-w-md">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
            <MinangMotif className="w-5 text-yellow-500" />
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
          </div>

          {/* Tanggal */}
          <p className="text-base md:text-xl font-medium mb-4" style={{ color: "#C9A84C", letterSpacing: "0.25em", textTransform: "uppercase" }}>
            {date}
          </p>

          {/* Pepatah Minang */}
          <p className="text-sm md:text-base italic max-w-sm md:max-w-md leading-relaxed" style={{ color: "rgba(245,230,192,0.5)" }}>
            "Duduak surang basampik-sampik, duduak basamo balapang-lapang"
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
