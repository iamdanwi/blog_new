import getBlogs from "@/data/blog";
import { notFound } from "next/navigation";
import BlogPost from "./BlogPost";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const Blogs = getBlogs;
  const blog = Blogs.find((b) => b.slug === params.slug);
  if (!blog) return { title: "Not Found" };

  return {
    title: blog.title.replace(/[*_`#]/g, ""),
    description: blog.body.slice(0, 150).replace(/[*_`#]/g, ""),
  };
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const Blogs = await getBlogs;
  const blog = Blogs.find((b) => b.slug === params.slug);
  if (!blog) return notFound();

  const related = Blogs.filter(
    (b) => b.slug !== blog.slug && b.tag === blog.tag
  );

  return <BlogPost blog={blog} related={related} />;
}
