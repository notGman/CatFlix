"use client";

import React, { useRef, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { TMDB_apiKey } from "@/config";
import axios from "axios";
import MovieCard from "@/components/MovieCard";

export default function SearchPage({ searchQuery }) {
  const [list, setList] = useState([]);

  const getImdb = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_apiKey}`,
      },
    };
    const response = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${searchQuery}&include_adult=false&language=en-US&page=1`, options);
    console.log(response);

    setList(response.data.results);
  };

  useEffect(() => {
    if (searchQuery) getImdb();
  }, [searchQuery]);

  const SkeletonCard = () => (
    <div className="shrink-0">
      <Skeleton className="h-[17em] w-[11em] rounded-xl" />
    </div>
  );

  return (
    <>
      <div>
        {/* {data.length >= 3 ? <div className="text-2xl font-bold hidden md:flex">Results</div> : ""} */}
        <div className="md:flex md:flex-wrap lg:grid grid-cols-7 justify-center items-center md:items-start gap-5 my-10">
          {(searchQuery.length >= 3) & (list.length === 0)
            ? Array.from({ length: 5 }).map((_, index) => <SkeletonCard key={index} />)
            : list?.map((movie, index) => <MovieCard key={index} movie={movie} />)}
        </div>
      </div>
    </>
  );
}
