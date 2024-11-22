import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] text-white">
      <h1 className="text-7xl font-extrabold text-red-500 animate-bounce">404</h1>
      <p className="text-lg mt-4">Oops! Page not found</p>
      <Link href="\" className="text-red-500 my-2">
        Back to home
      </Link>
    </div>
  );
}
