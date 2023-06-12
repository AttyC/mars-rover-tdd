import { print, askQuestion } from "../ui/console";
import { getPlateauArea } from "../functions/plateau/plateau";
import { directions } from "../functions/rover/moves";
import { isEmpty } from "../utils/helper";
import {
  getRoverCoordinates,
  setRoverCoordinates,
} from "../functions/rover/coordinates";
import {
  getRoverDirection,
  setRoverDirection,
} from "../functions/rover/direction";

export const meetRover = (input: string) => {
  if (isEmpty(input)) {
    askQuestion(
      "So...are you ready to meet your Rover? Enter y or n",
      meetRover
    );
  }

  print(`Let's find your Rover! Where is it?`);
  const coordinates = getRoverCoordinates();
  print(`Here's your Rover... at Plateau position ${coordinates} 🚎`);
  print(`🎉🎉🎉`);
  askQuestion(
    `Ready to go and and traverse Mars? Enter to continue..."`,
    traverseMars
  );
};

export const traverseMars = (): void => {
  print(
    `For your first move,you'll need to give your Rover 🚎 some 

    - starting coordinates and 
    - a direction.`
  );
  const plateau = getPlateauArea();
  const directionNames = Object.values(directions);
  print(
    `Like this: 
   
    - how many squares east/west (from 0-${plateau.width})
    
    - how many squares north/south (from 0-${plateau.height}) 
    
    - the direction of travel (one of ${directionNames})`
  );
  print(
    `Example: if you enter 12W, your rover will start at square 1 East, square 2 North, facing West`
  );

  askQuestion(
    `For your first move, tell your rover where to start.`,
    instructRover
  );
};
export const instructRover = (input: string) => {
  if (isEmpty(input)) {
    askQuestion("Rovers need instructions, try again!", traverseMars);
  }
  const roverLocation = Array.from(input);
  setRoverCoordinates(Number(roverLocation[0]), Number(roverLocation[1]));
  setRoverDirection(roverLocation[2]);
  const coords = getRoverCoordinates();
  const direction = getRoverDirection();
  print(
    `..... your Rover is travelling to ${coords[0]} ${coords[1]} ${direction}`
  );
};
