const splitMarkdown = require('./splitMarkdown');

test('splitMarkdown: h2 first', () => {
  const onSection = jest.fn();
  const input = `## One Title
Content after one
More content
### H3
## Two
This content comes after 2
[link](https://google.com)

## Three

This content comes after 3

Something else
`;

  expect(splitMarkdown(input, onSection)).toEqual([
    {
      id: 'one-title',
      title: 'One Title',
      content: 'Content after one\nMore content\n### H3'
    },
    {
      id: 'two',
      title: 'Two',
      content: 'This content comes after 2\n[link](https://google.com)'
    },
    {
      id: 'three',
      title: 'Three',
      content: 'This content comes after 3\n\nSomething else'
    }
  ]);

  expect(onSection).toBeCalledTimes(3);
});

test('splitMarkdown: text first', () => {
  const input = `
Content after one
More content
### H3
## Two
This content comes after 2
[link](https://google.com)

## Three

This content comes after 3

Something else
`;

  expect(splitMarkdown(input)).toEqual([
    { content: 'Content after one\nMore content\n### H3' },
    {
      id: 'two',
      title: 'Two',
      content: 'This content comes after 2\n[link](https://google.com)'
    },
    {
      id: 'three',
      title: 'Three',
      content: 'This content comes after 3\n\nSomething else'
    }
  ]);
});
