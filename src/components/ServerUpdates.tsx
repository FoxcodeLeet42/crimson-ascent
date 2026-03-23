import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Update {
  version: string;
  date: string;
  description: string;
}

const updates: Update[] = [
  {
    version: "Version 1.0",
    date: "LAUNCH DAY",
    description:
      "Welcome to the official launch of Crimson City! Step into a new era of immersive roleplay with custom scripts, dynamic storylines, and a mature, community-driven world. Your destiny begins here.",
  },
];

const ServerUpdates = ({ visible }: { visible: boolean }) => {
  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed left-8 top-1/2 -translate-y-1/2 z-30">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="w-[320px] max-h-[75vh] bg-black/40 border border-crimson/50 rounded flex flex-col"
          >
            <div className="px-6 pt-6 pb-4 text-center">
              <h3 className="font-display text-lg uppercase tracking-[0.3em] text-crimson-glow font-bold">
                CITY CHRONICLES
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-crimson/50 to-transparent mt-3" />
            </div>

            <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-4 scrollbar-hide">
              {updates.map((update, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="border border-border rounded-lg p-4 bg-card/50"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-ui text-xs uppercase tracking-wider px-2 py-0.5 rounded border border-primary/30 bg-primary/10 text-primary">
                      {update.version}
                    </span>
                    <span className="font-ui text-xs text-muted-foreground">
                      {update.date}
                    </span>
                  </div>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    {update.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServerUpdates;
