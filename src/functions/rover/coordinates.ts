import { getPlateauArea } from "../plateau/plateau";
import { Rover, Coordinates, Move, directionType } from "../../utils/types";
import rover from "./index";

export function setRoverCoordinates(
  x: number,
  y: number
): Array<number> | string {
  const plateau = getPlateauArea();

  return x > plateau?.width || y > plateau?.height || x < 0 || y < 0
    ? "You cannot travel outside the plateau area - make another move."
    : (rover.coordinates = [x, y]);
}
export function getRoverCoordinates(): Coordinates {
  return rover.coordinates;
}
