"use client";

import React from "react";

interface AntigravityCardProps {
  index: number;
  title: string;
  body: string;
}

const AntigravityCard = ({ index, title, body }: AntigravityCardProps) => {
  return (
    <div
      className="p-3 h-full animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
      style={{ animationDelay: `${(index % 4) * 100}ms` }}
    >
      <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 p-6 transition-all hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
        {/* Decorative background element */}
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-cyan-500/5 blur-3xl transition-all group-hover:bg-cyan-500/10" />

        <div className="relative flex h-full flex-col justify-between">
          <div>
            <span className="inline-block rounded-lg bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
              Post #{index + 1}
            </span>
            <h3 className="mt-4 line-clamp-2 text-xl font-semibold text-neutral-100 group-hover:text-white">
              {title}
            </h3>
            <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-neutral-400 group-hover:text-neutral-300">
              {body}
            </p>
          </div>

          <div className="mt-auto flex items-center justify-between">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-neutral-900 bg-neutral-800"
                  style={{
                    backgroundImage: `url(https://api.dicebear.com/7.x/avataaars/svg?seed=${index + i})`,
                    backgroundSize: "cover",
                  }}
                />
              ))}
            </div>
            <button className="text-xs font-semibold uppercase tracking-wider text-neutral-500 transition-colors hover:text-cyan-400">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntigravityCard;
