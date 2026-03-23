import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-secondary/80 backdrop-blur-md border border-border rounded-lg px-4 py-3">
      <audio ref={audioRef} loop preload="none">
        {/* Add your music source here */}
        <source src="" type="audio/mpeg" />
      </audio>

      <button
        onClick={togglePlay}
        className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30 transition-all duration-300 hover:scale-110"
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
      </button>

      <button
        onClick={() => setIsMuted(!isMuted)}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={isMuted ? 0 : volume}
        onChange={(e) => {
          setVolume(parseFloat(e.target.value));
          if (isMuted) setIsMuted(false);
        }}
        className="w-20 h-1 accent-primary cursor-pointer"
      />
    </div>
  );
};

export default MusicPlayer;
