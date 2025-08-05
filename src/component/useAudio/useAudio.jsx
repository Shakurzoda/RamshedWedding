import { useState, useEffect, useRef } from "react";
import "./useAudio.css";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlayMessage, setShowPlayMessage] = useState(true);
  const audioRef = useRef(null);

  // Инициализация аудио
  useEffect(() => {
    audioRef.current = new Audio(
      `${window.location.origin}/src/assets/Эндшпиль - 10.mp3`
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    // Попытка автовоспроизведения после первого взаимодействия
    const handleFirstInteraction = () => {
      if (!isPlaying) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setShowPlayMessage(false);
          })
          .catch((e) => console.error("Autoplay error:", e));
      }
      document.removeEventListener("click", handleFirstInteraction);
    };

    document.addEventListener("click", handleFirstInteraction);

    return () => {
      audioRef.current?.pause();
      document.removeEventListener("click", handleFirstInteraction);
    };
  }, []);

  // Обработка изменения muted состояния
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((e) => console.error("Play error:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      <div className="music-player">
        <button
          onClick={togglePlay}
          className="music-player__button"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>

        <button
          onClick={toggleMute}
          className="music-player__button"
          aria-label={isMuted ? "Unmute music" : "Mute music"}
        >
          {isMuted ? "🔇" : "🔊"}
        </button>

        <div className="music-player__status">
          {isPlaying
            ? isMuted
              ? "Музыка играет (без звука)"
              : "Музыка играет"
            : "Музыка остановлена"}
        </div>
      </div>

      {showPlayMessage && !isPlaying && (
        <div className="music-player__message">
          Кликните в любом месте, чтобы включить музыку
        </div>
      )}
    </>
  );
}
