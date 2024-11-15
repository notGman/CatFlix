import MovieCard from "./MovieCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton
import useTMDB from "@/hooks/UseTMBD";

export default function CardSlider({ type, field }) {
  const { list, loading, error } = useTMDB(type, field);  

  const SkeletonCard = () => (
    <figure className="shrink-0">
      <Skeleton className="h-[220px] w-[150px]  rounded-xl" />
    </figure>
  );

  return (
    <div className="my-10">
      <div className="capitalize md:text-2xl font-bold mb-5">
        {String(field).replace("_", " ")} in {type}
      </div>
      <ScrollArea className="w-full whitespace-nowrap overflow-hidden rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {loading
            ? Array.from({ length: 10 }).map((_, index) => <SkeletonCard key={index} />)
            : list?.map((movie) => (
                <figure key={movie.id} className="shrink-0">
                  <MovieCard movie={movie} />
                </figure>
              ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
