import Canvas from "@/components/canvas";
import React from "react";

const CanvasPage = () => {
  return (
    <div className=" w-screen h-screen bg-neutral-900 flex">
      <div className=" w-1/6 border-rbg- h-full"></div>
      <Canvas />
    </div>
  );
};

export default CanvasPage;
