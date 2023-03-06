export const spiral = function (matrix: number[][]): number[] {
  let arrResult: number[] = [];
  const N = matrix.length;
  let k = 0;
  const matrixLength: number = matrix.flat().length;
  function rigth(
    k: number,
    outputMatrix: number[],
    inputMatrix: number[][]
  ): number[] {
    for (let i = k; i < inputMatrix[k].length - k; i++) {
      outputMatrix.push(inputMatrix[k][i]);
    }
    return outputMatrix;
  }
  function down(
    k: number,
    outputMatrix: number[],
    inputMatrix: number[][]
  ): number[] {
    for (let j = k + 1; j < N - k - 1; j++) {
      if (N - 1 - k > 1) {
        outputMatrix.push(inputMatrix[j][inputMatrix[j].length - 1 - k]);
      }
    }
    return outputMatrix;
  }
  function left(
    k: number,
    outputMatrix: number[],
    inputMatrix: number[][]
  ): number[] {
    for (let l = inputMatrix[N - k - 1].length - k - 1; l >= 0 + k; l--) {
      if (N - 1 - k >= 2) {
        outputMatrix.push(inputMatrix[N - k - 1][l]);
      }
    }
    return outputMatrix;
  }
  function up(
    k: number,
    outputMatrix: number[],
    inputMatrix: number[][]
  ): number[] {
    for (let m = N - k - 2; m > k; m--) {
      if (inputMatrix[m].length > 1) {
        if (inputMatrix[m][0 - k] !== undefined)
          outputMatrix.push(inputMatrix[m][0 - k]);
      }
    }
    return outputMatrix;
  }

  while (matrixLength > arrResult.length) {
    //->
    arrResult = rigth(k, arrResult, matrix);
    //down
    arrResult = down(k, arrResult, matrix);
    //<-
    arrResult = left(k, arrResult, matrix);
    //up
    arrResult = up(k, arrResult, matrix);
    k++;
  }
  return arrResult;
};
