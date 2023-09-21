

const analyzeArray = {
    average: (array) => {
    //sum all elements in the arra
    let total = array.reduce(function (sum, element) {
        return sum + element;
    },0);
    let average = total / array.length;
    return average;
}
}

module.exports = analyzeArray;