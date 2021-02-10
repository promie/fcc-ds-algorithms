import chunkyMonkey from '../../src/basic/chunkyMonkey'

describe('ChunkyMonkey', () => {
  let arrayInput: string[] | number[]
  let sizeInput: number
  let result: any[][]

  describe('chunkArrayInGroups()', () => {
    it('splits an array into groups of twos and returns a two-dimensional array', () => {
      arrayInput = ['a', 'b', 'c', 'd']
      sizeInput = 2
      result = [
        ['a', 'b'],
        ['c', 'd'],
      ]

      expect(chunkyMonkey.chunkArrayInGroups(arrayInput, sizeInput)).toEqual(
        result
      )
    })

    it('splits an array into groups of twos and returns a two-dimensional array', () => {
      arrayInput = [0, 1, 2, 3, 4, 5]
      sizeInput = 2
      result = [
        [0, 1],
        [2, 3],
        [4, 5],
      ]

      expect(chunkyMonkey.chunkArrayInGroups(arrayInput, sizeInput)).toEqual(
        result
      )
    })

    it('splits an array into groups of twos and returns a two-dimensional array', () => {
      arrayInput = [0, 1, 2, 3, 4, 5]
      sizeInput = 3
      result = [
        [0, 1, 2],
        [3, 4, 5],
      ]

      expect(chunkyMonkey.chunkArrayInGroups(arrayInput, sizeInput)).toEqual(
        result
      )
    })

    it('splits an array into groups of fours and returns a two-dimensional array', () => {
      arrayInput = [0, 1, 2, 3, 4, 5]
      sizeInput = 4
      result = [
        [0, 1, 2, 3],
        [4, 5],
      ]

      expect(chunkyMonkey.chunkArrayInGroups(arrayInput, sizeInput)).toEqual(
        result
      )
    })

    it('splits an array into groups of threes and returns a two-dimensional array', () => {
      arrayInput = [0, 1, 2, 3, 4, 5, 6]
      sizeInput = 3
      result = [[0, 1, 2], [3, 4, 5], [6]]

      expect(chunkyMonkey.chunkArrayInGroups(arrayInput, sizeInput)).toEqual(
        result
      )
    })

    it('splits an array into groups of fours and returns a two-dimensional array', () => {
      arrayInput = [0, 1, 2, 3, 4, 5, 6, 7, 8]
      sizeInput = 4
      result = [[0, 1, 2, 3], [4, 5, 6, 7], [8]]

      expect(chunkyMonkey.chunkArrayInGroups(arrayInput, sizeInput)).toEqual(
        result
      )
    })

    it('splits an array into groups of twos and returns a two-dimensional array', () => {
      arrayInput = [0, 1, 2, 3, 4, 5, 6, 7, 8]
      sizeInput = 2
      result = [[0, 1], [2, 3], [4, 5], [6, 7], [8]]

      expect(chunkyMonkey.chunkArrayInGroups(arrayInput, sizeInput)).toEqual(
        result
      )
    })
  })
})
