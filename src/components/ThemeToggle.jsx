export default function ThemeToggle() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button onClick={toggleTheme} className="fixed top-5 right-5 p-2 bg-gray-200 dark:bg-gray-700 rounded">
      🌙
    </button>
  );
}
