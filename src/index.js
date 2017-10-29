import React from 'react'

class ManagedUpdateComponent extends React.Component {
  constructor(props) {
    super(props)
    if (!this.getShouldComponentUpdatePropsDefinition && !this.getShouldComponentUpdateStateDefinition) {
      throw new Error(`getShouldComponentUpdatePropsDefinition and getShouldComponentUpdateStateDefinition are not implemented in React Component "${this.constructor.name}". Implement at least one of them.`)
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    const propsDefinition = this.getShouldComponentUpdatePropsDefinition
      ? this.getShouldComponentUpdatePropsDefinition()
      : []
    const stateDefinition = this.getShouldComponentUpdateStateDefinition
      ? this.getShouldComponentUpdateStateDefinition()
      : []
    return this.shouldUpdateByObject(this.props, nextProps, propsDefinition)
      && this.shouldUpdateByObject(this.state, nextState, stateDefinition)
  }
  shouldUpdateByObject(currentObj, nextObj, testsObject) {
    return Object.keys(testsObject).every(key => {
      if (testsObject[key] === false) { return true }
      if (testsObject[key] === true) { return isDifferentWithDeepComparison(currentObj, nextObj[key]) }
      if (testsObject[key].constructor.name === 'Function') { return testsObject[key](currentObj[key], nextObj[key]) }
      throw new Error('The value of a getShouldUpdateRelevantKeys object should be either boolean or function.')
    })
  }
}

function isDifferentWithDeepComparison(a, b) {
  if (a instanceof Object && b instanceof Object) {
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
    return keys.some(key => isDifferentWithDeepComparison(a[key], b[key]))
  }
  return a !== b
}

export default ManagedUpdateComponent
