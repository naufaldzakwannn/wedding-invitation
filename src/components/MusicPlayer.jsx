import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!playing) audioRef.current.play();
    else audioRef.current.pause();
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop src="/music/wedding.mp3" />
      <button onClick={toggleMusic} className="fixed bottom-5 right-5 bg-rose-500 text-white p-3 rounded-full shadow">
        {playing ? "🔇" : "🎵"}
      </button>
    </>
  );
}
