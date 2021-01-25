const largestOfFour = (arr: number[][]): number[] => {
  return arr.map((a) => Math.max(...a))
}

export default { largestOfFour }
