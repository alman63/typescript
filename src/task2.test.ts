import { sum } from './task2';

describe('task2', () => {
    it('test func sum', () => {
        const s = sum();
        expect(sum().toString()).toBe(0);
    });
    it('test func s', () => {
        const s = sum();
        expect(s(1)(2).toString()).toBe(3);
    });
    it('test func s', () => {
        const s = sum();
        expect(s(3)(4)(5).toString()).toBe(12);
    });

    it('test func s3', () => {
        const s3 = sum(3);
        expect(s3(1).toString()).toBe(4);
    });
    it('test func s3', () => {
        const s3 = sum(3);
        expect(s3(3).toString()).toBe(6);
    });
});
