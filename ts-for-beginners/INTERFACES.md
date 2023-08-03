# TypeScript Basics: Interfaces

Interfaces are similar to types but slightly more advanced. They define the syntax for classes to follow. Classes that are derived from an interface must follow the structure provided by their interface.

To create an interface:

- Type the `interface` keyword.
- Give your interface a name.
- Add curly braces (no need for an equals sign, as this is a blueprint for a class).

Best practices for naming interfaces:

- Use PascalCase.
- Give clear, concise, and descriptive names.
- Start interfaces with "I" to provide a clear indication that the name relates to an interface.

```typescript
interface IUser {
  name: string;
  email: string;
  age: number;
}
```

## Extending Interfaces

There may come a time when you want all of the properties from one interface along with some additional ones. This is where extending interfaces comes in.

To extend an interface:

- Define your first interface (the interface that has properties that you want to use in another interface).
- Define your second interface.
- Add the `extends` keyword and then the name of the interface that you want to take properties from.
- Define the properties that are needed only in the second interface.

```typescript
interface IEmployee extends IUser {
  employeeId: number;
}
```

The `IEmployee` interface has all the properties that `IUser` has, as well as the `employeeId` property (defined in the `IEmployee` interface).

```typescript
const emp: IEmployee = {
  name: "John",
  email: "John@gmail.com",
  age: 55,
  employeeId: 7778866,
};
```

`emp` uses the `IEmployee` interface, so it has access to all of the user properties plus the properties defined in `IEmployee`. In this case, forgetting to include any of the properties in the `IUser` interface will cause an error because `IEmployee` extends `IUser`, and all `IUser` properties are mandatory.

If we wanted to create a user, we would assign the variable to the `IUser` interface since we don't need any properties from `IEmployee`.

```typescript
const client: IUser = {
  name: "Jan",
  email: "Jan@gmail.com",
  age: 71,
};
```

0
