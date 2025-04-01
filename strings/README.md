# String Extensions for JavaScript

This package extends the JavaScript `String` prototype with additional methods inspired by Python's string operations, providing useful functionality for string manipulation.

## Installation

You can install the package using npm:

```sh
npm install @dotenvc/strings
```

or using Yarn:

```sh
yarn add @dotenvc/strings
```

## Usage

Import the package in your project:

```ts
import '@dotenvc/strings';
```

### Available Methods


#### `expandtabs(tabSize: number = 8)`
Replaces tab characters (`\t`) with spaces, aligning text properly.

```ts
console.log("Hello\tWorld".expandtabs()); // "Hello   World"
console.log("Hello\tWorld".expandtabs(4)); // "Hello   World"
```

#### `format(...args: any[])`
Formats a string using positional placeholders `{0}, {1}, {2}`, etc.

```ts
console.log("Hello {0}, welcome to {1}".format("Alice", "JavaScript"));
// "Hello Alice, welcome to JavaScript"
```

#### `isdecimal()`
Checks if the string contains only decimal numbers.

```ts
console.log("123".isdecimal()); // true
console.log("123.45".isdecimal()); // false
```

#### `isidentifier()`
Checks if the string is a valid JavaScript identifier.

```ts
console.log("variable_name".isidentifier()); // true
console.log("123abc".isidentifier()); // false
```

#### `partition(separator: string)`
Splits a string into three parts: before, separator, and after.

```ts
console.log("hello-world".partition("-")); // ["hello", "-", "world"]
```

#### `swapcase()`
Swaps uppercase letters to lowercase and vice versa.

```ts
console.log("Hello World".swapcase()); // "hELLO wORLD"
```

#### `title()`
Converts the string to title case.

```ts
console.log("hello world".title()); // "Hello World"
```

#### `zfill(width: number)`
Pads the string with zeros at the beginning to reach the specified width.

```ts
console.log("42".zfill(5)); // "00042"
```

## Running Tests

You can run tests using

```sh
bun test
```

## License

MIT License