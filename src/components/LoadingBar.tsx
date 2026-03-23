import { useState, useEffect } from "react";

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 15000;
    const interval = 50;
    const step = 100 / (duration / interval);
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const jitter = Math.random() * step * 0.5;
        return Math.min(prev + step + jitter, 100);
      });
    }, interval);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-3">
      <span className="font-ui text-xs text-muted-foreground whitespace-nowrap">
        Loading game ({Math.floor(progress)}%)
      </span>
      <div className="relative h-1 flex-1 bg-secondary rounded-full overflow-hidden min-w-[60px]">
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-all duration-100"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, hsl(0 70% 25%), hsl(0 85% 45%), hsl(0 100% 55%))",
            boxShadow: "0 0 12px hsl(0 85% 45% / 0.5)",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingBar;
