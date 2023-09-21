const calculator = require('./calculator'); // Import your calculator object here

// Test cases for the calculator functions
describe('Calculator', () => {
  it('should add two numbers correctly', () => {
    expect(calculator.add(5, 3)).toBe(8);
  });

  it('should subtract two numbers correctly', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  // Add more test cases for divide and multiply functions
  it('should divide two numbers correctly', () => {
    expect(calculator.divide(12, 4)).toBe(3);
  });

  it('should multiply two numbers correctly', () => {
    expect(calculator.multiply(7, 2)).toBe(14);
  });

});
