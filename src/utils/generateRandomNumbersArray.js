export const generateRandomNumbersArray = randomNumberCount => {
  return Array.from({ length: randomNumberCount }).map(
    () => 1 + Math.floor(10 * Math.random()),
  );
};
