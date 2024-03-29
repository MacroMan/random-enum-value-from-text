# random-enum-value-from-text
Pseudo-random index selection from an enum, ensuring the same value is always selected for a given text

## Motivation
This was made to support picking a random display colour from a persons initials, but can be used for any purpose where a deterministic pseudo-random enum value is required

## Installation
`npm i random-enum-value-from-text`

or

`pnpm add random-enum-value-from-text`

or

`yarn add random-enum-value-from-text`

## Usage
```typescript
import randomEnumValueFromText from "random-enum-value-from-text";

enum Example {
  One = "one",
  Two = "two",
  Three = "three",
  Four = "four",
}

randomEnumValueFromText("AA", ETest); // Example.Two
randomEnumValueFromText("AB", ETest); // Example.Three
randomEnumValueFromText("AC", ETest); // Example.Four
randomEnumValueFromText("AD", ETest); // Example.One
```

## Licence
[ISC](https://opensource.org/license/isc-license-txt)

## Author(s)
- David Wakelin (https://davidwakelin.co.uk)
