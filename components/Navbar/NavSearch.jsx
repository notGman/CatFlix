"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function NavSearch() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setInput(e.target.value);
      router.push(`/search/${e.target.value}`)
    }
  };
  return (
    <div>
      <Input onKeyDown={handleKeyDown} type="text" placeholder="Search movie, tv, anime" className="w-full rounded-full px-5 focus-visible:ring-0" />
    </div>
  );
}
