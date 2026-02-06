import Animate from "./Animate";

const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"];

export default function Gallery() {
  return (
    <section className="py-20">
      <Animate>
        <h2 className="text-3xl text-center mb-10 font-serif">Galeri</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto px-4">
          {images.map((img, i) => (
            <img key={i} src={img} className="rounded-lg object-cover hover:scale-105 transition" alt="Gallery" />
          ))}
        </div>
      </Animate>
    </section>
  );
}
