/*
 * Multiplying the first letter by 100 gives good randomness
 * Leaving subsequent letters as charCode ensures close neighbours get a unique value
 */
const getHashSeedFromLetter = (
  letter: string,
  index: number,
  array: string[],
) =>
  index === 0 && array.length > 1
    ? letter.charCodeAt(0) * 100
    : letter.charCodeAt(0);
const sumValues = (accumulator: number, value: number) => accumulator + value;
const getArrayIndexFromHash = (hash: number, array: string[]) =>
  hash % array.length;

/**
 * pseudo-random index selection from an enum, ensuring the same value is always selected for a given text
 */
export default (
  text: string,
  enumData: Record<string | number, string>,
): string => {
  if (text.replace(/\s/g, "") === "") {
    throw new Error("Given string was empty.");
  }

  if (!enumData || Object.entries(enumData).length === 0) {
    throw new Error("Given enum was empty.");
  }

  const hash = Array.from(text).map(getHashSeedFromLetter).reduce(sumValues, 0);

  const variants = Object.keys(enumData);

  return enumData[variants[getArrayIndexFromHash(hash, variants)]];
};
