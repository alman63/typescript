/*Функция сумматор. При вызове функции с аргументами она суммирует переданные значения*/
export const sum = function (this: any, a?: number): number {
    if (a != undefined) {
        return (this.number = a);
    } else {
        return 0;
    }
};
sum.prototype.valueOf = function s() {
    return this.number;
};
// alert(sum()); // 0;
const s = sum() as any;
alert(s(1)); // 1
// alert(s(1)(2)); //3
// alert(s(3)(4)(5)); // 12
// const s3 = sum(3);
// alert(s3(5)); // 8
// alert(s3(6)); // 9
