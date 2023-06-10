export function getMarsName(name: string): string {
  const marsName = Array.from(name).reverse().join("");
  return marsName;
}
