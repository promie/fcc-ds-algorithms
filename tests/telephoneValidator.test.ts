import telephoneValidator from '../src/telephoneValidator'

describe.only('TelephoneCheck', () => {
  describe('telephoneCheck()', () => {
    it('returns true when the correct telephone format of 555-555-5555 is passed in', () => {
      const input = '555-555-555'
      const result = true

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })
  })
})
