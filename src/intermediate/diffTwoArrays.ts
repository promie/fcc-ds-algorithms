export type InputArray = number[] | string[]

const diffArray = (arr1: InputArray, arr2: InputArray): any[] => {
  return arr1.filter((x) => arr2.indexOf(x) === -1)
}

export default { diffArray }
