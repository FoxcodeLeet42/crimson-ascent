import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
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

  // Simulate progress for demo
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 0.5));
    }, 300);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full max-w-lg mx-auto">
      <audio ref={audioRef} loop preload="none">
        <source src="" type="audio/mpeg" />
      </audio>

      <div className="bg-card/60 backdrop-blur-md border border-border rounded-xl p-4">
        <h4 className="font-display text-xs uppercase tracking-[0.3em] text-primary text-center mb-4">
          Music Controller
        </h4>

        {/* Track info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
            <span className="text-primary text-lg">♪</span>
          </div>
          <div className="min-w-0">
            <p className="font-ui text-sm text-foreground truncate">Crimson Nights</p>
            <p className="font-body text-xs text-muted-foreground">Ambient</p>
          </div>
          <span className="font-ui text-xs text-muted-foreground ml-auto">
            {Math.floor(progress * 1.6)}s / 160s
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-secondary rounded-full mb-4 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, hsl(var(--crimson-dark)), hsl(var(--primary)), hsl(var(--crimson-glow)))",
            }}
          />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <SkipBack size={18} />
          </button>
          <button
            onClick={togglePlay}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30 transition-all duration-300 hover:scale-110"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <SkipForward size={18} />
          </button>

          <div className="ml-4 flex items-center gap-2">
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
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
