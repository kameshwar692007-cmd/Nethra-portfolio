"use client";

import React, { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

export interface ThemeToggleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (dark: boolean) => void;
  className?: string;
  duration?: number;
  size?: "sm" | "default";
}

/**
 * Quarry UI Theme Toggle augmented with Lightswind UI Circle-Spread View Transition animation.
 * Features a spring sliding thumb, track stars & clouds, spinning Sun/Moon icon,
 * and a full-page circular expanding wave radiating from the switch.
 */
export function ThemeToggle({
  checked,
  defaultChecked = true,
  onCheckedChange,
  className,
  duration = 450,
  size = "default",
}: ThemeToggleProps) {
  const [inner, setInner] = useState(defaultChecked);
  const dark = checked ?? inner;
  const buttonRef = useRef<HTMLButtonElement>(null);

  const set = useCallback(
    (v: boolean) => {
      setInner(v);
      onCheckedChange?.(v);
    },
    [onCheckedChange]
  );

  const toggleWithCircleSpread = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const nextDark = !dark;

      // Fallback for browsers that do not support View Transitions
      if (typeof document === "undefined" || !("startViewTransition" in document)) {
        set(nextDark);
        return;
      }

      // Calculate spatial coordinates for the expanding circle animation
      let x = window.innerWidth / 2;
      let y = window.innerHeight / 2;
      let maxRadius = Math.hypot(window.innerWidth, window.innerHeight);

      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
        maxRadius = Math.hypot(
          Math.max(rect.left, window.innerWidth - rect.left),
          Math.max(rect.top, window.innerHeight - rect.top)
        );
      }

      // Start view transition with synchronous React state flush
      const transition = (document as any).startViewTransition(() => {
        flushSync(() => {
          set(nextDark);
        });
      });

      try {
        await transition.ready;

        // Animate circular clip-path expanding outward across the entire screen
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      } catch (err) {
        // Safe fallback in case of aborted transitions
      }
    },
    [dark, set, duration]
  );

  const isSmall = size === "sm";
  const travel = isSmall ? 22 : 28;

  return (
    <button
      ref={buttonRef}
      role="switch"
      type="button"
      aria-checked={dark}
      aria-label="Toggle dark mode"
      title={dark ? "Switch to Soft Stone mode" : "Switch to Dark mode"}
      onClick={toggleWithCircleSpread}
      className={cn(
        "relative flex items-center overflow-hidden rounded-full border border-border p-1 transition-colors duration-500 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-xs shrink-0",
        isSmall ? "h-8 w-14" : "h-9 w-16 sm:h-10 sm:w-[4.5rem]",
        dark ? "bg-muted" : "bg-primary/25",
        className
      )}
    >
      {/* Stars in dark track */}
      <motion.span
        animate={{ opacity: dark ? 1 : 0, y: dark ? 0 : 8 }}
        transition={{ duration: 0.25 }}
        className="absolute left-2.5 top-1.5 size-0.5 rounded-full bg-foreground/70 shadow-[8px_6px_0_0_var(--foreground),3px_10px_0_0_var(--muted-foreground)] pointer-events-none"
      />

      {/* Cloud in light track */}
      <motion.span
        animate={{ opacity: dark ? 0 : 1, y: dark ? -8 : 0 }}
        transition={{ duration: 0.25 }}
        className="absolute bottom-1 right-2.5 h-1.5 w-4 rounded-full bg-background/80 pointer-events-none"
      />

      {/* Sliding spring thumb */}
      <motion.span
        animate={{ x: dark ? travel : 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
        className={cn(
          "relative z-10 grid place-items-center rounded-full bg-card text-foreground shadow-md border border-border/30",
          isSmall ? "size-6" : "size-7 sm:size-8"
        )}
      >
        <motion.span
          key={String(dark)}
          initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {dark ? (
            <Moon className={cn(isSmall ? "size-3.5" : "size-4", "text-foreground")} />
          ) : (
            <Sun className={cn(isSmall ? "size-3.5" : "size-4", "text-primary")} />
          )}
        </motion.span>
      </motion.span>
    </button>
  );
}

export default ThemeToggle;
