const fizzbuzz = (number: number) => {
  if (number > 100) throw new Error("The input must be a number less than 100");
};

export { fizzbuzz };
