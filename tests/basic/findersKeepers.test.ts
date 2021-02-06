import FindersKeepers from '../../src/basic/findersKeepers'

type Result = number | undefined

describe('FindersKeepers', () => {
  describe('findElement()', () => {

    let arrInput: number[]
    let funcInput: Function
    let result: Result 

    it('returns the first even number from an array of numbers', () => {
      arrInput = [1, 3, 5, 8, 9, 10]
      funcInput = function (num:number) {
        return num % 2 === 0
      }
      result = 8

      expect(FindersKeepers.findElement(arrInput, funcInput)).toBe(result)

    })

    it('returns undefined if a function has no even number', () => {
      arrInput = [1, 3, 5, 9]
      funcInput = function (num:number) {
        return num % 2 === 0
      }
      result = undefined

      expect(FindersKeepers.findElement(arrInput, funcInput)).toBe(result)
    })
  })
})