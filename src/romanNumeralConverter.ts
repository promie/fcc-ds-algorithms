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

  for (let i = 0; i < numericalValueMapArr.length; i++) {
    while (numericalValueMapArr[i] <= num) {
      roman.push(romanNumeralMapArr[i])
      num -= numericalValueMapArr[i]
    }
  }

  return roman.join('')
}

export default { convertToRoman }
