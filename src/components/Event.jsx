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

// ── SVG: Ikon Cincin (Akad) ───────────────────────────────────────────────────
const RingIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <circle cx="20" cy="20" r="14" stroke="#C9A84C" strokeWidth="3" fill="none" />
    <circle cx="20" cy="20" r="8" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.5" />
    <circle cx="20" cy="8" r="3" fill="#C9A84C" />
    <path d="M17 8 Q20 4 23 8" stroke="#C9A84C" strokeWidth="1" fill="none" />
  </svg>
);

// ── SVG: Ikon Resepsi (Pesta) ─────────────────────────────────────────────────
const FeastIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <path d="M20 5 L22 14 L31 14 L24 20 L27 29 L20 23 L13 29 L16 20 L9 14 L18 14 Z" fill="#C9A84C" opacity="0.9" />
    <circle cx="20" cy="20" r="17" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.3" />
  </svg>
);

// ── Kartu Acara ───────────────────────────────────────────────────────────────
const EventCard = ({ icon, title, date, time, location, mapsUrl }) => (
  <div
    className="relative flex flex-col items-center p-8 transition-transform duration-300 hover:-translate-y-2 group"
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
    <MinangMotif className="absolute bottom-10 opacity-5 w-28 text-yellow-500 pointer-events-none" />

    {/* Ikon */}
    <div className="flex items-center justify-center w-14 h-14 rounded-full mb-5" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.4)" }}>
      {icon}
    </div>

    {/* Judul acara */}
    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-5 tracking-wide" style={{ color: "#f5e6c0" }}>
      {title}
    </h3>

    {/* Divider */}
    <div className="flex items-center gap-2 mb-5 w-full max-w-[180px]">
      <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
      <div className="w-1 h-1 rounded-full" style={{ background: "#C9A84C" }} />
      <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
    </div>

    {/* Detail acara */}
    <div className="space-y-2 mb-6 text-center">
      <p className="text-sm md:text-base" style={{ color: "rgba(245,230,192,0.8)" }}>
        {date}
      </p>
      <p className="text-sm md:text-base font-medium" style={{ color: "#C9A84C" }}>
        {time}
      </p>
      <p className="text-sm md:text-base italic" style={{ color: "rgba(245,230,192,0.6)" }}>
        {location}
      </p>
    </div>

    {/* Tombol Maps */}
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto inline-flex items-center gap-2 px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300"
      style={{
        color: "#C9A84C",
        border: "1px solid rgba(201,168,76,0.4)",
        background: "rgba(201,168,76,0.07)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(201,168,76,0.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(201,168,76,0.07)";
      }}
    >
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
        <path
          fillRule="evenodd"
          d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.387 1.445-.966 2.274-1.76C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.589a13.795 13.795 0 002.274 1.76 11.288 11.288 0 00.757.433.17.17 0 00.281.14zM10 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
          clipRule="evenodd"
        />
      </svg>
      Lihat Lokasi
    </a>
  </div>
);

// ── Komponen Utama ─────────────────────────────────────────────────────────────
export default function Event() {
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
        <div className="relative z-10 px-6 max-w-5xl mx-auto">
          {/* Judul */}
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-3 tracking-wide" style={{ color: "#f5e6c0" }}>
            Acara Pernikahan
          </h2>

          {/* Divider judul */}
          <div className="flex items-center gap-3 my-5 max-w-xs mx-auto">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
            <MinangMotif className="w-5 text-yellow-500" />
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
          </div>

          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-14" style={{ color: "rgba(201,168,76,0.65)" }}>
            Dengan penuh kebahagiaan kami mengundang
          </p>

          {/* Kartu acara */}
          <div className="grid md:grid-cols-2 gap-1 md:gap-px max-w-4xl mx-auto" style={{ border: "1px solid rgba(201,168,76,0.2)" }}>
            <EventCard icon={<RingIcon />} title="Akad Nikah" date="Sabtu, 12 Agustus 2026" time="08.00 WIB" location="Masjid Agung Jakarta" mapsUrl="https://maps.google.com" />
            <EventCard icon={<FeastIcon />} title="Resepsi" date="Sabtu, 12 Agustus 2026" time="11.00 – 14.00 WIB" location="Gedung Serbaguna Jakarta" mapsUrl="https://maps.google.com" />
          </div>

          {/* Divider bawah */}
          <div className="flex items-center gap-3 mt-14 max-w-xs mx-auto">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
            <MinangMotif className="w-5 text-yellow-500" />
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
          </div>

          {/* Pepatah */}
          <p className="mt-6 text-sm md:text-base italic" style={{ color: "rgba(245,230,192,0.45)" }}>
            "Adat basandi syarak, syarak basandi Kitabullah"
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
