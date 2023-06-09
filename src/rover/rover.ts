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
  let output = "";
  let xAxis: number = 0;
  let yAxis: number = 0;
  let direction: string = "N";

  if (travelPath === "M") {
    yAxis += 1;
  }
  output = `${xAxis} ${yAxis} ${direction}`;
  return output;
}
