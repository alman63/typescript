/* Функция semverSort([ "1.0.5", "2.5.0", "0.12.0", "1", "1.23.45", "1.4.50", "1.2.3.4.5.6.7"]); 
//  результат [ "0.12.0", "1", "1.0.5", "1.2.3.4.5.6.7", "1.4.50", "1.23.45", "2.5.0" ]*/

export const semverSort = function (arrString: string[]): string[] {
    // const sortFunction = function (a: string, b: string): number {
    //     return a.split('.')[0] > b.split('.')[0] ? -1 : 1;
    // };
    let arrResult = arrString.sort();
    return arrResult;
};
