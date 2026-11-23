"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

function Word({ word, range, progress }) {
  const opacity = useTransform(progress, range, [0.22, 1]);
  const y = useTransform(progress, range, [4, 0]);
  return (
    <span className="relative mr-[0.28em] inline-block">
      <motion.span style={{ opacity, y }} className="inline-block text-white">
        {word}
      </motion.span>
    </span>
  );
}

/**
 * A paragraph that reads itself in as you scroll. Each word brightens in turn, so the eye is led
 * through the sentence at the pace of your scroll.
 * When completionPoint is < 1.0 (e.g. 0.8), all words reach full 100% white illumination
 * before the pinned scroll completes, keeping the page stable until fully revealed.
 */
export function ScrollTextReveal({
  text = "Good material is quiet. It does not shout for attention, it earns it, one clear word after another, until the whole idea is simply there.",
  scrollContainer,
  progress: externalProgress,
  offset = ["start 0.85", "end 0.45"],
  completionPoint = 0.8,
  className,
}) {
  const ref = useRef(null);
  const { scrollYProgress: internalProgress } = useScroll({
    target: ref,
    container: scrollContainer,
    offset,
  });
  const scrollYProgress = externalProgress || internalProgress;
  const words = text.split(" ");

  return (
    <p
      ref={ref}
      className={cn(
        "mx-auto max-w-4xl text-balance text-2xl sm:text-4xl lg:text-5xl font-medium leading-[1.3] tracking-tight text-[var(--foreground)]",
        className
      )}
    >
      {words.map((w, i) => {
        const start = (i / words.length) * completionPoint;
        const end = ((i + 1) / words.length) * completionPoint;
        return (
          <Word
            key={`${w}-${i}`}
            word={w}
            range={[start, end]}
            progress={scrollYProgress}
          />
        );
      })}
    </p>
  );
}

export default ScrollTextReveal;
