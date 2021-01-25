import factorialize from '../../src/basic/factorialize'

describe('factorialize()', () => {
  let inputNum: number
  let result: number

  it('returns factorize number', () => {
    inputNum = 5
    result = 120

    expect(factorialize(inputNum)).toBe(result)
  })

  it('returns factorize number', () => {
    inputNum = 10
    result = 3628800

    expect(factorialize(inputNum)).toBe(result)
  })

  it('returns factorize number', () => {
    inputNum = 20
    result = 2432902008176640000

    expect(factorialize(inputNum)).toBe(result)
  })

  it('returns factorize number', () => {
    inputNum = 0
    result = 1

    expect(factorialize(inputNum)).toBe(result)
  })
})
