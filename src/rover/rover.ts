export function setRoverDirection(direction: string): string {
  return direction;
}
export function setRoverCoordinates(x: number, y: number): Array<number> {
  return [x, y];
}

type Move = {
  xAxis: number;
  yAxis: number;
  direction: string;
};

function isMove(input: string) {
  return input === "L" || input === "R" || input === "M";
}

export function setRoverTravelPath(travelPath: string): string {
  let output = "";
  let move: Move = {
    xAxis: 0,
    yAxis: 0,
    direction: "N",
  };

  const travelPathArray = Array.from(travelPath);

  if (travelPathArray.every(isMove)) {
    travelPathArray.map((step: string) => {
      if (step === "R") {
        move.direction = "E";
      }
      if (step === "L") {
        move.direction = "N";
      }
      if (step === "M" && move.direction === "E") {
        move.xAxis += 1;
      }
      if (step === "M" && move.direction === "N") {
        move.yAxis += 1;
      }
    });

    return (output = `${move.xAxis} ${move.yAxis} ${move.direction}`);
  }
  output =
    "You must enter a valid travel path consisting of L, R, M e.g. LMMMRM";
  return output;
}
