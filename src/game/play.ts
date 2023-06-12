import { print, askQuestion } from "../ui/console";

import {
  getRoverCoordinates,
  setRoverCoordinates,
} from "../functions/rover/coordinates";
import { setRoverDirection } from "../functions/rover/direction";

export function meetRover() {
  print(`Let's go get your Rover! Where is it?`);
  const coordinates = getRoverCoordinates();
  print(`Here's your Rover... at Plateau position ${coordinates}`);
  askQuestion("Are you ready to traverse Mars?", traverseMars);
}

export function traverseMars(): void {
  askQuestion(
    `For your first move, tell your rover where to start.`,
    instructRoverStart
  );
}
export function instructRoverStart(input: string) {
  const roverLocation = Array.from(input);
  setRoverCoordinates(Number(roverLocation[0]), Number(roverLocation[1]));
  setRoverDirection(roverLocation[2]);
  print(`Next, you'll need to give your Rover some instructions.`);
  print(
    `You will enter a series of letters. 
        R = rotate right 90º. 
        L = rotate left 90º. 
        M = Move one space forward in whatever direction you're facing.

        Examples:
        LMM = rotate left 90º and move forward two spaces.
        MMRMM = Move two spaces, rotate right 90º and move two spaces.
        `
  );
}
