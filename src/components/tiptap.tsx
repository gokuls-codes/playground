"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./toolbar";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";

import Link from "@tiptap/extension-link";

import Image from "@tiptap/extension-image";
import FloatingMenuContent from "./floating-ment";

const Tiptap = ({
  description,
  onChange,
}: {
  description: string;
  onChange: (richText: string) => void;
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
        HTMLAttributes: {
          class: "text-xl font-bold",
          levels: [2],
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc pl-5", // Tailwind classes for unordered list (example)
        },
      }),
      Link.configure({
        openOnClick: true,
        HTMLAttributes: {
          class: " underline underline-offset-4",
        },
      }),
      Image,
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal pl-5", // Tailwind classes for ordered list (example)
        },
      }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class:
          " min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(JSON.stringify(editor.getJSON()));
      console.log(editor.getJSON());
    },
    immediatelyRender: false,
  });

  return (
    <div className=" w-full space-y-2">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
      <FloatingMenuContent editor={editor} />
    </div>
  );
};

export default Tiptap;
