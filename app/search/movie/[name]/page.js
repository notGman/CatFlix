"use client";

import React, { useEffect, useState } from "react";
import { use } from "react";
import { OMDB_apiKey } from "@/config";
import axios from "axios";

export default function SearchMovie({ params }) {
  const { name } = use(params);;
  const [movieIMDB, setMovieIMDB] = useState("");  

  const getImdb = async () => {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${OMDB_apiKey}&t=${decodeURIComponent(name)}`
    );
    setMovieIMDB(response.data.imdbID);
    console.log(response.data);
  };

  useEffect(() => {
    getImdb();
  }, []);

  return (
    <div>
      <div className="text-xl font-bold">{decodeURIComponent(name)}</div>
      {movieIMDB && (
        <iframe
          className="w-full h-[70vh] mt-10"
          src={`https://multiembed.mov/?video_id=${movieIMDB}`}
        ></iframe>
      )}
    </div>
  );
}
