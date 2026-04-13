import Link from "next/link";

const userPages = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  // console.log("This is a all users", user);

  return (
    <div className="w-[85%] mx-auto">
      <h2 className="py-5 text-4xl text-white">
        This is users comming soon ....
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="card bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p>
                {user.email}
              </p>
              <div className="card-actions justify-end">
                <Link href={`/users/${user.id}`} className="btn">User Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default userPages;
