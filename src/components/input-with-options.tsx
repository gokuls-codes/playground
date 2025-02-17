"use client";

import React, { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];
const InputWithOptions = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className=" relative group mx-auto w-full md:w-1/2 space-y-2">
      <Command className="rounded-lg border shadow-md w-full">
        <CommandInput
          placeholder="Type..."
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
        />
        <CommandList
          className={cn(
            " absolute w-full top-[100%] translate-y-1 z-50 rounded-md border bg-popover transition-all duration-100 p-0 text-popover-foreground shadow-md outline-none slide-in-from-top-2 ",
            open
              ? "animate-in fade-in-0 zoom-in-95"
              : "animate-out fade-out-0 zoom-out-95 -z-20 opacity-0 pointer-events-none "
          )}
        >
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {framework.label}
                <Check
                  className={cn(
                    "ml-auto",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>

      {/* <Label htmlFor="input-with-options">Input with options</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <Input
          id="input-with-options"
          onFocus={() => {
            console.log("focus");
            // setOpen(true);
          }}
        />

        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {framework.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover> */}
    </div>
  );
};

export default InputWithOptions;
