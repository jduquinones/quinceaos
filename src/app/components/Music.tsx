import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement>(null);

  // URL de música de ejemplo - Reemplaza con tu archivo de música
  const musicUrl = "music/Ed-Sheeran-Perfect.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(error => {
          console.log("Reproducción automática bloqueada:", error);
          // El navegador bloqueó la reproducción automática
        });
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log("Error al reproducir:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={musicUrl}
        loop
        preload="auto"
      />

      {/* Reproductor flotante */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white/95 backdrop-blur-md rounded-full shadow-xl p-2 flex items-center gap-2 border border-rose-100">
          {/* Botón Play/Pause */}
          <button
            onClick={togglePlay}
            className="bg-gradient-to-br from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white rounded-full p-2 transition-all duration-300 hover:scale-110 shadow-lg"
            title={isPlaying ? "Pausar música" : "Reproducir música"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" fill="currentColor" />
            ) : (
              <Play className="w-4 h-4" fill="currentColor" />
            )}
          </button>

          {/* Control de volumen */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleMute}
              className="text-gray-600 hover:text-rose-500 transition-colors"
              title={isMuted ? "Activar sonido" : "Silenciar"}
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5" />
              ) : (
                <Volume2 className="w-3.5 h-3.5" />
              )}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-16 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
              style={{
                background: `linear-gradient(to right, rgb(251, 113, 133) 0%, rgb(251, 113, 133) ${volume * 100}%, rgb(229, 231, 235) ${volume * 100}%, rgb(229, 231, 235) 100%)`
              }}
            />
          </div>

          {/* Indicador de música */}
          <div className="flex items-center gap-0.5">
            {isPlaying && (
              <>
                <div className="w-0.5 h-2 bg-rose-400 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                <div className="w-0.5 h-3 bg-rose-500 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                <div className="w-0.5 h-2 bg-rose-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
              </>
            )}
          </div>
        </div>

        {/* Etiqueta opcional */}
        <div className="text-center mt-1.5">
          <p className="text-xs text-gray-500 italic">
            {isPlaying ? "♫ Música de fondo ♫" : ""}
          </p>
        </div>
      </div>
    </>
  );
}