import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bgImage from "@/assets/bg-cityscape.jpg";
import Particles from "@/components/Particles";
import MusicPlayer from "@/components/MusicPlayer";
import LoadingBar from "@/components/LoadingBar";
import TeamPanel from "@/components/TeamPanel";
import ActionButtons from "@/components/ActionButtons";

const LoadingDots = () => {
  const [dots, setDots] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return <span className="inline-block w-6 text-left">{dots}</span>;
};

const Index = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-background">
      {/* Background Image with zoom */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover animate-slow-zoom"
          style={{ filter: "blur(2px) brightness(0.4)" }}
          width={1920}
          height={1080}
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
      </div>

      {/* Particles */}
      <Particles />

      {/* Main Content - centered */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-8 pr-80">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-display text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-wider text-primary animate-pulse-glow select-none"
        >
          CRIMSON <span className="text-foreground">RP</span>
        </motion.h1>

        {/* Welcome message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-ui text-lg md:text-xl text-muted-foreground tracking-[0.2em] uppercase mt-4 mb-2"
        >
          Welcome to Crimson Roleplay
        </motion.p>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-sm text-muted-foreground/70 mb-10"
        >
          Preparing your experience<LoadingDots />
        </motion.p>

        {/* Loading Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="w-full max-w-md mb-10"
        >
          <LoadingBar />
        </motion.div>

        {/* Action Buttons */}
        <ActionButtons />
      </div>

      {/* Team Panel */}
      <TeamPanel />

      {/* Music Player */}
      <MusicPlayer />

      {/* Bottom gradient line accent */}
      <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-40" />
    </div>
  );
};

export default Index;
