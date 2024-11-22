"use client";

import React, { useEffect, useState } from "react";
import { use } from "react";
import { TMDB_apiKey } from "@/config";
import axios from "axios";
import MovieCard from "@/components/MovieCard";
import { Skeleton } from "@/components/ui/skeleton";
import NavBar from "@/components/Navbar";

export default function Search({ params }) {
  const { name } = use(params);
  const [list, setList] = useState([]);

  const getImdb = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_apiKey}`,
      },
    };
    const response = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${name}&include_adult=false&language=en-US&page=1`, options);
    setList(response.data.results);
  };

  useEffect(() => {
    getImdb();
  }, [name]);

  const SkeletonCard = () => (
    <div className="shrink-0">
      <Skeleton className="h-[210px] w-[135px] rounded-xl" />
    </div>
  );

  return (
    <div className="mt-10 mb-6">
      {/* <div className="text-2xl font-bold mb-10">Results for {decodeURIComponent(name)}</div> */}
      <div className="grid grid-cols-6 gap-y-3">
        {list.length === 0 ? Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />) : list?.map((movie, index) => <MovieCard key={index} movie={movie} />)}
      </div>
    </div>
  );
}
