import React from "react";

const AnimationsPage = () => {
  return (
    <div className="  p-8">
      <div className=" w-full lg:max-w-[70vw] mx-auto space-y-6">
        <h1 className=" text-4xl font-semibold">Animations</h1>
        <div className=" grid grid-cols-3 lg:grid-cols-6 place-items-center w-full gap-4">
          <div className=" border border-gray-700 rounded-md h-[120px] w-full ">
            <div className=" relative flex items-center justify-center h-full group ">
              <div className=" h-1 w-10 bg-white rounded-sm"></div>
              <div className=" h-10 w-1 bg-white rounded-sm absolute group-hover:-rotate-90 transition-all duration-100"></div>
            </div>
          </div>
          <div className=" border border-gray-700 rounded-md h-[120px] w-full ">
            <div className=" relative flex items-center justify-center h-full group ">
              <div className=" h-1 w-10 bg-white rounded-sm"></div>
              <div className=" h-5 w-1 bg-white rounded-sm absolute group-hover:rotate-90 transition-all duration-100 -translate-y-1/2 origin-bottom"></div>
              <div className=" h-5 w-1 bg-white rounded-sm absolute group-hover:-rotate-90 transition-all duration-100 translate-y-1/2 origin-top"></div>
            </div>
          </div>
          <div className=" border border-gray-700 rounded-md h-[120px] w-full ">
            <div className=" relative flex items-center justify-center h-full group ">
              <div className=" h-1 w-10 bg-white rounded-sm absolute group-hover:rotate-45 transition-all duration-100"></div>
              <div className=" h-10 w-1 bg-white rounded-sm absolute group-hover:rotate-45 transition-all duration-100"></div>
            </div>
          </div>
          <div className=" h-[120px] col-span-2 w-full border border-gray-700 rounded-md flex items-center justify-center">
            <div className="  relative overflow-hidden group text-xl font-semibold">
              <p className=" group-hover:-translate-y-[100%] duration-200 transition-all">
                Label
              </p>
              <p className=" absolute group-hover:-translate-y-[100%] duration-200 transition-all ">
                Label
              </p>
            </div>
          </div>
          <div className=" w-full col-span-3 lg:col-span-6 flex items-center relative group border border-gray-700 rounded-md p-4 h-[120px]">
            <div className=" w-full h-[1px] bg-white/50 rounded-sm"></div>
            <div className=" w-[calc(100%-2rem)] h-1 bg-white rounded-sm absolute scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationsPage;
