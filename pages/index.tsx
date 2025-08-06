import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Our App</h1>
      <div className="nav-links">
        <Link href="/users">
          <button>Users</button>
        </Link>
        <Link href="/posts">
          <button>Posts</button>
        </Link>
        <Link href="/todos">
          <button>Todos</button>
        </Link>
        <Link href="/comments">
          <button>Comments</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
