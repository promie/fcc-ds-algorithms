const factorialize = (num: number): number => {
  return num > 0
    ? Array.from(Array(num), (_, x) => x + 1).reduce((a, b) => a * b)
    : 1
}

export default factorialize
