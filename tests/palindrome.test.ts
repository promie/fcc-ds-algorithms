import { palindrome } from '../src/palindrome'

describe('palindrome', () => {
  let str: string

  it('should return true if the word ("EYE") is a palindrome', () => {
    str = 'eye'

    expect(palindrome(str)).toBe(true)
  })

  it('should still return true even if the word ("_EYE") has a special character', () => {
    str = '_eye'

    expect(palindrome(str)).toBe(true)
  })
})
