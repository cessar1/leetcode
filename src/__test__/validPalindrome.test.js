import { expect } from '@jest/globals'
import validPalindrome from '../validPalindrome'

test('valid palindrome returns true', () => {
  const input = 'Was it a car or a cat I saw?'

  const result = validPalindrome(input)

  expect(result).toBeTruthy()
})

test('invalid palindrome returns false', () => {
  const input = 'tab a cat'

  const result = validPalindrome(input)

  expect(result).toBeFalsy()
})
