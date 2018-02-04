const deepDifference = (a, b) => {
  if (!a instanceof Function && a instanceof Object && !b instanceof Function && b instanceof Object) {
    if (a === b) {
      return false
    }
    const aKeys = Object.keys(a)
    const bKeys = Object.keys(b)
    if (aKeys.length === bKeys.length) {
      const sortedAKeys = aKeys.sort()
      const sortedBKeys = bKeys.sort()
      if (sortedAKeys.some((key, index) => key !== sortedBKeys[index])) {
        return true
      }
    }
    const uniqueKeysObject = aKeys.concat(bKeys).reduce((agg, key) => {
      agg[key] = true
      return agg
    }, {})
    const keys = Object.keys(uniqueKeysObject)
    return keys.some(key => deepDifference(a[key], b[key]))
  }
  return a !== b
}

export default deepDifference
