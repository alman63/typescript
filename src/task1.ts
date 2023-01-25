/* Функция каррирования myFunc для исходной функции суммирования от 5 аргументов*/
const func = (a: number, b: number, c: number, d: number, e: number): number =>
    a + b + c + d + e;
const myFunc = (fn: Function) => {
    const innerFn = (N: number, args: number[]) => {
        return (...x: number[]) => {
            if (N <= x.length) {
                return fn(...args, ...x);
            }
            return innerFn(N - x.length, [...args, ...x]);
        };
    };

    return innerFn(fn.length, []);
};
export const hof = myFunc(func);
