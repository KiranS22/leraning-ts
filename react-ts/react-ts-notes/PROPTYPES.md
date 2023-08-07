

# React-TypeScript: Passing Different Prop Types

In React with TypeScript, we have explored how to pass strings as props. However, we can also pass props of various data types. In this guide, we will learn how to pass different data types as props and handle them correctly. We'll achieve this by passing a new prop from the `Greet` component rendered in the `App` component, updating the `GreetProps` interface accordingly, and handling the new prop in the child component.

## Parent Component (App.tsx)

```tsx
import React from "react";
import "./../../resources/App.css";
import Greet from "../Greet/Greet";

function App() {
  return (
    <div className="App">
      <Greet name="Kiran" messageCount={15} />
    </div>
  );
}

export default App;
```

In the `App` component, we are rendering the `Greet` component and passing two props: `name` (a string) and `messageCount` (a number).

## Child Component (Greet.tsx)

```tsx
import React from "react";

interface GreetProps {
  name: string;
  messageCount: number;
}

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2> Welcome, {props.name}! You have {props.messageCount} unread messages</h2>
    </div>
  );
};

export default Greet;
```

In the `Greet` component, we have updated the `GreetProps` interface to include the new prop `messageCount` of type `number`. We are now able to access both `name` and `messageCount` props and use them in our component.

Please note that TypeScript may generate errors if:
- You have not properly defined the `App` component in the parent.
- You have not defined the correct types for the `props` object in the child component.
- You have not updated the `GreetProps` interface to include the new prop.
- You define a prop as one data type but use a different data type.

Once you have passsed your pr ops you can use the like ou would in a vanilla react component


