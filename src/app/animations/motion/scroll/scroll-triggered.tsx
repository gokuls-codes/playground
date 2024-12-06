"use client";

import React from "react";
import { motion, MotionConfig } from "motion/react";

const ScrollTriggeredDiv = () => {
  return (
    <MotionConfig transition={{ duration: 1 }}>
      <motion.div
        className=" px-20 py-10 bg-blue-500"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        Scroll Triggered Div
      </motion.div>
    </MotionConfig>
  );
};

export default ScrollTriggeredDiv;
