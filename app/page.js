"use client"

import React from "react";
import CardSlider from "@/components/CardSlider";
import TopCarousel from "@/components/TopCarousel";

export default function Home() {
  return (
    <div>
      <TopCarousel/>
      <CardSlider type='movie' field='popular'/>
      <CardSlider type='movie' field='top_rated'/>
      <CardSlider type='tv' field='popular'/>
      <CardSlider type='tv' field='top_rated'/>
    </div>
  );
}