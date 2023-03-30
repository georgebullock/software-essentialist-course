import { describe, expect, it } from "@jest/globals";
import { fizzbuzz } from "./fizzbuzz";

const nonMultiplesOfThreeAndFive = [
  { value: 1, expected: "1" },
  { value: 2, expected: "2" },
  { value: 4, expected: "4" },
  { value: 8, expected: "8" },
  { value: 19, expected: "19" },
  { value: 26, expected: "26" },
  { value: 43, expected: "43" },
  { value: 62, expected: "62" },
  { value: 97, expected: "97" },
];

const multiplesOfThree = [
  { value: 3, expected: "fizz" },
  { value: 6, expected: "fizz" },
  { value: 9, expected: "fizz" },
  { value: 12, expected: "fizz" },
  { value: 18, expected: "fizz" },
  { value: 21, expected: "fizz" },
  { value: 24, expected: "fizz" },
  { value: 27, expected: "fizz" },
  { value: 33, expected: "fizz" },
  { value: 36, expected: "fizz" },
  { value: 39, expected: "fizz" },
  { value: 42, expected: "fizz" },
  { value: 48, expected: "fizz" },
  { value: 51, expected: "fizz" },
  { value: 54, expected: "fizz" },
  { value: 57, expected: "fizz" },
  { value: 63, expected: "fizz" },
  { value: 66, expected: "fizz" },
  { value: 69, expected: "fizz" },
  { value: 72, expected: "fizz" },
  { value: 78, expected: "fizz" },
  { value: 81, expected: "fizz" },
  { value: 84, expected: "fizz" },
  { value: 87, expected: "fizz" },
  { value: 93, expected: "fizz" },
  { value: 96, expected: "fizz" },
  { value: 99, expected: "fizz" },
];

const multiplesOfFive = [
  { value: 5, expected: "Buzz" },
  { value: 10, expected: "Buzz" },
  { value: 20, expected: "Buzz" },
  { value: 25, expected: "Buzz" },
  { value: 35, expected: "Buzz" },
  { value: 40, expected: "Buzz" },
  { value: 50, expected: "Buzz" },
  { value: 55, expected: "Buzz" },
  { value: 65, expected: "Buzz" },
  { value: 70, expected: "Buzz" },
  { value: 80, expected: "Buzz" },
  { value: 85, expected: "Buzz" },
  { value: 95, expected: "Buzz" },
  { value: 100, expected: "Buzz" },
];

const multiplesOfThreeAndFive = [
  { value: 15, expected: "fizzBuzz" },
  { value: 30, expected: "fizzBuzz" },
  { value: 45, expected: "fizzBuzz" },
  { value: 60, expected: "fizzBuzz" },
  { value: 75, expected: "fizzBuzz" },
  { value: 90, expected: "fizzBuzz" },
];

describe("fizzbuzz", () => {
  it("should throw an error if the parameter value is less than 0", () => {
    expect(() => {
      fizzbuzz(-1);
    }).toThrow();
  });

  it("should throw an error if the parameter value is 0", () => {
    expect(() => {
      fizzbuzz(0);
    }).toThrow();
  });

  it("should throw an error if the parameter value is greater than 100", () => {
    expect(() => {
      fizzbuzz(101);
    }).toThrow();
  });

  it.each(nonMultiplesOfThreeAndFive)(
    "should return the number as a string for non multiples of 3 and 5",
    (table) => {
      expect(fizzbuzz(table.value)).toEqual(table.expected);
    }
  );

  it.each(multiplesOfThree)(
    "should return fizz for multiples of 3",
    (table) => {
      expect(fizzbuzz(table.value)).toEqual(table.expected);
    }
  );

  it.each(multiplesOfFive)("should return buzz for multiples of 5", (table) => {
    expect(fizzbuzz(table.value)).toEqual(table.expected);
  });

  it.each(multiplesOfThreeAndFive)(
    "should return fizzBuzz for multiples of 3 and 5",
    (table) => {
      expect(fizzbuzz(table.value)).toEqual(table.expected);
    }
  );
});
