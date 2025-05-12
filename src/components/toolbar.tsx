"use client";

import React from "react";
import { type Editor } from "@tiptap/react";

import { Toggle } from "./ui/toggle";
import {
  Bold,
  Heading,
  Image,
  Italic,
  Link,
  List,
  ListOrdered,
  Strikethrough,
} from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Toolbar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return;

  return (
    <div className=" border border-input hg-background rounded-md flex gap-1 p-1 ">
      <Toggle
        size={"sm"}
        pressed={editor.isActive("heading")}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
      >
        <Heading className=" size-4" />
      </Toggle>
      <Toggle
        size={"sm"}
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className=" size-4" />
      </Toggle>

      <Toggle
        size={"sm"}
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className=" size-4" />
      </Toggle>

      <Toggle
        size={"sm"}
        pressed={editor.isActive("strike")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className=" size-4" />
      </Toggle>

      <Toggle
        size={"sm"}
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className=" size-4" />
      </Toggle>

      <Toggle
        size={"sm"}
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered className=" size-4" />
      </Toggle>

      <Separator orientation="vertical" />

      <Toggle size={"sm"} pressed={editor.isActive("link")}>
        <Link className=" size-4" />
      </Toggle>

      <Popover>
        <PopoverTrigger asChild>
          <Toggle
            size={"sm"}
            pressed={editor.isActive("link")}
            onPressedChange={(pressed) => {
              if (!pressed) editor.chain().focus().unsetLink().run();
            }}
          >
            <Link className=" size-4" />
          </Toggle>
        </PopoverTrigger>
        <PopoverContent className=" flex flex-row gap-2">
          <Input placeholder="URL" className=" text-xs h-8" />
          <Button
            className=" text-xs h-8"
            onClick={() =>
              editor
                .chain()
                .focus()
                .setLink({ href: "https://google.com" })
                .run()
            }
          >
            Submit
          </Button>
        </PopoverContent>
      </Popover>

      <Separator orientation="vertical" />

      <Button
        size={"sm"}
        variant={"ghost"}
        type="button"
        onClick={() =>
          editor
            .chain()
            .focus()
            .setImage({
              src: "https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11171635/202105GettyImages-1467947700-scaled-1.jpg",
              title: "Shih tzu",
              alt: "Picture of a Shih tzu",
            })
            .run()
        }
      >
        <Image />
      </Button>
    </div>
  );
};

export default Toolbar;
