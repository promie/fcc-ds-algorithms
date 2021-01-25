import truncateString from '../../src/basic/truncateString'

describe('truncateString()', () => {
  let inputStr: string
  let inputNum: number
  let result: string

  it('should return the full string if the length of the inputStr is not longer than than the inputNum', () => {
    inputStr = 'A-tisket a-tasket A green and yellow basket'
    inputNum = inputStr.length
    result = 'A-tisket a-tasket A green and yellow basket'

    expect(truncateString(inputStr, inputNum)).toBe(result)
  })

  it('should return the shorten string if the length of the inputStr is longer than than the inputNum', () => {
    inputStr = 'Peter Piper picked a peck of pickled peppers'
    inputNum = 11
    result = 'Peter Piper...'

    expect(truncateString(inputStr, inputNum)).toBe(result)
  })

  it('should still return the full string even if the length of the inputNumber is greater than than the inputStr', () => {
    inputStr = 'A-tisket a-tasket A green and yellow basket'
    inputNum = inputStr.length + 2
    result = 'A-tisket a-tasket A green and yellow basket'

    expect(truncateString(inputStr, inputNum)).toBe(result)
  })

  it('should return the shorten string if the length of the inputStr is longer than than the inputNum', () => {
    inputStr = 'A-'
    inputNum = 1
    result = 'A...'

    expect(truncateString(inputStr, inputNum)).toBe(result)
  })

  it('should return the shorten string if the length of the inputStr is longer than than the inputNum', () => {
    inputStr = 'Absolutely Longer'
    inputNum = 2
    result = 'Ab...'

    expect(truncateString(inputStr, inputNum)).toBe(result)
  })
})
