import { describe, expect, it } from "@jest/globals";
import { isPalindrome } from "./index";

describe("palindrome checker", () => {
  it("should return true when the parameter value is a palindrome", () => {
    expect(isPalindrome("mom")).toBe(true);
  });
});
