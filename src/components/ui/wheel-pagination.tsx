"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface WheelPaginationProps {
  totalPages?: number;
  className?: string;
  visibleCount?: number; // Number of pages visible at once
  onChange?: (page: number) => void;
  currentPage?: number;
}

export default function WheelPagination({
  totalPages = 50,
  visibleCount = 5,
  className,
  onChange,
  currentPage,
}: WheelPaginationProps) {
  const [active, setActive] = useState(currentPage ?? 0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastWheelTime = useRef(0);

  useEffect(() => {
    if (currentPage !== undefined && currentPage !== active) {
      setActive(currentPage);
    }
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    const clamped = Math.max(0, Math.min(newPage, totalPages - 1));
    setActive(clamped);
    if (onChange) onChange(clamped);
  };

  const prevPage = () => handlePageChange(active - 1);
  const nextPage = () => handlePageChange(active + 1);

  const handleWheel = (e: WheelEvent) => {
    // Only handle horizontal wheeling or shift+wheel so normal page scrolling NEVER glitches or freezes
    const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
    if (!isHorizontal && !e.shiftKey) {
      return;
    }

    e.preventDefault();
    const now = Date.now();
    if (now - lastWheelTime.current < 180) return;
    lastWheelTime.current = now;

    const delta = isHorizontal ? e.deltaX : e.deltaY;
    if (delta < 0) handlePageChange(active - 1);
    else if (delta > 0) handlePageChange(active + 1);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [active, totalPages]);

  // Determine visible pages based on active
  const getVisiblePages = () => {
    const pages = [];
    const half = Math.floor(visibleCount / 2);
    let start = active - half;
    let end = active + half;

    if (start < 0) {
      end += -start;
      start = 0;
    }
    if (end > totalPages - 1) {
      start -= end - (totalPages - 1);
      end = totalPages - 1;
      if (start < 0) start = 0;
    }

    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex items-center gap-2 p-4 select-none cursor-pointer",
        className
      )}
    >
      {/* Previous arrow */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevPage}
        disabled={active === 0}
        className="text-gray-400 hover:text-primary disabled:opacity-40 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      {/* Page numbers carousel */}
      <div className="flex gap-2">
        {visiblePages.map((p) => (
          <motion.div
            key={p}
            layout
            animate={{ scale: active === p ? 1.25 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={cn(
              "w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full font-medium text-xs sm:text-sm min-h-[36px] sm:min-h-[40px] cursor-pointer transition-colors",
              active === p
                ? "bg-[#2f6bff] text-white border border-[#2f6bff] shadow-md font-bold"
                : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
            )}
            onClick={() => handlePageChange(p)}
          >
            {p + 1}
          </motion.div>
        ))}
      </div>

      {/* Next arrow */}
      <Button
        variant="ghost"
        size="icon"
        onClick={nextPage}
        disabled={active === totalPages - 1}
        className="text-gray-400 hover:text-primary disabled:opacity-40 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
}
