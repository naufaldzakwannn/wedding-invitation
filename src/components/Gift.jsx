import Animate from "./Animate";

export default function Gift() {
  return (
    <section className="py-20 text-center bg-gradient-to-b from-pink-50 to-rose-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-24 h-24 bg-rose-300 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-pink-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-rose-400 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-pink-400 rounded-full"></div>
      </div>

      <Animate>
        <h2 className="text-4xl md:text-5xl mb-12 font-serif font-bold text-gray-800 relative z-10">Kirim Hadiah</h2>

        <div className="max-w-md mx-auto relative z-10">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-white text-3xl">🎁</div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Transfer ke Rekening</h3>
            <div className="space-y-2">
              <p className="text-gray-600 text-lg font-medium">BCA - 1234567890</p>
              <p className="text-gray-600 text-lg italic">a.n Ahmad</p>
            </div>
            {/* Optional Copy Button */}
            <button
              onClick={() => navigator.clipboard.writeText("1234567890")}
              className="mt-6 w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 px-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Salin Nomor Rekening
            </button>
          </div>
        </div>

        {/* Optional Message */}
        <p className="mt-8 text-gray-600 text-lg italic relative z-10">Hadiah Anda akan menjadi kenangan berharga bagi kami</p>
      </Animate>
    </section>
  );
}
