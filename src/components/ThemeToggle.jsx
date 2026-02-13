export default function ThemeToggle() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-5 right-5 p-3 bg-gradient-to-r from-rose-200 to-pink-200 dark:from-gray-700 dark:to-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
      aria-label="Toggle Theme"
    >
      <span className="text-2xl transition-transform duration-300">{document.documentElement.classList.contains("dark") ? "☀️" : "🌙"}</span>
    </button>
  );
}
