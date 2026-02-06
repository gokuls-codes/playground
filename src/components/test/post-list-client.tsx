"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import VirtualizedList from "./virtualized-list";
import AntigravityCard from "./antigravity-card";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostListClientProps {
  initialPosts: Post[];
}

const PostListClient = ({ initialPosts }: PostListClientProps) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const [itemHeight, setItemHeight] = useState(400);
  const hasMoreRef = useRef(true);

  // Responsive logic to match Tailwind breakpoints
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Update itemsPerRow and itemHeight consistently
      if (width < 640) {
        setItemsPerRow(1);
        setItemHeight(350); // Slightly shorter cards for mobile list
      } else if (width < 1280) {
        setItemsPerRow(2);
        setItemHeight(380); // Moderate height for tablet
      } else {
        setItemsPerRow(4);
        setItemHeight(400); // Standard height for desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    setMounted(true);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMoreRef.current) return;

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`,
      );
      const newPosts = await res.json();

      if (newPosts.length === 0) {
        hasMoreRef.current = false;
      } else {
        setPosts((prev) => [...prev, ...newPosts]);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Failed to fetch more posts:", error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, page]);

  // Fallback for SSR/SEO (JS disabled)
  if (!mounted) {
    return (
      <div className="flex-1 overflow-y-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full">
          {posts.map((post, index) => (
            <div key={post.id + "-" + index} className="h-[400px]">
              <AntigravityCard
                index={index}
                title={post.title}
                body={post.body}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col min-h-0 relative h-full">
      <VirtualizedList
        itemHeight={itemHeight}
        totalItems={posts.length}
        itemsPerRow={itemsPerRow}
        buffer={3}
        onEndReached={loadMore}
        renderItem={(index) => (
          <div
            key={posts[index].id + "-" + index}
            style={{ height: itemHeight }}
          >
            <AntigravityCard
              index={index}
              title={posts[index].title}
              body={posts[index].body}
            />
          </div>
        )}
      />
      {isLoading && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-neutral-900/80 border border-cyan-500/30 rounded-full backdrop-blur-md shadow-2xl z-50">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce [animation-delay:-.3s]" />
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce [animation-delay:-.5s]" />
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest ml-2">
              Syncing Data...
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostListClient;
