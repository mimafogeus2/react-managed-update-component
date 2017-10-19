# react-managed-update-component
A convenient, configuration-based, way to manage your React component's `shouldComponentUpdate`.

## What is it?
**react-managed-update-component** allows you to easily configure which props and which fields of the state should trigger a render when changed, and how to detect this change.

Instead of writing lengthy conditions and with sometimes complicated logic, you'll get to implement one or two functions - `getShouldComponentUpdatePropsDefinition` and `getShouldComponentUpdateStateDefinition`, each returning an object that maps field names to wether they should be checked in `shouldComponentUpdate` and, if needed, how.

So, instead of this:
```javascript
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.numberOne !== nextState.numberOne
    || !this.state.someDataStructure.equals(nextState.someDataStructure)
    || this.props.stringTwo !== nextProps.stringTo
    || !deepEqual(this.props.objectThree, nextProps.objectThree)
  }
```
You get this:
```javascript
  getShouldComponentUpdateStateDefinition() => {
    numberOne: true,
    someDataStructure: (a, b) => a.equals(b)
  }
  getShouldComponentUpdatePropsDefinition() => {
    stringTwo: true,
    objectThree: deepEqual
  }
```

## Why?
- An easy way to encourage implementations of `shouldComponentUpdate` with more control and possible efficiency than `React.PureComponent`.
- Readability.

## Writing a react-managed-update-component
```javascript
  import ManagedUpdateComponent from 'react-managed-update-component'

  class SuperDuperNewComponent extends ManagedUpdateComponent {
    getShouldComponentPropsDefinition() => ({
      strictEqualityProp: true,
      deepEqualityProp: (a, b) => !deepEqual(a, b),
      ignoreThisProp: false // not necessary, here for demonstration
    })
    getShouldComponentStateDefinition() => ({
      strictEqualityField: true,
      customComparisonField: (a, b) => !myCustomFunction(a, b),
      ignoreThisField: false // not necessary, here for demonstration
    })
  }
```
- Your component should **extend `ManagedUpdateComponent`** instead of `React.Component` or `React.PureComponent`:

- You'll **have** to implement **at least one** of the definition functions - `getShouldComponentUpdatePropsDefinition` and `getShouldComponentUpdateStateDefinition`. If you won't implement this, you'll get an error.

- Each definition field can have the following values:
`true` - If the **current value !== the next value**, re-render (the same way `PureComponent` checks all fields)
`false` - This field **doesn't affect** shouldComponentUpdate.
(This is the behavior of fields that are not added to the definition. You shouldn't use this when manually typing, but it's convenient for debugging or when dinamically generating the definition object)
`function(current, next) -> shouldUpdate` - **custom function**. It should accept two variables - the current value and the next one, and return a truthy value if a re-render is required.

## Contribute
clone this repository, run `npm run` and go to http://localhost:8080/ to develop over the provided example.

## Credits
**react-managed-update-component** is built over **Lindgr3n's** awesome and recommended  [react-npm-component-boilerplate](https://github.com/lindgr3n/react-npm-component-boilerplate).

## License
MIT
