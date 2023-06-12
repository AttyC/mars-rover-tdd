import { print, askQuestion } from "../../ui/console";
import { isEmpty, getRoverPosition } from "../../utils/helper";
import {
  getRoverCoordinates,
  setRoverCoordinates,
} from "../../functions/rover/coordinates";
import { setRoverDirection } from "../../functions/rover/direction";
import { getPath } from "../../functions/rover/moves";
import { continueGame, getMove, traverseMars } from "../../game/play";
import { getPlateauArea } from "../plateau/plateau";

export const locateRover = (): void => {
  const coordinates = getRoverCoordinates();
  print(`Your Rover 🚎 is at Plateau position ${coordinates} 🚎`);
};
export const meetRover = (input: string): void => {
  if (isEmpty(input)) {
    askQuestion(
      "So...are you ready to meet your Rover 🚎 ? Enter y or n",
      meetRover
    );
  }
  print(`Let's find your Rover! Where is it?`);
  locateRover();
  print(`🎉🎉🎉`);
  print(
    `**********
      
      `
  );
  askQuestion(
    `Ready to go and and traverse Mars? Enter to continue..."`,
    traverseMars
  );
};

export const instructRoverStart = (input: string) => {
  if (input.length !== 3) {
    print("Rovers 🚎🚎 need 3 instructions, try again!");
    getMove();
  }
  const area = getPlateauArea();
  const roverLocation = Array.from(input);

  if (
    Number(roverLocation[0]) > area.width ||
    Number(roverLocation[1]) > area.height
  ) {
    print(
      `Your plateau area is: ${area.width} squares wide and ${area.height} squares long - set a start point within your Plateau.`
    );
    getMove();
  }
  if (input.length === 3) {
    setRoverCoordinates(Number(roverLocation[0]), Number(roverLocation[1]));
    setRoverDirection(roverLocation[2]);

    getRoverPosition();
    print(`🎉🎉🎉`);
    print(`Ok, your Rover 🚎 is READY to GO! Now, give your Rover 🚎 a path to follow.
        You will enter a series of letters. How many? That's up to you!
            R = rotate right 90º.
            L = rotate left 90º.
            M = Move one space forward in whatever direction you're facing.

            Examples:
            LMM = rotate left 90º and move forward two spaces.
            MMRMM = Move two spaces, rotate right 90º and move two spaces.
            `);
    getPath();
    askQuestion("CONTINUE?", continueGame);
  }
};
