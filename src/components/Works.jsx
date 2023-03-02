import React from "react";
import { SingleWork } from "./SingleWork";

export const Works = () => {
  return (
    <div id="/works" className="w-full max-w-[1140px] mx-auto p-4">
      {/* Div for scroll offset */}
      <div>
        <h2 className="text-4xl font-bold mb-3">Works</h2>
        <p className="mb-12">Recently I have been working on the following</p>
      </div>
      {/* Grids main div */}

      <SingleWork />
    </div>
  );
};
