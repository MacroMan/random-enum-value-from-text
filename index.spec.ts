import { describe, expect, it } from "vitest";
import randomEnumValueFromText from "./index";

enum ETest {
  One = "one",
  Two = "two",
  Three = "three",
  Four = "four",
}

enum EEmpty {}

it("when given close neighbours with a single character, returns unique values", () => {
  expect(randomEnumValueFromText("A", ETest)).toBe(ETest.Two);
  expect(randomEnumValueFromText("B", ETest)).toBe(ETest.Three);
  expect(randomEnumValueFromText("C", ETest)).toBe(ETest.Four);
  expect(randomEnumValueFromText("D", ETest)).toBe(ETest.One);
});

it("when given close neighbours with 2 characters, returns unique values", () => {
  expect(randomEnumValueFromText("AA", ETest)).toBe(ETest.Two);
  expect(randomEnumValueFromText("AB", ETest)).toBe(ETest.Three);
  expect(randomEnumValueFromText("AC", ETest)).toBe(ETest.Four);
  expect(randomEnumValueFromText("AD", ETest)).toBe(ETest.One);
});

it("throws an error, when given an empty string", () => {
  expect(() => randomEnumValueFromText("", ETest)).toThrow(
    new Error("Given string was empty."),
  );
});

it("throws an error, when given an empty enum", () => {
  expect(() => randomEnumValueFromText("A", EEmpty)).toThrow(
    new Error("Given enum was empty."),
  );
});
