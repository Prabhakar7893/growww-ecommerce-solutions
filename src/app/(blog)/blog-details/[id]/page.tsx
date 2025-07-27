import { Metadata } from "next";
import { blog_data } from "@/data/blog-data";
import BlogDetailsMain from "@/pages/blog/blog-details";
import { type InferGetStaticPropsType } from "next"; // optional

export const metadata: Metadata = {
  title: "Growww - Blog Details page",
};

// ✅ Fix type
type BlogDetailsPageProps = {
  params: {
    id: string;
  };
};

export default async function BlogDetailsPage({ params }: { params: { id: string } }) {
  const blog = blog_data.find((blog) => blog.id === Number(params.id));

  return blog ? (
    <BlogDetailsMain blog={blog} />
  ) : (
    <div className="text-center pt-100">
      Blog not found with id: {params.id}
    </div>
  );
}
