import Animate from "./Animate";

export default function Protocol() {
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
        <h2 className="text-4xl md:text-5xl mb-12 font-serif font-bold text-gray-800 relative z-10">Informasi Penting</h2>

        <div className="max-w-2xl mx-auto relative z-10">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-white text-3xl">ℹ️</div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Protokol Acara</h3>
            <p className="text-gray-600 text-lg leading-relaxed">Mohon datang tepat waktu dan menjaga kenyamanan bersama. Acara ini akan berlangsung dengan penuh khidmat dan kebahagiaan.</p>
            {/* Optional Additional Info */}
            <ul className="mt-6 text-left text-gray-600 text-lg space-y-2">
              <li>
                • <strong>Pakaian:</strong> Formal atau sesuai tema pernikahan.
              </li>
              <li>
                • <strong>Kesehatan:</strong> Pastikan kondisi sehat dan ikuti protokol kesehatan.
              </li>
              <li>
                • <strong>Foto:</strong> Area foto tersedia untuk kenangan indah.
              </li>
            </ul>
          </div>
        </div>

        {/* Optional Message */}
        <p className="mt-8 text-gray-600 text-lg italic relative z-10">Terima kasih atas perhatian dan partisipasi Anda</p>
      </Animate>
    </section>
  );
}
