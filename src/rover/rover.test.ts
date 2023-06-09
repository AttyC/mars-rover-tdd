import { setRoverTravelPath } from "./rover";

describe("the Mars Rover second input - travel", () => {
  it("output should be 0 1 N if M entered", () => {
    expect(setRoverTravelPath("M")).toBe("0 1 N");
  });
});
