import PostListClient from "@/components/test/post-list-client";
import React from "react";

export const dynamic = "force-dynamic";

const AntigravityInfiniteScrollPage = async () => {
  // 1. Fetch data on the Server (SEO Friendly)
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // Multiply data to simulate a very large list (1000 items)
  const hugeData = Array.from({ length: 10 }).flatMap(() => posts);

  return (
    <main className="h-screen flex flex-col bg-black text-white">
      <div className="flex items-center justify-between p-8 border-b border-neutral-800 bg-black/50 backdrop-blur-md sticky top-0 z-10">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent italic tracking-tighter">
            ANTIGRAVITY
          </h1>
          <p className="text-neutral-500 text-sm mt-1">
            Hybrid SSR + Virtualized Infinite Scroll •{" "}
            {hugeData.length.toLocaleString()} items
          </p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 rounded-full border border-neutral-800 text-xs font-mono text-cyan-500">
            SEO OPTIMIZED
          </div>
        </div>
      </div>

      <div className="flex-1 w-full max-w-[1600px] mx-auto overflow-hidden px-4">
        {/* 
          2. Pass the data to a Client Component. 
          The Client Component will handle the virtualization logic.
        */}
        <PostListClient posts={hugeData} />
      </div>
    </main>
  );
};

export default AntigravityInfiniteScrollPage;
