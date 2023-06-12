import { print, askQuestion } from "../../ui/console";
import { getRoverPosition, isEmpty } from "../../utils/helper";
import { Move, directionType } from "../../utils/types";
import { setRoverCoordinates } from "./coordinates";
import { setRoverDirection } from "./direction";

const isValidPath = (input: string) =>
  input.toUpperCase() === "L" ||
  input.toUpperCase() === "R" ||
  input.toUpperCase() === "M";

export const directions: directionType = {
  0: "N",
  1: "E",
  2: "S",
  3: "W",
};

export const getPath = (): void => {
  askQuestion(`Enter a path for your Rover 🚎 to follow`, setRoverTravelPath);
};
export const setRoverTravelPath = (travelPath: string): string => {
  if (isEmpty(travelPath)) {
    print(`Please enter a travel path`);
  }
  let output = "";
  const currentPosition = getRoverPosition();

  let arrCurr = Array.from(currentPosition);
  let newDirection: number = 0;
  if (arrCurr[5] === "E") {
    newDirection = 1;
  } else if (arrCurr[5] === "S") {
    newDirection = 2;
  } else if (arrCurr[5] === "W") {
    newDirection = 3;
  } else {
    newDirection = 0;
  }

  const move: Move = {
    xAxis: Number(arrCurr[0]),
    yAxis: Number(arrCurr[2]),
    direction: newDirection,
  };

  const travelPathSteps = Array.from(travelPath);

  if (travelPathSteps.every(isValidPath)) {
    travelPathSteps.map((s: string) => {
      // increment or decrement the direction depending on R/L input
      let step = s.toUpperCase();
      step === "R" && move.direction++;
      step === "L" && move.direction--;

      // 0: "N", 1: "E",2: "S", 3: "W",
      step === "M" && move.direction === 0 && move.yAxis++;
      step === "M" && move.direction === 1 && move.xAxis++;
      step === "M" && move.direction === 2 && move.yAxis--;
      step === "M" && move.direction === 3 && move.xAxis--;

      if (move.yAxis < 0) {
        move.yAxis = 0;
      }
      if (move.xAxis < 0) {
        move.xAxis = 0;
      }
    });
    setPosition(move.xAxis, move.yAxis, directions[move.direction]);
    output = `${move.xAxis} ${move.yAxis} ${directions[move.direction]}`;
    return output;
  }
  output =
    "You must enter a valid travel path consisting of L, R, M e.g. LMMMRM";
  return output;
};

export const setPosition = async (x: number, y: number, z: string) => {
  let result = await setRoverCoordinates(x, y);
  let result2 = await setRoverDirection(z);
  return result && result2 && getRoverPosition();
};
