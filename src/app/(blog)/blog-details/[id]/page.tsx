import React from "react";
import { Metadata } from "next";
import BlogDetailsMain from "@/pages/blog/blog-details";

export const metadata: Metadata = {
  title: "Growww - Blog Details page",
};

const BlogDetailsPage = () => {
  return (
    <BlogDetailsMain/>
  );
};

export default BlogDetailsPage;

