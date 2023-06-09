import rover from "./index";

export function setRoverDirection(direction: string): string {
  return (rover.direction = direction);
}
export function getRoverDirection(): string {
  return rover.direction;
}
