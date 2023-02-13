import { hof } from "./task1";

describe("task1", () => {
  it("test func hof", () => {
    expect(hof(1, 2, 3, 4, 5)).toBe(15);
    expect(hof(0, 0, 0, 0, 0)).toBe(0);
    expect(hof(1, 2, 3, 4)(0)).toBe(10);
    expect(hof(4, 5)(6)(7, 8)).toBe(30);
    expect(hof(3, 4)(5, 6)(7)).toBe(25);
  });
});
