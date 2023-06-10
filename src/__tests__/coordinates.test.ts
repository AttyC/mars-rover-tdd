import { getRoverCoordinates, setRoverCoordinates } from "../rover/coordinates";

describe("the Mars Rover first input: Coordinates", () => {
  it("output should be 3 3 N if M entered", () => {
    setRoverCoordinates(3, 3);
    expect(getRoverCoordinates()).toEqual([3, 3]);
  });
});
