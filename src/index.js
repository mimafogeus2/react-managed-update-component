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
      if (testsObject[key] === true) {
        return this.compareValues(currentObj[key], nextObj[key])
      }
      if (testsObject[key].constructor.name === 'Function') { return testsObject[key](currentObj[key], nextObj[key]) }
      throw new Error('The value of a getShouldUpdateRelevantKeys object should be either boolean or function.')
    })
  }
  compareValues(curr, next) {
    return this.shouldUpdateComparator ? this.shouldUpdateComparator(curr, next) : curr !== next
  }
}

export default ManagedUpdateComponent
