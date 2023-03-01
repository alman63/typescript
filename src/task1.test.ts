import { myFunc, func } from "./task1";

describe("task1", () => {
  it("test func hof(0)=0", () => {
    const hof = myFunc(func);
    expect(+hof()).toBe(0);
  });
  it("test func hof(5)(3)=8", () => {
    const hof = myFunc(func);
    expect(+hof(5)(3)).toBe(8);
  });
  it("test func hof(5,3)=8", () => {
    const hof = myFunc(func);
    expect(+hof(5, 3)).toBe(8);
  });
  it("test func hof(5,3,2)=10", () => {
    const hof = myFunc(func);
    expect(+hof(5, 3, 2)).toBe(10);
  });
  it("test func hof(5,3)(2)=10", () => {
    const hof = myFunc(func);
    expect(+hof(5, 3)(2)).toBe(10);
  });
  it("test func hof(5)(3)(2)=10", () => {
    const hof = myFunc(func);
    expect(+hof(5)(3)(2)).toBe(10);
  });
  it("test func hof(5)()(2)=7", () => {
    const hof = myFunc(func);
    expect(+hof(5)()(2)).toBe(7);
  });
});
