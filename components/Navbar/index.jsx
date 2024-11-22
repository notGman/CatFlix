import React from "react";
import Logo from "@/components/Logo";
import NavSearch from "@/components/Navbar/NavSearch";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center">
      <Logo style="w-[7em]" />
      <NavSearch />
    </div>
  );
}
