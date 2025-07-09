import { expect } from '@jest/globals'
import topKFrequentElements from '../topKFrequentElements'

test('topKFrequentElements', () => {
  const inputArray = [1, 2, 1, 3, 1, 4, 2]
  const count = 2
  const expected = [1,2]
  const result = topKFrequentElements(inputArray, count)

  expect(result).toStrictEqual(expected)
})
