import { Plateau } from "../../utils/types";

let plateau: Plateau;

export const setPlateauArea = (x: number, y: number): Plateau => {
  plateau = { width: x || 5, height: y || 5 };
  return plateau;
};

export const getPlateauArea = (): Plateau => plateau;
