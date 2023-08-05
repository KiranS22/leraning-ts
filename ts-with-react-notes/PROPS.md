# Passing Props in React TypeScript

In React, passing props to components is a common way to send data from one component to another. When using TypeScript with React, you can define the types of props to ensure type safety and catch potential errors during development.

Let's explore how to pass props in React TypeScript using the provided components, `PostList` and `PostCard`, and demonstrate passing hardcoded data.

## PostCard Component

The `PostCard` component receives two props, `title` and `body`, and displays them in a simple card layout.

```tsx
// PostCard.tsx

import React from "react";

interface PostCardProps {
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = (props) => {
  return (
    <div className="postCard">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
};

export default PostCard;
```

## PostList Component

The `PostList` component renders a list of `PostCard` components, passing hardcoded data as props to each card.

```tsx
// PostList.tsx

import React from "react";
import PostCard from "../PostCard/PostCard";

const PostList = async () => {
  // Hardcoded data for post cards
  const posts = [
    { title: "Post 1 Title", body: "Post 1 Description" },
    { title: "Post 2 Title", body: "Post 2 Description" },
    { title: "Post 3 Title", body: "Post 3 Description" },
  ];

  return (
    <div>
      {posts.map((post, index) => (
        <PostCard key={index} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default PostList;
```

In the `PostList` component, we define an array called `posts`, containing objects representing each post with a `title` and `body`. Then, we use the `map` function to iterate over the `posts` array and create a `PostCard` component for each post, passing the `title` and `body` as props.

This way, each `PostCard` component will receive its respective `title` and `body` props, and the content will be rendered accordingly.

Remember to import and use these components in your main application file to see the rendered output.

```tsx
// App.tsx (or any other main application file)

import React from "react";
import PostList from "./components/PostList/PostList";

const App = () => {
  return (
    <div>
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};

export default App;
```

By following this approach, you can successfully pass and display hardcoded data using props in React TypeScript components.
