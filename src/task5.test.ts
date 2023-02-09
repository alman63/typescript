import { semverSort } from './task5';

describe('task5', () => {
    it('for [] получаем []', () => {
        expect(semverSort([])).toEqual([]);
    });
    it('for [1.0.5, 2.5.0, 0.12.0] получаем [0.12.0,1.0.5,2.5.0]', () => {
        expect(semverSort(['1.0.5', '2.5.0', '0.12.0'])).toEqual([
            '0.12.0',
            '1.0.5',
            '2.5.0',
        ]);
    });
    it('for [1.0.5] получаем [1.0.5]', () => {
        expect(semverSort(['1.0.5'])).toEqual(['1.0.5']);
    });
    it('for [17.0.5, 11.5.0, 15.12.0] получаем [11.5.0,15.12.0,17.0.5]', () => {
        expect(semverSort(['17.0.5', '11.5.0', '15.12.0'])).toEqual([
            '11.5.0',
            '15.12.0',
            '17.0.5',
        ]);
    });
    it('for ["1.6.7.15","2.5.0","0.12.0","1.6.7.8","1.23.45","1.4.50","1.2.3.4.5.6.7"] получаем ["0.12.0","1.2.3.4.5.6.7","1.4.50","1.6.7.8","1.6.7.15","1.23.45","2.5.0"]', () => {
        expect(
            semverSort([
                '1.6.7.15',
                '2.5.0',
                '0.12.0',
                '1.6.7.8',
                '1.23.45',
                '1.4.50',
                '1.2.3.4.5.6.7',
            ])
        ).toEqual([
            '0.12.0',
            '1.2.3.4.5.6.7',
            '1.4.50',
            '1.6.7.8',
            '1.6.7.15',
            '1.23.45',
            '2.5.0',
        ]);
    });
    it('for ["1.1.1.5", "1", "1.1.1.7"] получаем ["1","1.1.1.5","1.1.1.7"]', () => {
        expect(semverSort(['1.1.1.5', '1', '1.1.1.7'])).toEqual([
            '1',
            '1.1.1.5',
            '1.1.1.7',
        ]);
    });
    it('for ["1.7.5", "1.7.3"] получаем ["1.7.3", "1.7.5"]', () => {
        expect(semverSort(['1.7.5', '1.7.3'])).toEqual(['1.7.3', '1.7.5']);
    });
});
