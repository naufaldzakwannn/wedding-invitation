import Animate from "./Animate";
import groom from "../assets/images/groom.jpg";
import bride from "../assets/images/bride.jpg";

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

// ── Kartu Profil ──────────────────────────────────────────────────────────────
const ProfileCard = ({ img, alt, name, parentInfo, role }) => (
  <div
    className="relative flex flex-col items-center p-8 transition-transform duration-300 hover:-translate-y-2"
    style={{
      background: "linear-gradient(160deg, #2a0d0d 0%, #1a0a00 100%)",
      border: "1px solid rgba(201,168,76,0.35)",
    }}
  >
    {/* Gonjong pojok kiri & kanan atas */}
    <GonjongIcon className="absolute top-0 left-3 w-8 text-yellow-700 opacity-30" />
    <GonjongIcon className="absolute top-0 right-3 w-8 text-yellow-700 opacity-30 scale-x-[-1]" />

    {/* Garis emas atas */}
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }} />
    {/* Garis emas bawah */}
    <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }} />

    {/* Foto */}
    <div className="relative mb-6">
      <div
        className="relative"
        style={{
          padding: "4px",
          background: "linear-gradient(135deg, #C9A84C, #8B1A1A, #C9A84C)",
          borderRadius: "50%",
        }}
      >
        <img src={img} alt={alt} className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover block transition-transform duration-500 hover:scale-105" />
        {/* Ring dashed luar */}
        <div className="absolute inset-0 rounded-full pointer-events-none" style={{ border: "2px dashed rgba(201,168,76,0.4)", margin: "-8px", borderRadius: "50%" }} />
      </div>

      {/* Badge peran */}
      <div
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs tracking-widest uppercase whitespace-nowrap"
        style={{
          background: "#1a0a00",
          border: "1px solid rgba(201,168,76,0.5)",
          color: "#C9A84C",
        }}
      >
        {role}
      </div>
    </div>

    {/* Motif tengah halus */}
    <MinangMotif className="absolute bottom-16 opacity-5 w-28 text-yellow-500 pointer-events-none" />

    {/* Nama */}
    <h3 className="text-2xl md:text-3xl font-serif font-bold mt-3 mb-3 tracking-wide" style={{ color: "#f5e6c0" }}>
      {name}
    </h3>

    {/* Divider nama */}
    <div className="flex items-center gap-2 mb-3 w-full max-w-[200px]">
      <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
      <div className="w-1 h-1 rounded-full" style={{ background: "#C9A84C" }} />
      <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
    </div>

    {/* Info orang tua */}
    <p className="text-sm md:text-base italic text-center leading-relaxed" style={{ color: "rgba(201,168,76,0.7)" }}>
      {parentInfo}
    </p>
  </div>
);

// ── Komponen Utama ─────────────────────────────────────────────────────────────
export default function Couple() {
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
            Mempelai
          </h2>

          {/* Divider judul */}
          <div className="flex items-center gap-3 my-5 max-w-xs mx-auto">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
            <MinangMotif className="w-5 text-yellow-500" />
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
          </div>

          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-14" style={{ color: "rgba(201,168,76,0.65)" }}>
            Urang Awak Adat Minang
          </p>

          {/* Kartu pasangan */}
          <div className="grid md:grid-cols-2 gap-1 md:gap-px max-w-4xl mx-auto" style={{ border: "1px solid rgba(201,168,76,0.2)" }}>
            <ProfileCard img={groom} alt="Pengantin Pria" name="Ahmad Fauzi" parentInfo="Anak dari Bapak Hasan jo Ibu Aisyah" role="Marapulai" />
            <ProfileCard img={bride} alt="Pengantin Wanita" name="Aisyah Putri" parentInfo="Anak dari Bapak Rahman jo Ibu Fatimah" role="Anak Daro" />
          </div>

          {/* Divider bawah */}
          <div className="flex items-center gap-3 mt-14 max-w-xs mx-auto">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
            <MinangMotif className="w-5 text-yellow-500" />
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
          </div>

          {/* Pepatah */}
          <p className="mt-6 text-sm md:text-base italic" style={{ color: "rgba(245,230,192,0.45)" }}>
            "Baa dek kito, katuju dek urang"
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
