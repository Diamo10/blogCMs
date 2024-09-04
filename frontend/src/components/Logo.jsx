import React from "react";
import chai from "../assets/milktea.png";

const Logo = () => {
  return (
    <div className="flex  items-center font-macondo text-2xl">
      <img
        className="w-auto h-8 sm:h-10"
        src={chai}
        loading="lazy"
        width={202}
        height={40}
      />
      A Cup of Tea
    </div>
  );
};

export default Logo;
