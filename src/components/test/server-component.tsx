import React from "react";

const ServerComponent = async () => {
  await new Promise((r) => setTimeout(r, 2000));

  const resp = await fetch("https://jsonplaceholder.typicode.com/todos/", {
    cache: "no-store",
  });

  const respJson = await resp.json();

  return (
    <div>server component that is streamed with {respJson?.length} todos</div>
  );
};

export default ServerComponent;
