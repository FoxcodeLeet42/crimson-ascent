import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 13000;
    const interval = 50;
    const step = 100 / (duration / interval);
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Add slight randomness for realism
        const jitter = Math.random() * step * 0.5;
        return Math.min(prev + step + jitter, 100);
      });
    }, interval);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-ui uppercase tracking-widest text-muted-foreground">
          Loading
        </span>
        <span className="text-xs font-ui text-primary font-semibold">
          {Math.floor(progress)}%
        </span>
      </div>
      <div className="relative h-1.5 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, hsl(0 70% 25%), hsl(0 85% 45%), hsl(0 100% 55%))",
            boxShadow: "0 0 20px hsl(0 85% 45% / 0.6), 0 0 40px hsl(0 85% 45% / 0.3)",
          }}
          transition={{ duration: 0.1 }}
        />
        {/* Shimmer overlay */}
        <div
          className="absolute inset-y-0 left-0 rounded-full animate-shimmer opacity-30"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingBar;
