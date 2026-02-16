import { useRef, useEffect } from "react";
import weddingMusic from "../assets/music/wedding.mp3";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.warn("Autoplay diblokir oleh browser:", error);
      });
    }
  }, []);

  return <audio ref={audioRef} loop src={weddingMusic} />;
}
