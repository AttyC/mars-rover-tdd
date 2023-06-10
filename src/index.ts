import { getRoverCoordinates } from "./rover/coordinates";
import { clear, print, askQuestion } from "./ui/console";

export function traverseMars(): void {
  clear(false);
  print("--------------------------");
  print("| Welcome to MARS! |");
  print("--------------------------");
  askQuestion(`Enter your name`, startAdventure);
}

function startAdventure(name: string): void {
  if (name && name.length > 0) {
    print("Let's get started");
  } else {
    print(`Please enter your Mars name`);
    return endAdventure();
  }
}
export function endAdventure(): void {
  print("***************************************");
  print("You are not ready to traverse Mars! 😭");
  askQuestion("Press ENTER to restart! ", traverseMars);
}

traverseMars();
