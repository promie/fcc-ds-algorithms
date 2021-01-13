import romanNumeralConverter from '../src/romanNumeralConverter'

describe('RomanNumeralConverter', () => {
  describe('covertToRoman()', () => {
    it('converts the number 2 to correct roman numeral of II', () => {
      // given
      const input = 2

      // when
      const result = 'II'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })
  })
})
