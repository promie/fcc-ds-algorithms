import caesarsCipher from '../src/caesarsCipher'

describe.only('CaesarsCipher', () => {
  describe('rot13()', () => {
    it('decodes and shift each letter by 13 places - SERR PBQR PNZC should decode to FREE CODE CAMP', () => {
      const input = 'SERR PBQR PNZC'
      const result = 'FREE CODE CAMP'

      expect(caesarsCipher.rot13(input)).toBe(result)
    })

    it('decodes and shift each letter by 13 places - SERR CVMMN! should decode to FREE PIZZA!', () => {
      const input = 'SERR CVMMN!'
      const result = 'FREE PIZZA!'

      expect(caesarsCipher.rot13(input)).toBe(result)
    })

    it('decodes and shift each letter by 13 places - SERR YBIR? should decode to FREE LOVE?', () => {
      const input = 'SERR YBIR?'
      const result = 'FREE LOVE?'

      expect(caesarsCipher.rot13(input)).toBe(result)
    })

    it('decodes and shift each letter by 13 places - GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT. should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.', () => {
      const input = 'GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'
      const result = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'

      expect(caesarsCipher.rot13(input)).toBe(result)
    })

    it('should convert the letters to uppercase before it decodes and shift each letter by 13 places - serr pbqr pnzc should decode to FREE CODE CAMP', () => {
      const input = 'serr pbqr pnzc'
      const result = 'FREE CODE CAMP'

      expect(caesarsCipher.rot13(input)).toBe(result)
    })
  })
})
