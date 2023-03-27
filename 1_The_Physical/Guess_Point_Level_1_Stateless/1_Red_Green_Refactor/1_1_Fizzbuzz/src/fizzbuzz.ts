const fizzbuzz = (number: number) => {
  if (number > 100)
    throw new Error(
      "The parameter value was greater than 100. The parameter value must be a number between 1 and 100."
    );

  if (number < 1)
    throw new Error(
      "The parameter value was less than 1. The parameter value must be a number between 1 and 100."
    );
};

export { fizzbuzz };
