import { useState, useEffect } from "react";

// ── SVG: Ikon Matahari ────────────────────────────────────────────────────────
const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <circle cx="12" cy="12" r="5" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </g>
  </svg>
);

// ── SVG: Ikon Bulan ───────────────────────────────────────────────────────────
const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

// ── SVG: Motif bunga kecil untuk dekorasi tombol ──────────────────────────────
const MinangMotifSmall = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
    <circle cx="20" cy="20" r="3" fill="currentColor" />
    {[0, 90, 180, 270].map((angle, i) => (
      <ellipse
        key={i}
        cx={20 + 8 * Math.cos((angle * Math.PI) / 180)}
        cy={20 + 8 * Math.sin((angle * Math.PI) / 180)}
        rx="3"
        ry="5"
        transform={`rotate(${angle} ${20 + 8 * Math.cos((angle * Math.PI) / 180)} ${20 + 8 * Math.sin((angle * Math.PI) / 180)})`}
        fill="currentColor"
        opacity="0.6"
      />
    ))}
  </svg>
);

// ── Komponen Utama ─────────────────────────────────────────────────────────────
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-5 right-5 z-50 p-3 rounded-full shadow-xl transition-all duration-300 group overflow-hidden"
      style={{
        background: isDark ? "linear-gradient(135deg, #2a0d0d, #1a0a00)" : "linear-gradient(135deg, #C9A84C, #8B1A1A)",
        border: isDark ? "1px solid rgba(201,168,76,0.3)" : "1px solid rgba(201,168,76,0.5)",
        color: isDark ? "#C9A84C" : "#1a0a00",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1) rotate(5deg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1) rotate(0deg)";
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Motif dekoratif background */}
      <MinangMotifSmall />

      {/* Ikon */}
      <span className="relative z-10 block transition-transform duration-300 group-hover:rotate-12">{isDark ? <SunIcon /> : <MoonIcon />}</span>
    </button>
  );
}
