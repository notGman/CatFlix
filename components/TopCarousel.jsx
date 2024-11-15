"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import useTMDB from "@/hooks/UseTMBD";
import { useRouter } from "next/navigation";
import { Skeleton } from "./ui/skeleton";
import { Badge } from "./ui/badge";
import { movieGenres, tvGenres } from "@/utils/Constants";

const SkeletonCard = () => (
  <figure className="shrink-0 my-8">
    <Skeleton className="h-[70vh] w-full  rounded-xl" />
  </figure>
);

export default function TopCarousel() {
  const router = useRouter();
  const { list, loading, error } = useTMDB("trending", "all/day");
  console.log(list);

  const getGenres = (genreIds, mediaType) => {
    const genreList = mediaType === "movie" ? movieGenres : tvGenres;
    return genreIds.map((id) => genreList.find((genre) => genre.id === id)?.name || "Unknown");
  };

  if (loading) return <SkeletonCard />;
  if (error) return <p>Error loading data</p>;

  return (
    <>
      <Carousel
        className="w-full my-4 md:my-8"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
            stopOnFocusIn: false,
          }),
        ]}
      >
        <CarouselContent className="h-[65vh] md:h-[70vh]">
          {list.map((item, index) => (
            <CarouselItem key={index}>
              <div
                className="relative p-4 h-full flex flex-col md:flex-row items-center bg-cover bg-right bg-no-repeat cursor-default"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-80"></div>

                <div className="relative z-10 md:w-1/4 md:h-[80%] flex-shrink-0 transform transition-transform duration-300">
                  <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title || item.name} className="h-full w-full object-cover rounded-sm shadow-2xl" />
                </div>

                <div className="relative md:block z-10 w-3/4 md:ml-6 text-zinc-300 md:space-y-6 hidden">
                  <h2 className="text-md md:text-4xl font-bold hover:text-yellow-400 text-zinc-100 transition-colors duration-300 hidden md:flex">{item.title || item.name}</h2>
                  <p className="text-lg font-light hidden md:flex">{item.overview}</p>
                  <div className="text-sm space-y-2 hidden md:block">
                    <p>
                      <span className="font-semibold">Rating:</span> {item.vote_average} / 10
                    </p>
                    <p>
                      <span className="font-semibold">Release Date:</span> {item.release_date || item.first_air_date}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {getGenres(item.genre_ids, item.media_type).map((genre, idx) => (
                        <Badge key={idx} variant="primary">
                          {genre}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => router.push(`/search/${item.media_type}/${item.name ? item.name : item.title}/${item.id}`)}
                    className="mt-4 px-6 text-sm md:text-base py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
