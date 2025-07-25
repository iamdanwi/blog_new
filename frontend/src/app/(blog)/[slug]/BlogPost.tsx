"use client";

import { marked } from "marked";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Blog = {
  title: string;
  body: string;
  image: string;
  slug: string;
  tag: string;
};

export default function BlogPost({
  blog,
  related,
}: {
  blog: Blog;
  related: Blog[];
}) {
  const [html, setHtml] = useState("");
  const [cleanTitle, setCleanTitle] = useState("");

  useEffect(() => {
    const rawTitle = marked.parseInline(blog.title, { async: false }) as string;
    const rawBody = marked.parse(blog.body, { async: false }) as string;

    setCleanTitle(DOMPurify.sanitize(rawTitle));
    setHtml(DOMPurify.sanitize(rawBody));
  }, [blog]);

  return (
    <div className="min-h-screen bg-background mt-9">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-14">
        {/* Blog Content */}
        <article>
          <header className="mb-12">
            <h1
              className="mb-6 text-4xl font-dm-serif font-bold leading-tight text-foreground md:text-5xl"
              dangerouslySetInnerHTML={{ __html: cleanTitle }}
            />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{blog.author}</span>
              <span>•</span>
              <time>27/02/2004</time>
            </div>
          </header>

          <div className="mb-16">
            <Image
              src={blog.image}
              alt="Article cover"
              width={1200}
              height={600}
              className="h-96 w-full object-cover shadow-lg rounded-md"
              priority
            />
          </div>

          <div
            className="space-y-6 font-montserrat prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-a:text-primary prose-strong:text-foreground prose-code:text-foreground"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>

        {/* Related Posts Sidebar */}
        {related.length > 0 && (
          <aside className="space-y-8">
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                #{blog.tag}
              </span>
              <h2 className="mt-2 text-xl font-semibold text-foreground">
                Related Articles
              </h2>
            </div>

            <div className="space-y-6">
              {related.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${post.slug}`}
                  className="flex gap-4 group"
                >
                  <Image
                    src={post.image}
                    width={100}
                    height={60}
                    alt={post.title}
                    className=" object-cover w-28 h-20 rounded-md"
                  />
                  <div>
                    <h3
                      className="font-semibold font-dm-serif text-card-foreground group-hover:text-primary line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          marked.parseInline(post.title, {
                            async: false,
                          }) as string
                        ),
                      }}
                    />
                    <p
                      className="text-sm font-montserrat text-muted-foreground line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          marked.parseInline(post.body, {
                            async: false,
                          }) as string
                        ),
                      }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
