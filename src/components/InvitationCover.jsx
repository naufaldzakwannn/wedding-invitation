import Animate from "./Animate";

export default function InvitationCover({ onOpen }) {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      <Animate>
        <p className="mb-3">Undangan Pernikahan</p>
        <h1 className="text-4xl mb-6">Ahmad & Aisyah</h1>
        <button onClick={onOpen} className="bg-rose-500 px-6 py-3 rounded-full">
          Buka Undangan
        </button>
      </Animate>
    </div>
  );
}
