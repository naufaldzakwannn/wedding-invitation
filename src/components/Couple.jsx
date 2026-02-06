import Animate from "./Animate";

export default function Couple() {
  return (
    <section className="py-20 text-center">
      <Animate>
        <h2 className="text-3xl mb-6 font-serif">Mempelai</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div>
            <img src="/images/groom.jpg" alt="Pengantin Pria" className="w-40 h-40 mx-auto rounded-full object-cover mb-4" />
            <h3 className="text-xl font-semibold">Ahmad Fauzi</h3>
            <p className="text-gray-500">Putra dari Bpk. Hasan & Ibu Aisyah</p>
          </div>

          <div>
            <img src="/images/bride.jpg" alt="Pengantin Wanita" className="w-40 h-40 mx-auto rounded-full object-cover mb-4" />
            <h3 className="text-xl font-semibold">Aisyah Putri</h3>
            <p className="text-gray-500">Putri dari Bpk. Rahman & Ibu Fatimah</p>
          </div>
        </div>
      </Animate>
    </section>
  );
}
