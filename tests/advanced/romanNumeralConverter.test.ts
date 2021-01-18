import romanNumeralConverter from '../../src/advanced/romanNumeralConverter'

describe('RomanNumeralConverter', () => {
  describe('covertToRoman()', () => {
    it('throws an error if the input number is greater than 3999', () => {
      const input = 4000
      const error = 'The maximum number for this conversion is 3999'

      expect(function () {
        romanNumeralConverter.convertToRoman(input)
      }).toThrow(error)
    })

    it('converts the number 2 to correct roman numeral of II', () => {
      const input = 2
      const result = 'II'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 3 to correct roman numeral of III', () => {
      const input = 3
      const result = 'III'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 4 to correct roman numeral of IV', () => {
      const input = 4
      const result = 'IV'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 5 to correct roman numeral of V', () => {
      const input = 5
      const result = 'V'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 9 to correct roman numeral of IX', () => {
      const input = 9
      const result = 'IX'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 12 to correct roman numeral of XII', () => {
      const input = 12
      const result = 'XII'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 16 to correct roman numeral of XVI', () => {
      const input = 16
      const result = 'XVI'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 29 to correct roman numeral of XXIX', () => {
      const input = 29
      const result = 'XXIX'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 44 to correct roman numeral of XLIV', () => {
      const input = 44
      const result = 'XLIV'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 45 to correct roman numeral of XLV', () => {
      const input = 45
      const result = 'XLV'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 68 to correct roman numeral of LXVIII', () => {
      const input = 68
      const result = 'LXVIII'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 83 to correct roman numeral of LXXXIII', () => {
      const input = 83
      const result = 'LXXXIII'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 97 to correct roman numeral of XCVII', () => {
      const input = 97
      const result = 'XCVII'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 99 to correct roman numeral of XCIX', () => {
      const input = 99
      const result = 'XCIX'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 400 to correct roman numeral of CD', () => {
      const input = 400
      const result = 'CD'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 500 to correct roman numeral of D', () => {
      const input = 4
      const result = 'IV'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 501 to correct roman numeral of DI', () => {
      const input = 501
      const result = 'DI'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 649 to correct roman numeral of DCXLIX', () => {
      const input = 649
      const result = 'DCXLIX'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 798 to correct roman numeral of DCCXCVIII', () => {
      const input = 798
      const result = 'DCCXCVIII'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 891 to correct roman numeral of DCCCXCI', () => {
      const input = 891
      const result = 'DCCCXCI'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 1000 to correct roman numeral of M', () => {
      const input = 1000
      const result = 'M'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 1004 to correct roman numeral of MIV', () => {
      const input = 1004
      const result = 'MIV'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 1006 to correct roman numeral of MVI', () => {
      const input = 1006
      const result = 'MVI'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 1023 to correct roman numeral of MXXIII', () => {
      const input = 1023
      const result = 'MXXIII'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 2014 to correct roman numeral of MMXIV', () => {
      const input = 2014
      const result = 'MMXIV'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })

    it('converts the number 3999 to correct roman numeral of MMMCMXCIX', () => {
      const input = 3999
      const result = 'MMMCMXCIX'

      expect(romanNumeralConverter.convertToRoman(input)).toBe(result)
    })
  })
})
