"use client";

import React, { useState, useEffect } from "react";
import { OMDB_apiKey } from "@/config";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";

export default function SearchMovie({ params }) {
  const [query, setQuery] = useState({
    name: "",
    id: "",
  });
  const [movieIMDB, setMovieIMDB] = useState("");
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const getLinks = [`https://multiembed.mov/?video_id=${movieIMDB}`, `https://www.NontonGo.win/embed/movie/${movieIMDB}`, `https://vidsrc.to/embed/movie/${movieIMDB}`];

  const [link, setLink] = useState("");

  useEffect(() => {
    const getImdb = async () => {
      const { name, id } = await params;
      setQuery((el) => ({ name: name, id: id }));
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_apiKey}&t=${decodeURIComponent(name)}`);
        setMovieIMDB(response.data.imdbID);
      } catch (error) {
        console.error("Failed to fetch IMDb ID:", error);
      }
    };
    getImdb();
    setLink(() => {
      getLinks[0];
    });
  }, []);

  useEffect(() => {
    setLink(getLinks[0]);
  }, [movieIMDB]);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return (
    <div>
      <div className="text-xl font-bold mb-4 flex justify-between items-center">
        <div>{decodeURIComponent(query.name)}</div>
      </div>

      <div className="w-full mt-10 relative rounded-lg overflow-hidden">
        {!iframeLoaded && <Skeleton className="w-full h-[70vh] rounded-lg" />}

        {movieIMDB && (
          <iframe
            className={`w-full h-[70vh] rounded-lg transition-opacity duration-300 ${iframeLoaded ? "visible" : "hidden"}`}
            src={link}
            onLoad={handleIframeLoad}
            allow="fullscreen"
            allowFullScreen="true"
            title="Movie Player"
          ></iframe>
        )}
      </div>

      <div className="flex items-center gap-x-5 my-5">
        {getLinks.map((el, index) => (
          <button className="w-8 h-8 bg-[#D81F26] rounded-full text-white text-md font-bold" key={index} onClick={() => setLink(el)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
