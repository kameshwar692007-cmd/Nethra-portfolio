import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "../lib/utils";

const WORDS = [
  "7 Sovereign Patents",
  "Clinical AI Precision Oncology",
  "Predictive Power Telemetry",
  "38 Districts Statewide Infrastructure",
  "Hardware-Software Co-Design",
  "Deep-Tech Architecture",
  "UK IPO Registered #6518777",
  "CIPO Canada Registered #1249257",
  "IP India Certified #LD-20260188338",
  "Tamil Nadu Volunteers IT",
];

/**
 * TextMarquee from Quarry UI
 * A slim, infinitely scrolling strip of keywords separated by sparkles.
 * Styled with shadcn/Quarry theme tokens and fluid width.
 */
export function TextMarquee({
  words = WORDS,
  duration = 55,
  className,
}) {
  const group = (suffix) =>
    words.map((word) => (
      <span key={`${suffix}-${word}`} className="flex items-center gap-8 shrink-0">
        <span className="text-sm sm:text-base font-semibold tracking-tight text-[var(--foreground)] opacity-90 font-mono">
          {word}
        </span>
        <Sparkles className="w-4 h-4 text-[#2f6bff] shrink-0" />
      </span>
    ));

  return (
    <div
      className={cn(
        "w-full overflow-hidden border-y border-[var(--border)] bg-[var(--surface)] py-4 select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <motion.div
        className="flex w-max items-center gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {group("a")}
        {group("b")}
        {group("c")}
        {group("d")}
      </motion.div>
    </div>
  );
}

export default TextMarquee;
