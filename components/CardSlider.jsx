import MovieCard from "./MovieCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton
import useTMDB from "@/hooks/UseTMBD";

export default function CardSlider({ type, field }) {
  const { list, loading, error } = useTMDB(type, field);

  const SkeletonCard = () => (
    <figure className="shrink-0">
      <Skeleton className="h-[210px] w-[135px] rounded-xl" />
    </figure>
  );

  return (
    <div className="my-10">
      <div className="flex items-center gap-x-3 mb-3">
        <div className="bg-[#E52B12] h-8 w-[5px]"></div>
        <div className="capitalize md:text-lg">
          {String(field).replace("_", " ")} in {type}
        </div>
      </div>
      <ScrollArea className="w-full whitespace-nowrap overflow-hidden rounded-none border">
        <div className="flex w-max space-x-4 p-1">
          {loading
            ? Array.from({ length: 10 }).map((_, index) => <SkeletonCard key={index} />)
            : list?.map((movie) => (
                <figure key={movie.id} className="shrink-0">
                  <MovieCard movie={movie} />
                </figure>
              ))}
        </div>
        <ScrollBar orientation="horizontal" className="h-[8px]"/>
      </ScrollArea>
    </div>
  );
}
