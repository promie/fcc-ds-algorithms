const destroyer = (arr: any[]): any[] => {
  const inputArray = arr[0]
  const args = [arr[1], arr[2]]

  return inputArray.filter((val: number | string) => !args.includes(val))
}

export default { destroyer }
