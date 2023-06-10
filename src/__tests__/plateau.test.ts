import { setPlateauArea } from "../functions/plateau/plateau";
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
