export const getMarsName = (name: string): string =>
  capitalise(Array.from(name).reverse().join("").toLowerCase());

const capitalise = (word: string): string =>
  word.substring(0, 1).toUpperCase() + word.substring(1);
