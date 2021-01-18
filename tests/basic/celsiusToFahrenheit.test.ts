import celsiusToFahrenheit from '../../src/basic/celsiusToFahrenheit'

describe('celsiusToFahrenheit', () => {
  describe('convertToF()', () => {
    let input: number
    let result: number

    it('converts celsius to fahrenheit -30 celsius should return -22', () => {
      input = -30
      result = -22

      expect(celsiusToFahrenheit.convertToF(input)).toBe(result)
    })

    it('converts celsius to fahrenheit -10 celsius should return -14', () => {
      input = -10
      result = 14

      expect(celsiusToFahrenheit.convertToF(input)).toBe(result)
    })

    it('converts celsius to fahrenheit 0 celsius should return 32', () => {
      input = 0
      result = 32

      expect(celsiusToFahrenheit.convertToF(input)).toBe(result)
    })

    it('converts celsius to fahrenheit 20 celsius should return 68', () => {
      input = 20
      result = 68

      expect(celsiusToFahrenheit.convertToF(input)).toBe(result)
    })

    it('converts celsius to fahrenheit 30 celsius should return 86', () => {
      input = 30
      result = 86

      expect(celsiusToFahrenheit.convertToF(input)).toBe(result)
    })
  })
})
