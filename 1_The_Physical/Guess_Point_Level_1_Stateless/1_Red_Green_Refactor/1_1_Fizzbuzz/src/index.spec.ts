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

  // it should throw an error if the parameter value is less than 1
  it("should throw an error if the parameter value is 0", () => {
    expect(() => {
      fizzbuzz(-1);
    }).toThrow();
  });

  // it should return fizz for multiples of 3

  // it should return buzz for multiples of 5

  // it should return fizzBuzz for multiples of 3 and 5
});
