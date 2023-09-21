const analyzeArray = require('./analyzeArray');

describe('AnalyzeArray', function () {
    it('should return average of array', () => {
        expect(analyzeArray.average([2, 1, 2, 3])).toEqual(2);
    });
    it('should return min value in array', () => {
        expect(analyzeArray.min([1, 2, 3])).toEqual(1);
    });
});
