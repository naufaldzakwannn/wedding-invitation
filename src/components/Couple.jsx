import Animate from "./Animate";
import groom from "../assets/images/groom.jpg";
import bride from "../assets/images/bride.jpg";

export default function Couple() {
  return (
    <section className="py-20 text-center bg-gradient-to-b from-red-600 via-yellow-400 to-red-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-24 h-16 bg-yellow-500 rounded-t-lg transform rotate-12 shadow-lg"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-red-500 rounded-full shadow-lg"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-600 rounded-full shadow-lg"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-red-600 rounded-full shadow-lg"></div>
      </div>

      <Animate>
        <h2 className="text-4xl md:text-5xl mb-12 font-serif font-bold text-yellow-100 relative z-10">Urang Awak Adat Minang</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col items-center p-6 bg-yellow-100 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 border-2 border-red-500">
            <div className="relative mb-6">
              <img src={groom} alt="Pengantin Pria" className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-yellow-500 shadow-xl transform hover:scale-105 transition-transform duration-300" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white text-lg">🐔</div>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-red-800 mb-2">Ahmad Fauzi</h3>
            <p className="text-red-700 text-lg italic">Anak dari Bapak Hasan jo Ibu Aisyah</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-yellow-100 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 border-2 border-red-500">
            <div className="relative mb-6">
              <img src={bride} alt="Pengantin Wanita" className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-yellow-500 shadow-xl transform hover:scale-105 transition-transform duration-300" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white text-lg">🌸</div>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-red-800 mb-2">Aisyah Putri</h3>
            <p className="text-red-700 text-lg italic">Anak dari Bapak Rahman jo Ibu Fatimah</p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-yellow-400 rounded-full"></div>
          <span className="mx-4 text-2xl text-yellow-400 animate-pulse"></span>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-red-600 rounded-full"></div>
        </div>
      </Animate>
    </section>
  );
}
