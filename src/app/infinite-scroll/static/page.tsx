import InfiniteScroll from "@/components/test/infinite-scroll";
import ListItem from "@/components/test/list-item";
import React from "react";

// export const dynamic = "force-dynamic";
export const dynamic = "force-static";

const InfiniteScrollPage = async () => {
  const renderedRowsCount = 5;
  const nodesPerRow = 4;
  const startIndex = 0;

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await res.json();

  console.log(data);

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
