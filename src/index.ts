import { clear, print, askQuestion } from "./ui/console";
import { getMarsName } from "./player/player";
import { getPlateauArea, setPlateauArea } from "./plateau/plateau";

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
    print(
      `Just a few questions before you start sniffing around Mars with your Rover.`
    );
    print(
      `What size is your planned search area? Enter only 2 digits, like 78 for 7 wide, 8 long`
    );
    askQuestion(`What size is your planned search area?`, getArea);
  } else {
    print(`You may not proceed without your Mars name.`);
    return endAdventure();
  }
}

function isNumber(input: string) {
  let isNum = Number(input);
  return !isNaN(isNum);
}

function getArea(input: string) {
  const areaCoords = Array.from(input);
  if (areaCoords.every(isNumber) && areaCoords.length === 2) {
    setPlateauArea(Number(areaCoords[0]), Number(areaCoords[1]));
  } else {
    print(
      `We've given you the default plateau size, since your earth characters did not make sense.`
    );
    setPlateauArea(0, 0);
  }
  const area = getPlateauArea();
  console.log(`Your plateau area is: `, area);
}

export function endAdventure(): void {
  print("***************************************");
  print("You are not ready to traverse Mars! 😭");
  askQuestion("Press ENTER to restart! ", traverseMars);
}

traverseMars();
