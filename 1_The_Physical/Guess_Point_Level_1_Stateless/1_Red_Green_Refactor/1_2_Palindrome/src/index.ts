const isPalindrome = (value: string) => {
  if (typeof value !== "string")
    throw new Error(
      `Problem: The argument is a ${typeof value}. isPalindrome only accepts string arguments. Solution: Change the argument to a string.`
    );

  // Remove the space between words in phrases before transforming them to lowercase
  const normalizedValue = value.split(" ").join("").toLowerCase();

  const reversedValue = normalizedValue.split("").reverse().join("");

  return normalizedValue === reversedValue;
};

export { isPalindrome };
