.

## Passing Props using an API in React TypeScript

### Passing Props without uising types

In the provided code, we have two React components: `PostList` and `PostCard`. We'll modify the `PostList` component to fetch data from the API and pass it as props to the `PostCard` component.

### Child  Component: `PostCard`
```tsx


import React from "react";



const PostCard = (props: {id: number; title: string; body: string;}) => {
  return (
    <div className="postCard">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
};

export default PostCard;
```

### Parent Component: `PostList`

```tsx
// PostList.tsx

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
      {data.map((post: { id: number; title: string; body: string }) => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default PostList;
```

In the `PostList` component, we use TypeScript's static type checking to ensure that the `map` function is applied correctly. We explicitly define the type of the `post` parameter within the `map` function as an object with properties `id`, `title`, and `body`. This tells TypeScript about the shape of the `post` object and allows it to check that the properties being accessed (`id`, `title`, and `body`) exist and are of the correct types. This helps catch potential errors during development and improves code quality.
