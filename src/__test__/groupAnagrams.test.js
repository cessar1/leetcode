import { expect } from '@jest/globals'
import groupAnagrams from '../groupAnagrams'

test('Group Anagrams', () => {
  const input = ['act', 'pots', 'tops', 'cat', 'stop', 'hat']
  const expected = [['act', 'cat'], ['pots', 'tops', 'stop'], ['hat']]

  const result = groupAnagrams(input)

  expect(result).toStrictEqual(expected)
})
