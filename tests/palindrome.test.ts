import palindrome from '../src/palindrome'

describe('Palindrome', () => {
  it('should return true if the word ("EYE") is a palindrome', () => {
    // given
    const str = 'eye'

    // when
    const result = true

    // then
    expect(palindrome.process(str)).toBe(true)
  })

  it('should still return true even if the word ("_EYE") has a special character', () => {
    // given
    const str = '_eye'

    // when
    const result = true

    // then
    expect(palindrome.process(str)).toBe(result)
  })
})
