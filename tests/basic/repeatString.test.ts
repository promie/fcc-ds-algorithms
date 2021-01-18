import repeatString from '../../src/basic/repeatString'

describe('RepeatString', () => {
  describe('repeatStringNumTimes()', () => {
    let inputStr: string
    let inputNum: number
    let result: string

    it('repeats the number of word based on the input number', () => {
      inputStr = '*'
      inputNum = 3

      result = '***'

      expect(repeatString.repeatStringNumTimes(inputStr, inputNum)).toBe(result)
    })

    it('repeats the number of word based on the input number', () => {
      inputStr = 'abc'
      inputNum = 3

      result = 'abcabcabc'

      expect(repeatString.repeatStringNumTimes(inputStr, inputNum)).toBe(result)
    })

    it('repeats the number of word based on the input number', () => {
      inputStr = 'abc'
      inputNum = 4

      result = 'abcabcabcabc'

      expect(repeatString.repeatStringNumTimes(inputStr, inputNum)).toBe(result)
    })

    it('repeats the number of word based on the input number', () => {
      inputStr = 'abc'
      inputNum = 1

      result = 'abc'

      expect(repeatString.repeatStringNumTimes(inputStr, inputNum)).toBe(result)
    })

    it('repeats the number of word based on the input number', () => {
      inputStr = '*'
      inputNum = 8

      result = '********'

      expect(repeatString.repeatStringNumTimes(inputStr, inputNum)).toBe(result)
    })

    it('repeats the number of word based on the input number', () => {
      inputStr = 'abc'
      inputNum = -2

      result = ''

      expect(repeatString.repeatStringNumTimes(inputStr, inputNum)).toBe(result)
    })

    it('repeats the number of word based on the input number', () => {
      inputStr = 'abc'
      inputNum = 0

      result = ''

      expect(repeatString.repeatStringNumTimes(inputStr, inputNum)).toBe(result)
    })
  })
})
