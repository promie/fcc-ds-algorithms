import titleCase from '../../src/basic/titleCase'

describe('titleCase()', () => {
  let strInput: string
  let result: string

  it('returns a title case for the input string', () => {
    strInput = "I'm a little tea pot"
    result = "I'm A Little Tea Pot"

    expect(titleCase(strInput)).toBe(result)
  })

  it('returns a title case for the input string', () => {
    strInput = 'sHoRt AnD sToUt'
    result = 'Short And Stout'

    expect(titleCase(strInput)).toBe(result)
  })

  it('returns a title case for the input string', () => {
    strInput = 'HERE IS MY HANDLE HERE IS MY SPOUT'
    result = 'Here Is My Handle Here Is My Spout'

    expect(titleCase(strInput)).toBe(result)
  })
})
