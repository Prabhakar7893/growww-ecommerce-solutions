// src/app/(blog)/blog-details/[id]/page.tsx

import { Metadata } from "next";
import { blog_data } from "@/data/blog-data";
import BlogDetailsMain from "@/pages/blog/blog-details";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Growww - Blog Details page",
};

// Correct typing for App Router dynamic route page
export default function BlogDetailsPage({ params }: { params: { id: string } }) {
  const blog = blog_data.find((blog) => blog.id === Number(params.id));

  if (!blog) {
    notFound(); // uses Next.js built-in 404
  }

  return <BlogDetailsMain blog={blog} />;
}
