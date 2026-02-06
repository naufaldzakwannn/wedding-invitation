import Animate from "./Animate";

export default function Hero({ groom, bride, date }) {
  return (
    <Animate>
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-rose-100 to-white">
        <h1 className="text-4xl font-serif mb-2">
          {groom} & {bride}
        </h1>
        <p className="text-gray-600">{date}</p>
      </section>
    </Animate>
  );
}
