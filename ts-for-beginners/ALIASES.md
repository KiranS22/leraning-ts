# TypeScript Basics: Type Aliases

Type aliases allow you to define and reuse types in TypeScript - much like variables that hold your desired type. This can make code cleaner and easier to read. Additionally, using type aliases makes it easier to implement changes if needed, as you only have to change the type in one place.

To create a type using a type alias:

1. Type the "type" keyword.
2. Give your type a name.
3. Define the structure of your desired type.

Best practices for naming types:

- Use PascalCase.
- Use clear, concise descriptive names.
- When wanting to use union types, reflect that in your type alias.

Once the type is defined, it can be used anywhere in the code, as shown below:

```typescript
type UserObject = {
  userName: string;
  age: number;
  phone?: string;
};

const logUser = (user: UserObject): void => {
  console.log("userName:", user.userName, "Age", user.age, "phone", user.phone);
};

const firstUser: UserObject = {
  userName: "first",
  age: 60,
  phone: "12345",
};

logUser(firstUser);
```

## Using Aliases with Functions

Using aliases with functions allows you to create a "blueprint" for the function, which can be used and reused as many times as you like to create as many different functions as necessary.

To use the function type:

- Define a name for your function.
- Add a colon (:) and define the function's type - in this case, it would be the name of the type alias we defined above.

Due to the fact that the function's type is predefined, we do not have to specify the parameter or return types when declaring the function.

```typescript
type funcBlueprint = (a: number, b: string) => void;

const write: funcBlueprint = (a, b) => {
  console.log(a, b);
};
```

## Typing Aliases with Set Values

You can also create types with set values, meaning that if the value assigned to that variable or property is anything other than what you have set, you will see an error.

```typescript
type Weather = {
  skyColor: "light" | "dark";
};

let weatherInPlaceOne: Weather = {
  skyColor: "light",
};
// No error occurs because I can set the value of skyColor to either light or dark

let weatherInPlaceTwo: Weather = {
  skyColor: "blue",
};
// Will throw a type error as the value set to the skyColor property is neither light nor dark
```


