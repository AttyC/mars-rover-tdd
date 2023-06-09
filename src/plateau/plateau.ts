type Plateau = {
  width: number;
  height: number;
};
let plateau: Plateau;

export function setPlateauArea(x: number, y: number): Plateau {
  plateau = { width: x || 5, height: y || 5 };
  return plateau;
}

export function getPlateauArea(): Plateau {
  return plateau;
}
