import React from "react";

const ServerComponent = async () => {
  await new Promise((r) => setTimeout(r, 2000));

  return <div>server component that is streamed</div>;
};

export default ServerComponent;
