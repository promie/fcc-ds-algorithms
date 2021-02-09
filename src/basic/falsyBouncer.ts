const bouncer = (arr: any[]): any[] => {
  return arr.filter((num) => !!num)
}

export default { bouncer }
