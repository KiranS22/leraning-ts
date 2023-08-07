# React-TypeScript: Passing Different Prop Types

In the  [previous file](./PROPS.md), we explored passing strings as props. Let's now delve into passing different data types as props in a React application with TypeScript.

## Passing Numbers as Props

When dealing with numeric data, you can pass numbers as props to your components. Here's an example using the `Greet` component:

```tsx


function App() {


  return (
    <div className="App">

      <Greet name={"Kiran"} messageCount={15} isLoggedIn={false} />

    </div>
  );
}

```

In the `Greet` component, the prop `messageCount` is defined as a number:

```tsx
// Greet.tsx



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
          <h2>
            Welcome, {props.name} you have {props.messageCount} unread messages
          </h2>
        </div>
      ) : (
        "welcome Guest"
      )}

    </>
  );
};

export default Greet;
```

## Passing Objects as Props

You can also pass objects as props to components. Consider the `Person` component:

```tsx




function App() {


  const personName = {
    first: "Bruce ",
    last: "Wayne",
  };

  return (
    <div className="App">

      <Person personName={personName} />

    </div>
  );
}


```

In the `Person` component, we're passing an object `personName`:

```tsx




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
```

## Passing Arrays as Props

Arrays can also be passed as props. Let's look at the `PersonList` component:

```tsx


function App() {


  const peopleList = [
    {
      first: "John",
      last: "Doe",
    },
    {
      first: "Jane",
      last: "Smith",
    },
    {
      first: "Michael",
      last: "Johnson",
    },
  ];

  return (
    <div className="App">

      <PersonList names={peopleList} />

    </div>
  );
}


```

In the `PersonList` component, we're passing an array of objects:

```tsx
// PersonList.tsx


interface PersonListProps {
  names: { first: string; last: string }[];
}

const PersonList = (props: PersonListProps) => {
  return (
    <>
      {props.names.map((person) => (
        <li>
          {person.first} {person.last}
        </li>
      ))}
    </>
  );
};

export default PersonList;
```

## Passing Booleans as Props

Booleans can also be passed as props to components. In the `Greet` component example above, the prop `isLoggedIn` is a boolean that determines whether to display a welcome message or "welcome Guest."

By following these examples, you can effectively pass different data types—strings, numbers, objects, arrays, and booleans—as props in a React application using TypeScript. This flexibility enhances your components' capabilities and enables you to create more dynamic and interactive user interfaces.
