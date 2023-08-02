# TypeScript Basics: Types

TypeScript defines a strict type for each variable and ensures you use that type throughout your code. Even if you do not define a type, TypeScript will automatically do this for you (implicit typing).

## Implicit Typing

```typescript
let variable = "hello"; // will have a type of string and "variable" cannot be assigned any other data type
let age = 12; // Will have a type of number and "age" cannot be assigned to any other data type
```

## Explicit Typing - Multiple Lines

```typescript
let ageWithType: number;
ageWithType = 55;
```

## Explicit Typing - One Line

```typescript
let anotherAgeWithType: number = 33;
```


## Data Types

### `any` - Not recommended

```typescript
let myType; // has a type of any - it can be a string, boolean, number, or object. Not using TypeScript effectively
```

### `string`

```typescript
let testString: string = "Hello";
```

### `boolean`

```typescript
let testBoolean: boolean = true; // can be either true or false
```

### `number`

```typescript
let testNumber: number = 42;
```



## Union Operator

TypeScript allows us to use more than one data type for a variable or a function parameter without causing type errors.

```typescript
let testStringOrNumber: string | number;
testStringOrNumber = "2";
testStringOrNumber = 4;
```

## Arrays

### Implicit Typing with Arrays

```typescript
let names = ["John", "Jane", "Tom"]; // will have a type of string[]
let numbers = [1, 2, 3.4]; // Will have the type of number[]
```

### Explicit Typing with Arrays

```typescript
let testStringArray: string[];
testStringArray = ["Hello"];

let testNumberArray: number[];
testNumberArray = [4, 5, 6];
```

### Union Types with Arrays

```typescript
let testStringOrNumberArray: (string | number)[];
testStringOrNumberArray = [1, "one", 2, "two"];
```

## Objects

### Implicit Typing with Objects

In the example below, each property on the user object has its own implicit type (username: string, age: number, isAdmin: boolean). If any properties are added or missing when using this object, errors will occur. However, you can modify existing data within the object, provided it is the same type.

```typescript
let user = {
  username: "John",
  age: 22,
  isAdmin: false,
};

// Correctly modifying a TypeScript Object
user.username = "ABC123"; // This is acceptable to do, as you are not changing the data type

// Incorrectly modifying a TypeScript object
 user.isAdmin = "true" // will cause a type error as you are trying to change the type of the property
 user.eyeColor = "blue" // Will throw an error because the property doesn't exist at the time of creating the type
```

### Explicit Typing with Objects

```typescript
let userObject: {
  username: string,
  age: number,
  isAdmin: boolean,
};

userObject = {
  username: "John",
  age: 22,
  isAdmin: false,
};
```

### Optional Properties in TypeScript Objects

To add optional parameters to objects, you add a question mark after defining the property name. Properties that follow this syntax will not throw errors if they are not included in the object.

```typescript
let userObject2: {
  username: string,
  age: number,
  isAdmin: boolean,
  phoneNumber?: number,
};

userObject2 = {
  username: "John",
  age: 22,
  isAdmin: false,
  // Throws no errors before adding phoneNumber property as I have made it optional
  phoneNumber: 123456789,
  // Throws no errors after it's been added, provided it has the correct type assigned to it
};
```
