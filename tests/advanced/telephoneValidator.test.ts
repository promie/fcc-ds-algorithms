import telephoneValidator from '../../src/advanced/telephoneValidator'

describe('TelephoneCheck', () => {
  describe('telephoneCheck()', () => {
    it('returns true when the correct telephone format of 555-555-5555 is passed in', () => {
      const input = '555-555-5555'
      const result = true

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns true when the correct telephone format of 1 555-555-5555 is passed in', () => {
      const input = '1 555-555-5555'
      const result = true

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns true when the correct telephone format of 1 (555) 555-5555 is passed in', () => {
      const input = '1 (555) 555-5555'
      const result = true

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns true when the correct telephone format of 5555555555 is passed in', () => {
      const input = '5555555555'
      const result = true

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns true when the correct telephone format of (555)555-5555 is passed in', () => {
      const input = '(555)555-5555'
      const result = true

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns true when the correct telephone format of 1(555)555-5555 is passed in', () => {
      const input = '1(555)555-5555'
      const result = true

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns false when the incorrect telephone format of 555-5555 is passed in', () => {
      const input = '555-5555'
      const result = false

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns false when the incorrect telephone format of 5555555 is passed in', () => {
      const input = '5555555'
      const result = false

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns false when the incorrect telephone format of 1 555)555-5555 is passed in', () => {
      const input = '1 555)555-5555'
      const result = false

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns true when the correct telephone format of 1 555 555 5555 is passed in', () => {
      const input = '1 555 555 5555'
      const result = true

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns true when the correct telephone format of 1 456 789 4444 is passed in', () => {
      const input = '1 456 789 4444'
      const result = true

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns false when the incorrect telephone format of 123**&!!asdf# is passed in', () => {
      const input = '123**&!!asdf#'
      const result = false

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns false when the incorrect telephone format of 55555555 is passed in', () => {
      const input = '55555555'
      const result = false

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns false when the incorrect telephone format of (6054756961) is passed in', () => {
      const input = '(6054756961)'
      const result = false

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns false when the incorrect telephone format of 2 (757) 622-7382 is passed in', () => {
      const input = '2 (757) 622-7382'
      const result = false

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns false when the incorrect telephone format of 0 (757) 622-7382 is passed in', () => {
      const input = '0 (757) 622-7382'
      const result = false

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns false when the incorrect telephone format of -1 (757) 622-7382 is passed in', () => {
      const input = '-1 (757) 622-7382'
      const result = false

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns false when the incorrect telephone format of 2 757 622-7382 is passed in', () => {
      const input = '2 757 622-7382'
      const result = false

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns false when the incorrect telephone format of 10 (757) 622-7382 is passed in', () => {
      const input = '10 (757) 622-7382'
      const result = false

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns false when the incorrect telephone format of 27576227382 is passed in', () => {
      const input = '27576227382'
      const result = false

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns false when the incorrect telephone format of (275)76227382 is passed in', () => {
      const input = '(275)76227382'
      const result = false

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns false when the incorrect telephone format of 2(757)6227382 is passed in', () => {
      const input = '2(757)6227382'
      const result = false

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns false when the incorrect telephone format of 2(757)622-7382 is passed in', () => {
      const input = '2(757)622-7382'
      const result = false

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns false when the incorrect telephone format of 555)-555-5555 is passed in', () => {
      const input = '555)-555-5555'
      const result = false

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns false when the incorrect telephone format of (555-555-5555 is passed in', () => {
      const input = '(555-555-5555'
      const result = false

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })

    it('returns false when the incorrect telephone format of (555)5(55?)-5555 is passed in', () => {
      const input = '(555)5(55?)-5555'
      const result = false

      expect(telephoneValidator.telephoneCheck(input)).toBe(result)
    })
  })
})
