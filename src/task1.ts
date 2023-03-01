/*Функция каррирования myFunc для исходной функции суммирования от 5 аргументов*/
export const func = (a = 0, b = 0) => a + b;
export const myFunc = (fn: Function) => {
  let sum = 0;
  const innerFunc = (...b: number[]) => {
    b.forEach((el) => (sum = fn(sum, el)));
    return innerFunc;
  };
  innerFunc.toString = () => sum;
  innerFunc.valueOf = () => sum;
  return innerFunc;
};
