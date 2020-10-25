import {queueTime} from '.'

describe('queueTime', () => {

   it('empty till should return 0', () => {
       expect(queueTime([], 1)).toEqual(0)
   })
    it('should sum array if only 1 till', () => {
        expect(queueTime([5,3,4], 1)).toEqual(12)
    });
    it.only('should return correct result for 2 tills', () => {
        expect(queueTime([10,2,3,3], 2)).toEqual(10)
   })
 
   it('should return correct time for 100 tills', () => {
       expect(queueTime([1,2,3,4,5],100)).toEqual(5)
   })
});

