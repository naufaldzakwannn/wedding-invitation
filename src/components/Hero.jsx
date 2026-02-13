import Animate from "./Animate";
import groomImg from "../assets/images/groom.jpg";
import brideImg from "../assets/images/bride.jpg";

export default function Hero({ groomName, brideName, date }) {
  return (
    <Animate>
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-rose-200 via-pink-100 to-rose-50 px-6 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-rose-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-pink-300 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-rose-400 rounded-full animate-pulse delay-500"></div>
        </div>

        {/* Photos with Enhanced Styling */}
        <div className="flex gap-8 mb-10 relative z-10">
          <div className="relative">
            <img src={groomImg} alt="Groom" className="w-36 h-36 md:w-48 md:h-48 object-cover rounded-full shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-rose-400 rounded-full flex items-center justify-center text-white text-sm font-bold">♡</div>
          </div>
          <div className="relative">
            <img src={brideImg} alt="Bride" className="w-36 h-36 md:w-48 md:h-48 object-cover rounded-full shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-white text-sm font-bold">♡</div>
          </div>
        </div>

        {/* Names with Elegant Typography */}
        <h1 className="text-5xl md:text-7xl font-bold font-serif text-gray-800 tracking-wide mb-4 relative z-10">
          <span className="text-rose-500">{groomName}</span>
          <span className="mx-4 text-4xl md:text-6xl text-rose-400 animate-pulse">♥</span>
          <span className="text-pink-500">{brideName}</span>
        </h1>

        {/* Date with Subtle Animation */}
        <p className="mt-6 text-gray-700 text-xl md:text-2xl font-light tracking-widest uppercase relative z-10 transform hover:scale-110 transition-transform duration-300">{date}</p>

        {/* Optional Subtitle or Tagline */}
        <p className="mt-4 text-gray-600 text-base md:text-lg italic relative z-10">Bersama kita memulai petualangan cinta yang abadi</p>
      </section>
    </Animate>
  );
}
