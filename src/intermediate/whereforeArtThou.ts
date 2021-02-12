type CollectionName = {
  first?: string
  last?: string | null
}

type CollectionFruit = {
  apple?: number
  bat?: number
  cookie?: number
}

type CollectionAlphabet = {
  a?: number
  b?: number
  c?: number
}

export type CustomType = CollectionName | CollectionFruit | CollectionAlphabet

const whatIsInAName = (
  collection: CustomType[],
  source: CustomType
): CustomType[] => {
  const sourceKeys = Object.keys(source)

  return collection.filter((obj) => {
    return sourceKeys.every((key) => {
      return obj.hasOwnProperty(key) && obj[key] === source[key]
    })
  })
}

export default { whatIsInAName }
