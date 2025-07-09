function groupAnagrams(strs) {
  const res = {}
  for (let s of strs) {
    const count = new Array(26).fill(0)
    for (let c of s) {
      count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
    }
    if (!res[count.join(',')]) {
      res[count.join(',')] = []
    }

    res[count.join(',')].push(s)
  }
  return Object.values(res)
}

export default groupAnagrams
