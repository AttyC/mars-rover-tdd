import { clear, print, askQuestion } from "./ui/console";
import { getMarsName } from "./player/player";

export function traverseMars(): void {
  clear(false);
  print("--------------------------");
  print("| Welcome to MARS! |");
  print("--------------------------");
  print(
    `Nice to meet you. On Mars, we don't use our Earth Names, we use Mars names.`
  );
  askQuestion(`What's your Earth name? `, startAdventure);
}

function startAdventure(name: string): void {
  if (name && name.length > 0) {
    print("...getting your Mars name...");
    const marsName = getMarsName(name);
    print(`Welcome, 👾 ${marsName}! 👾`);
  } else {
    print(`You may not proceed without your Mars name.`);
    return endAdventure();
  }
}
export function endAdventure(): void {
  print("***************************************");
  print("You are not ready to traverse Mars! 😭");
  askQuestion("Press ENTER to restart! ", traverseMars);
}

traverseMars();
