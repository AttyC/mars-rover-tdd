import { Move, directionType } from "../../utils/types";

function isValidPath(input: string) {
  return input === "L" || input === "R" || input === "M";
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

  if (travelPathSteps.every(isValidPath)) {
    travelPathSteps.map((step: string) => {
      // increment or decrement the direction depending on R/L input

      step === "R" && move.direction++;
      step === "L" && move.direction--;

      // 0: "N", 1: "E",2: "S", 3: "W",
      step === "M" && move.direction === 0 && move.yAxis++;
      step === "M" && move.direction === 1 && move.xAxis++;
      step === "M" && move.direction === 2 && move.yAxis--;
      step === "M" && move.direction === 3 && move.xAxis--;
    });

    return (output = `${move.xAxis} ${move.yAxis} ${
      directions[move.direction]
    }`);
  }
  output =
    "You must enter a valid travel path consisting of L, R, M e.g. LMMMRM";
  return output;
}
