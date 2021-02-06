import booWho from '../../src/basic/booWho'

describe('booWho()', () => {
  let boolInput: any
  let result: boolean

  it('returns true as the value of true is classified as a boolean primitive', () => {
    boolInput = true
    result = true

    expect(booWho(boolInput)).toBe(result)
  })

  it('returns true as the value of false is classified as a boolean primitive', () => {
    boolInput = false
    result = true

    expect(booWho(boolInput)).toBe(result)
  })

  it('returns false as the value of [1, 2, 3] is not classified as a boolean primitive', () => {
    boolInput = [1, 2, 3]
    result = false

    expect(booWho(boolInput)).toBe(result)
  })

  it('returns false as the value of [].slice is not classified as a boolean primitive', () => {
    boolInput = [].slice
    result = false

    expect(booWho(boolInput)).toBe(result)
  })

  it('returns false as the value of { "a": 1 } is not classified as a boolean primitive', () => {
    boolInput = { a: 1 }
    result = false

    expect(booWho(boolInput)).toBe(result)
  })

  it('returns false as the value of 1 is not classified as a boolean primitive', () => {
    boolInput = 1
    result = false

    expect(booWho(boolInput)).toBe(result)
  })

  it('returns false as the value of NaN is not classified as a boolean primitive', () => {
    boolInput = NaN
    result = false

    expect(booWho(boolInput)).toBe(result)
  })

  it('returns false as the value of string a is not classified as a boolean primitive', () => {
    boolInput = 'a'
    result = false

    expect(booWho(boolInput)).toBe(result)
  })

  it('returns false as the value of string true is not classified as a boolean primitive', () => {
    boolInput = 'true'
    result = false

    expect(booWho(boolInput)).toBe(result)
  })

  it('returns false as the value of string false is not classified as a boolean primitive', () => {
    boolInput = 'false'
    result = false

    expect(booWho(boolInput)).toBe(result)
  })
})
