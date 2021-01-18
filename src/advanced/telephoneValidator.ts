const telephoneCheck = (str: string): boolean => {
  const re = /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/

  return re.test(str)
}

export default { telephoneCheck }
