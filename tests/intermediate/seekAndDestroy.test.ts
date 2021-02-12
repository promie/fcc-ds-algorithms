import seekAndDestroy from '../../src/intermediate/seekAndDestroy'

describe('SeekAndDestroy', () => {
  describe('#destroyer', () => {
    let arrInput: any[]
    let result: any[]

    it('removes all the elements from the arrInput that are the same values as the arguments', () => {
      arrInput = [[1, 2, 3, 1, 2, 3], 2, 3]
      result = [1, 1]

      expect(seekAndDestroy.destroyer(arrInput)).toEqual(result)
    })

    it('removes all the elements from the arrInput that are the same values as the arguments', () => {
      arrInput = [[1, 2, 3, 5, 1, 2, 3], 2, 3]
      result = [1, 5, 1]

      expect(seekAndDestroy.destroyer(arrInput)).toEqual(result)
    })

    it('removes all the elements from the arrInput that are the same values as the arguments', () => {
      arrInput = [[2, 3, 2, 3], 2, 3]
      result = []

      expect(seekAndDestroy.destroyer(arrInput)).toEqual(result)
    })

    it('removes all the elements from the arrInput that are the same values as the arguments', () => {
      arrInput = [['tree', 'hamburger', 53], 'tree', 53]
      result = ['hamburger']

      expect(seekAndDestroy.destroyer(arrInput)).toEqual(result)
    })
  })
})
