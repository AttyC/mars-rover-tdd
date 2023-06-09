import {
  getStartPostion,
  getStartDirection,
  setPlateauArea,
  setRoverDirection,
  setRoverCoordinates,
} from "./rover";
describe("the Plateau", () => {
  it("is 7 wide and 8 high if 7,8 entered as first input ", () => {
    expect(setPlateauArea(7, 8)).toEqual({ width: 7, height: 8 });
  });
  it("defaults to 5 wide and 5 high if any 0s entered ", () => {
    expect(setPlateauArea(0, 0)).toEqual({ width: 5, height: 5 });
    expect(setPlateauArea(0, 5)).toEqual({ width: 5, height: 5 });
    expect(setPlateauArea(5, 0)).toEqual({ width: 5, height: 5 });
  });
});

describe("mars rover start", () => {
  it("should be at coordinates 0,0", () => {
    expect(getStartPostion()).toEqual([0, 0]);
  });
  it("should be facing North", () => {
    expect(getStartDirection()).toEqual("N");
  });
});

describe("the Mars Rover first input", () => {
  it("orientation is facing West if W entered", () => {
    expect(setRoverDirection("W")).toBe("W");
  });
  it("output coordinates should be 2, 3 if 2,3 entered", () => {
    expect(setRoverCoordinates(2, 3)).toEqual([2, 3]);
  });
});
