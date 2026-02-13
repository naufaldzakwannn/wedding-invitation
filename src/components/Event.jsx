import Animate from "./Animate";

export default function Event() {
  return (
    <section className="py-20 text-center bg-gradient-to-b from-rose-50 to-pink-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-rose-300 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-18 h-18 bg-pink-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-14 h-14 bg-rose-400 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-pink-400 rounded-full"></div>
      </div>

      <Animate>
        <h2 className="text-4xl md:text-5xl mb-12 font-serif font-bold text-gray-800 relative z-10">Acara Pernikahan</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto relative z-10">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-rose-400">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 text-2xl">💍</div>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Akad Nikah</h3>
            <p className="text-gray-600 text-lg mb-2">Sabtu, 12 Agustus 2026</p>
            <p className="text-gray-600 text-lg mb-2">08.00 WIB</p>
            <p className="text-gray-600 text-lg italic">Masjid Agung Jakarta</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-pink-400">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 text-2xl">🎉</div>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Resepsi</h3>
            <p className="text-gray-600 text-lg mb-2">Sabtu, 12 Agustus 2026</p>
            <p className="text-gray-600 text-lg mb-2">11.00 - 14.00 WIB</p>
            <p className="text-gray-600 text-lg italic">Gedung Serbaguna Jakarta</p>
          </div>
        </div>

        <div className="mt-12 relative z-10">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Lihat Lokasi di Google Maps
          </a>
        </div>

        {/* Optional Divider */}
        <div className="mt-8 flex justify-center relative z-10">
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
        </div>
      </Animate>
    </section>
  );
}
