import React from "react";

const Loader = () => {
  return (
    <span className="flex h-32 w-32 relative">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-32 w-32 bg-sky-500"></span>
    </span>
  );
};

export default Loader;
