import cashRegister from '../../src/advanced/cashRegister'

describe.only('CashRegister', () => {
  describe('checkCashRegister()', () => {
    it('should return an object with the correct status and change', () => {
      const priceInput = 19.5
      const cashInput = 20
      const cidInput = [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.1],
        ['QUARTER', 4.25],
        ['ONE', 90],
        ['FIVE', 55],
        ['TEN', 20],
        ['TWENTY', 60],
        ['ONE HUNDRED', 100],
      ]

      const result = { status: 'OPEN', change: [['QUARTER', 0.5]] }

      expect(
        cashRegister.checkCashRegister(priceInput, cashInput, cidInput)
      ).toEqual(result)
    })

    it('should return an object with the correct status and change', () => {
      const priceInput = 3.26
      const cashInput = 100
      const cidInput = [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.1],
        ['QUARTER', 4.25],
        ['ONE', 90],
        ['FIVE', 55],
        ['TEN', 20],
        ['TWENTY', 60],
        ['ONE HUNDRED', 100],
      ]

      const result = {
        status: 'OPEN',
        change: [
          ['TWENTY', 60],
          ['TEN', 20],
          ['FIVE', 15],
          ['ONE', 1],
          ['QUARTER', 0.5],
          ['DIME', 0.2],
          ['PENNY', 0.04],
        ],
      }

      expect(
        cashRegister.checkCashRegister(priceInput, cashInput, cidInput)
      ).toEqual(result)
    })

    it('should return an object with the correct status and change', () => {
      const priceInput = 19.5
      const cashInput = 20
      const cidInput = [
        ['PENNY', 0.01],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0],
      ]

      const result = { status: 'INSUFFICIENT_FUNDS', change: [] }

      expect(
        cashRegister.checkCashRegister(priceInput, cashInput, cidInput)
      ).toEqual(result)
    })

    it('should return an object with the correct status and change', () => {
      const priceInput = 19.5
      const cashInput = 20
      const cidInput = [
        ['PENNY', 0.01],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 1],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0],
      ]

      const result = { status: 'INSUFFICIENT_FUNDS', change: [] }

      expect(
        cashRegister.checkCashRegister(priceInput, cashInput, cidInput)
      ).toEqual(result)
    })

    it('should return an object with the correct status and change', () => {
      const priceInput = 19.5
      const cashInput = 20
      const cidInput = [
        ['PENNY', 0.5],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0],
      ]

      const result = {
        status: 'CLOSED',
        change: [
          ['PENNY', 0.5],
          ['NICKEL', 0],
          ['DIME', 0],
          ['QUARTER', 0],
          ['ONE', 0],
          ['FIVE', 0],
          ['TEN', 0],
          ['TWENTY', 0],
          ['ONE HUNDRED', 0],
        ],
      }

      expect(
        cashRegister.checkCashRegister(priceInput, cashInput, cidInput)
      ).toEqual(result)
    })
  })
})
