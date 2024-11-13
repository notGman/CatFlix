"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function MovieCard({ movie }) {
  const { original_title, overview, release_date, title, poster_path, name } =
    movie;
  const router = useRouter();

  const handleClick = (e) => {
    if (name) router.push(`/search/tv/${encodeURIComponent(e)}`);
    else router.push(`/search/movie/${encodeURIComponent(e)}`);
  };

  const imageLoader = ({path}) =>{
    return `https://image.tmdb.org/t/p/w500${poster_path}`
  }

  if (!poster_path) return;

  return (
    <div
      className="cursor-pointer hover:scale-[1.05] transition-all"
      onClick={() => handleClick(title ? title : name)}
    >
      <Image
        loader={imageLoader}
        src={poster_path}
        className="rounded-xl h-[20em]"
        width={200}
        height={500}
        alt={title ? title : name}
      />
    </div>
  );
}
