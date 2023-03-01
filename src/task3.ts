// Реализовать функцию параллельной потоковой обработки данных.
// В конструктор передается число парралельных "потоков",
// которое указывает сколько данных обрабатывается в конкретный момент времени
export function Parallel(count:number) {
    
        this.countStreams = count;
    


    const jobs(...args: Function[]):Promise {
        return Promise
        const arrResult = [];
        args.forEach(async (fn) => {
            await new Promise((resolve) => setTimeout(resolve));
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
