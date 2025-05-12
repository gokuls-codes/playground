import React from "react";
import { generateHTML } from "@tiptap/html";
import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import Link from "@tiptap/extension-link";

const GeneratedPage = () => {
  const jsonFromTipTap = {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: { level: 2 },
        content: [{ type: "text", marks: [{ type: "bold" }], text: "Heading" }],
      },
      { type: "paragraph" },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            marks: [{ type: "bold" }],
            text: "this is the description",
          },
        ],
      },
      { type: "paragraph" },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            marks: [{ type: "bold" }],
            text: "following is a list:",
          },
        ],
      },
      {
        type: "bulletList",
        content: [
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    marks: [{ type: "bold" }],
                    text: "list item",
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    marks: [{ type: "bold" }],
                    text: "list item",
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    marks: [{ type: "bold" }],
                    text: "list item",
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: "paragraph" },
      {
        type: "paragraph",
        content: [{ type: "text", text: "Picture of a Shih tzu" }],
      },
      {
        type: "image",
        attrs: {
          src: "https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11171635/202105GettyImages-1467947700-scaled-1.jpg",
          alt: null,
          title: null,
        },
      },
    ],
  };

  const generatedHTML = generateHTML(jsonFromTipTap, [
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
  ]);

  console.log(generatedHTML);
  return <div>{generatedHTML}</div>;
};

export default GeneratedPage;
