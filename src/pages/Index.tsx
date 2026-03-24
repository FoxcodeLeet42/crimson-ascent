import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "@/components/Particles";
import MusicPlayer from "@/components/MusicPlayer";
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
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src="https://r2.fivemanage.com/Ujypl4eMPLkcI5yNx6G9g/Untitleddesign.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Particles */}
      <Particles />

      {/* Main Content */}
      <div className="absolute inset-0 z-35 bg-transparent pointer-events-none">

        {/* Title Container */}
        <div className="absolute top-[4vh] left-0 w-full flex justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center pointer-events-auto"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-wider text-white animate-pulse-glow select-none leading-none mt-2" style={{ fontFamily: '"PricedownLocal", sans-serif' }}>
              WELCOME TO
            </h1>
            <div className="flex justify-center w-full -mt-4 -mb-8 relative z-10 pointer-events-none">
              <img
                src="/CRIMSON%20RP.svg"
                alt="CRIMSON RP"
                className="h-[80px] sm:h-[100px] md:h-[120px] lg:h-[150px] w-auto object-contain mx-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]"
              />
            </div>
            <h1 className="font-display text-6xl md:text-7xl font-bold tracking-wider text-white animate-pulse-glow select-none leading-none mt-1" style={{ fontFamily: '"PricedownLocal", sans-serif' }}>
              CITY
            </h1>
          </motion.div>
        </div>

        {/* Music Player & Toggle Buttons - Center Container */}
        <div className="absolute top-[60%] left-0 w-full -translate-y-1/2 flex justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-xl flex flex-col gap-4 pointer-events-auto"
          >
            <MusicPlayer />

            <div className="flex justify-center gap-4 mt-2">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.8)", borderColor: "rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => setShowUpdates(!showUpdates)}
                className="px-6 py-3 font-ui text-xs uppercase tracking-[0.2em] border border-white/20 rounded bg-black/40 text-white shadow-lg backdrop-blur-sm w-full transition-colors duration-200"
              >
                {showUpdates ? "HIDE CHRONICLES" : "VIEW CHRONICLES"}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.8)", borderColor: "rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => {
                  const allHidden = !showUpdates && !showTeam;
                  setShowUpdates(allHidden);
                  setShowTeam(allHidden);
                }}
                className="px-6 py-3 font-ui text-xs uppercase tracking-[0.2em] border border-white/20 rounded bg-black/40 text-white shadow-lg backdrop-blur-sm w-full transition-colors duration-200"
              >
                {!showUpdates && !showTeam ? "SHOW HUD" : "HIDE HUD"}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.8)", borderColor: "rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => setShowTeam(!showTeam)}
                className="px-6 py-3 font-ui text-xs uppercase tracking-[0.2em] border border-white/20 rounded bg-black/40 text-white shadow-lg backdrop-blur-sm w-full transition-colors duration-200"
              >
                {showTeam ? "HIDE CREDITS" : "VIEW CREDITS"}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Server Updates - left panel */}
      <ServerUpdates visible={showUpdates} />

      {/* Team Panel - right panel */}
      <AnimatePresence>
        {showTeam && <TeamPanel />}
      </AnimatePresence>

      {/* Marquee text */}
      <MarqueeText />

      {/* Bottom gradient line accent */}
      <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-40" />
    </div>
  );
};

export default Index;
