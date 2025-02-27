import InfiniteScroll from "@/components/test/infinite-scroll";
import ListItem from "@/components/test/list-item";
import React from "react";

const InfiniteScrollPage = () => {
  const renderedRowsCount = 5;
  const nodesPerRow = 4;
  const startIndex = 0;

  return (
    <main className=" h-screen flex flex-col ">
      <h1 className=" text-4xl font-semibold p-4">Infinite scroll</h1>
      <InfiniteScroll>
        {Array.from({ length: renderedRowsCount * nodesPerRow }).map(
          (_, index) => (
            <ListItem
              key={index}
              index={index}
              startIndex={startIndex}
              nodesPerRow={nodesPerRow}
            />
          )
        )}
      </InfiniteScroll>
    </main>
  );
};

export default InfiniteScrollPage;
