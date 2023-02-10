// Написать функцию сумматор. При вызове функции с аргументами она суммирует переданные
//  значения (полезно прочитать про методы .valueOf и .toString)
export const sum = (a?: number) => {
  let currentSum: number;
  if (a != undefined) {
    currentSum = a;
  } else {
    currentSum = 0;
  }
  function f(b: number) {
    currentSum += b;
    return f;
  }
  f.toString = function () {
    return currentSum;
  };

  return f;
};
