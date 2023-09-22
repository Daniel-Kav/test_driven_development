const caesarCipher = require('./ceaserCipher');

describe('Caesar Cipher', () => {
    it('should handle positive shifts for lowercase letters', () => {
      expect(caesarCipher('abc', 1)).toBe('bcd');
    });
  
    it('should handle negative shifts for lowercase letters', () => {
      expect(caesarCipher('bcd', -1)).toBe('abc');
    });
  
    it('should handle positive shifts for uppercase letters', () => {
      expect(caesarCipher('XYZ', 3)).toBe('ABC');
    });
  
    it('should handle wrapping from z to a', () => {
      expect(caesarCipher('xyz', 1)).toBe('yza');
    });
  
    it('should handle shifts with punctuation', () => {
      expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
    });
    
  it('should maintain the same case', () => {
    expect(caesarCipher('aBcDeF', 2)).toBe('cDeFgH');
  })
});