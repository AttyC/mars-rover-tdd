import { print } from "../ui/console";

import { getRoverCoordinates } from "../functions/rover/coordinates";

export function meetRover() {
  print(`Let's go get your Rover! Where is it?`);
  const coordinates = getRoverCoordinates();
  print(`Here's your Rover... at Plateau position ${coordinates}`);
}
