const { default: expect } = require('expect');
const analyzeArray = require('./analyzeArray');

describe('AnalyzeArray', function () {
    it('should return average of array', () => {
        expect(analyzeArray.average([2, 1, 2, 3])).toEqual(2);
    });
    it('should return min value in array', () => {
        expect(analyzeArray.min([1, 2, 3])).toEqual(1);
    });
    it('should return max value in array', () =>{
        expect(analyzeArray.max([1, 2, 3])).toEqual(3);
    });
    it('should return length of array', () =>{
        expect(analyzeArray.length([1,2,3])).toEqual(3);
    });
});
