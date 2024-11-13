"use client";

import React from "react";
import CardSlider from "./CardSlider";
import useTMDB from "@/hooks/UseTMBD";

export default function Popular({type}) {
  const {list,loading,error} = useTMDB(type,'popular')

  return <CardSlider list={list} type={type} field='popular'/>
}
