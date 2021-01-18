const convertToRoman = (num: number): string => {
  const romanNumeralMapArr: string[] = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ]
  const numericalValueMapArr: number[] = [
    1000,
    900,
    500,
    400,
    100,
    90,
    50,
    40,
    10,
    9,
    5,
    4,
    1,
  ]

  let roman: string[] = []

  if (num > 3999) {
    throw new Error('The maximum number for this conversion is 3999')
  }

  numericalValueMapArr.map((n, idx) => {
    while (n <= num) {
      roman.push(romanNumeralMapArr[idx])
      num -= n
    }
  })

  return roman.join('')
}

export default { convertToRoman }
