import React, { memo, useMemo } from "react";
import { ExternalLink, Swords } from "lucide-react";
import { motion } from "framer-motion";

// --- Animation Variants (The "Staggered Entrance" Pattern) ---
// Master container for the entire section
const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Single variant for all items that animate in
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// --- Main Component ---
function CompetitiveProgrammingComponent() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        variants={sectionContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full space-y-12"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight flex flex-col sm:flex-row items-center sm:items-baseline justify-center gap-2 sm:gap-4 text-foreground text-center">
            <Swords className="w-8 h-8 text-primary drop-shadow-sm flex-shrink-0" />
            <span>Competitive Programming</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm just getting started with my competitive programming journey.
            Check out my LeetCode profile below!
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-sm">
          <div className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center bg-background shadow border border-border/60 mb-4">
              <img
                src="/assets/logos/leetcode.png"
                alt="LeetCode Logo"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="text-lg font-semibold text-foreground">LeetCode</div>
            <div className="text-sm text-muted-foreground mt-2 mb-4">
              <span className="text-foreground/80">Handle:</span>{" "}
              <span className="font-medium text-foreground/80">bijay987987</span>
            </div>
            <a 
              href="https://leetcode.com/u/bijay987987/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline dark:hover:text-primary-foreground/70 transition"
            >
              <ExternalLink className="w-4 h-4" />
              View Profile
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default React.memo(CompetitiveProgrammingComponent);