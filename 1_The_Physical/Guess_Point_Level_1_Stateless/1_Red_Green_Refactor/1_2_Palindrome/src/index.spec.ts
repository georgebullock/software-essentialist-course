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
];

const nonPalindromes = [
  { value: "Berlin" },
  { value: "Munich" },
  { value: "Hanover" },
  { value: "Potsdam" },
  { value: "Frankfurt" },
  { value: "A View to a Kill" },
  { value: "From Russia With Love" },
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
});
