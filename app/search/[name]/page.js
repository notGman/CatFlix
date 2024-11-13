"use client";

import React, { useEffect, useState } from "react";
import { use } from "react";
import { TMDB_apiKey } from "@/config";
import axios from "axios";
import MovieCard from "@/components/MovieCard";

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
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?query=${name}&include_adult=false&language=en-US&page=1`,
      options
    );
    console.log(response.data.results);
    setList(response.data.results);
  };

  useEffect(() => {
    getImdb();
  }, []);

  return (
    <div>
      <div className="text-2xl font-bold mb-10">{decodeURIComponent(name)}</div>
      <div className="grid grid-cols-6 gap-5">
        {list?.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}
