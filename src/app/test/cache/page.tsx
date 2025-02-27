import React from "react";

const TestCachePage = async () => {
  const resp = await fetch("https://playground.gokulkannanr.in/api/hello", {
    next: {
      revalidate: 10,
    },
  });
  const data = await resp.json();

  console.log(data);

  return <div>{data.time}</div>;
};

export default TestCachePage;
