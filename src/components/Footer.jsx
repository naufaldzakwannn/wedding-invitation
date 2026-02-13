export default function Footer() {
  return (
    <footer className="py-16 text-center bg-gradient-to-b from-gray-800 to-black text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 left-5 w-16 h-16 bg-rose-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-5 right-5 w-14 h-14 bg-pink-300 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        <div className="flex justify-center items-center mb-6">
          <span className="text-3xl md:text-4xl animate-pulse">♥</span>
        </div>

        <p className="text-lg md:text-xl font-light mb-4">Terima kasih atas doa dan kehadiran Anda</p>

        <p className="text-sm md:text-base text-gray-300 mb-6">© 2026 Ahmad & Aisyah</p>

        {/* Optional Social Links */}
        <div className="flex justify-center space-x-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-rose-400 transition-colors duration-300 text-2xl">
            📷
          </a>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-2xl">
            💬
          </a>
        </div>
      </div>
    </footer>
  );
}
