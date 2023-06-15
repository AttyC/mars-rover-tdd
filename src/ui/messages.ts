import { print, askQuestion } from "../ui/console";
export const messages = {
  getMarsName: `...getting your Mars name...`,
};

export const displayText = (message: string): void => {
  print(message);
};
