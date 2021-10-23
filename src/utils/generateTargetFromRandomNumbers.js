export const generateTargetFromRandomNumbers = (
  randomNumbers,
  randomNumberCount,
) => {
  return randomNumbers
    .slice(0, randomNumberCount - 2)
    .reduce((accumulator, currentElement) => accumulator + currentElement, 0);
};
