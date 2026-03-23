import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImage from "@/assets/bg-cityscape.jpg";
import Particles from "@/components/Particles";
import MusicPlayer from "@/components/MusicPlayer";
import LoadingBar from "@/components/LoadingBar";
import TeamPanel from "@/components/TeamPanel";
import ServerUpdates from "@/components/ServerUpdates";
import MarqueeText from "@/components/MarqueeText";

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
  const [showUpdates, setShowUpdates] = useState(true);
  const [showTeam, setShowTeam] = useState(true);

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
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
      </div>

      {/* Particles */}
      <Particles />

      {/* Main Content - centered */}
      <div className="relative z-35 flex flex-col items-center justify-center h-full px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-2"
        >
          <p className="font-ui text-lg md:text-xl text-muted-foreground tracking-[0.4em] uppercase mb-2">
            Welcome
          </p>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wider text-foreground animate-pulse-glow select-none leading-none">
            YOUR GAME IS
          </h1>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-primary animate-pulse-glow select-none leading-none mt-1">
            LOADING
          </h1>
        </motion.div>

        {/* Music Player - centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-lg mt-8"
        >
          <MusicPlayer />
        </motion.div>

        {/* Toggle buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex gap-3 mt-8"
        >
          <button
            onClick={() => setShowUpdates(!showUpdates)}
            className="px-5 py-2 font-ui text-xs uppercase tracking-widest border border-border rounded bg-secondary/50 text-secondary-foreground transition-all duration-300 hover:bg-secondary hover:border-primary/30"
          >
            {showUpdates ? "Hide Updates" : "Show Updates"}
          </button>
          <button
            onClick={() => {
              const allHidden = !showUpdates && !showTeam;
              setShowUpdates(allHidden);
              setShowTeam(allHidden);
            }}
            className="px-5 py-2 font-ui text-xs uppercase tracking-widest border border-border rounded bg-secondary/50 text-secondary-foreground transition-all duration-300 hover:bg-secondary hover:border-primary/30"
          >
            {!showUpdates && !showTeam ? "Show All" : "Hide All"}
          </button>
          <button
            onClick={() => setShowTeam(!showTeam)}
            className="px-5 py-2 font-ui text-xs uppercase tracking-widest border border-border rounded bg-secondary/50 text-secondary-foreground transition-all duration-300 hover:bg-secondary hover:border-primary/30"
          >
            {showTeam ? "Hide Team" : "Show Team"}
          </button>
        </motion.div>
      </div>

      {/* Server Updates - left panel */}
      <ServerUpdates visible={showUpdates} />

      {/* Team Panel - right panel */}
      <AnimatePresence>
        {showTeam && <TeamPanel />}
      </AnimatePresence>

      {/* Marquee text */}
      <MarqueeText />

      {/* Loading bar + percentage at bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="fixed bottom-3 right-6 z-50 flex items-center gap-3"
      >
        <div className="w-48">
          <LoadingBar />
        </div>
      </motion.div>

      {/* Bottom gradient line accent */}
      <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-40" />
    </div>
  );
};

export default Index;
