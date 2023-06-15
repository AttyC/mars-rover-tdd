import { setRoverCoordinates } from "../functions/rover/coordinates";
import { setPlateauArea } from "../functions/plateau/plateau";
import { setRoverTravelPath } from "../functions/rover/moves";
import { setRoverDirection } from "../functions/rover/direction";
beforeEach(() => {
  setRoverCoordinates(0, 0);
  setRoverDirection("N");
});
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
  it("move is invalid if attempting a move <0", () => {
    expect(setRoverTravelPath("LMMM")).toBe("0 3 N");
  });
  it("move is invalid if attempting a move greater than the plateau coordinates", () => {
    setPlateauArea(10, 10);
    expect(setRoverCoordinates(11, 11)).toBe(
      "You cannot travel outside the plateau area - make another move."
    );
  });
});
