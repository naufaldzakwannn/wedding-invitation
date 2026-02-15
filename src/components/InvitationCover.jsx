import Animate from "./Animate";

export default function InvitationCover({ onOpen }) {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-rose-500 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-pink-500 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-rose-400 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-pink-400 rounded-full blur-xl animate-pulse delay-1500"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 text-rose-300 text-4xl animate-bounce delay-300">♥</div>
        <div className="absolute top-40 right-20 text-pink-300 text-3xl animate-bounce delay-700">♥</div>
        <div className="absolute bottom-20 left-1/4 text-rose-400 text-2xl animate-bounce delay-1000">♥</div>
        <div className="absolute bottom-40 right-1/4 text-pink-400 text-3xl animate-bounce delay-500">♥</div>
      </div>

      <Animate>
        <div className="text-center relative z-10">
          <p className="text-lg md:text-xl mb-6 font-light tracking-widest uppercase opacity-80 animate-fade-in">Undangan Pernikahan</p>
          <h1 className="text-5xl md:text-7xl mb-10 font-serif font-bold tracking-wide animate-slide-up">
            <span className="text-rose-400">Ahmad</span>
            <span className="mx-4 text-4xl md:text-6xl text-pink-400 animate-pulse">♥</span>
            <span className="text-pink-400">Aisyah</span>
          </h1>
          <button
            onClick={onOpen}
            className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:rotate-1 transition-all duration-500 animate-bounce-in"
          >
            Buka Undangan
          </button>

          <p className="mt-8 text-sm md:text-base font-light opacity-70 animate-fade-in delay-1000">Mari bersama merayakan cinta abadi</p>
        </div>
      </Animate>
    </div>
  );
}
