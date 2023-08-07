# React-TypeScript: Passing Props

Passing props from a parent component to a child component is a fundamental concept in React that facilitates dynamic data flow and interaction between components. When using TypeScript, accurately defining prop types becomes essential to ensure type safety and code correctness. This guide will walk you through the process of passing props from a parent component to a child component in a React application using TypeScript.

## An Overview of Our Components

### Parent Component (App.tsx)

```tsx
import React from "react";
import Greet from "../Greet/Greet";

function App() {
  return (
    <div className="App">
      <Greet />
    </div>
  );
}

export default App;
```

### Child Component (Greet.tsx)

```tsx
const Greet = () => {
  return (
    <div>
      <h2> Welcome, John! You have 10 unread messages</h2>
    </div>
  );
};
```

Initially, the `Greet` component utilized hardcoded data. To introduce dynamism, we can pass a `name` prop from the `App` component to the `Greet` component.

## Stage 1: Passing Props

In this stage, we begin by defining a `name` prop in the place where `Greet` is rendered (`App.tsx`). We then receive this prop in the `Greet.tsx` child component.

### Parent Component (App.tsx)

```tsx
import React from "react";
import Greet from "../Greet/Greet";

function App() {
  return (
    <div className="App">
      <Greet name="Kiran" />
    </div>
  );
}

export default App;
```

### Child Component (Greet.tsx)

```tsx
import React from 'react';

const Greet = (props) => {
  return (
    <div>
      <h2> Welcome, {props.name}! You have 10 unread messages</h2>
    </div>
  );
}

export default Greet;
```

At this point, you might encounter errors since TypeScript lacks knowledge of the `props` object's structure. To address this, we need to specify the type of `props`.

## Stage 2: Defining Props Type

In this stage, we define the type of the `props` object using an interface.

```tsx
import React from 'react';

interface GreetProps {
  name: string;
}

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2> Welcome, {props.name}! You have 10 unread messages</h2>
    </div>
  );
}

export default Greet;
```

By establishing the `GreetProps` interface, we outline the structure of the `props` object. In this case, the `name` prop must be a string. Psssing in any other data type such as `number` or `boolean` will result in TypeScript throwing an error.

## Type vs Interface

Modern TypeScript supports both `type` aliases and `interface` declarations for shaping custom types. The choice between them hinges on personal preference and specific use cases.

### Key Differences

- `type` aliases accommodate various types like primitives, unions, and tuples.
- An `interface` can be defined multiple times and functions as a single interface.

### Recommendation

While both options are potent, it's generally advisable to use `interface` when defining props and custom types for components. Employing `interface` can explicitly convey an intention for implementation, while `type` aliases offer greater versatility for other type-related scenarios.

Remember, the decision to employ `type` or `interface` rests on your team's coding standards and the particular demands of your project.

By adhering to these steps and principles, you can proficiently pass and define props within a React application using TypeScript, thereby ensuring type safety and fostering more reliable code.

For more information, see my notes on [TypeScript Type Aliases](./ts-for-beginners/ALIASES.md) and [TypeScript Interfaces](./ts-for-beginners/INTERFACES.md)
