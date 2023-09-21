const reverseString = require('./reverseString');

test('reverseString should reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverseString should handle an empty string', () => {
  expect(reverseString('')).toBe('');
});

test('reverseString should handle a single character string', () => {
  expect(reverseString('a')).toBe('a');
});

test('reverseString should handle spaces', () => {
  expect(reverseString('  ab c ')).toBe(' c ba  ');
});
