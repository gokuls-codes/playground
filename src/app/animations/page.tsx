import React from "react";

const AnimationsPage = () => {
  return (
    <div className="  p-8">
      <div className=" w-full lg:max-w-[70vw] mx-auto space-y-6">
        <h1 className=" text-4xl font-semibold">Animations</h1>
        <div className=" grid grid-cols-3 lg:grid-cols-6 place-items-center w-full gap-4">
          <div className=" border border-gray-700 rounded-md aspect-square w-full ">
            <div className=" relative flex items-center justify-center h-full group ">
              <div className=" h-1 w-10 bg-white rounded-sm"></div>
              <div className=" h-10 w-1 bg-white rounded-sm absolute group-hover:-rotate-90 transition-all duration-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationsPage;
