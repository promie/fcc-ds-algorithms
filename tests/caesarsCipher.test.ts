import caesarsCipher from '../src/caesarsCipher'

describe('CaesarsCipher', () => {
  describe('rot13()', () => {
    it('decodes and shift each letter by 13 places - SERR PBQR PNZC should decode to FREE CODE CAMP', () => {
      const input = 'SERR PBQR PNZC'
      const result = 'FREE CODE CAMP'

      expect(caesarsCipher.rot13(input)).toBe(result)
    })
  })
})
