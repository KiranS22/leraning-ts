import React from "react";
import PostCard from "../PostCard/PostCard";

const PostList = async () => {
  async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
  const data = await getData();

  return (
    <div>
      {/* <PostCard title="Post Title" body="Post Desc" /> */}
      {data.map((post: { id: number; title: string; body: string }) => {
        <PostCard key={post.id} title={post.title} body={post.body} />;
      })}
    </div>
  );
};

export default PostList;
