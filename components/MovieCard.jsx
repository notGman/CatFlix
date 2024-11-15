"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function MovieCard({ movie }) {
  const { id, title, poster_path, name, vote_average } = movie;
  const router = useRouter();

  const handleClick = (e) => {
    if (name) router.push(`/search/tv/${encodeURIComponent(e)}/${id}`);
    else router.push(`/search/movie/${encodeURIComponent(e)}/${id}`);
  };

  const imageUrl = `https://image.tmdb.org/t/p/w200${poster_path}`;

  if (!poster_path) return null;

  return (
    <div
      className="relative cursor-pointer hover:scale-[1.05] transition-all"
      onClick={() => handleClick(title ? title : name)}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "17em",
        width: "11em",
      }}
    >
      <div className="absolute bottom-0 left-0 w-full h-4/5 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute top-3/4 left-0 w-full p-2 break-all text-white">
        <div className="flex flex-wrap gap-x-1 leading-5">
          {(title || name || "").split(" ").map((word, index) => (
            <div key={index} className="text-sm text-zinc-300">
              {word}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
