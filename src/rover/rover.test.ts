import { setRoverTravelPath } from "./rover";

describe("the Mars Rover second input - travel", () => {
  it("output should be 0 3 N if MMM entered", () => {
    expect(setRoverTravelPath("MMM")).toBe("0 3 N");
  });
});
