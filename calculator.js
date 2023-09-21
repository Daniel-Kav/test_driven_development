const calculator = {
    add: function (num1, num2) {
      return num1 + num2;
    },
    subtract: function (num1, num2) {
      return num1 - num2;
    },
    divide: function (num1, num2) {
      if (num2 === 0) {
        return "Division by zero is not allowed";
      }
      return num1 / num2;
    },
    multiply: function (num1, num2) {
      return num1 * num2;
    },
  };
module.exports = calculator;