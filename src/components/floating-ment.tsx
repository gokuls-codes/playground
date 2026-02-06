import React from "react";
import { type Editor } from "@tiptap/react";
import { FloatingMenu } from "@tiptap/react/menus";
import { Button } from "./ui/button";

const FloatingMenuContent = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return;

  return (
    <FloatingMenu editor={editor}>
      <div data-testid="floating-menu" className="floating-menu">
        <Button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          H1
        </Button>
        <Button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
        >
          H2
        </Button>
        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          Bullet list
        </Button>
      </div>
    </FloatingMenu>
  );
};

export default FloatingMenuContent;
