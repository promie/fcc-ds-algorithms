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
  })
})
