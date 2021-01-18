import palindrome from '../../src/advanced/palindrome'

describe('Palindrome', () => {
  describe('normalise()', () => {
    it('should remove all the underline from _eye and return eye', () => {
      const input = '_eye'
      const result = 'eye'

      expect(palindrome.normalise(input)).toBe(result)
    })

    it('should remove all special characters', () => {
      const input = '@#$@!EYE!@#@!@@@!'
      const result = 'eye'

      expect(palindrome.normalise(input)).toBe(result)
    })

    it('should remove all special characters include all spaces', () => {
      const input = '!@@$!@@race !@#$!!____car'
      const result = 'racecar'

      expect(palindrome.normalise(input)).toBe(result)
    })

    it('should remove all special characters include all spaces #2', () => {
      const input = 'never odd or even'
      const result = 'neveroddoreven'

      expect(palindrome.normalise(input)).toBe(result)
    })

    it('should make input string to be all lower cases', () => {
      const input = 'MaaAm'
      const result = 'maaam'

      expect(palindrome.normalise(input)).toBe(result)
    })
  })

  describe('process()', () => {
    it('should return true if the word ("EYE") is a palindrome', () => {
      const input = 'eye'
      const result = true

      expect(palindrome.process(input)).toBe(result)
    })

    it('should still return true even if the word ("_EYE") has a special character', () => {
      const input = '_eye'
      const result = true

      expect(palindrome.process(input)).toBe(result)
    })

    it('should return true if the given word of "race car" is a palindrome', () => {
      const input = 'race car'
      const result = true

      expect(palindrome.process(input)).toBe(result)
    })

    it('should return true if the given word of "never odd or even" is a palindrome', () => {
      const input = 'never odd or even'
      const result = true

      expect(palindrome.process(input)).toBe(result)
    })

    it('should return false if the given word of "1 eye for an 1 eye." is not a palindrome', () => {
      const input = '1 eye for of 1 eye.'
      const result = false

      expect(palindrome.process(input)).toBe(result)
    })

    it('should return true if the given word of "My age is 0, 0 si ega ym." is a palindrome', () => {
      const input = 'My age is 0, 0 si ega ym.'
      const result = true

      expect(palindrome.process(input)).toBe(result)
    })
  })
})
