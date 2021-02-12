import diffTwoArrays, { InputArray } from '../../src/intermediate/diffTwoArrays'

describe('DiffTwoArrays', () => {
  describe('diffArray()', () => {
    let inputArr1: InputArray
    let inputArr2: InputArray
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
  })
})
