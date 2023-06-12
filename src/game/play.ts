import { print, askQuestion } from "../ui/console";
import { getPlateauArea } from "../functions/plateau/plateau";
import { directions } from "../functions/rover/moves";
import { instructRoverStart } from "../functions/rover/rover";

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
  getMove();
};

export const getMove = (): void => {
  askQuestion(
    `For your first move, tell your Rover 🚎 where to start.`,
    instructRoverStart
  );
};

export const continueGame = () => {
  print("let's continue!");
};
