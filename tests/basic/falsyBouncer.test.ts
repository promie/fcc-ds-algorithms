import falsyBouncer from '../../src/basic/falsyBouncer'

describe('FalsyBouncer', () => {
  let inputArr: any[]
  let result: any[]

  describe('bouncer()', () => {
    it('removes falsy values in the array', () => {
      inputArr = [7, 'ate', '', false, 9]
      result = [7, 'ate', 9]

      expect(falsyBouncer.bouncer(inputArr)).toEqual(result)
    })

    it('removes falsy values in the array', () => {
      inputArr = ['a', 'b', 'c']
      result = ['a', 'b', 'c']

      expect(falsyBouncer.bouncer(inputArr)).toEqual(result)
    })

    it('returns an empty array if all the values in the array are all falsy', () => {
      inputArr = [false, null, 0, NaN, undefined, '']
      result = []

      expect(falsyBouncer.bouncer(inputArr)).toEqual(result)
    })

    it('removes falsy values in the array', () => {
      inputArr = [null, NaN, 1, 2, undefined]
      result = [1, 2]

      expect(falsyBouncer.bouncer(inputArr)).toEqual(result)
    })
  })
})
