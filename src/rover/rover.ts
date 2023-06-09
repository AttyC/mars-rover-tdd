export function setRoverDirection(direction: string): string {
  return direction;
}
export function setRoverCoordinates(x: number, y: number): Array<number> {
  return [x, y];
}

type Move = {
  xAxis: number;
  yAxis: number;
  direction: number;
};

function isMove(input: string) {
  return input === "L" || input === "R" || input === "M";
}

interface directionType {
  [key: number]: string;
}

const directions: directionType = {
  0: "N",
  1: "E",
  2: "S",
  3: "W",
};

export function setRoverTravelPath(travelPath: string): string {
  let output = "";
  const move: Move = {
    xAxis: 0,
    yAxis: 0,
    direction: 0,
  };

  const travelPathSteps = Array.from(travelPath);

  if (travelPathSteps.every(isMove)) {
    travelPathSteps.map((step: string) => {
      if (step === "R") {
        move.direction += 1;
      }
      if (step === "L") {
        move.direction -= 1;
      }
      if (step === "M" && move.direction === 1) {
        move.xAxis += 1;
      }
      if (step === "M" && move.direction === 0) {
        move.yAxis += 1;
      }
      if (step === "M" && move.direction === 2) {
        move.yAxis -= 1;
      }
      if (step === "M" && move.direction === 3) {
        move.xAxis -= 1;
      }
    });

    return (output = `${move.xAxis} ${move.yAxis} ${
      directions[move.direction]
    }`);
  }
  output =
    "You must enter a valid travel path consisting of L, R, M e.g. LMMMRM";
  return output;
}
