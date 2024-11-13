import React from "react";
import Popular from "@/components/Popular";
import TopRated from "@/components/TopRated";

export default function Home() {
  return (
    <div className="my-10">
      <Popular type="movie"/>
      <TopRated type="movie"/>
      <Popular type="tv"/>
      <TopRated type="tv"/>
    </div>
  );
}