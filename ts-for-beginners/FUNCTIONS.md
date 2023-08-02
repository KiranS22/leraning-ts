# TypeScript Basics: Functions

## Functions and Return Types

The below variable is holding a function. In TypeScript, you must specify the return type of your function.

```typescript
// Implicit return type
const sayHi = () => console.log("Hi, welcome");
// The sayHi variable is always a function. If you try and store anything else in it, you'll get errors.
```

Always specify return types. It is good practice to specify the return type. In the case that your function returns nothing, as previously mentioned, the return type is `void`.

```typescript
const sayHi2 = () => console.log("Hi, welcome again");
// If your return type is void, adding a return statement will throw an error.
```

Functions with Return Types in TypeScript. To declare a function's return type:

1. Create a standard JavaScript function (in this case, I'm using an arrow function).
2. Add a colon (:) after the parentheses - this is where you'll define the type of data your function will return.

If your return type does not match the data type specified, TypeScript will throw a type error. You will also experience type errors if you specify a return type but fail to return anything from the function.

```typescript
const funcReturnString = (): string => {
  return "hello";
};
```

## Functions that Take Arguments

When dealing with functions that take arguments/parameters:

1. Create the function and pass in the argument like you would in JavaScript.
2. After the parentheses of the function, add a colon (:) and specify your return type. If this is not done, TypeScript will implicitly do this for you, depending on the value given after the `return` keyword.
3. Give your parameter a type (by default, it has a type of "any" if not specified).

```typescript
const multiple = (num: number): number => {
  return num * 2;
};
```

## Invoking Functions

When invoking functions in TypeScript, it is important to pass in the exact number of arguments that the function expects. Failing to do this will cause errors.

```typescript
const sum = (num1: number, num2: number): number => num1 + num2;

// Successfully invoking a function
sum(1, 2); // won't throw errors as the correct number of arguments is passed in

// Incorrectly invoking a function
sum(1); // will throw errors because too few arguments are passed in
```

## Adding Optional Parameters to Functions

To add optional parameters into a function, you place a question mark (?) after defining the name of the parameter. Doing this will ensure that your code will throw no errors should the parameter be missing.

```typescript
const logNums = (num1: number, num2: number, another?: number): void =>
  console.log(num1, num2);

logNums(1, 2); // doesn't throw an error even though the third argument is missing because the third argument is optional
```

