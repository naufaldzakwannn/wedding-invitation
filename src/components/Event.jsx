import Animate from "./Animate";

export default function Event() {
  return (
    <section className="py-20 bg-rose-50 text-center">
      <Animate>
        <h2 className="text-3xl mb-8 font-serif">Acara Pernikahan</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl mb-2 font-semibold">Akad Nikah</h3>
            <p>Sabtu, 12 Agustus 2026</p>
            <p>08.00 WIB</p>
            <p>Masjid Agung Jakarta</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl mb-2 font-semibold">Resepsi</h3>
            <p>Sabtu, 12 Agustus 2026</p>
            <p>11.00 - 14.00 WIB</p>
            <p>Gedung Serbaguna Jakarta</p>
          </div>
        </div>

        <a href="https://maps.google.com" target="_blank" className="inline-block mt-8 bg-rose-500 text-white px-6 py-3 rounded-full">
          Lihat Lokasi
        </a>
      </Animate>
    </section>
  );
}
