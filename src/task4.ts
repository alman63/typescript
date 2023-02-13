/*фукнция, возвращает развернутую по спирали матрицу любого размера*/
export const spiral = function (matrix: number[][]): number[] {
  const arrResult: number[] = [];
  while (matrix[0] !== undefined) {
    if (matrix[0].length !== undefined) {
      for (let i = 0; i < matrix[0].length; i++) {
        //   run ->
        arrResult.push(matrix[0][i]);
      }
      matrix.shift();
    }
    if (matrix.length !== undefined && matrix[0] !== undefined) {
      for (let m = 0; m < matrix.length - 1; m++) {
        //   run down
        arrResult.push(matrix[m][matrix[m].length - 1]);
        matrix[m].length -= 1;
      }
      for (let m = 0; m < matrix.length - 1; m++) {
        if (matrix[m].length === 0) {
          matrix.shift();
        }
      }
    }
    if (matrix.length !== undefined && matrix[0] !== undefined) {
      for (let k = matrix[matrix.length - 1].length - 1; k >= 0; k--) {
        // run <-
        arrResult.push(matrix[matrix.length - 1][k]);
        matrix[matrix.length - 1].length -= 1;
      }
      matrix.length -= 1;
    }
    if (matrix.length !== undefined && matrix[0] !== undefined) {
      // run up
      for (let z = matrix.length; z > 0; z--) {
        if (matrix[z - 1].length !== 0) {
          arrResult.push(matrix[z - 1][0]);
          matrix[z - 1].shift();
        }
      }
    }
  }
  return arrResult;
};
