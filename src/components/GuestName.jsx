import Animate from "./Animate";

export default function GuestName() {
  const params = new URLSearchParams(window.location.search);
  const guest = params.get("to");

  if (!guest) return null;

  return (
    <section className="py-8 text-center bg-gradient-to-r from-rose-50 to-pink-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 left-5 w-12 h-12 bg-rose-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-5 right-5 w-10 h-10 bg-pink-300 rounded-full animate-pulse delay-500"></div>
      </div>

      <Animate>
        <div className="relative z-10">
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <span className="text-rose-500 text-2xl mr-3 animate-pulse">💌</span>
            <p className="text-sm md:text-base text-gray-700 font-medium">
              Kepada Yth: <strong className="text-gray-800">{guest}</strong>
            </p>
          </div>
        </div>
      </Animate>
    </section>
  );
}
