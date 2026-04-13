import Link from "next/link";
import React, { use } from "react";

const userdetails = async ({ params }) => {
  const { userId } = await params;
  // console.log('this is a user id', userId);

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  const user = await res.json();
//   console.log("This is all user", user);

  return (
    <div className="w-[85%] mx-auto my-10">
        <h1 className="text-4xl text-white font-bold my-3">User Details</h1>
      <div className="card bg-secondary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">User name : {user.username}</h2>
          <h2 className="card-title">Email : {user.email}</h2>
        
         
          <div className="card-actions justify-end">
            <Link href={'/users'} className="btn">Go Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userdetails;
