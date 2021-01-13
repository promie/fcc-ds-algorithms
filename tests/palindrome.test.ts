import palindrome from '../src/palindrome'

describe('Palindrome', () => {
  describe('normalise()', () => {
    it('should remove all the underline from _eye and return eye', () => {
      // given
      const input = '_eye'

      // when
      const result = 'eye'

      // then
      expect(palindrome.normalise(input)).toBe(result)
    })

    it('should remove all special characters', () => {
      // given
      const input = '@#$@!EYE!@#@!@@@!'

      // when
      const result = 'eye'

      //then
      expect(palindrome.normalise(input)).toBe(result)
    })

    it('should remove all special characters include all spaces', () => {
      // given
      const input = '!@@$!@@race !@#$!!____car'

      // when
      const result = 'racecar'

      // then
      expect(palindrome.normalise(input)).toBe(result)
    })

    it('should remove all special characters include all spaces #2', () => {
      // given
      const input = 'never odd or even'

      // when
      const result = 'neveroddoreven'

      // then
      expect(palindrome.normalise(input)).toBe(result)
    })

    it('should make input string to be all lower cases', () => {
      // given
      const input = 'MaaAm'

      // when
      const result = 'maaam'

      // then
      expect(palindrome.normalise(input)).toBe(result)
    })
  })

  describe('process()', () => {
    it('should return true if the word ("EYE") is a palindrome', () => {
      // given
      const input = 'eye'

      // when
      const result = true

      // then
      expect(palindrome.process(input)).toBe(result)
    })

    it('should still return true even if the word ("_EYE") has a special character', () => {
      // given
      const input = '_eye'

      // when
      const result = true

      // then
      expect(palindrome.process(input)).toBe(result)
    })

    it('should return true if the given word of "race car" is a palindrome', () => {
      // given
      const input = 'race car'

      // when
      const result = true

      // then
      expect(palindrome.process(input)).toBe(result)
    })

    it('should return true if the given word of "never odd or even" is a palindrome', () => {
      // given
      const input = 'never odd or even'

      // when
      const result = true

      // then
      expect(palindrome.process(input)).toBe(result)
    })

    it('should return false if the given word of "1 eye for an 1 eye." is not a palindrome', () => {
      // given
      const input = '1 eye for of 1 eye.'

      // when
      const result = false

      // then
      expect(palindrome.process(input)).toBe(result)
    })

    it('should return true if the given word of "My age is 0, 0 si ega ym." is a palindrome', () => {
      // given
      const input = 'My age is 0, 0 si ega ym.'

      // when
      const result = true

      // then
      expect(palindrome.process(input)).toBe(result)
    })
  })
})
