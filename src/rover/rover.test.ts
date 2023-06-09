import { setRoverTravelPath } from "./rover";

describe("the Mars Rover second input - travel", () => {
  it("move should be valid if M entered", () => {
    expect(setRoverTravelPath("M")).toBe("0 1 N");
  });
});
