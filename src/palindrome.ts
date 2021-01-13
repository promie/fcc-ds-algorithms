const normalise = (str: string): string => {
  const normaliseStr = str.replace(/[^a-zA-Z ]/g, '')
  const textWithoutSpaces = normaliseStr.replace(' ', '')

  return textWithoutSpaces
}

const process = (str: string): boolean => {
  const normaliseStr = normalise(str)
  const reversedString = normaliseStr.split('').reverse().join('')

  return normaliseStr === reversedString
}

export default { process, normalise }
