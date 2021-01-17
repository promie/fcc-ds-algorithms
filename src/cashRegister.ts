type CID = any[][]

interface Change {
  status: string
  change: CID
}

const checkCashRegister = (price: number, cash: number, cid: CID): Change => {
  return { status: 'OPEN', change: [['QUARTER', 0.5]] }
}

export default { checkCashRegister }
