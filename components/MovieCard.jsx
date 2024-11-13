"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function MovieCard({ movie }) {
  const { original_title, overview, release_date, title, poster_path, name } =
    movie;
  const router = useRouter();

  const handleClick = (e) => {
    if (name) router.push(`/search/tv/${encodeURIComponent(e)}`);
    else router.push(`/search/movie/${encodeURIComponent(e)}`);
  };

  if(!poster_path) return 

  return (
    <div
      className="cursor-pointer hover:scale-[1.05] transition-all"
      onClick={() => handleClick(title ? title : name)}
    >
      <img
        className="rounded-xl h-[20em]"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title ? title : name}
      />
    </div>
  );
}
