import { print, askQuestion } from "../ui/console";
import { getPlateauArea } from "../functions/plateau/plateau";
import { directions } from "../functions/rover/moves";
import { getRoverPosition, isEmpty } from "../utils/helper";
import {
  getRoverCoordinates,
  setRoverCoordinates,
} from "../functions/rover/coordinates";
import { setRoverDirection } from "../functions/rover/direction";
import { setRoverTravelPath } from "../functions/rover/moves";

export const locateRover = () => {
  const coordinates = getRoverCoordinates();
  print(`Your Rover 🚎 is at Plateau position ${coordinates} 🚎`);
};
export const meetRover = (input: string) => {
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

export const traverseMars = (): void => {
  print(
    `**********

    FIRST MOVE: you'll need to give your Rover 🚎 STARTING COORDINATES and a DIRECTION.`
  );

  const plateau = getPlateauArea();
  const directionNames = Object.values(directions);
  print(
    `In a string of three characters, like this XXX: 

    - the number of squares east/west (from 0-${plateau.width})
    - the number of squares north/south (from 0-${plateau.height}) 
    - the direction of travel (one of ${directionNames})`
  );
  print(
    `Example: if you enter 12W, your rover will start at square 1 East, square 2 North, facing West`
  );

  print(
    `Your plateau area is: ${plateau.width} squares wide and ${plateau.height} squares long - set a start point within your Plateau.`
  );
  askQuestion(
    `For your first move, tell your Rover 🚎 where to start.`,
    instructRoverStart
  );
};

export const instructRoverStart = (input: string) => {
  if (isEmpty(input)) {
    print("Rovers 🚎🚎 need instructions, try again!");
    traverseMars();
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
    traverseMars();
  }

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

  askQuestion(`Enter a path for your Rover 🚎 to follow`, setRoverTravelPath);
  getRoverPosition();
};
