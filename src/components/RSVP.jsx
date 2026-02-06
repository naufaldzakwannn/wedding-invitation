import { useState } from "react";
import Animate from "./Animate";

export default function RSVP() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsApp = () => {
    const text = `Halo, saya ${name}. ${message}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`);
  };

  return (
    <section className="py-20 bg-gray-50">
      <Animate>
        <h2 className="text-3xl text-center mb-6 font-serif">Konfirmasi Kehadiran</h2>

        <div className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Nama" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 border rounded" />

          <textarea placeholder="Ucapan & Doa" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-3 border rounded" />

          <button onClick={sendWhatsApp} className="w-full bg-rose-500 text-white py-3 rounded">
            Kirim via WhatsApp
          </button>
        </div>
      </Animate>
    </section>
  );
}
