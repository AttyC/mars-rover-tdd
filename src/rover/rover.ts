export function setRoverDirection(direction: string): string {
  return direction;
}
export function setRoverCoordinates(x: number, y: number): Array<number> {
  return [x, y];
}

type Move = "L" | "R" | "M";

function isMove(input: string) {
  return input === "L" || input === "R" || input === "M";
}

export function setRoverTravelPath(travelPath: string): string {
  return travelPath;
}
