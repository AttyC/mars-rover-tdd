export function getStartPostion(): Array<number> {
  return [0, 0];
}
export function getStartDirection(): string {
  return "N";
}

export function setRoverDirection(direction: string): string {
  return direction;
}

export function setPlateauArea(x: number, y: number): {} {
  return { width: x || 5, height: y || 5 };
}
