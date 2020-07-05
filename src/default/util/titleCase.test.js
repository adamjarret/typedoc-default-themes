const titleCase = require('./titleCase');

test('titleCase: undefined', () => {
  expect(titleCase()).toBe('');
});

test('titleCase: empty', () => {
  expect(titleCase('')).toBe('');
});

test('titleCase: one word', () => {
  expect(titleCase('guides')).toBe('Guides');
});

test('titleCase: multi word', () => {
  expect(titleCase('one two three')).toBe('One Two Three');
});

test('titleCase: abbr', () => {
  expect(titleCase('cli')).toBe('CLI');
});
