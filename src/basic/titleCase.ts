const titleCase = (str: string): string => {
  return str
    .split(' ')
    .map((txt) => `${txt[0].toUpperCase()}${txt.slice(1).toLowerCase()}`)
    .join(' ')
}

export default titleCase
