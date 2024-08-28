const generatePassword = require('./generatepassword');

describe('generatePassword', () => {
  test('should generate a password of the correct length', () => {
    const length = 10;
    const password = generatePassword(length, 'low');
    expect(password.length).toBe(length);
  });

  test('should throw an error for an invalid strength level', () => {
    expect(() => generatePassword(10, 'invalid')).toThrow('Password too weak. Should atleast be low, medium or high');
  });

  test('should generate a low strength password with only lowercase letters', () => {
    const password = generatePassword(10, 'low');
    expect(password).toMatch(/^[a-z]+$/);
  });

  test('should generate a medium strength password with uppercase and lowercase letters', () => {
    const password = generatePassword(10, 'medium');
    expect(password).toMatch(/^[a-zA-Z]+$/);
  });

  test('should generate a high strength password with letters, numbers, and special characters', () => {
    const password = generatePassword(10, 'high');
    expect(password).toMatch(/^[a-zA-Z0-9!@#$%^&*()_+\[\]{}|;:,.<>?]+$/);
  });

  test('should generate different passwords each time', () => {
    const password1 = generatePassword(10, 'high');
    const password2 = generatePassword(10, 'high');
    expect(password1).not.toBe(password2);
  });
});
