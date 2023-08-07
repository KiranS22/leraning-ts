# React-TypeScript: Passing Advanced Props

## Literal Type Union.

In this example, we'll explore passing advanced props in a React application built with TypeScript. We'll focus on creating a `Status` component that dynamically displays different messages based on the value of a `status` prop.

## Parent Component (App.tsx)

```tsx
import React from "react";
import "./../../resources/App.css";
import Greet from "../Greet/Greet";
import Person from "../Person/Person";
import PersonList from "../Person/PersonList";
import Status from "../Status/Status";

function App() {
  return (
    <div className="App">
      <Status status="loading" />
    </div>
  );
}

export default App;
```

In the `App` component, we import the `Status` component and pass a `status` prop with the value `"loading"`.

## Child Component (Status.tsx)

```tsx
import React from "react";

interface StatusProps {
  status: string;
}

const Status = (props: StatusProps) => {
  let message;

  if (props.status === "loading") {
    message = "Loading";
  } else if (props.status === "ok") {
    message = "Data Fetched";
  } else if (props.status === "Error") {
    message = "Error fetching data";
  }

  return (
    <div>
      <h2>Status: {message}</h2>
    </div>
  );
};

export default Status;
```

The `Status` component takes a `status` prop as an input. Based on the value of this prop, it dynamically determines the appropriate message to display. If the `status` prop is `"loading"`, it displays "Loading". If the `status` prop is `"ok"`, it displays "Data Fetched". And if the `status` prop is `"Error"`, it displays "Error fetching data".

By utilizing the `Status` component, we can easily showcase different statuses and messages in our application. This example demonstrates the flexibility and reusability of components when leveraging advanced props in React applications with TypeScript.

However, this presents a problem, since the status property is set to be a type of `string`, it means that the user can pass in any string as a prop
To solve this we can do as follows

```tsx
import React from "react";

interface StatusProps {
  status: "loading" | "OK" | "Error";
}
const Status = (props: StatusProps) => {
  let message;
  if (props.status == "loading") {
    message == "Loading";
  } else if (props.status == "OK") {
    message == "Data Fetched";
  } else if (props.status == "Error") {
    message == "Error fetching data";
  }
  return (
    <div>
      <h2>Status: {message}</h2>
    </div>
  );
};

export default Status;
```
This makes sure that users can only pass in 1 of the 3 possible values. Also known as a Literal Type Union. Where you use a combination of hardcoded values and the union operator (|) to set specific  values for properties
