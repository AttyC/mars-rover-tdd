import rover from "./index";

export const setRoverDirection = (direction: string): string =>
  (rover.direction = direction);

export const getRoverDirection = (): string => rover.direction;
