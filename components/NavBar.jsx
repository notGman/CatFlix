"use client"

import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const router = useRouter()
  const input=useRef(null)
  
  const handleClick = (e) =>{
    e.preventDefault()
    router.push(`/search/${input.current.value}`)
  }

  return (
    <div className="flex justify-between my-10">
      <Link href="/" className="font-bold text-2xl">
        <Image src={"/logo.png"} width={150} height={53} alt="CatFlix"/>
      </Link>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input ref={input} type="text" placeholder="Search" />
        <Button onClick={handleClick} type="submit">Search</Button>
      </div>
    </div>
  );
}
