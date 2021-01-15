import romanNumeralConverter from '../src/romanNumeralConverter'

describe('RomanNumeralConverter', () => {
  describe('covertToRoman()', () => {
    it('throws an error if the input number is greater than 3999', () => {
      // given
      const input = 4000

      // when
      const error = 'The maximum number for this conversion is 3999'

      // then
      expect(function () {
        romanNumeralConverter.convertToRoman(input)
      }).toThrow(error)
    })

    it('converts the number 2 to correct roman numeral of II', () => {
      // given
      const input = 2

      // when
      const result = 'II'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 3 to correct roman numeral of III', () => {
      // given
      const input = 3

      // when
      const result = 'III'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 4 to correct roman numeral of IV', () => {
      // given
      const input = 4

      // when
      const result = 'IV'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 5 to correct roman numeral of V', () => {
      // given
      const input = 5

      // when
      const result = 'V'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 9 to correct roman numeral of IX', () => {
      // given
      const input = 9

      // when
      const result = 'IX'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 12 to correct roman numeral of XII', () => {
      // given
      const input = 12

      // when
      const result = 'XII'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 16 to correct roman numeral of XVI', () => {
      // given
      const input = 16

      // when
      const result = 'XVI'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 29 to correct roman numeral of XXIX', () => {
      // given
      const input = 29

      // when
      const result = 'XXIX'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 44 to correct roman numeral of XLIV', () => {
      // given
      const input = 44

      // when
      const result = 'XLIV'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 45 to correct roman numeral of XLV', () => {
      // given
      const input = 45

      // when
      const result = 'XLV'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 68 to correct roman numeral of LXVIII', () => {
      // given
      const input = 68

      // when
      const result = 'LXVIII'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 83 to correct roman numeral of LXXXIII', () => {
      // given
      const input = 83

      // when
      const result = 'LXXXIII'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 97 to correct roman numeral of XCVII', () => {
      // given
      const input = 97

      // when
      const result = 'XCVII'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 99 to correct roman numeral of XCIX', () => {
      // given
      const input = 99

      // when
      const result = 'XCIX'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 400 to correct roman numeral of CD', () => {
      // given
      const input = 400

      // when
      const result = 'CD'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 500 to correct roman numeral of D', () => {
      // given
      const input = 4

      // when
      const result = 'IV'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 501 to correct roman numeral of DI', () => {
      // given
      const input = 501

      // when
      const result = 'DI'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 649 to correct roman numeral of DCXLIX', () => {
      // given
      const input = 649

      // when
      const result = 'DCXLIX'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 798 to correct roman numeral of DCCXCVIII', () => {
      // given
      const input = 798

      // when
      const result = 'DCCXCVIII'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 891 to correct roman numeral of DCCCXCI', () => {
      // given
      const input = 891

      // when
      const result = 'DCCCXCI'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 1000 to correct roman numeral of M', () => {
      // given
      const input = 1000

      // when
      const result = 'M'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 1004 to correct roman numeral of MIV', () => {
      // given
      const input = 1004

      // when
      const result = 'MIV'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 1006 to correct roman numeral of MVI', () => {
      // given
      const input = 1006

      // when
      const result = 'MVI'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 1023 to correct roman numeral of MXXIII', () => {
      // given
      const input = 1023

      // when
      const result = 'MXXIII'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 2014 to correct roman numeral of MMXIV', () => {
      // given
      const input = 2014

      // when
      const result = 'MMXIV'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 3999 to correct roman numeral of MMMCMXCIX', () => {
      // given
      const input = 3999

      // when
      const result = 'MMMCMXCIX'

      // then
      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })
  })
})
