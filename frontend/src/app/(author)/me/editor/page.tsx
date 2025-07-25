"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Save,
  Eye,
  EyeOff,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link,
  ImageIcon,
  Code,
  Quote,
  Heading1,
  Heading2,
  Heading3,
  Pilcrow,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function BlogEditor() {
  const [title, setTitle] = useState("Untitled Post");
  const [content, setContent] = useState(`# Welcome to Your Blog Editor

This is a **modern** and *clean* rich text editor built with Next.js and shadcn/ui components.

## Features

- Real-time preview
- Markdown support
- Responsive design
- Clean, minimal interface

### Getting Started

Start typing in the editor to see your content formatted in real-time. You can use:

- **Bold text** with double asterisks
- *Italic text* with single asterisks
- [Links](https://example.com) with bracket notation
- Lists and more!

> This is a blockquote to demonstrate styling.

\`\`\`javascript
// Code blocks are also supported
function hello() {
  console.log("Hello, world!");
}
\`\`\`

Happy writing! ✨`);

  const [showPreview, setShowPreview] = useState(true);

  const formatText = (format: string) => {
    const textarea = document.getElementById("editor") as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    let formattedText = selectedText;
    let newContent = content;

    switch (format) {
      case "bold":
        formattedText = `**${selectedText}**`;
        break;
      case "italic":
        formattedText = `*${selectedText}*`;
        break;
      case "underline":
        formattedText = `<u>${selectedText}</u>`;
        break;
      case "h1":
        formattedText = `# ${selectedText || "Heading 1"}`;
        break;
      case "h2":
        formattedText = `## ${selectedText || "Heading 2"}`;
        break;
      case "h3":
        formattedText = `### ${selectedText || "Heading 3"}`;
        break;
      case "paragraph":
        // Remove any existing heading markers and make it a regular paragraph
        formattedText = selectedText.replace(/^#{1,6}\s*/, "");
        break;
      case "link":
        formattedText = `[${selectedText || "Link text"}](https://example.com)`;
        break;
      case "code":
        formattedText = `\`${selectedText}\``;
        break;
      case "quote":
        formattedText = `> ${selectedText}`;
        break;
    }

    newContent =
      content.substring(0, start) + formattedText + content.substring(end);
    setContent(newContent);
  };

  const insertList = (ordered = false) => {
    const textarea = document.getElementById("editor") as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const listItem = ordered ? "1. List item" : "- List item";
    const newContent =
      content.substring(0, start) + listItem + content.substring(start);
    setContent(newContent);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // For demo purposes, we'll just insert a placeholder
    const imageMarkdown = `![alt text](/placeholder.svg?height=200&width=400&text=Uploaded+Image)`;
    setContent((prev) => prev + "\n" + imageMarkdown);
  };

  const renderMarkdown = (text: string) => {
    return text
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-4">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold mb-3">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-medium mb-2">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(
        /\[([^\]]+)\]$$([^)]+)$$/g,
        '<a href="$2" class="text-blue-600 hover:underline">$1</a>'
      )
      .replace(
        /`([^`]+)`/g,
        '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">$1</code>'
      )
      .replace(
        /^> (.*$)/gm,
        '<blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">$1</blockquote>'
      )
      .replace(
        /```(\w+)?\n([\s\S]*?)```/g,
        '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code>$2</code></pre>'
      )
      .replace(/^- (.*$)/gm, '<li class="ml-4">• $1</li>')
      .replace(/^\d+\. (.*$)/gm, '<li class="ml-4">$1</li>')
      .replace(/\n/g, "<br>");
  };

  return (
    <div className="flex  flex-col">
      {/* Header */}
      <header className="flex items-center justify-between border-b px-6 py-4">
        <div className="flex items-center gap-4">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-lg font-medium border-none shadow-none focus-visible:ring-0 px-0"
            placeholder="Post title..."
          />
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Draft</Badge>
          <Button variant="outline" size="sm">
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowPreview(!showPreview)}
          >
            {showPreview ? (
              <EyeOff className="h-4 w-4 mr-2" />
            ) : (
              <Eye className="h-4 w-4 mr-2" />
            )}
            {showPreview ? "Hide Preview" : "Show Preview"}
          </Button>
        </div>
      </header>

      {/* Toolbar */}
      <div className="flex items-center gap-1 border-b px-6 py-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => formatText("bold")}
          className="h-8 w-8 p-0"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => formatText("italic")}
          className="h-8 w-8 p-0"
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => formatText("underline")}
          className="h-8 w-8 p-0"
        >
          <Underline className="h-4 w-4" />
        </Button>
        <Separator orientation="vertical" className="h-6 mx-1" />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => formatText("h1")}
          className="h-8 w-8 p-0"
        >
          <Heading1 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => formatText("h2")}
          className="h-8 w-8 p-0"
        >
          <Heading2 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => formatText("h3")}
          className="h-8 w-8 p-0"
        >
          <Heading3 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => formatText("paragraph")}
          className="h-8 w-8 p-0"
        >
          <Pilcrow className="h-4 w-4" />
        </Button>
        <Separator orientation="vertical" className="h-6 mx-1" />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertList(false)}
          className="h-8 w-8 p-0"
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertList(true)}
          className="h-8 w-8 p-0"
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Separator orientation="vertical" className="h-6 mx-1" />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => formatText("link")}
          className="h-8 w-8 p-0"
        >
          <Link className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 relative">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <ImageIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => formatText("code")}
          className="h-8 w-8 p-0"
        >
          <Code className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => formatText("quote")}
          className="h-8 w-8 p-0"
        >
          <Quote className="h-4 w-4" />
        </Button>
      </div>

      {/* Editor Content */}
      <div className="flex-1 flex min-h-0">
        {/* Editor */}
        <div className={cn("flex-1 p-6", showPreview && "border-r")}>
          <Textarea
            id="editor"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing your blog post..."
            className="min-h-full resize-none border-none shadow-none focus-visible:ring-0 text-base leading-relaxed"
          />
        </div>

        {/* Preview */}
        {showPreview && (
          <div className="flex-1 p-6 bg-gray-50/50 overflow-y-auto">
            <div className="max-w-none prose prose-gray">
              <h1 className="text-3xl font-bold mb-6">{title}</h1>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html: renderMarkdown(content),
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogEditor;
