"use client";

import React, { useState } from "react";
import ListItem from "./list-item";

const InfiniteScroll = ({ children }: { children?: React.ReactNode[] }) => {
  const elementHeight = 400;
  const numberOfRows = 100;

  const [scrollTop, setScrollTop] = useState(0);
  const startIndex = Math.max(0, Math.floor(scrollTop / elementHeight));
  const renderedRows = 5;
  //   let renderedNodesCount = 40;
  const nodesPerRow = 4;

  let renderedNodesCount = Math.min(
    numberOfRows * nodesPerRow - startIndex * nodesPerRow,
    renderedRows * nodesPerRow
  );

  if (startIndex < 5) {
    renderedNodesCount = renderedNodesCount - (5 - startIndex) * nodesPerRow;
  }

  console.log("startIndex", startIndex);
  //   console.log(children?.length);

  return (
    <div
      className=" flex-1 overflow-y-auto no-scrollbar "
      onScroll={(e) => {
        // console.log("scroll event");
        setScrollTop(e.currentTarget.scrollTop);
      }}
    >
      <div style={{ height: numberOfRows * elementHeight }}>
        <div className=" w-full ">
          <div
            style={{
              transform: `translateY(${startIndex * elementHeight}px)`,
            }}
            className=" grid grid-cols-4 w-full "
          >
            {startIndex < 5 &&
              children?.filter((_, index) => index >= startIndex * nodesPerRow)}

            {Array.from({
              length:
                renderedNodesCount -
                (children?.filter(
                  (_, index) => index >= startIndex * nodesPerRow
                ).length as number),
            }).map((_, index) => (
              <ListItem
                key={index}
                index={index}
                startIndex={startIndex + 2}
                nodesPerRow={nodesPerRow}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
