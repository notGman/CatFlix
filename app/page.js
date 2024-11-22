"use client";

import React, { useState } from "react";
import CardSlider from "@/components/CardSlider";

export default function Home() {
  return (
    <div>
      <CardSlider type="trending" field="all/day" />
      <CardSlider type="movie" field="popular" />
      <CardSlider type="tv" field="popular" />
    </div>
  );
}
