"use client";

import MovieCard from "./MovieCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function CardSlider({ list, type, field }) {
  return (
    <div className="my-10">
      <div className="capitalize text-2xl font-bold mb-5">
        {String(field).replace("_", " ")} in {type}
      </div>
      <ScrollArea className="w-full whitespace-nowrap overflow-hidden rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {list?.map((movie, index) => (
            <figure key={movie.id} className="shrink-0">
              <MovieCard key={index} movie={movie} />
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
