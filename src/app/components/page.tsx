import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";

const ComponentsPage = () => {
  return (
    <div className="  p-8">
      <main className=" w-full lg:max-w-[70vw] mx-auto space-y-6">
        <h1 className=" text-4xl font-semibold">Components</h1>
        <div className=" w-full p-4 border border-border rounded-md space-y-4">
          <h2 className=" font-semibold text-xl">Input with floating label</h2>
          <div className=" relative group mx-auto w-full md:w-1/2">
            <Input
              className={
                "peer placeholder-transparent focus-visible:ring-offset-1"
              }
              placeholder="Placeholder"
              id="enter-input"
            />
            <Label
              htmlFor="enter-input"
              className={cn(
                " peer absolute left-3 top-1/2 -translate-y-1/2 opacity-0 pointer-events-none transition-all text-muted-foreground group-focus-within:opacity-100 group-focus-within:text-blue-500 group-focus-within:-translate-y-[180%] group-focus-within:z-20 group-focus-within:px-1 group-focus-within:bg-background group-focus-within:text-xs group-focus-within:left-2  ",
                "peer-[:not(:placeholder-shown)]:text-blue-500 peer-[:not(:placeholder-shown)]:-translate-y-[180%] peer-[:not(:placeholder-shown)]:z-20 peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:opacity-100 peer-[:not(:placeholder-shown)]:bg-background peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:left-2"
              )}
            >
              Label
            </Label>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComponentsPage;
