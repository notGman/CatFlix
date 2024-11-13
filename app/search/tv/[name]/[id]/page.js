"use client";

import React, { useState, useEffect } from "react";
import { use } from "react";
import { OMDB_apiKey } from "@/config";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import useTVInfo from "@/hooks/UseTVInfo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SearchMovie({ params }) {
  const { name, id } = use(params);
  const [movieIMDB, setMovieIMDB] = useState("");
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const { list, loading, error } = useTVInfo(id);
  console.log(list);

  const [current, setCurrent] = useState({
    season: 1,
    episode: 1,
  });

  useEffect(() => {
    const getImdb = async () => {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${OMDB_apiKey}&t=${decodeURIComponent(
          name
        )}`
      );
      setMovieIMDB(response.data.imdbID);
    };
    getImdb();
  }, [name]);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return (
    <div>
      <div className="text-xl font-bold mb-4 flex justify-between items-center">
        <div>{decodeURIComponent(name)}</div>
        <div className="flex justify-center items-center gap-x-6">
          <Select
            onValueChange={(value) =>
              setCurrent((prev) => ({
                ...prev,
                season: Number(value),
                episode: 1,
              }))
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={`Season ${current.season}`} />
            </SelectTrigger>
            <SelectContent>
              {list.seasons?.slice(1).map((season, index) => (
                <SelectItem key={index + 1} value={season.season_number}>
                  Season {season.season_number}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Episode Selector */}
          <Select
            onValueChange={(value) =>
              setCurrent((prev) => ({ ...prev, episode: Number(value) }))
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={`Episode ${current.episode}`} />
            </SelectTrigger>
            <SelectContent>
              {Array.from(
                {
                  length:
                    list.seasons?.find(
                      (season) => season.season_number === current.season
                    )?.episode_count || 0,
                },
                (_, index) => (
                  <SelectItem key={index + 1} value={index + 1}>
                    Episode {index + 1}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="w-full mt-10 relative rounded-lg overflow-hidden">
        {!iframeLoaded && <Skeleton className="w-full h-[70vh] rounded-lg" />}

        {movieIMDB && (
          <iframe
            className={`w-full h-[70vh] rounded-lg transition-opacity duration-300 ${
              iframeLoaded ? "visible" : "hidden"
            }`}
            // src={`https://multiembed.mov/?video_id=${movieIMDB}`}
            // src={`https://vidsrc.to/embed/movie/${movieIMDB}`}
            src={`https://www.NontonGo.win/embed/tv/${movieIMDB}/${current.season}/${current.episode}`}
            onLoad={handleIframeLoad}
            allow="fullscreen"
            allowFullScreen
            title="Movie Player"
          ></iframe>
        )}
      </div>
    </div>
  );
}
