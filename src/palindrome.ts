const process = (str: string): boolean => {
  const normalizeStr = str.replace(/[^a-zA-Z ]/g, '')
  const reversedString = normalizeStr.split('').reverse().join('')

  return normalizeStr === reversedString
}

export default { process }
