"use client";

import React, { useEffect, useState } from "react";

const ClientComponent = () => {
  const [elements, setElements] = useState<number[]>([]);

  useEffect(() => {
    setElements([1, 2, 3, 4, 5]);
  }, []);
  return (
    <div className=" space-y-4 ">
      {elements.map((element) => (
        <div key={element} className=" size-20 bg-blue-200">
          {element}
        </div>
      ))}
    </div>
  );
};

export default ClientComponent;
