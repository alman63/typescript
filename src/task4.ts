export const spiral = function (matrix: number[][]): number[] {
  let arrResult: number[] = [];
  const N = matrix.length;
  let k = 0;
  const matrixLength: number = matrix.flat().length;
  while (matrixLength > arrResult.length) {
    //->
    for (let i = k; i < matrix[k].length - k; i++) {
      arrResult.push(matrix[k][i]);
    }
    //down
    for (let j = k + 1; j < N - k - 1; j++) {
      if (N - 1 - k > 1) {
        arrResult.push(matrix[j][matrix[j].length - 1 - k]);
      }
    }
    //<-
    for (let l = matrix[N - k - 1].length - k - 1; l >= 0 + k; l--) {
      if (N - 1 - k >= 2) {
        arrResult.push(matrix[N - k - 1][l]);
      }
    }
    //up
    for (let m = N - k - 2; m > k; m--) {
      if (matrix[m].length > 1) {
        if (matrix[m][0 - k] !== undefined) arrResult.push(matrix[m][0 - k]);
      }
    }
    k++;
  }
  return arrResult;
};
