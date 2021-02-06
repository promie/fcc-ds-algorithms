type Result = number | undefined

const findElement = (arr: number[], func: Function): Result => {
  return arr.filter((num) => func(num))[0]
}

export default { findElement }