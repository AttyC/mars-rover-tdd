import { print } from "../ui/console";
import { getRoverCoordinates } from "../functions/rover/coordinates";
import { getRoverDirection } from "../functions/rover/direction";

export const isEmpty = (input: string | number) =>
  input === "" || input === null || input === undefined;

export const getRoverPosition = (): void => {
  const coords = getRoverCoordinates();
  const direction = getRoverDirection();
  print(
    `..... your Rover currently has a position of ${coords[0]} ${coords[1]} ${direction}. Good work!`
  );
};
