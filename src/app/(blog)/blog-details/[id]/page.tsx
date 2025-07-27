// src/app/(blog)/blog-details/[id]/page.tsx

import { Metadata } from "next";
import { blog_data } from "@/data/blog-data";
import BlogDetailsMain from "@/pages/blog/blog-details";

export const metadata: Metadata = {
  title: "Growww - Blog Details page",
};

// Correctly typed according to Next.js App Router dynamic route
type BlogDetailsPageProps = {
  params: {
    id: string;
  };
};

export default function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const blog = blog_data.find((blog) => blog.id === Number(params.id));

  return blog ? (
    <BlogDetailsMain blog={blog} />
  ) : (
    <div className="text-center pt-100">
      Blog not found with id: {params.id}
    </div>
  );
};
