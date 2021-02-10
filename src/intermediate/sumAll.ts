const sumAll = (arr: [number, number]): number => {
  const sortedArray = arr.sort((a, b) => a - b)

  const startingNumb = sortedArray[0]
  const finishingNumb = sortedArray[1]

  const newArray = Array.from(
    { length: finishingNumb },
    (_, i) => i + startingNumb
  )

  return newArray.filter((num) => num <= finishingNumb).reduce((a, b) => a + b)
}

export default sumAll
