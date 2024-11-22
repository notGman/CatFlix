import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-9xl font-extrabold text-red-500 animate-bounce">404</h1>
      <p className="text-2xl mt-4">Oops! Page not found</p>
      <p className="text-gray-400 mt-2">The page you're looking for doesn't exist or has been moved.</p>
      <button onclick="window.location.href='/'" className="mt-8 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg transition duration-300">
        Back to Home
      </button>
    </div>
  );
}
