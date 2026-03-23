import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  color: string;
}

const teamMembers: TeamMember[] = [
  { name: "RedKing", role: "CEO", color: "text-crimson-glow" },
  { name: "Shadow", role: "Co-Owner", color: "text-crimson" },
  { name: "Vortex", role: "Manager", color: "text-neon-red" },
  { name: "Blaze", role: "Admin", color: "text-primary" },
  { name: "Phantom", role: "Admin", color: "text-primary" },
  { name: "Nova", role: "Admin", color: "text-primary" },
  { name: "Cipher", role: "Staff", color: "text-muted-foreground" },
  { name: "Raven", role: "Staff", color: "text-muted-foreground" },
  { name: "Striker", role: "Staff", color: "text-muted-foreground" },
  { name: "Ghost", role: "Staff", color: "text-muted-foreground" },
  { name: "Apex", role: "Staff", color: "text-muted-foreground" },
];

const roleOrder: Record<string, number> = {
  CEO: 0, "Co-Owner": 1, Manager: 2, Admin: 3, Staff: 4,
};

const roleBadgeStyle: Record<string, string> = {
  CEO: "bg-crimson-glow/20 border-crimson-glow/40 text-crimson-glow",
  "Co-Owner": "bg-crimson/20 border-crimson/40 text-crimson",
  Manager: "bg-neon-red/15 border-neon-red/30 text-neon-red",
  Admin: "bg-primary/15 border-primary/30 text-primary",
  Staff: "bg-muted border-border text-muted-foreground",
};

const TeamPanel = () => {
  const sorted = [...teamMembers].sort((a, b) => roleOrder[a.role] - roleOrder[b.role]);
  const doubled = [...sorted, ...sorted];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="fixed right-0 top-0 h-screen w-72 bg-gradient-to-l from-background/95 via-background/80 to-transparent backdrop-blur-sm z-30 flex flex-col"
    >
      <div className="px-6 pt-8 pb-4">
        <h3 className="font-display text-sm uppercase tracking-[0.3em] text-primary">
          Server Team
        </h3>
        <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mt-3" />
      </div>

      <div className="flex-1 overflow-hidden relative">
        <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-background/90 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background/90 to-transparent z-10" />

        <div className="animate-scroll-team hover:[animation-play-state:paused]">
          {doubled.map((member, i) => (
            <div
              key={i}
              className="px-6 py-3 flex items-center justify-between group hover:bg-secondary/30 transition-colors"
            >
              <span className={`font-ui text-sm font-medium ${member.color}`}>
                {member.name}
              </span>
              <span
                className={`text-[10px] font-ui uppercase tracking-wider px-2 py-0.5 rounded border ${roleBadgeStyle[member.role]}`}
              >
                {member.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamPanel;
