import whereforeArtThou, {
  CustomType,
} from '../../src/intermediate/whereforeArtThou'

describe('WhereforeArtThou', () => {
  describe('#whatIsInAName', () => {
    let inputCollection: CustomType[]
    let inputSource: CustomType
    let result: CustomType[]

    it('returns a new array of object that includes the value that it found in the inputCollection', () => {
      inputCollection = [
        { first: 'Romeo', last: 'Montague' },
        { first: 'Mercutio', last: null },
        { first: 'Tybalt', last: 'Capulet' },
      ]
      inputSource = { last: 'Capulet' }
      result = [{ first: 'Tybalt', last: 'Capulet' }]

      expect(
        whereforeArtThou.whatIsInAName(inputCollection, inputSource)
      ).toEqual(result)
    })

    it('returns a new array of object that includes the value that it found in the inputCollection', () => {
      inputCollection = [{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }]
      inputSource = { apple: 1 }
      result = [{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }]

      expect(
        whereforeArtThou.whatIsInAName(inputCollection, inputSource)
      ).toEqual(result)
    })

    it('returns a new array of object that includes the value that it found in the inputCollection', () => {
      inputCollection = [
        { apple: 1, bat: 2 },
        { bat: 2 },
        { apple: 1, bat: 2, cookie: 2 },
      ]
      inputSource = { apple: 1, bat: 2 }
      result = [
        { apple: 1, bat: 2 },
        { apple: 1, bat: 2, cookie: 2 },
      ]

      expect(
        whereforeArtThou.whatIsInAName(inputCollection, inputSource)
      ).toEqual(result)
    })

    it('returns a new array of object that includes the value that it found in the inputCollection', () => {
      inputCollection = [
        { apple: 1, bat: 2 },
        { apple: 1 },
        { apple: 1, bat: 2, cookie: 2 },
      ]
      inputSource = { apple: 1, cookie: 2 }
      result = [{ apple: 1, bat: 2, cookie: 2 }]

      expect(
        whereforeArtThou.whatIsInAName(inputCollection, inputSource)
      ).toEqual(result)
    })

    it('returns a new array of object that includes the value that it found in the inputCollection', () => {
      inputCollection = [
        { apple: 1, bat: 2 },
        { apple: 1 },
        { apple: 1, bat: 2, cookie: 2 },
        { bat: 2 },
      ]
      inputSource = { apple: 1, bat: 2 }
      result = [
        { apple: 1, bat: 2 },
        { apple: 1, bat: 2, cookie: 2 },
      ]

      expect(
        whereforeArtThou.whatIsInAName(inputCollection, inputSource)
      ).toEqual(result)
    })

    it('returns a new array of object that includes the value that it found in the inputCollection', () => {
      inputCollection = [{ a: 1, b: 2, c: 3 }]
      inputSource = { a: 1, b: 9999, c: 3 }
      result = []

      expect(
        whereforeArtThou.whatIsInAName(inputCollection, inputSource)
      ).toEqual(result)
    })
  })
})
