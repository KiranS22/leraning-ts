## Passing Props in React with TypeScript

When working with React and TypeScript, passing props is an essential aspect of building reusable components. In the given example, we have two components, `PostList` and `PostCard`, and we'll demonstrate how to pass props from the parent `PostList` component to the child `PostCard` component.

### Parent Component: `PostList`

```jsx
import React from "react";
import PostCard from "../PostCard/PostCard";

const PostList = async () => {
  return (
    <div>
      <PostCard title="Post Title" body="Post Desc" />
    </div>
  );
};

export default PostList;
```

In the `PostList` component, we render the `PostCard` component with hardcoded data as props: `title` and `body`.

### Child Component: `PostCard`

```jsx
import React from "react";

const PostCard = (props: { title: string; body: string }) => {
  return (
    <div className="postCard">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
};

export default PostCard;
```

In the `PostCard` component, we define the prop types using TypeScript. The component will display the `title` and `body` props received from the parent `PostList` component.

### Explanation

1. In the parent component (`PostList`), we import the child component (`PostCard`) and render it with hardcoded props, such as `title="Post Title"` and `body="Post Desc"`. These props are passed as attributes to the `PostCard` component.

2. In the child component (`PostCard`), we define the prop types using TypeScript. In this case, we expect two props: `title` and `body`, both of which should be of type `string`.

3. Inside the `PostCard` component, we use the `props.title` and `props.body` to display the data.


