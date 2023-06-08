// @ts-ignore
import { getStartPostion, setPlateauArea } from "./rover";
describe("mars rover start", () => {
  it("should be at coordinates 0,0", () => {
    expect(getStartPostion()).toEqual([0, 0]);
  });
});

describe("the Plateau", () => {
  it("is 7 wide and 8 high if 7,8 entered as first input ", () => {
    expect(setPlateauArea(7, 8)).toEqual({ width: 7, height: 8 });
  });
});
