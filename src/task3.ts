// Реализовать функцию параллельной потоковой обработки данных.
// В конструктор передается число парралельных "потоков",
// которое указывает сколько данных обрабатывается в конкретный момент времени

export class Parallel {
  countStream: number;
  freeCountSream: number;
  waitFunctions: Function[];
  count: number;
  results: string[];
  constructor(countStream: number) {
    this.countStream = countStream;
    this.freeCountSream = countStream;
    this.waitFunctions = [];
    this.count = 0;
    this.results = [];
  }

  runFn(fn: Function, resolve: Function, args: number[]) {
    Promise.resolve(fn()).then((result) => {
      this.results.push(result);
      this.count++;
      this.freeCountSream++;
      if (this.count >= args.length) {
        resolve(this.results);
      }
      if (this.freeCountSream < this.countStream) {
        const extractedFn = this.waitFunctions.splice(0, 1);
        extractedFn[0] && this.runFn(extractedFn[0], resolve, args);
        this.freeCountSream--;
      }
    });
  }

  jobs(...args: any) {
    return new Promise((resolve, reject) => {
      args.forEach((fn: Function) => {
        const resFn = new Promise((resolveFn) => {
          if (this.freeCountSream > 0) {
            this.freeCountSream--;
            resolveFn(fn);
          } else {
            this.waitFunctions.push(fn);
          }
        });

        resFn.then((fn: any) => {
          this.runFn(fn, resolve, args);
        });
      });
    });
  }
}

const runner = new Parallel(2);
// console.log(
//     await runner.jobs(
//         () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
//         () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
//         () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
//         () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
//         () => new Promise((resolve) => setTimeout(resolve, 30, 5))
//     )
// ); // [1, 3, 2, 4, 5];
