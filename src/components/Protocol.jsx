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

// ── SVG: Ikon Info ────────────────────────────────────────────────────────────
const InfoIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <circle cx="20" cy="20" r="16" stroke="#C9A84C" strokeWidth="2" fill="none" />
    <circle cx="20" cy="20" r="11" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.4" />
    <path d="M20 12 L20 14" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M20 18 L20 28" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// ── Item Protokol ─────────────────────────────────────────────────────────────
const ProtocolItem = ({ icon, title, description }) => (
  <div className="flex gap-4 text-left group">
    {/* Ikon */}
    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-1" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)" }}>
      <span style={{ color: "#C9A84C", fontSize: "1.25rem" }}>{icon}</span>
    </div>

    {/* Konten */}
    <div className="flex-1">
      <h4 className="text-base md:text-lg font-semibold mb-1 tracking-wide" style={{ color: "#f5e6c0" }}>
        {title}
      </h4>
      <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(245,230,192,0.65)" }}>
        {description}
      </p>
    </div>
  </div>
);

// ── Komponen Utama ─────────────────────────────────────────────────────────────
export default function Protocol() {
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
        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          {/* Judul */}
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-3 tracking-wide" style={{ color: "#f5e6c0" }}>
            Tata Tertib Acara
          </h2>

          {/* Divider judul */}
          <div className="flex items-center gap-3 my-5 max-w-xs mx-auto">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
            <MinangMotif className="w-5 text-yellow-500" />
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
          </div>

          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-12" style={{ color: "rgba(201,168,76,0.65)" }}>
            Agar acara berjalan khidmat dan lancar
          </p>

          {/* Kartu Protokol */}
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
            <MinangMotif className="absolute bottom-8 right-8 opacity-5 w-28 text-yellow-500 pointer-events-none" />

            {/* Ikon Info */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-6" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.4)" }}>
              <InfoIcon />
            </div>

            {/* Intro */}
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: "rgba(245,230,192,0.7)" }}>
              Dengan segala hormat, kami mohon perhatian dan kerja sama para undangan untuk menjaga suasana acara tetap sakral sesuai adat Minangkabau.
            </p>

            {/* Divider */}
            <div className="flex items-center gap-2 mb-8 w-full max-w-[250px] mx-auto">
              <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
              <MinangMotif className="w-4 text-yellow-500" />
              <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
            </div>

            {/* Daftar Protokol */}
            <div className="space-y-6 max-w-2xl mx-auto">
              <ProtocolItem icon="🕌" title="Waktu & Ketepatan" description="Harap datang tepat waktu sesuai jam yang tertera. Akad nikah dimulai tepat pukul 08.00 WIB dan resepsi pukul 11.00 WIB." />

              <ProtocolItem
                icon="👔"
                title="Busana & Pakaian"
                description="Dianjurkan mengenakan pakaian sopan dan tertutup. Untuk tamu pria diharapkan mengenakan baju koko atau jas, sedangkan tamu wanita mengenakan kebaya atau busana muslim."
              />

              <ProtocolItem icon="🤲" title="Kesopanan & Adab" description="Mohon menjaga kekhidmatan acara, terutama saat akad nikah berlangsung. Harap mematikan atau mengalihkan HP ke mode senyap." />

              <ProtocolItem icon="📸" title="Area Foto" description="Tersedia area foto khusus dengan dekorasi tradisional Minangkabau. Silakan abadikan momen indah bersama keluarga dan kerabat." />

              <ProtocolItem icon="🎁" title="Amplop & Kado" description="Bagi yang ingin memberikan amplop atau hadiah, telah tersedia kotak khusus di meja resepsi. Doa restu Anda adalah hadiah terindah." />
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
            "Raso jo pareso, malu jo sopan, adat basandi syarak"
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
