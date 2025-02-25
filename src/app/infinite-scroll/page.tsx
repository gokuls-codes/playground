import InfiniteScroll from "@/components/test/infinite-scroll";
import React from "react";

const InfiniteScrollPage = () => {
  return (
    <main className=" h-screen p-4 flex flex-col gap-4">
      <h1 className=" text-4xl font-semibold">Infinite scroll</h1>
      <InfiniteScroll />
    </main>
  );
};

export default InfiniteScrollPage;
