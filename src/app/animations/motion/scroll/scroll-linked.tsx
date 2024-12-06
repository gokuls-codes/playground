"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

const ScrollLinkedSection = () => {
  const targetRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: ["end end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["0", "-67%"]);
  const translateYReverse = useTransform(
    scrollYProgress,
    [0, 1],
    ["-67%", "0%"]
  );

  return (
    <section
      className=" h-[300vh] bg-slate-800 border border-blue-200"
      ref={targetRef}
    >
      {/* <motion.div
        className=" w-full h-10 bg-white sticky top-0"
        style={{ scaleX: scrollYProgress }}
      ></motion.div> */}
      <div className=" h-screen bg-black w-full sticky top-0 flex gap-4 ">
        <div className=" h-full overflow-clip">
          <motion.div
            className=" w-[300px] space-y-4 z-10 "
            style={{
              // opacity: scrollYProgress,
              translateY: translateY,
            }}
          >
            <div className=" w-full h-[400px] bg-violet-500"></div>
            <div className=" w-full h-[400px] bg-indigo-500"></div>

            <div className=" w-full h-[400px] bg-blue-500"></div>
            <div className=" w-full h-[400px] bg-green-500"></div>
            <div className=" w-full h-[400px] bg-yellow-500"></div>
            <div className=" w-full h-[400px] bg-orange-500"></div>
            <div className=" w-full h-[400px] bg-red-500"></div>
          </motion.div>
        </div>

        <div className=" h-full overflow-clip">
          <motion.div
            className=" w-[300px] space-y-4 z-10 translate-y-[100vh] "
            style={{
              // opacity: scrollYProgress,
              translateY: translateYReverse,
            }}
          >
            <div className=" w-full h-[400px] bg-violet-500"></div>
            <div className=" w-full h-[400px] bg-indigo-500"></div>

            <div className=" w-full h-[400px] bg-blue-500"></div>
            <div className=" w-full h-[400px] bg-green-500"></div>
            <div className=" w-full h-[400px] bg-yellow-500"></div>
            <div className=" w-full h-[400px] bg-orange-500"></div>
            <div className=" w-full h-[400px] bg-red-500"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScrollLinkedSection;
