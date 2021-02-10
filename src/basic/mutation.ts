const mutation = (arr: string[]): boolean => {
  const firstWord = arr[0].toLowerCase()
  const secondWord = arr[1].toLowerCase()

  const sortedFirstWord = firstWord.split('')
  const sortedSecondWord = secondWord.split('')

  const filteredWords = sortedSecondWord.filter((word) =>
    sortedFirstWord.includes(word)
  )

  return secondWord === filteredWords.join('')
}

export default mutation
