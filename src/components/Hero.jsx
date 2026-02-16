import Animate from "./Animate";
import groomImg from "../assets/images/groom.jpg";
import brideImg from "../assets/images/bride.jpg";

export default function Hero({ groomName, brideName, date }) {
  return (
    <Animate>
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-red-600 via-yellow-400 to-red-800 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-24 h-16 bg-yellow-500 rounded-t-lg transform rotate-12 shadow-lg animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-red-500 rounded-full shadow-lg animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-600 rounded-full shadow-lg animate-pulse delay-500"></div>
        </div>

        <div className="flex gap-8 mb-10 relative z-10">
          <div className="relative">
            <img src={groomImg} alt="Groom" className="w-36 h-36 md:w-48 md:h-48 object-cover rounded-full shadow-2xl border-4 border-yellow-500 transform hover:scale-105 transition-transform duration-300" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold">🐔</div>
          </div>
          <div className="relative">
            <img src={brideImg} alt="Bride" className="w-36 h-36 md:w-48 md:h-48 object-cover rounded-full shadow-2xl border-4 border-yellow-500 transform hover:scale-105 transition-transform duration-300" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold">🌸</div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-serif text-yellow-100 tracking-wide mb-4 relative z-10">
          <span className="text-red-400">{groomName}</span>
          <span className="mx-4 text-4xl md:text-6xl text-yellow-400 animate-pulse">♥</span>
          <span className="text-red-400">{brideName}</span>
        </h1>

        <p className="mt-6 text-yellow-200 text-xl md:text-2xl font-light tracking-widest uppercase relative z-10 transform hover:scale-110 transition-transform duration-300">{date}</p>

        <p className="mt-4 text-yellow-300 text-base md:text-lg italic relative z-10">Dalam adat Minang, kita bersatu dalam ikatan suci selamanya</p>
      </section>
    </Animate>
  );
}
