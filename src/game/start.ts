import { print, askQuestion } from "../ui/console";
import { welcomeToMars } from "../index";
import { getMarsName } from "../functions/player/player";
import { getPlateauArea, setPlateauArea } from "../functions/plateau/plateau";
import { meetRover } from "../functions/rover/rover";

export const startAdventure = (name: string): void => {
  if (name && name.length > 0) {
    print(`
...getting your Mars name...`);
    const marsName = getMarsName(name);
    print(`Welcome, 👾 ${marsName}! 👾 👋👋👋
    `);
    print(
      `**********
      
      `
    );
    print(
      `Just a few questions before you start sniffing around Mars with your Rover. 🚎
-------------------------------------------------------------------------------`
    );
    print(
      `What size is your planned search area? Enter only 2 digits, like 78 for 7 wide, 8 long`
    );

    askQuestion(`What size is your planned search area?`, getArea);
  } else {
    print(`You may not proceed without your Mars name.`);
    return endAdventure();
  }
};

const isNumber = (input: string) => !isNaN(Number(input));

const getArea = (input: string) => {
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
  print(
    `Your plateau area is: ${area.width} squares wide and ${area.height} squares long.`
  );
  print(
    `**********
      
      `
  );
  askQuestion(`Are you ready to meet your rover?`, meetRover);
};

export const endAdventure = (): void => {
  print("***************************************");
  print("You are not ready to traverse Mars! 😭");
  askQuestion("Press ENTER to restart! ", welcomeToMars);
};
