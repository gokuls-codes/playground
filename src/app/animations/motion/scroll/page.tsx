import React from "react";
import ScrollTriggeredDiv from "./scroll-triggered";
import ScrollLinkedSection from "./scroll-linked";

const MotionScrollPage = () => {
  return (
    <div className="">
      <section className=" w-full lg:max-w-[70vw] mx-auto space-y-6 border h-screen"></section>

      <section className=" w-full lg:max-w-[70vw] mx-auto space-y-6 border h-screen grid place-items-center">
        <ScrollTriggeredDiv />
      </section>

      <section className=" w-full lg:max-w-[70vw] mx-auto space-y-6 border h-screen"></section>

      <ScrollLinkedSection />

      <section className=" w-full lg:max-w-[70vw] mx-auto space-y-6 border h-screen"></section>
    </div>
  );
};

export default MotionScrollPage;
