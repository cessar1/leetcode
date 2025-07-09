import { expect } from '@jest/globals'
import reverseString from '../reverseString'

test('reverseString', () => {
  const input = ['n', 'e', 'e', 't']
  const expected = ['t', 'e', 'e', 'n']

  reverseString(input)

  expect(input).toStrictEqual(expected)
})
