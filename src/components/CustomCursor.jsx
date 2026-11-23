import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function CustomCursor() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState("default"); // "default", "hover", "view", "drag", "explore"
  const [cursorLabel, setCursorLabel] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const isVisibleRef = useRef(false);
  const lastTargetRef = useRef(null);
  const lastStateRef = useRef({ state: "default", label: "" });

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for outer ring
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop devices with mouse pointer
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const onMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      // Check context element under pointer — only update React state when target actually changes
      const target = e.target ? e.target.closest("[data-cursor], button, a, [role='button']") : null;
      if (target !== lastTargetRef.current) {
        lastTargetRef.current = target;
        let newState = "default";
        let newLabel = "";

        if (target) {
          const customType = target.getAttribute("data-cursor");
          if (customType) {
            newState = customType;
            newLabel = target.getAttribute("data-cursor-label") || customType.toUpperCase();
          } else {
            newState = "hover";
            newLabel = "";
          }
        }

        if (newState !== lastStateRef.current.state || newLabel !== lastStateRef.current.label) {
          lastStateRef.current = { state: newState, label: newLabel };
          setCursorState(newState);
          setCursorLabel(newLabel);
        }
      }
    };

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  const isExpanded = cursorState !== "default";
  const hasLabel = Boolean(cursorLabel);

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer Spring Following Ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hasLabel ? 76 : isExpanded ? 46 : 28,
          height: hasLabel ? 76 : isExpanded ? 46 : 28,
          backgroundColor: hasLabel
            ? "#2f6bff"
            : isExpanded
            ? isDark
              ? "rgba(47, 107, 255, 0.2)"
              : "rgba(47, 107, 255, 0.15)"
            : isDark
            ? "rgba(255, 255, 255, 0.05)"
            : "rgba(30, 35, 42, 0.06)",
          borderColor: hasLabel
            ? "#2f6bff"
            : isExpanded
            ? "#2f6bff"
            : isDark
            ? "rgba(255, 255, 255, 0.35)"
            : "rgba(30, 35, 42, 0.45)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 260 }}
        className="rounded-full border flex items-center justify-center backdrop-blur-[1px] shadow-xs"
      >
        {hasLabel && (
          <span className="text-[10px] font-mono font-bold text-white tracking-widest uppercase select-none">
            {cursorLabel}
          </span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isExpanded ? 0 : 1,
          opacity: isExpanded ? 0 : 1,
          backgroundColor: isDark ? "#ffffff" : "#2f6bff",
        }}
        transition={{ duration: 0.15 }}
        className="w-1.5 h-1.5 rounded-full fixed top-0 left-0 shadow-xs"
      />
    </div>
  );
}
