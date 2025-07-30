import BlogCard from "@/components/ui/BlogCard";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const res = await fetch(`http://localhost:3000/blogs/${blogId}`);
  const blog = await res.json();

  return (
    <div>
      <BlogCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
