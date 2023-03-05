import { Parallel } from './task3';

describe('test Parallel', () => {
    it('Parallel [1, 2]', async () => {
        const str = await new Parallel(2).jobs(
            () => new Promise((resolve) => setTimeout(resolve, 60, 2)),
            () => new Promise((resolve) => setTimeout(resolve, 50, 1))
        );
        expect(str).toEqual([1, 2]);
    });
    it('Parallel [2, 1]', async () => {
        const str = await new Parallel(2).jobs(
            () => new Promise((resolve) => setTimeout(resolve, 60, 2)),
            () => new Promise((resolve) => setTimeout(resolve, 70, 1))
        );
        expect(str).toEqual([2, 1]);
    });
    it('Parallel [2, 3, 1]', async () => {
        const str = await new Parallel(2).jobs(
            () => new Promise((resolve) => setTimeout(resolve, 60, 2)),
            () => new Promise((resolve) => setTimeout(resolve, 90, 1)),
            () => new Promise((resolve) => setTimeout(resolve, 10, 3))
        );
        expect(str).toEqual([2, 3, 1]);
    });
    it('Parallel [3, 2, 1]', async () => {
        const str = await new Parallel(3).jobs(
            () => new Promise((resolve) => setTimeout(resolve, 60, 2)),
            () => new Promise((resolve) => setTimeout(resolve, 80, 1)),
            () => new Promise((resolve) => setTimeout(resolve, 10, 3))
        );
        expect(str).toEqual([3, 2, 1]);
    });
    it('runs all jobs', async () => {
        const jobs = [jest.fn(), jest.fn(), jest.fn()];
        await new Parallel(2).jobs(...jobs);
        jobs.forEach((job) => expect(job).toHaveBeenCalled());
    });
});
