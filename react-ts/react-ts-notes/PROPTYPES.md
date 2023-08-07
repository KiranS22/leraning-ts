

# React-TypeScript: Passing Different Prop Types

In React with TypeScript, we have explored how to pass strings as props. However, we can also pass props of various data types. In this guide, we will learn how to pass different data types as props and handle them correctly. We'll achieve this by passing different types of props to our components and ensuring proper type handling.

## Parent Component (App.tsx)

```tsx
import React from "react";
import "./../../resources/App.css";
import Greet from "../Greet/Greet";
import Person from "../Person/Person";

function App() {
  const personName = {
    first: "Bruce ",
    last: "Wayne"
  };
  return (
    <div className="App">
      <Greet name={"Kiran"} messageCount={15} isLoggedIn={false} />
      <Person personName={personName} />
    </div>
  );
}

export default App;
```

In the `App` component, we are rendering the `Greet` and `Person` components and passing different types of props: `name` (string), `messageCount` (number), and `isLoggedIn` (boolean) to `Greet`, and `personName` (an object) to `Person`.

## Greet Component (Greet.tsx)

```tsx
import React from "react";

interface GreetProps {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
}

const Greet = (props: GreetProps) => {
  return (
    <>
      {props.isLoggedIn ? (
        <div>
          <h2> Welcome, {props.name}! You have {props.messageCount} unread messages</h2>
        </div>
      ) : (
        "Welcome Guest"
      )}
    </>
  );
};

export default Greet;
```

In the `Greet` component, we have added a new prop `isLoggedIn` of type `boolean`. Depending on whether the user is logged in or not, a welcome message or "Welcome Guest" is displayed.

## Person Component (Person.tsx)

```tsx
import React from "react";

interface PersonProps {
  personName: {
    first: string;
    last: string;
  };
}

const Person = (props: PersonProps) => {
  return (
    <div>
      <p>
        {props.personName.first} {props.personName.last}
      </p>
    </div>
  );
};

export default Person;
```

In the `Person` component, we receive an object prop `personName` with `first` and `last` properties. The component displays the person's full name.
