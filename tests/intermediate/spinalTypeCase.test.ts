import spinalTypeCase from '../../src/intermediate/spinalTypeCase'

describe.only('spinalTypeCase', () => {
  describe('#spinalCase', () => {
    let inputStr: string
    let result: string

    it('returns a spinal type case for input strings', () => {
      inputStr = 'This Is Spinal Tap'
      result = 'this-is-spinal-tap'

      expect(spinalTypeCase.spinalCase(inputStr)).toBe(result)
    })

    it('returns a spinal type case for input strings', () => {
      inputStr = 'thisIsSpinalTap'
      result = 'this-is-spinal-tap'

      expect(spinalTypeCase.spinalCase(inputStr)).toBe(result)
    })

    it('returns a spinal type case for input strings', () => {
      inputStr = 'The_Andy_Griffith_Show'
      result = 'the-andy-griffith-show'

      expect(spinalTypeCase.spinalCase(inputStr)).toBe(result)
    })
  })
})
