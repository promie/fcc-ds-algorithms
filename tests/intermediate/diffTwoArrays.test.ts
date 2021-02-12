import diffTwoArrays from '../../src/intermediate/diffTwoArrays'

describe.only('DiffTwoArrays', () => {
  describe('diffArray()', () => {
    let inputArr1: any[]
    let inputArr2: any[]
    let result: any[]

    it('returns a new array with the differences in items', () => {
      inputArr1 = [
        'diorite',
        'andesite',
        'grass',
        'dirt',
        'pink wool',
        'dead shrub',
      ]
      inputArr2 = ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
      result = ['pink wool']

      expect(diffTwoArrays.diffArray(inputArr1, inputArr2)).toEqual(result)
    })

    it('returns an empty array if there are no differences in two input arrays', () => {
      inputArr1 = ['andesite', 'grass', 'dirt', 'dead shrub']
      inputArr2 = ['andesite', 'grass', 'dirt', 'dead shrub']
      result = []

      expect(diffTwoArrays.diffArray(inputArr1, inputArr2)).toEqual(result)
    })

    it('returns a new array with the differences in items', () => {
      inputArr1 = [1, 2, 3, 5]
      inputArr2 = [1, 2, 3, 4, 5]
      result = [4]

      expect(diffTwoArrays.diffArray(inputArr1, inputArr2)).toEqual(result)
    })

    it('returns a new array with the differences in items', () => {
      inputArr1 = [1, 'calf', 3, 'piglet']
      inputArr2 = [1, 'calf', 3, 4]
      result = ['piglet', 4]

      expect(diffTwoArrays.diffArray(inputArr1, inputArr2)).toEqual(result)
    })

    it('returns a new array with the differences in items', () => {
      inputArr1 = []
      inputArr2 = ['snuffleupagus', 'cookie monster', 'elmo']
      result = ['snuffleupagus', 'cookie monster', 'elmo']

      expect(diffTwoArrays.diffArray(inputArr1, inputArr2)).toEqual(result)
    })

    it('returns a new array with the differences in items', () => {
      ;(inputArr1 = [1, 'calf', 3, 'piglet']), [7, 'filly']
      inputArr2 = [7, 'filly']
      result = [1, 'calf', 3, 'piglet', 7, 'filly']

      expect(diffTwoArrays.diffArray(inputArr1, inputArr2)).toEqual(result)
    })
  })
})
