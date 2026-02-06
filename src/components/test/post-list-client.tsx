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
  const [page, setPage] = useState(2); // Since page 1 is SSR'd
  const hasMoreRef = useRef(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMoreRef.current) return;

    setIsLoading(true);
    try {
      // Simulate network delay for a more realistic feel
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

  // For SEO/Initial Load: Render until hydrated
  if (!mounted) {
    return (
      <div className="flex-1 overflow-y-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {posts.map((post, index) => (
            <AntigravityCard
              key={post.id + "-" + index}
              index={index}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col min-h-0 relative h-full">
      <VirtualizedList
        itemHeight={400}
        totalItems={posts.length}
        itemsPerRow={4}
        buffer={3}
        onEndReached={loadMore}
        renderItem={(index) => (
          <AntigravityCard
            key={posts[index].id + "-" + index}
            index={index}
            title={posts[index].title}
            body={posts[index].body}
          />
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
