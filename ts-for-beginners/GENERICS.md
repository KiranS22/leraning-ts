
## TypeScript Basics: Generics

Generics are placeholders for types. They allow types to be assigned dynamically, meaning that you can change the type of something depending on the circumstance or use.

It is common practice for the first generic to be represented by the letter `T`.

### An Example Without Generics

Users interface:
```typescript
interface IAuthour {
  id: number;
  username: string;
}

// Category interface
interface ICategory {
  id: number;
}

// Post Interface
interface IPost {
  id: number;
  title: string;
  description: string;
  extra: IAuthour[] | ICategory[];
}
```

This example is good, but what if we expect different types of data at different points? This is where generics are useful.

### Using Generics

Generics act like parameters in that you pass a value within angle brackets (`<>`) that represents a type, but we are unsure what it is yet. In the below example, the generic is placed right after the name of the interface but before the curly braces (`{}`).

```typescript
// Post Interface with Generic
interface IPostBetter<T> {
  id: number;
  title: string;
  description: string;
  extra: T[];
}
```

Example Usage of Generic Interface:

In the above example, `postAboutGenerics` is assigned the interface `IPostBetter`, which means it has to follow the structure defined in the `IPostBetter` interface. We assigned the generic to have a type of string, so `extra` holds a string array as its value.

```typescript
const postAboutGenerics: IPostBetter<string> = {
  id: 1,
  title: "I'm using generics",
  description: "I am a post about using generics in TypeScript",
  extra: ["coding", "typeScript", "Web Development"],
};
```

In this example, we've assigned the generic to have a type of number, so `extra` now holds an array of numbers.

```typescript
const anotherPostAboutGenerics: IPostBetter<number> = {
  id: 1,
  title: "I'm using generics again",
  description: "I am another post about using generics in TypeScript",
  extra: [1, 2, 3],
};
```

### Limiting Generic Flexibility

If you want to limit the flexibility within your generic so that only specific types can be assigned to it, you can use the `extends` keyword after defining your generic within your interface. After which, you can define which type you would like that generic to be.

```typescript
interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  description: string;
  extra: T;
}
```

Example Usage of Limited Generic:

In this example, `aFinalPostAboutGenerics` will not cause errors as `extra` is the same type that the object extends.

```typescript
const aFinalPostAboutGenerics: IPostEvenBetter<object> = {
  id: 2,
  title: "I'm using generics for the last time",
  description: "I am another post about using generics in TypeScript",
  extra: { foo: "Some property" },
};
```

In this example, `aBadPostAboutGenerics` will cause errors as `extra` is not the same type that the object extends (must be an object).

```typescript
const aBadPostAboutGenerics: IPostEvenBetter<string> = {
  id: 3,
  title: "I'm a bad post about generics",
  description: "I am not using the correct type for my generic",
  extra: "",
};
```

### Using Generics with Defined Interface Structure

Generics can also be given the value of a defined interface structure.

In this example, `aPostUsingInterface` uses a generic with the `IAuthour` interface structure.

```typescript
const aPostUsingInterface: IPostEvenBetter<IAuthour> = {
  id: 3,
  title: "I'm a post using generics with a defined interface structure",
  description: "I am using the correct type for my generic",
  extra: { id: 1, username: "jane" },
};
```

The `extra` property is an object that follows the structure of the `IAuthour` interface, as that's the value that the generic has been given.

---
