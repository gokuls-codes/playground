import React from "react";

const CustomAnimationsPage = () => {
  return (
    <div className="  p-8">
      <main className=" w-full lg:max-w-[70vw] mx-auto space-y-6">
        <h1 className=" text-4xl font-semibold">Animations</h1>
        <section className=" grid place-items-center">
          <div className=" card  grid place-items-center relative rounded-xl p-0.5">
            <div className="bg-neutral-900 h-full w-full rounded-xl grid place-items-center">
              <p className=" text-4xl font-semibold  ">Hello</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CustomAnimationsPage;
