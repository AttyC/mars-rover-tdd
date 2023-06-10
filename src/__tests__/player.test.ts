import { getMarsName } from "../functions/player/player";

describe("Player name", () => {
  it("should be converted to Mars name when Earth name entered", () => {
    expect(getMarsName("Lizzo")).toEqual("ozziL");
  });
});
