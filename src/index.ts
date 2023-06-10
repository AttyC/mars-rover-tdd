import { clear, print, askQuestion } from "./ui/console";
import { startAdventure } from "./game/start";

export function welcomeToMars(): void {
  clear(false);
  print("--------------------------");
  print("| Welcome to MARS! |");
  print("--------------------------");
  print(
    `Nice to meet you. On Mars, we don't use our Earth Names, we use Mars names.`
  );
  askQuestion(`What's your Earth name? `, startAdventure);
}
welcomeToMars();
