import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "../lib/utils";

const DEFAULT_WORDS = [
  "7 Sovereign Patents",
  "Clinical AI Precision Medicine",
  "Predictive Power Telemetry",
  "Statewide Civic Infrastructure",
  "Hardware-Software Co-Design",
  "Tamil Nadu Volunteers (38 Districts)",
  "Annexra Technologies",
  "IoT Warning Hardware",
];

export function TextMarquee({
  words = DEFAULT_WORDS,
  duration = 50,
  className,
}) {
  const group = (suffix) =>
    words.map((word) => (
      <span key={`${suffix}-${word}`} className="flex items-center gap-8 shrink-0">
        <span className="text-sm sm:text-base font-semibold tracking-tight text-foreground/85 font-mono">
          {word}
        </span>
        <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
      </span>
    ));

  return (
    <div
      className={cn(
        "w-full overflow-hidden border-y border-white/10 bg-[#07090e] py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
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
