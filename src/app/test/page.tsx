import ClientComponent from "@/components/test/client-component";
import ServerComponent from "@/components/test/server-component";
import React, { Suspense } from "react";

const TestPage = async () => {
  return (
    <div className=" mx-auto w-full max-w-md">
      <h1>Test Page</h1>
      <ClientComponent />
      <Suspense fallback={<div>loading...</div>}>
        <ServerComponent />
      </Suspense>
    </div>
  );
};

export default TestPage;
