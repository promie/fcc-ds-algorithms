import sumAll from '../../src/intermediate/sumAll'

describe.only('sumAll()', () => {
  let arrInput: [number, number]
  let result: number

  it('sums all the numbers in ranges from 1 to 4', () => {
    arrInput = [1, 4]
    result = 10

    expect(sumAll(arrInput)).toBe(result)
  })

  it('sorts the array in order and sums all the numbers in ranges from 1 to 4', () => {
    arrInput = [4, 1]
    result = 10

    expect(sumAll(arrInput)).toBe(result)
  })

  it('sums all the numbers in ranges from 5 to 10', () => {
    arrInput = [5, 10]
    result = 45

    expect(sumAll(arrInput)).toBe(result)
  })

  it('sorts the array in order and sums all the numbers in ranges from 5 to 10', () => {
    arrInput = [10, 5]
    result = 45

    expect(sumAll(arrInput)).toBe(result)
  })
})
