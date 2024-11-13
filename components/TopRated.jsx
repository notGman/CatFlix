"use client";

import React from "react";
import CardSlider from "./CardSlider";
import useTMDB from "@/hooks/UseTMBD";

export default function TopRatedMovies({type}) {
  const {list,loading,error} = useTMDB(type,'top_rated')

  return <CardSlider list={list} type={type} field='top_rated'/>
}
