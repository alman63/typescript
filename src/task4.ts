/*фукнция, возвращает развернутую по спирали матрицу любого размера*/
export const spiral = function (matrix: number[][]): number[] {
    let arrResult: number[] = [];
    while (matrix[0] != undefined) {
        console.log(matrix);
        if (matrix[0].length != undefined) {
            for (let i: number = 0; i < matrix[0].length; i++) {
                arrResult.push(matrix[0][i]);
            }
            matrix.shift();
        }
        console.log(matrix);
        if (matrix.length != undefined && matrix[0] != undefined) {
            for (let m: number = 0; m < matrix.length - 1; m++) {
                arrResult.push(matrix[m][matrix[m].length - 1]);
                matrix[m].length = matrix[m].length - 1;
            }
            // if (matrix[0].length === 0) {
            //     matrix.shift();
            // }
        }
        console.log(matrix);
        if (matrix.length != undefined && matrix[0] != undefined) {
            for (let k = matrix[matrix.length - 1].length - 1; k >= 0; k--) {
                arrResult.push(matrix[matrix.length - 1][k]);
                matrix[matrix.length - 1].length =
                    matrix[matrix.length - 1].length - 1;
            }
            matrix.length = matrix.length - 1;
            // if (matrix[0].length === 0) {
            //     matrix.shift();
            // }
        }
        console.log(matrix);
        if (matrix.length != undefined && matrix[0] != undefined) {
            for (let z = matrix.length; z > 0; z--) {
                if (matrix[z - 1].length != 0) {
                    arrResult.push(matrix[z - 1][0]);
                    matrix[z - 1].shift();
                }
            }
            // if (matrix[0].length === 0) {
            //     matrix.shift();
            // }
        }
        console.log(matrix);
    }
    return arrResult;
};
