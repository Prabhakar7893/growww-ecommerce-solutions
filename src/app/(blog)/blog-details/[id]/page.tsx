// src/app/(blog)/blog-details/[id]/page.tsx

import { Metadata } from "next";
import { blog_data } from "@/data/blog-data";
import BlogDetailsMain from "@/pages/blog/blog-details";

// Metadata for SEO
export const metadata: Metadata = {
  title: "Growww - Blog Details page",
};

// Let Next.js infer the type of params properly
export default function BlogDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const blog = blog_data.find((blog) => blog.id === Number(params.id));

  return blog ? (
    <BlogDetailsMain blog={blog} />
  ) : (
    <div className="text-center pt-100">
      Blog not found with id: {params.id}
    </div>
  );
}
