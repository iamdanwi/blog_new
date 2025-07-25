"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import Blogs from "@/data/blog";
import { marked } from "marked";
import DOMPurify from "dompurify";

export default function Home() {
  return(<>
    <section className="max-w-5xl mx-auto mt-10 space-y-16">
      {Blogs.map((blog, index) => {
        const rawBody = marked.parse(blog.body, { async: false }) as string;
        const cleanBody = DOMPurify.sanitize(rawBody);
        const rawTitle = marked.parse(blog.title, { async: false }) as string;
        const cleanTitle = DOMPurify.sanitize(rawTitle);

        return (
          <>
            <div
              key={index}
              className="flex flex-col md:flex-row-reverse gap-8 items-center"
            >
              <Image
                src={blog.image}
                alt="blog cover"
                height={200}
                width={300}
                className="w-full md:w-1/4 object-cover rounded-md"
              />
              <div className="space-y-4 md:space-y-8 flex flex-col justify-between flex-1">
                <Link href={blog.slug} className="space-y-3 md:space-y-5">
                  <h1
                    className="text-xl md:text-2xl font-bold tracking-wide font-dm-serif"
                    dangerouslySetInnerHTML={{ __html: cleanTitle }}
                  />
                </Link>

                <div
                  className="prose prose-sm md:prose-base font-montserrat line-clamp-1"
                  dangerouslySetInnerHTML={{ __html: cleanBody.trim() }}
                />

                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/evilrabbit.png"
                      alt="@evilrabbit"
                    />
                    <AvatarFallback>DC</AvatarFallback>
                  </Avatar>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium text-black">Dainwi Choudhary</p>
                    <p>27/02/2004</p>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="my-5 bg-neutral-600" />
          </>
        );
      })}
    </section>
  </>);
  
}
