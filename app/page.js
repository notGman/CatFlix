"use client"

import React from "react";
import CardSlider from "@/components/CardSlider";

export default function Home() {
  return (
    <div className="my-10">
      <CardSlider type='movie' field='popular'/>
      <CardSlider type='movie' field='top_rated'/>
      <CardSlider type='tv' field='popular'/>
      <CardSlider type='tv' field='top_rated'/>
    </div>
  );
}