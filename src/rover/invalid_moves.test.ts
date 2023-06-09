import { setRoverCoordinates } from "./coordinates";
import { setPlateauArea } from "../plateau/plateau";
import { setRoverTravelPath } from "./moves";

describe("invalid moves", () => {
  it("move is invalid if M L or R not entered", () => {
    expect(setRoverTravelPath("X")).toBe(
      "You must enter a valid travel path consisting of L, R, M e.g. LMMMRM"
    );
  });
  it("move is invalid if attempting a move <0", () => {
    expect(setRoverCoordinates(-1, -1)).toBe(
      "You cannot travel outside the plateau area - make another move."
    );
  });
  it("move is invalid if attempting a move greater than the plateau coordinates", () => {
    setPlateauArea(10, 10);
    expect(setRoverCoordinates(11, 11)).toBe(
      "You cannot travel outside the plateau area - make another move."
    );
  });
});
