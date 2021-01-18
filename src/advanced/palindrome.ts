const normalise = (str: string): string => {
  const normaliseStr = str.replace(/[^a-zA-Z0-9 ]/g, '')
  const textWithoutSpaces = normaliseStr.replace(/\s/g, '')

  return textWithoutSpaces.toLowerCase()
}

const process = (str: string): boolean => {
  const normaliseStr = normalise(str)
  const reversedString = normaliseStr.split('').reverse().join('')

  return normaliseStr === reversedString
}

export default { process, normalise }
