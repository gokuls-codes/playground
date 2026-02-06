import PostListClient from "@/components/test/post-list-client";
import React from "react";

export const dynamic = "force-dynamic";

const AntigravityInfiniteScrollPage = async () => {
  // 1. Fetch only the first page on the Server (SEO Friendly)
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20",
  );
  const initialPosts = await res.json();

  return (
    <main className="h-screen flex flex-col bg-black text-white">
      <div className="flex items-center justify-between p-8 border-b border-neutral-800 bg-black/50 backdrop-blur-md sticky top-0 z-10">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent italic tracking-tighter">
            ANTIGRAVITY
          </h1>
          <p className="text-neutral-500 text-sm mt-1">
            Dynamic Pagination + Virtualization • Native Scrolling
          </p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 rounded-full border border-neutral-800 text-xs font-mono text-cyan-500">
            DYNAMIC FETCHING
          </div>
        </div>
      </div>

      <div className="flex-1 w-full max-w-[1600px] mx-auto overflow-hidden px-4 flex flex-col">
        {/* 
          2. Pass the initial data to the Client Component. 
          It will handle loading more data as the user reaches the end.
        */}
        <PostListClient initialPosts={initialPosts} />
      </div>
    </main>
  );
};

export default AntigravityInfiniteScrollPage;
