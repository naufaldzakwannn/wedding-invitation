import Animate from "./Animate";

const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"];

export default function Gallery() {
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
        <h2 className="text-4xl md:text-5xl mb-12 font-serif font-bold text-gray-800 relative z-10">Galeri Kenangan</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4 relative z-10">
          {images.map((img, i) => (
            <div key={i} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <img src={img} alt={`Gallery image ${i + 1}`} className="w-full h-48 md:h-56 object-cover rounded-2xl transition-all duration-300 group-hover:brightness-110" />
              {/* Optional Overlay on Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Lihat Detail</span>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Call to Action */}
        <p className="mt-8 text-gray-600 text-lg italic relative z-10">Kenangan indah yang akan selalu dikenang</p>
      </Animate>
    </section>
  );
}
