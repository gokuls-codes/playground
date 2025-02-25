"use client";

import React, { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";

const InfiniteScroll = () => {
  const elementHeight = 400;
  const numberOfRows = 200;

  const [scrollTop, setScrollTop] = useState(0);
  const startIndex = Math.max(0, Math.floor(scrollTop / elementHeight));
  const renderedRows = 5;
  //   let renderedNodesCount = 40;
  const nodesPerRow = 4;

  const renderedNodesCount = Math.min(
    numberOfRows - startIndex,
    renderedRows * nodesPerRow
  );

  return (
    <ScrollArea
      className=" flex-1 overflow-y-auto"
      onScroll={(e) => {
        console.log("scroll event");
        setScrollTop(e.currentTarget.scrollTop);
      }}
    >
      <div style={{ height: numberOfRows * elementHeight }}>
        <div className=" w-full ">
          <div
            style={{
              transform: `translateY(${startIndex * elementHeight}px)`,
            }}
            className=" grid grid-cols-4 w-full gap-4"
          >
            {Array.from({ length: renderedNodesCount }).map((_, index) => (
              <div key={index} className=" bg-blue-600 h-[400px]">
                {index + startIndex * nodesPerRow}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default InfiniteScroll;
