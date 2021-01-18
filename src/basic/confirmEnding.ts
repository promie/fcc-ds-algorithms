const confirmEnding = (str: string, target: string): boolean => {
  const ending = str.slice(str.length - target.length)

  return target === ending
}

export default confirmEnding
