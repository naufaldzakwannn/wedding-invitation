import Animate from "./Animate";
import groom from "../assets/images/groom.jpg";
import bride from "../assets/images/bride.jpg";

export default function Couple() {
  return (
    <section className="py-20 text-center bg-gradient-to-b from-rose-50 to-pink-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-24 h-24 bg-rose-300 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-pink-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-rose-400 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-pink-400 rounded-full"></div>
      </div>

      <Animate>
        <h2 className="text-4xl md:text-5xl mb-12 font-serif font-bold text-gray-800 relative z-10">Mempelai</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
            <div className="relative mb-6">
              <img src={groom} alt="Pengantin Pria" className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-rose-200 shadow-xl transform hover:scale-105 transition-transform duration-300" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-rose-400 rounded-full flex items-center justify-center text-white text-lg">♡</div>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">Ahmad Fauzi</h3>
            <p className="text-gray-600 text-lg italic">Putra dari Bpk. Hasan & Ibu Aisyah</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
            <div className="relative mb-6">
              <img src={bride} alt="Pengantin Wanita" className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-pink-200 shadow-xl transform hover:scale-105 transition-transform duration-300" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center text-white text-lg">♡</div>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">Aisyah Putri</h3>
            <p className="text-gray-600 text-lg italic">Putri dari Bpk. Rahman & Ibu Fatimah</p>
          </div>
        </div>

        {/* Optional Heart Divider */}
        <div className="mt-12 flex justify-center">
          <div className="w-16 h-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
          <span className="mx-4 text-2xl text-rose-500 animate-pulse">♥</span>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"></div>
        </div>
      </Animate>
    </section>
  );
}
