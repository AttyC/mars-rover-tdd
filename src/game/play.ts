import { print, askQuestion } from "../ui/console";
import { getPlateauArea } from "../functions/plateau/plateau";
import { directions } from "../functions/rover/moves";

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
  print(`For your first move, tell your rover where to start.`);
  print(`Give your Rover some starting coordinates and a direction.`);
  const plateau = getPlateauArea();
  const directionNames = Object.values(directions);
  print(
    `Coordinates are: 
    
    xyd where
    
    x = 0-${plateau.width}, 
    
    y = 0-${plateau.height}, and 
    
    d = one of ${directionNames}`
  );
  print(`Example: 12W = start at square 1 East, square 2 North, facing West`);

  askQuestion(
    `For your first move, tell your rover where to start.`,
    instructRoverStart
  );
}
export function instructRoverStart(input: string) {
  if (!input) askQuestion("Rovers need instructions, try again!", traverseMars);

  const roverLocation = Array.from(input);
  setRoverCoordinates(Number(roverLocation[0]), Number(roverLocation[1]));
  setRoverDirection(roverLocation[2]);
}
