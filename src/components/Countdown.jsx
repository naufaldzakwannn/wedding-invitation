import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Animate from "./Animate"; // Assuming Animate is available for consistency

export default function Countdown({ date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs();
      const target = dayjs(date);
      const diff = target.diff(now, "second");

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (24 * 60 * 60));
      const hours = Math.floor((diff % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((diff % (60 * 60)) / 60);
      const seconds = diff % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <Animate>
      <section className="py-16 text-center bg-gradient-to-b from-red-600 via-yellow-400 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-5 left-5 w-20 h-12 bg-yellow-500 rounded-t-lg transform rotate-12 shadow-lg animate-pulse"></div>
          <div className="absolute bottom-5 right-5 w-16 h-16 bg-red-500 rounded-full shadow-lg animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/4 w-14 h-14 bg-yellow-600 rounded-full shadow-lg animate-pulse delay-1000"></div>
        </div>

        <h2 className="text-3xl md:text-4xl font-serif font-bold text-yellow-100 mb-8 relative z-10">Hitung Mundur Menuju Hari Perkawinan</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto relative z-10">
          <div className="flex flex-col items-center p-4 bg-yellow-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-red-500">
            <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">{timeLeft.days}</div>
            <div className="text-sm md:text-base text-red-800 uppercase tracking-wide">Hari</div>
          </div>
          <div className="flex flex-col items-center p-4 bg-yellow-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-red-500">
            <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">{timeLeft.hours}</div>
            <div className="text-sm md:text-base text-red-800 uppercase tracking-wide">Jam</div>
          </div>
          <div className="flex flex-col items-center p-4 bg-yellow-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-red-500">
            <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">{timeLeft.minutes}</div>
            <div className="text-sm md:text-base text-red-800 uppercase tracking-wide">Menit</div>
          </div>
          <div className="flex flex-col items-center p-4 bg-yellow-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-red-500">
            <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">{timeLeft.seconds}</div>
            <div className="text-sm md:text-base text-red-800 uppercase tracking-wide">Detik</div>
          </div>
        </div>

        <p className="mt-8 text-yellow-200 text-lg italic relative z-10">Waktu yang tersisa untuk mempersiapkan hari istimewa</p>
      </section>
    </Animate>
  );
}
