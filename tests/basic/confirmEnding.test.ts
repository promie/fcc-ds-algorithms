import confirmEnding from '../../src/basic/confirmEnding'

describe('confirmEnding()', () => {
  let inputStr: string
  let inputTarget: string
  let result: boolean

  it('returns true if the target ending word is included in the string', () => {
    inputStr = 'Bastian'
    inputTarget = 'n'
    result = true

    expect(confirmEnding(inputStr, inputTarget)).toBe(result)
  })

  it('returns true if the target ending word is included in the string', () => {
    inputStr = 'Congratulation'
    inputTarget = 'on'
    result = true

    expect(confirmEnding(inputStr, inputTarget)).toBe(result)
  })

  it('returns false if the target ending word is not included in the string', () => {
    inputStr = 'Connor'
    inputTarget = 'n'
    result = false

    expect(confirmEnding(inputStr, inputTarget)).toBe(result)
  })

  it('returns false if the target ending word is not included in the string', () => {
    inputStr =
      'Walking on water and developing software from a specification are easy if both are frozen'
    inputTarget = 'specification'
    result = false

    expect(confirmEnding(inputStr, inputTarget)).toBe(result)
  })

  it('returns true if the target ending word is included in the string', () => {
    inputStr = 'He has to give me a new name'
    inputTarget = 'name'
    result = true

    expect(confirmEnding(inputStr, inputTarget)).toBe(result)
  })

  it('returns true if the target ending word is included in the string', () => {
    inputStr = 'Open sesame'
    inputTarget = 'same'
    result = true

    expect(confirmEnding(inputStr, inputTarget)).toBe(result)
  })

  it('returns false if the target ending word is not included in the string', () => {
    inputStr = 'Open sesame'
    inputTarget = 'sage'
    result = false

    expect(confirmEnding(inputStr, inputTarget)).toBe(result)
  })

  it('returns false if the target ending word is not included in the string', () => {
    inputStr = 'Open sesame'
    inputTarget = 'game'
    result = false

    expect(confirmEnding(inputStr, inputTarget)).toBe(result)
  })

  it('returns false if the target ending word is not included in the string', () => {
    inputStr =
      'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing'
    inputTarget = 'mountain'
    result = false

    expect(confirmEnding(inputStr, inputTarget)).toBe(result)
  })

  it('returns true if the target ending word is included in the string', () => {
    inputStr = 'Abstraction'
    inputTarget = 'action'
    result = true

    expect(confirmEnding(inputStr, inputTarget)).toBe(result)
  })
})
