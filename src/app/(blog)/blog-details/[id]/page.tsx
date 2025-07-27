import { Metadata } from "next";
import { blog_data } from "@/data/blog-data";
import BlogDetailsMain from "@/components/blog/blog-details"; 

export const metadata: Metadata = {
  title: "Growww - Blog Details page",
};

type BlogDetailsPageProps = {
  params: {
    id: string;
  };
};

export default function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const blogId = Number(params.id); // convert string to number
  const blog = blog_data.find((blog) => blog.id === blogId);

  if (!blog) {
    return (
      <div className="text-center pt-24">
        <h2>Blog not found</h2>
        <p>ID: {params.id}</p>
      </div>
    );
  }

  return <BlogDetailsMain blog={blog} />;
}
