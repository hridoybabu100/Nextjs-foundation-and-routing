const blogs = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    author: "Hridoy Hasan",
    category: "Programming",
    date: "2026-04-13",
    description:
      "JavaScript is a powerful programming language used for web development and interactive websites.",
  },
  {
    id: 2,
    title: "Getting Started with React",
    author: "Hridoy Hasan",
    category: "Frontend",
    date: "2026-04-13",
    description:
      "React helps developers build reusable UI components and create modern web applications.",
  },
  {
    id: 3,
    title: "Understanding CSS Flexbox",
    author: "Hridoy Hasan",
    category: "CSS",
    date: "2026-04-13",
    description:
      "Flexbox makes it easier to design responsive layouts and align items properly.",
  },
  {
    id: 4,
    title: "Why Learn Next.js",
    author: "Hridoy Hasan",
    category: "Framework",
    date: "2026-04-13",
    description:
      "Next.js provides server-side rendering, routing, and performance optimization for React apps.",
  },
  {
    id: 5,
    title: "Tips for Better Coding",
    author: "Hridoy Hasan",
    category: "Tips",
    date: "2026-04-13",
    description:
      "Writing clean, readable, and reusable code is an important skill for every developer.",
  },
  {
    id: 6,
    title: "Responsive Design Basics",
    author: "Hridoy Hasan",
    category: "Web Design",
    date: "2026-04-13",
    description:
      "Learn how to make websites responsive for mobile, tablet, and desktop devices.",
  },
];

const blogDetailsPage = async ({ params }) => {
  const { blogId } = await params;
  console.log("this is a blog id", blogId);

  // console.log(params);

  const blog = blogs.find((blog) => blog.id === parseInt(blogId));
  console.log(blog);

  return (
    <div className="w-[85%] mx-auto">
      <h2 className="text-4xl text-white font-bold py-10">
        Blog Details Comming Soon......
      </h2>
      <div>
        {blog && (
          <div className="border mb-5 p-5 rounded-2xl">
            <h2> Id : {blog.id}</h2>
            <h2> Id : {blog.title}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default blogDetailsPage;
