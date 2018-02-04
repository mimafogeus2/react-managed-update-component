require('./dist/manifest');
require('./dist/vendor');

const ReactManagedUpdateComponent = require('./dist/index').default
ReactManagedUpdateComponent.abstractDifference = require('./dist/abstractDifference').default
ReactManagedUpdateComponent.deepDifference = require('./dist/deepDifference').default

module.exports = ReactManagedUpdateComponent
