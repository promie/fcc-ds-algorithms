const getIndexToIns = (arr: number[], num: number): number => {
  arr.push(num)

  const sorted = arr.sort((a, b) => a - b)

  return sorted.indexOf(num)
}

export default { getIndexToIns }
