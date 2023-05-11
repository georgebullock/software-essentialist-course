import { describe, expect, it } from "@jest/globals";
import { isPalindrome } from "./index";

const palindromes = [
  { value: "mom" },
  { value: "Noon" },
  { value: "ciVic" },
  { value: "radAR" },
  { value: "LeveL" },
  { value: "Was It A Rat I Saw" },
  { value: "Never Odd or Even" },
  { value: "Mom" },
  { value: "MoM" },
  { value: "xMomx" },
  { value: "1Never Odd or Even1" },
];

const nonPalindromes = [
  { value: "Berlin" },
  { value: "Munich" },
  { value: "Hanover" },
  { value: "Potsdam" },
  { value: "Frankfurt" },
  { value: "A View to a Kill" },
  { value: "From Russia With Love" },
  { value: "Momx" },
  { value: "Never Odd or Even1" },
];

const nonStringTypes = [
  { value: undefined },
  { value: null },
  { value: true },
  { value: false },
  { value: Symbol("foo") },
  { value: {} },
  { value: () => {} },
];

describe("palindrome checker", () => {
  it.each(palindromes)(
    "should return true when the parameter value is a palindrome",
    (table) => {
      expect(isPalindrome(table.value)).toBe(true);
    }
  );

  it.each(nonPalindromes)(
    "should should return false when the parameter value is not a palindrome",
    (table) => {
      expect(isPalindrome(table.value)).toBe(false);
    }
  );

  it("should throw an error if the parameter value is not a string", () => {
    (table: any) => {
      expect(isPalindrome(table.value)).toBe(
        `Problem: The argument is a ${typeof table.value}. isPalindrome only accepts string arguments. Solution: Change the argument to a string.`
      );
    };
  });
});
