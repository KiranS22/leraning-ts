import React from "react";
import PostCard from "../PostCard/PostCard";
import { PostProps } from "../../types/types";

interface PostListProps {
  data: PostProps[];
}

const PostList: React.FC<PostListProps> = ({ data }) => {
  return (
    <div className="postList">
      {data.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
