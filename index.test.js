import {queueTime} from '.'

describe('queueTime', () => {
    it('should sum array if only 1 till. ', () => {
        expect(queueTime([5,3,4], 1)).toEqual(12)
    });
    it.only('should return correct result for 2 tills', () => {
        expect(queueTime([10,2,3,3], 2)).toEqual(10)

    })
});

