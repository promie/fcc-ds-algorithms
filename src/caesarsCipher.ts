const rot13 = (str: string): string => {
  let accumulator = ''

  str
    .toUpperCase()
    .split('')
    .map((letter) => {
      const asciiCode = letter.charCodeAt(0)
      const A = 65
      const M = 77
      const Z = 90

      if (asciiCode >= A && asciiCode <= Z) {
        asciiCode > M
          ? (accumulator += String.fromCharCode(asciiCode - 13))
          : (accumulator += String.fromCharCode(asciiCode + 13))
      } else {
        accumulator += letter
      }
    })

  return accumulator
}

export default { rot13 }
