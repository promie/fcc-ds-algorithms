const rot13 = (str: string): string => {
  const alphabet: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]

  let accumulator: string

  accumulator = ''

  str.split('').map((letter) => {
    if (alphabet.includes(letter)) {
      alphabet.indexOf(letter) > 11
        ? (accumulator += alphabet[alphabet.indexOf(letter) - 13])
        : (accumulator += alphabet[alphabet.indexOf(letter) + 13])
    } else {
      accumulator += letter
    }
  })

  return accumulator
}

export default { rot13 }
