const capitalize = require('./capitalize');

test('capitalize should capitalize the first letter of a word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('capitalize should not change an already capitalized word', () => {
  expect(capitalize('World')).toBe('World');
});

test('capitalize should handle an empty string', () => {
  expect(capitalize('')).toBe('');
});

test('capitalize should handle a single character string', () => {
  expect(capitalize('a')).toBe('A');
});
