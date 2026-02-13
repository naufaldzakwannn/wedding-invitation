import { useState } from "react";
import Animate from "./Animate";

export default function RSVP() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsApp = () => {
    if (!name.trim()) {
      alert("Silakan masukkan nama Anda.");
      return;
    }
    const text = `Halo, saya ${name}. ${message}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, "_blank");
  };

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
        <h2 className="text-4xl md:text-5xl mb-12 font-serif font-bold text-gray-800 relative z-10">Konfirmasi Kehadiran</h2>

        <div className="max-w-lg mx-auto space-y-6 relative z-10">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-left text-gray-700 font-semibold mb-2">
                  Nama Lengkap
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Masukkan nama Anda"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-left text-gray-700 font-semibold mb-2">
                  Ucapan & Doa
                </label>
                <textarea
                  id="message"
                  placeholder="Tulis ucapan dan doa untuk mempelai..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              <button
                onClick={sendWhatsApp}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Kirim via WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Optional Message */}
        <p className="mt-8 text-gray-600 text-lg italic relative z-10">Kehadiran Anda akan membuat hari kami lebih berkesan</p>
      </Animate>
    </section>
  );
}
