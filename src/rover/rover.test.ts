import { setRoverTravelPath } from "./rover";

describe("the Mars Rover second input - travel", () => {
  it("output should be 0 1 N if M entered", () => {
    expect(setRoverTravelPath("M")).toBe("0 1 N");
  });
  it("move should be invalid if M L or R not entered", () => {
    expect(setRoverTravelPath("X")).toBe(
      "You must enter a valid travel path consisteing of L, R, M e.g. LMMMRM"
    );
  });
});
