"use client";

import React, { useState, useEffect } from "react";
import { use } from "react";
import { OMDB_apiKey } from "@/config";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";

export default function SearchMovie({ params }) {
  const { name } = use(params);
  const [movieIMDB, setMovieIMDB] = useState("");
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const getImdb = async () => {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${OMDB_apiKey}&t=${decodeURIComponent(
        name
      )}`
    );
    setMovieIMDB(response.data.imdbID);
  };

  useEffect(() => {
    getImdb();
  }, []);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return (
    <div>
      <div className="text-xl font-bold">{decodeURIComponent(name)}</div>

      <div className="w-full mt-10 relative rounded-lg overflow-hidden">
        {!iframeLoaded && <Skeleton className="w-full h-[70vh] rounded-lg" />}

        {movieIMDB && (
          <iframe
            className={`w-full h-[70vh] rounded-lg transition-opacity duration-300 ${
              iframeLoaded ? "visible" : "hidden"
            }`}
            // src={`https://multiembed.mov/?video_id=${movieIMDB}`}
            // src={`https://vidsrc.to/embed/movie/${movieIMDB}`}
            src={`https://www.NontonGo.win/embed/movie/${movieIMDB}`}
            onLoad={handleIframeLoad}
            allow="fullscreen"
            allowFullScreen={true}
            title="Movie Player"
          ></iframe>
        )}
      </div>
    </div>
  );
}
