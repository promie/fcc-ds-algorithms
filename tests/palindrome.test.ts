import { palindrome } from '../src/palindrome'

describe('palindrome', () => {
  it('should return true', () => {
    expect(palindrome('eye')).toBe(true)
  })
})
