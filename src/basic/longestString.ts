const findLongestWordLength = (str: string): number => {
  return Math.max(...str.split(' ').map((s) => s.length))
}

export default { findLongestWordLength }
