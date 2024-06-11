export default function sortBy (name, desc) {
  const fn = typeof name === 'function' ? name : x => x[name]
  const parent = typeof this === 'function' ? this : null
  const direction = desc ? -1 : 1
  sortFunc.thenBy = sortBy
  return sortFunc

  function sortFunc (a, b) {
    return (parent && parent(a, b)) || direction * compare(a, b, fn) || 0
  }

  function compare (a, b, fn) {
    const va = fn(a)
    const vb = fn(b)
    return va < vb ? -1 : va > vb ? 1 : 0
  }
}
