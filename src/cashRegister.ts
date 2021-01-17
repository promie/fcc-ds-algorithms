enum StatusEnum {
  INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS',
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

type CID = any[][]

interface Change {
  status: string
  change: CID
}

const currencyUnit: any = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  ONE_HUNDRED: 10000,
}

const checkCashRegister = (price: number, cash: number, cid: CID): Change => {
  let changeSum = cash * 100 - price * 100
  const changeSumCheck = changeSum
  let change: CID = []
  let status: string

  let cidSum = 0
  const filteredCid = cid.filter((elem) => elem[1] !== 0).reverse()

  filteredCid.forEach((elem) => {
    let curr = elem[0]
    let currSum = elem[1] * 100
    cidSum += currSum
    let amount = 0
    while (changeSum >= currencyUnit[curr] && currSum > 0) {
      amount += currencyUnit[curr]
      changeSum -= currencyUnit[curr]
      currSum -= currencyUnit[curr]
    }
    amount !== 0 && change.push([curr, amount / 100])
  })

  if (changeSum > 0) {
    status = StatusEnum.INSUFFICIENT_FUNDS
    change = []
  } else if (changeSum == 0 && changeSumCheck == cidSum) {
    status = StatusEnum.CLOSED
    change = cid
  } else {
    status = StatusEnum.OPEN
  }

  return { status, change }
}

export default { checkCashRegister }
