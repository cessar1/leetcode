const reverseString = require('../reverseString')

test('reverseString', () => {
  const input = ['n', 'e', 'e', 't']
  const expected = ['t', 'e', 'e', 'n']

  reverseString(input)

  expect(input).toStrictEqual(expected)
})
