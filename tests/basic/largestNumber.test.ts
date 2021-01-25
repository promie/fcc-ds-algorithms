import largestNumber from '../../src/basic/largestNumber'

describe.only('largestNumber', () => {
  describe('largestOfFour()', () => {
    let inputArr: number[][]
    let result: number[]

    it('returns a new array where it contains the largest numbers in the input array', () => {
      inputArr = [
        [13, 27, 18, 26],
        [4, 5, 1, 3],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1],
      ]
      result = [27, 5, 39, 1001]

      expect(largestNumber.largestOfFour(inputArr)).toEqual(result)
    })

    it('returns a new array where it contains the largest numbers in the input array', () => {
      inputArr = [
        [4, 9, 1, 3],
        [13, 35, 18, 26],
        [32, 35, 97, 39],
        [1000000, 1001, 857, 1],
      ]
      result = [9, 35, 97, 1000000]

      expect(largestNumber.largestOfFour(inputArr)).toEqual(result)
    })

    it('returns a new array where it contains the largest numbers in the input array', () => {
      inputArr = [
        [17, 23, 25, 12],
        [25, 7, 34, 48],
        [4, -10, 18, 21],
        [-72, -3, -17, -10],
      ]
      result = [25, 48, 21, -3]

      expect(largestNumber.largestOfFour(inputArr)).toEqual(result)
    })
  })
})
