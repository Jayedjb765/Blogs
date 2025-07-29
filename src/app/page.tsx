const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  console.log(blogs);
  return (
    <div className="my-10">
      <h1 className="text-4xl text-center">Latest Blogs</h1>
    </div>
  );
};

export default HomePage;
