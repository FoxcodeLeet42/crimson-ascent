import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  color: string;
}

const teamMembers: TeamMember[] = [
  { name: "DIEGO BLANCO", role: "CEO", color: "text-crimson-glow" },
  { name: "MM3", role: "DEV LEAD", color: "text-neon-red" },

];

const roleOrder: Record<string, number> = {
  CEO: 0, "DEV LEAD": 1, DIRECTOR: 2, STAFF: 3,
};

const roleBadgeStyle: Record<string, string> = {
  CEO: "bg-crimson-glow/20 border-crimson-glow/40 text-crimson-glow",
  "DEV LEAD": "bg-neon-red/15 border-neon-red/30 text-neon-red",
  DIRECTOR: "bg-primary/15 border-primary/30 text-primary",
  STAFF: "bg-muted border-border text-muted-foreground",
};

const TeamPanel = () => {
  const sorted = [...teamMembers].sort((a, b) => roleOrder[a.role] - roleOrder[b.role]);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-30">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 40 }}
        transition={{ duration: 0.5 }}
        className="w-[320px] max-h-[420px] bg-black/40 border border-crimson/50 rounded flex flex-col"
      >
        <div className="px-6 pt-6 pb-4 text-center">
          <h3 className="font-display text-lg uppercase tracking-[0.3em] text-crimson-glow font-bold">
            BEHIND THE CITY
          </h3>
          <div className="h-px bg-gradient-to-r from-transparent via-crimson/50 to-transparent mt-3" />
        </div>

        <div className="flex-1 overflow-y-auto relative scrollbar-hide pb-4">
          <div className="sticky top-0 h-6 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none" />

          <div className="space-y-1">
            {sorted.map((member, i) => (
              <div
                key={i}
                className="px-6 py-3 flex items-center justify-between group hover:bg-secondary/30 transition-colors gap-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src="/1.jpg"
                    alt={member.name}
                    className="w-10 h-10 rounded border border-white/20 object-cover shadow-sm bg-black/60"
                  />
                  <span className={`font-ui text-base font-medium ${member.color}`}>
                    {member.name}
                  </span>
                </div>
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
    </div>
  );
};

export default TeamPanel;
