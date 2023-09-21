const { array } = require("yargs");


const analyzeArray = {
    average: (array) => {
    //sum all elements in the arra
    let total = array.reduce(function (sum, element) {
        return sum + element;
    },0);
    let average = total / array.length;
    return average;
    },
    min: (array) => {
        let minimum = Math.min(...array);
        return minimum;
    },
    max: (array) => {
        let maximum = Math.max(...array);
        return maximum;
    },
    length: (array) => {
        return  array.length;
    }
}

module.exports = analyzeArray;