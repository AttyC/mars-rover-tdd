import { setRoverTravelPath } from "./moves";
import { getRoverCoordinates, setRoverCoordinates } from "./coordinates";

describe("the Mars Rover first input: Coordinates", () => {
  it("output should be 3 3 N if M entered", () => {
    setRoverCoordinates(3, 3);
    expect(getRoverCoordinates()).toEqual([3, 3]);
  });
});

describe("the Mars Rover second input: Travel Path", () => {
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
  it("output should be 5 5 N if RMMMMMLMMMMM entered", () => {
    expect(setRoverTravelPath("RMMMMMLMMMMM")).toBe("5 5 N");
  });
  it("output should be 7 6 S if MRMMLMMMMMMRMMMMMRM entered", () => {
    expect(setRoverTravelPath("MRMMLMMMMMMRMMMMMRM")).toBe("7 6 S");
  });
});
