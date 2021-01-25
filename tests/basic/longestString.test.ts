import longestString from '../../src/basic/longestString'

describe.only('longestString', () => {
  describe('findLongestWordLength()', () => {
    let inputString: string
    let result: number

    it('returns the length of the longest string in a sentence', () => {
      inputString = 'The quick brown fox jumped over the lazy dog'
      result = 6

      expect(longestString.findLongestWordLength(inputString)).toBe(result)
    })

    it('returns the length of the longest string in a sentence', () => {
      inputString = 'May the force be with you'
      result = 5

      expect(longestString.findLongestWordLength(inputString)).toBe(result)
    })

    it('returns the length of the longest string in a sentence', () => {
      inputString = 'Google do a barrel roll'
      result = 6

      expect(longestString.findLongestWordLength(inputString)).toBe(result)
    })

    it('returns the length of the longest string in a sentence', () => {
      inputString =
        'What is the average airspeed velocity of an unladen swallow'
      result = 8

      expect(longestString.findLongestWordLength(inputString)).toBe(result)
    })

    it('returns the length of the longest string in a sentence', () => {
      inputString =
        'What if we try a super-long word such as otorhinolaryngology'
      result = 19

      expect(longestString.findLongestWordLength(inputString)).toBe(result)
    })
  })
})
