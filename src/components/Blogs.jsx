import Card from "./UI/Card";

const Blogs = () => {
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
  return (
    <div className="grid grid-cols-3 gap-6 w-[85%] mx-auto my-10">
      {blogs.map((blog) => <Card blog={blog} key={blog.id}></Card>)}
    </div>
  );
};

export default Blogs;
