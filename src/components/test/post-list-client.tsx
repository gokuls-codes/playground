"use client";

import React, { useState, useEffect } from "react";
import VirtualizedList from "./virtualized-list";
import AntigravityCard from "./antigravity-card";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostListClientProps {
  posts: Post[];
}

const PostListClient = ({ posts }: PostListClientProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // For SEO/Initial Load: Render the first 12 items statically
  // until the components hydrates and takes over with virtualization.
  if (!mounted) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {posts.slice(0, 12).map((post, index) => (
          <AntigravityCard
            key={post.id + "-" + index}
            index={index}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    );
  }

  return (
    <VirtualizedList
      itemHeight={400}
      totalItems={posts.length}
      itemsPerRow={4}
      buffer={3}
      renderItem={(index) => (
        <AntigravityCard
          key={index}
          index={index}
          title={posts[index].title}
          body={posts[index].body}
        />
      )}
    />
  );
};

export default PostListClient;
