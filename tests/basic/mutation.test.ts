import mutation from '../../src/basic/mutation'

describe.only('mutation()', () => {
  let arrInput: string[]
  let result: boolean

  it('should return true if the second string is included in the second string', () => {
    arrInput = ['hello', 'Heo']
    result = true

    expect(mutation(arrInput)).toBe(result)
  })

  it('should return false if the second string is not included in the second string', () => {
    arrInput = ['hello', 'hey']
    result = false

    expect(mutation(arrInput)).toBe(result)
  })

  it('should return true if the second string is included in the second string', () => {
    arrInput = ['zyxwvutsrqponmlkjihgfedcba', 'qrstu']
    result = true

    expect(mutation(arrInput)).toBe(result)
  })

  it('should return true if the second string is included in the second string', () => {
    arrInput = ['Mary', 'Army']
    result = true

    expect(mutation(arrInput)).toBe(result)
  })

  it('should return true if the second string is included in the second string', () => {
    arrInput = ['Mary', 'Aarmy']
    result = true

    expect(mutation(arrInput)).toBe(result)
  })

  it('should return true if the second string is included in the second string', () => {
    arrInput = ['Alien', 'line']
    result = true

    expect(mutation(arrInput)).toBe(result)
  })

  it('should return true if the second string is included in the second string', () => {
    arrInput = ['floor', 'for']
    result = true

    expect(mutation(arrInput)).toBe(result)
  })

  it('should return false if the second string is not included in the second string', () => {
    arrInput = ['hello', 'neo']
    result = false

    expect(mutation(arrInput)).toBe(result)
  })

  it('should return false if the second string is not included in the second string', () => {
    arrInput = ['voodoo', 'no']
    result = false

    expect(mutation(arrInput)).toBe(result)
  })

  it('should return false if the second string is not included in the second string', () => {
    arrInput = ['ate', 'date']
    result = false

    expect(mutation(arrInput)).toBe(result)
  })

  it('should return false if the second string is not included in the second string', () => {
    arrInput = ['Tiger', 'Zebra']
    result = false

    expect(mutation(arrInput)).toBe(result)
  })

  it('should return true if the second string is included in the second string', () => {
    arrInput = ['Noel', 'Ole']
    result = true

    expect(mutation(arrInput)).toBe(result)
  })
})
