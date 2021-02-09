export type InputArray = number[] | string[]
export type Result = any[]

const frakenSplice = (
  arr1: InputArray,
  arr2: InputArray,
  n: number
): Result => {
  let combinedArrays = arr2.slice()
  combinedArrays.splice(n, 0, ...arr1)
  return combinedArrays
}

export default { frakenSplice }
