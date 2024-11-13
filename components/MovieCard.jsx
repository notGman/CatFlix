"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function MovieCard({ movie }) {
  
  const { id, title, poster_path, name } = movie;
  const router = useRouter();

  const handleClick = (e) => {
    if (name) router.push(`/search/tv/${encodeURIComponent(e)}/${id}`);
    else router.push(`/search/movie/${encodeURIComponent(e)}/${id}`);
  };

  const imageLoader = ({ path }) => {
    return `https://image.tmdb.org/t/p/w200${poster_path}`;
  };

  if (!poster_path) return null;

  return (
    <div
      className="cursor-pointer hover:scale-[1.05] transition-all"
      onClick={() => handleClick(title ? title : name)}
    >
      <Image
        loader={imageLoader}
        src={poster_path}
        className="rounded-sm"
        width={150}
        height={100}
        alt={title ? title : name}
        quality={10}
        loading="lazy"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
}
