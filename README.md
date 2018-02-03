# react-managed-update-component
A convenient, configuration-based, way to manage your React component's `shouldComponentUpdate`.

## Installation
**react-managed-update-component** is available as an NPM package. Simply run `npm install react-managed-update-component` and start using it :)

## What is it?
**react-managed-update-component** allows you to easily configure which props and which fields of the state should trigger a render when changed, and how to detect this change.

Instead of writing lengthy conditions and with sometimes complicated logic, you'll get to implement one or two functions - `getShouldComponentUpdatePropsDefinition` and `getShouldComponentUpdateStateDefinition`, each returning an object that maps field names to wether they should be checked in `shouldComponentUpdate` and, if needed, how.

So, instead of this:
```javascript
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.numberOne !== nextState.numberOne
    || !this.state.someDataStructure.customEquals(nextState.someDataStructure)
    || this.props.stringTwo !== nextProps.stringTo
    || !deepEqual(this.props.objectThree, nextProps.objectThree)
  }
```
You get this:
```javascript
  getShouldComponentUpdateStateDefinition() {
    return {
      numberOne: true,
      someDataStructure: (a, b) => !a.customEquals(b)
    }
  }
  getShouldComponentUpdatePropsDefinition() {
    return {
      stringTwo: true,
      objectThree: true
    }
  }
```

By default, react-managed-update-component provides **value based**, **deep**, **optimized** comparison:
- **value based** - Changes in an object's values - not in the object's reference - will decide if a re-render is necessary.
- **deep** - Changes in nested objects will also be detected, no matter the depth.
- **optimized** - This code wouldn't run if the object's reference doesn't change or if the the object's keys were changed.

If you'd like to compare a specific in any other way - Check specific fields of object, check if a state/prop variable changed to a specific value, do a shallow comparison or run any other custom logic to decide if an update is necessary, you can **provide your own comparison functions, per key**, instead.

You can also **override the default comparator function** by writing your own. It should return a truthy value if the relationship between `currentValue` and `nextValue` should update the component, and a falsy value otherwise.
```javascript
shouldUpdateComparator(currentValue, nextValue) {
  const shouldUpdate = ...comparisonLogic...
  return shouldUpdate
}
```

## Why?
- An easy way to encourage implementations of `shouldComponentUpdate` with more control and possible efficiency than `React.PureComponent`.
- Readability.

## Writing a react-managed-update-component
```javascript
  import ManagedUpdateComponent from 'react-managed-update-component'

  class SuperDuperNewComponent extends ManagedUpdateComponent {
    getShouldComponentPropsDefinition() => {
      return {
        strictEqualityProp: true,
        deepEqualityProp: (a, b) => !deepEqual(a, b),
        ignoreThisProp: false // not necessary, here for demonstration
      }
    }
    getShouldComponentStateDefinition() => {
      return {
        strictEqualityField: true,
        customComparisonField: (a, b) => myCustomFunction(a, b),
        ignoreThisField: false // not necessary, here for demonstration
      }
    }
  }
```
- Your component should **extend `ManagedUpdateComponent`** instead of `React.Component` or `React.PureComponent`:

- You'll **have** to implement **at least one** of the definition functions - `getShouldComponentUpdatePropsDefinition` and `getShouldComponentUpdateStateDefinition`. If you won't implement at least one of these functions, you'll get an error.

- Each definition field can have the following values:
`true` - If this field is an object, deep, value-based comparison will decide if it has changed. If it's not an object, strict non-equality will be checked.
`false` - This field **doesn't affect** shouldComponentUpdate.
(This is the behavior of fields that are not added to the definition. You shouldn't use this when manually typing, but it's convenient for debugging or when dinamically generating the definition object)
`function(current, next) => <boolean>shouldTriggerComponentUpdate` - **custom function**. It should accept two variables - the current value and the next one, and return a truthy value if a re-render is required.

## Contribute
clone this repository, run `npm run` and go to http://localhost:8080/ to develop over the provided example.

## Credits
**react-managed-update-component** is built over **Lindgr3n's** awesome and recommended  [react-npm-component-boilerplate](https://github.com/lindgr3n/react-npm-component-boilerplate).

## License
MIT
