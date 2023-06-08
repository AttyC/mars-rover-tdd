import { getStartPostion } from "./rover";
describe("mars rover start", () => {
  it("should be at coordinates 0,0", () => {
    expect(getStartPostion()).toEqual([0, 0]);
  });
});
