import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ActionButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.5 }}
      className="flex gap-4"
    >
      <a
        href="https://discord.gg/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative px-6 py-2.5 font-ui text-sm uppercase tracking-widest border border-primary/40 rounded bg-primary/10 text-primary-foreground transition-all duration-300 hover:bg-primary/30 hover:border-primary/60 hover:scale-105 box-glow-crimson"
      >
        <span className="flex items-center gap-2">
          Join Discord
          <ExternalLink size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
        </span>
      </a>
      <a
        href="https://crimsonrp.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group px-6 py-2.5 font-ui text-sm uppercase tracking-widest border border-border rounded bg-secondary/50 text-secondary-foreground transition-all duration-300 hover:bg-secondary hover:border-primary/30 hover:scale-105"
      >
        <span className="flex items-center gap-2">
          Visit Website
          <ExternalLink size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
        </span>
      </a>
    </motion.div>
  );
};

export default ActionButtons;
