import { expect } from '@jest/globals'
import productoExceptSelf from '../productExceptSelf'

test('returns an array with product of elements except the current position', () => {
  const input = [1, 2, 3, 4]
  const expected = [24, 12, 8, 6]

  const result = productoExceptSelf(input)
  expect(result).toStrictEqual(expected)
})
