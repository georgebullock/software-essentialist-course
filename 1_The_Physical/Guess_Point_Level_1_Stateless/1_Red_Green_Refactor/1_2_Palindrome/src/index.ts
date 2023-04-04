const isPalindrome = (value: string) => {
  // Normalize the input value
  const normalizedValue = value.toLowerCase();

  // Reverse the value
  const reversedValue = normalizedValue.split("").reverse().join("");

  // Compare the input and reversed values
  // Return the value of the comparison
  return normalizedValue === reversedValue;
};

export { isPalindrome };
