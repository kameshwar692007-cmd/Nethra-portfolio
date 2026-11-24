"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

export interface ToggleThemeProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
  animationType?: "circle-spread";
}

/**
 * Lightswind UI ToggleTheme component restricted specifically to the circle-spread animation
 * utilizing the modern View Transition API.
 */
export const ToggleTheme = ({
  className,
  duration = 450,
  animationType = "circle-spread",
  ...props
}: ToggleThemeProps) => {
  const [isDark, setIsDark] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!buttonRef.current) return;

    const newTheme = !isDark;

    if (typeof document === "undefined" || !("startViewTransition" in document)) {
      setIsDark(newTheme);
      document.documentElement.classList.toggle("dark", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme ? "dark" : "soft-stone");
      localStorage.setItem("nethra_portfolio_theme", newTheme ? "dark" : "soft-stone");
      return;
    }

    const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    );

    const transition = (document as any).startViewTransition(() => {
      flushSync(() => {
        setIsDark(newTheme);
        document.documentElement.classList.toggle("dark", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme ? "dark" : "soft-stone");
        localStorage.setItem("nethra_portfolio_theme", newTheme ? "dark" : "soft-stone");
      });
    });

    try {
      await transition.ready;

      // Circle-spread animation only
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
      // Graceful fallback
    }
  }, [isDark, duration]);

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "p-2 rounded-full transition-colors duration-300 border border-border bg-card text-foreground hover:border-primary/50 shadow-xs focus:outline-none select-none",
        isDark ? "hover:text-primary" : "hover:text-primary",
        className
      )}
      {...props}
    >
      {isDark ? <Sun className="h-5 w-5 text-primary" /> : <Moon className="h-5 w-5 text-foreground" />}
    </button>
  );
};

export default ToggleTheme;
