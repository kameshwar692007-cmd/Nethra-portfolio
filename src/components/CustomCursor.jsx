import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState("default"); // "default", "hover", "view", "drag", "explore"
  const [cursorLabel, setCursorLabel] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(true);

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
      if (!isVisible) setIsVisible(true);

      // Check context element under pointer
      const target = e.target.closest("[data-cursor], button, a, [role='button']");
      if (target) {
        const customType = target.getAttribute("data-cursor");
        if (customType) {
          setCursorState(customType);
          setCursorLabel(target.getAttribute("data-cursor-label") || customType.toUpperCase());
        } else {
          setCursorState("hover");
          setCursorLabel("");
        }
      } else {
        setCursorState("default");
        setCursorLabel("");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

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
            ? "rgba(47, 107, 255, 0.9)"
            : isExpanded
            ? "rgba(47, 107, 255, 0.15)"
            : "rgba(255, 255, 255, 0.04)",
          borderColor: hasLabel
            ? "#2f6bff"
            : isExpanded
            ? "rgba(47, 107, 255, 0.6)"
            : "rgba(255, 255, 255, 0.3)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 260 }}
        className="rounded-full border flex items-center justify-center backdrop-blur-[1px]"
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
        }}
        transition={{ duration: 0.15 }}
        className="w-1.5 h-1.5 rounded-full bg-white fixed top-0 left-0"
      />
    </div>
  );
}
