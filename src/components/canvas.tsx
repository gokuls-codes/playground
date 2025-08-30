"use client";

import React, { useEffect, useRef, useState } from "react";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointNumberRef = useRef(1);
  const pointsListRef = useRef<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Function to resize canvas to fit parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const { width, height } = parent.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ctx.font = "16px Mulish";
      ctx.fillStyle = "white";
      ctx.clearRect(0, 0, 130, 40);
      ctx.fillText(`${Math.round(x)}px, ${Math.round(y)}px`, 10, 20);
    };

    const handleMouseClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      let clickingOnPoint = false;
      let clickedPointX, clickedPointY;

      pointsListRef.current.forEach((point) => {
        if (
          x >= point.x - 10 &&
          x <= point.x + 10 &&
          y >= point.y - 10 &&
          y <= point.y + 10
        ) {
          clickingOnPoint = true;
          clickedPointX = point.x;
          clickedPointY = point.y;
        }
      });
      if (!clickingOnPoint) {
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.strokeStyle = "cyan";
        ctx.fillStyle = "cyan";
        ctx.fill();
        ctx.stroke();
        ctx.fill();

        ctx.font = "12px Mulish";
        ctx.fillText(`P ${pointNumberRef.current}`, x - 8, y - 10);
        pointNumberRef.current += 1;

        pointsListRef.current = [
          ...pointsListRef.current,
          { id: pointNumberRef.current, x, y },
        ];
      } else {
        console.log(clickedPointX, clickedPointY);
        if (clickedPointX && clickedPointY) {
          ctx.rect(clickedPointX - 15, clickedPointY - 22, 30, 30);
          ctx.strokeStyle = "white";
          ctx.stroke();
        }
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleMouseClick);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleMouseClick);
    };
  }, []);

  return (
    <div className="flex-1 bg-black h-full w-full">
      <canvas
        ref={canvasRef}
        className="h-full w-full border-2 border-neutral-500"
        style={{ display: "block" }}
      ></canvas>
    </div>
  );
};

export default Canvas;
