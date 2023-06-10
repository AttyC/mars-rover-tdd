import { getRoverCoordinates } from "../functions/rover/coordinates";
import { getRoverDirection } from "../functions/rover/direction";

describe("Mars Rover start postion", () => {
  it("should be at coordinates 0,0", () => {
    expect(getRoverCoordinates()).toEqual([0, 0]);
  });
  it("should be facing North", () => {
    expect(getRoverDirection()).toEqual("N");
  });
});
