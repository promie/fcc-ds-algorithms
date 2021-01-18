import reverseString from '../../src/basic/reverseString'

describe('reverseString', () => {
  describe('process()', () => {
    let input: string
    let result: string

    it('reverses a string - hello should become olleh', () => {
      input = 'hello'
      result = 'olleh'

      expect(reverseString.process(input)).toBe(result)
    })

    it('reverses a string - Howdy should become ydwoH', () => {
      input = 'Howdy'
      result = 'ydwoH'

      expect(reverseString.process(input)).toBe(result)
    })

    it('reverses a string - Greetings from Earth should become htraE morf sgniteerG', () => {
      input = 'Greetings from Earth'
      result = 'htraE morf sgniteerG'

      expect(reverseString.process(input)).toBe(result)
    })
  })
})
