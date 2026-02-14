import { useState, useEffect } from "react";

export default function ThemeToggle() {
  // State untuk menyimpan status tema (true = dark, false = light)
  const [isDark, setIsDark] = useState(() => {
    // Cek localStorage untuk persistensi, default ke false (light)
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  // useEffect untuk mengupdate DOM dan localStorage saat isDark berubah
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

  // Fungsi toggle
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-5 right-5 p-3 bg-gradient-to-r from-rose-200 to-pink-200 dark:from-gray-700 dark:to-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
      aria-label="Toggle Theme"
    >
      <span className="text-2xl transition-transform duration-300">{isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}
