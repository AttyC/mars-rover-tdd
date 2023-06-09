import { setRoverTravelPath } from "./rover";

describe("the Mars Rover second input - travel", () => {
  it("output should be 0 1 N if M entered", () => {
    expect(setRoverTravelPath("M")).toBe("0 1 N");
  });
  it("output should be 0 0 E if R entered", () => {
    expect(setRoverTravelPath("R")).toBe("0 0 E");
  });
});
describe("multiple moves assuming starting at N", () => {
  it("output should be 2 0 E if RMM entered", () => {
    expect(setRoverTravelPath("RMM")).toBe("2 0 E");
  });
  it("output should be 0 5 N if MMMMM entered", () => {
    expect(setRoverTravelPath("MMMMM")).toBe("0 5 N");
  });
});

describe("invalid moves", () => {
  it("move should be invalid if M L or R not entered", () => {
    expect(setRoverTravelPath("X")).toBe(
      "You must enter a valid travel path consisting of L, R, M e.g. LMMMRM"
    );
  });
});
