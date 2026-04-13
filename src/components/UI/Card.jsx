import Link from "next/link";
import React from "react";

const Card = ({blog}) => {
  return (
    <div>
      <div className="bg-amber-800 border mb-4 rounded-2xl p-6" key={blog.id}>
        <h1>Title : {blog.title}</h1>
        <p>Author : {blog.author}</p>
        <div>
          <Link href={`/blogs/${blog.id}`} className="btn">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
