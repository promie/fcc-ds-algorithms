import sliceAndSplice from '../../src/basic/sliceAndSplice'
import { InputArray, Result } from '../../src/basic/sliceAndSplice'

describe.only('SliceAndSplice', () => {
  let inputArrOne: InputArray
  let inputArrTwo: InputArray
  let inputIndex: number
  let result: Result

  describe('frakenSplice()', () => {
    it('should copy each element of the first array into the second array in order of the first index', () => {
      inputArrOne = [1, 2, 3]
      inputArrTwo = [4, 5]
      inputIndex = 1
      result = [4, 1, 2, 3, 5]

      expect(
        sliceAndSplice.frakenSplice(inputArrOne, inputArrTwo, inputIndex)
      ).toEqual(result)
    })

    it('should copy each element of the first array into the second array in order of the first index', () => {
      inputArrOne = [1, 2]
      inputArrTwo = ['a', 'b']
      inputIndex = 1
      result = ['a', 1, 2, 'b']

      expect(
        sliceAndSplice.frakenSplice(inputArrOne, inputArrTwo, inputIndex)
      ).toEqual(result)
    })

    it('should copy each element of the first array into the second array in order of the first index', () => {
      inputArrOne = ['claw', 'tentacle']
      inputArrTwo = ['head', 'shoulders', 'knees', 'toes']
      inputIndex = 2
      result = ['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes']

      expect(
        sliceAndSplice.frakenSplice(inputArrOne, inputArrTwo, inputIndex)
      ).toEqual(result)
    })
  })
})
