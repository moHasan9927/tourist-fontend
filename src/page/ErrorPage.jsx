import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center bg-travel-bg">
      <video
        className=""
        src="../../public/error.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <Link
        to="/"
        className="text-travel-text bg-travel-nature px-3 py-2 rounded-lg font-bold border-2 border-travel-nature hover:bg-transparent transition-all duration-300"
      >
        Home
      </Link>
    </div>
  );
};
//
export default ErrorPage;
