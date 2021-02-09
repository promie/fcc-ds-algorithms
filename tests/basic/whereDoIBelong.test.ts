import whereDoIBelong from '../../src/basic/whereDoIBelong'

describe('WhereDoIBelong', () => {
  let inputArr: number[]
  let num: number
  let result: number

  describe('getIndexToIns()', () => {
    it('returns the correct index of the input number from the array', () => {
      inputArr = [10, 20, 30, 40, 50]
      num = 35
      result = 3

      expect(whereDoIBelong.getIndexToIns(inputArr, num)).toBe(result)
    })

    it('returns the correct index of the input number from the array', () => {
      inputArr = [10, 20, 30, 40, 50]
      num = 30
      result = 2

      expect(whereDoIBelong.getIndexToIns(inputArr, num)).toBe(result)
    })

    it('returns the correct index of the input number from the array', () => {
      inputArr = [40, 60]
      num = 50
      result = 1

      expect(whereDoIBelong.getIndexToIns(inputArr, num)).toBe(result)
    })

    it('returns the correct index of the input number from the array', () => {
      inputArr = [3, 10, 5]
      num = 3
      result = 0

      expect(whereDoIBelong.getIndexToIns(inputArr, num)).toBe(result)
    })

    it('returns the correct index of the input number from the array', () => {
      inputArr = [5, 3, 20, 3]
      num = 5
      result = 2

      expect(whereDoIBelong.getIndexToIns(inputArr, num)).toBe(result)
    })
  })
})
