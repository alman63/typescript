import { spiral } from "./task4";

describe("task4", () => {
  it("for [] получаем []", () => {
    expect(spiral([[]])).toEqual([]);
  });
  it("for [1,2,3] получаем [1,2,3]", () => {
    expect(spiral([[1, 2, 3]])).toEqual([1, 2, 3]);
  });
  it("for [1,2,3],[4,5,6] получаем [1,2,3,4,5,6]", () => {
    expect(
      spiral([
        [1, 2, 3],
        [4, 5, 6],
      ])
    ).toEqual([1, 2, 3, 6, 5, 4]);
  });
  it("for [1,2,3][4,5] получаем [1,2,3]", () => {
    expect(
      spiral([
        [1, 2, 3],
        [4, 5],
      ])
    ).toEqual([1, 2, 3, 5, 4]);
  });
  it("for [1, 2, 3][4, 5, 6][7, 8, 9], получаем [1, 2, 3, 6, 9, 8, 7, 4, 5]", () => {
    expect(
      spiral([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
  it("for [1, 2, 3][4, 5][7, 8, 9], получаем [1, 2, 3, 5, 9, 8, 7, 4]", () => {
    expect(
      spiral([
        [1, 2, 3],
        [4, 5],
        [7, 8, 9],
      ])
    ).toEqual([1, 2, 3, 5, 9, 8, 7, 4]);
  });
  it("for [1, 2, 3][4, 5][7, 8, 9], получаем [1, 2, 3, 5, 9, 8, 7, 4]", () => {
    expect(
      spiral([
        [1, 2],
        [4, 5],
        [7, 8],
      ])
    ).toEqual([1, 2, 5, 8, 7, 4]);
  });
  it("for [1, 2, 3][4, 5][7, 8, 9], получаем [1, 2, 3, 5, 9, 8, 7, 4]", () => {
    expect(
      spiral([
        [1, 2, 3],
        [4, 5],
        [7, 8, 9],
      ])
    ).toEqual([1, 2, 3, 5, 9, 8, 7, 4]);
  });
  it("for 4*4, получаем [1, 2, 3, 4, 7, 11, 15, 14, 13, 12, 8, 4, 5, 6, 10, 9]", () => {
    expect(
      spiral([
        [1, 2, 3, 4],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
      ])
    ).toEqual([1, 2, 3, 4, 7, 11, 15, 14, 13, 12, 8, 4, 5, 6, 10, 9]);
  });
  it("for [1, 2, 4],[4, 5, 6, 7],[8, 9, 11],[12, 13, 14, 15], получаем [1, 2, 4, 7, 11, 15, 14, 13, 12, 8, 4, 5, 6, 9]", () => {
    expect(
      spiral([
        [1, 2, 4],
        [4, 5, 6, 7],
        [8, 9, 11],
        [12, 13, 14, 15],
      ])
    ).toEqual([1, 2, 4, 7, 11, 15, 14, 13, 12, 8, 4, 5, 6, 9]);
  });
  it("for [[1], [4], [8], [12]], получаем [1, 4, 8, 12]", () => {
    expect(spiral([[1], [4], [8], [12], [13], [15]])).toEqual([
      1,
      4,
      8,
      12,
      13,
      15,
    ]);
  });
});
