import { describe, expect, it } from "@jest/globals";
import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should throw an error if the parameter value is greater than 100", () => {
    expect(() => {
      fizzbuzz(101);
    }).toThrow();
  });

  it("should throw an error if the parameter value is 0", () => {
    expect(() => {
      fizzbuzz(0);
    }).toThrow();
  });

  it("should throw an error if the parameter value is less than 0", () => {
    expect(() => {
      fizzbuzz(-1);
    }).toThrow();
  });

  // it should return fizz for multiples of 3
  it("should return fizz for multiples of 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
    expect(fizzbuzz(6)).toBe("fizz");
    expect(fizzbuzz(18)).toBe("fizz");
    expect(fizzbuzz(27)).toBe("fizz");
    expect(fizzbuzz(54)).toBe("fizz");
    expect(fizzbuzz(69)).toBe("fizz");
    expect(fizzbuzz(84)).toBe("fizz");
    expect(fizzbuzz(96)).toBe("fizz");
    expect(fizzbuzz(99)).toBe("fizz");
  });

  // it should return buzz for multiples of 5
  it("should return buzz for multiples of 5", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
    expect(fizzbuzz(10)).toBe("Buzz");
    expect(fizzbuzz(20)).toBe("Buzz");
    expect(fizzbuzz(25)).toBe("Buzz");
  });

  // it should return fizzBuzz for multiples of 3 and 5
  it("should return fizzBuzz for multiples of 5", () => {
    expect(fizzbuzz(15)).toBe("fizzBuzz");
    expect(fizzbuzz(30)).toBe("fizzBuzz");
    expect(fizzbuzz(45)).toBe("fizzBuzz");
    expect(fizzbuzz(60)).toBe("fizzBuzz");
    expect(fizzbuzz(75)).toBe("fizzBuzz");
    expect(fizzbuzz(90)).toBe("fizzBuzz");
  });
});
