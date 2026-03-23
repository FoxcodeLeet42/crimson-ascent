import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Update {
  version: string;
  date: string;
  description: string;
}

const updates: Update[] = [
  {
    version: "Update 3.0",
    date: "15.03.2026",
    description:
      "New vehicle system, improved police mechanics, custom housing interiors, and performance optimizations across all zones.",
  },
  {
    version: "Update 2.0",
    date: "10.01.2026",
    description:
      "Introducing advanced features, refined mechanics, and even more opportunities to craft your story. The adventure evolves!",
  },
  {
    version: "Update 1.0",
    date: "01.11.2025",
    description:
      "Experience immersive roleplay with custom scripts, dynamic storylines, and a community-driven world.",
  },
];

const ServerUpdates = ({ visible }: { visible: boolean }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.5 }}
          className="fixed left-0 top-0 h-screen w-80 bg-gradient-to-r from-background/95 via-background/80 to-transparent backdrop-blur-sm z-30 flex flex-col"
        >
          <div className="px-6 pt-8 pb-4">
            <h3 className="font-display text-sm uppercase tracking-[0.3em] text-primary">
              Server Updates
            </h3>
            <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mt-3" />
          </div>

          <div className="flex-1 overflow-y-auto px-6 space-y-4 scrollbar-hide">
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
      )}
    </AnimatePresence>
  );
};

export default ServerUpdates;
