// src/app/(blog)/blog-details/[id]/page.tsx

import { Metadata } from "next";
import { blog_data } from "@/data/blog-data";
import BlogDetailsMain from "@/pages/blog/blog-details";

// Dynamic metadata export
export const metadata: Metadata = {
  title: "Growww - Blog Details page",
};

// This is how Next.js App Router expects props
export default function BlogDetailsPage({ params }: { params: { id: string } }) {
  const blog = blog_data.find((blog) => blog.id === Number(params.id));

  return blog ? (
    <BlogDetailsMain blog={blog} />
  ) : (
    <div className="text-center pt-100">
      Blog not found with id: {params.id}
    </div>
  );
}
