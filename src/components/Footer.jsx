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

// ── SVG: Ikon Instagram ───────────────────────────────────────────────────────
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// ── SVG: Ikon WhatsApp ────────────────────────────────────────────────────────
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// ── Komponen Utama ─────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="relative py-16 text-center overflow-hidden" style={{ background: "linear-gradient(180deg, #2d0f0f 0%, #0d0404 100%)" }}>
      {/* ── Dekorasi latar ───────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <GonjongIcon className="absolute top-0 left-1/2 -translate-x-1/2 w-[40vw] max-w-md text-yellow-900 opacity-8" />
        <MinangMotif className="absolute top-6 left-6 w-10 text-yellow-700 opacity-12 animate-pulse" />
        <MinangMotif className="absolute top-6 right-6 w-10 text-yellow-700 opacity-12 animate-pulse" style={{ animationDelay: "1s" }} />
        <MinangMotif className="absolute bottom-6 left-8 w-8 text-red-900 opacity-12 animate-pulse" style={{ animationDelay: "0.5s" }} />
        <MinangMotif className="absolute bottom-6 right-8 w-8 text-red-900 opacity-12 animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Border songket atas */}
      <div className="absolute top-0 left-0 right-0">
        <SongketBorder />
      </div>

      <div className="relative z-10 px-6">
        {/* Simbol hati dengan motif */}
        <div className="flex justify-center items-center mb-6">
          <MinangMotif className="w-12 text-yellow-600 opacity-60 animate-pulse" />
        </div>

        {/* Divider atas */}
        <div className="flex items-center gap-3 mb-6 max-w-xs mx-auto">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A84C" }} />
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
        </div>

        {/* Ucapan terima kasih */}
        <p className="text-base md:text-lg font-light mb-2 tracking-wide" style={{ color: "#f5e6c0" }}>
          Terima kasih atas doa dan kehadiran Anda
        </p>

        <p className="text-xs md:text-sm italic mb-6" style={{ color: "rgba(201,168,76,0.6)" }}>
          "Semoga Allah meridhoi ikatan kami"
        </p>

        {/* Divider tengah */}
        <div className="flex items-center gap-3 mb-6 max-w-xs mx-auto">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A84C" }} />
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
        </div>

        {/* Nama pasangan & tahun */}
        <p className="text-sm md:text-base font-serif tracking-widest mb-8" style={{ color: "rgba(201,168,76,0.75)" }}>
          Ahmad & Aisyah • 2026
        </p>

        {/* Sosial media */}
        <div className="flex justify-center items-center gap-6 mb-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-all duration-300"
            style={{ color: "rgba(201,168,76,0.5)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#C9A84C";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(201,168,76,0.5)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <InstagramIcon />
          </a>

          <div className="w-px h-5" style={{ background: "rgba(201,168,76,0.3)" }} />

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="transition-all duration-300"
            style={{ color: "rgba(201,168,76,0.5)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#C9A84C";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(201,168,76,0.5)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <WhatsAppIcon />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs" style={{ color: "rgba(201,168,76,0.4)" }}>
          © CopyRight {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
