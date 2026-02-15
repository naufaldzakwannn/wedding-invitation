import { useRef, useEffect } from "react";
import weddingMusic from "../assets/music/wedding.mp3"; // Impor file audio dari assets

export default function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Otomatis putar musik saat komponen mount (setelah undangan dibuka)
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.warn("Autoplay diblokir oleh browser:", error);
        // Opsional: Tambahkan logika fallback, seperti menampilkan pesan atau tombol manual
      });
    }
  }, []); // Hanya jalankan sekali saat mount

  return <audio ref={audioRef} loop src={weddingMusic} />;
}
