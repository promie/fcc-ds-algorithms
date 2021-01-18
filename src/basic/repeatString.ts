const repeatStringNumTimes = (str: string, num: number): string => {
  let result = ''

  for (let i = 0; i < num; i++) {
    result += str
  }

  return result
}

export default { repeatStringNumTimes }
