import { getStartPostion, getStartDirection } from "./initialise";

describe("mars rover start", () => {
  it("should be at coordinates 0,0", () => {
    expect(getStartPostion()).toEqual([0, 0]);
  });
  it("should be facing North", () => {
    expect(getStartDirection()).toEqual("N");
  });
});
