"use client";

import React, { useState, useRef, useCallback } from "react";

interface VirtualizedListProps {
  itemHeight: number;
  totalItems: number;
  itemsPerRow: number;
  renderItem: (index: number) => React.ReactNode;
  buffer?: number;
}

const VirtualizedList = ({
  itemHeight,
  totalItems,
  itemsPerRow,
  renderItem,
  buffer = 2,
}: VirtualizedListProps) => {
  const [scrollTop, setScrollTop] = useState(0);
  const rafRef = useRef<number | null>(null);

  const totalRows = Math.ceil(totalItems / itemsPerRow);
  const viewportHeight = 800; // This should ideally be measured, but hardcoded for now

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const targetScrollTop = e.currentTarget.scrollTop;
    rafRef.current = requestAnimationFrame(() => {
      setScrollTop(targetScrollTop);
    });
  }, []);

  const startRow = Math.max(0, Math.floor(scrollTop / itemHeight) - buffer);
  const endRow = Math.min(
    totalRows,
    Math.ceil((scrollTop + viewportHeight) / itemHeight) + buffer,
  );

  const visibleItems = [];
  for (let i = startRow * itemsPerRow; i < endRow * itemsPerRow; i++) {
    if (i < totalItems) {
      visibleItems.push(renderItem(i));
    }
  }

  return (
    <div
      className="flex-1 overflow-y-auto no-scrollbar outline-none"
      onScroll={handleScroll}
      style={{ height: "100%" }}
    >
      <div
        style={{
          height: totalRows * itemHeight,
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            transform: `translateY(${startRow * itemHeight}px)`,
            willChange: "transform",
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full"
        >
          {visibleItems}
        </div>
      </div>
    </div>
  );
};

export default VirtualizedList;
