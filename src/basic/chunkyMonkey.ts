const chunkArrayInGroups = (
  arr: string[] | number[],
  size: number
): any[][] => {
  const group = []

  while (arr.length > 0) {
    group.push(arr.splice(0, size))
  }

  return group
}

export default { chunkArrayInGroups }
