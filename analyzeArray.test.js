const analyzeArray = require('./analyzeArray');

describe('AnalyzeArray', function () {
    it('should return average of array', () => {
        expect(analyzeArray.average([2, 1, 2, 3])).toEqual(2);
    });
});
