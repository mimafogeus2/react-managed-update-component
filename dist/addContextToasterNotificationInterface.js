(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["react-context-toaster"] = factory();
	else
		root["react-context-toaster"] = factory();
})(this, function() {
return webpackJsonpreact_context_toaster([2],{

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__consts__ = __webpack_require__(7);
/* harmony export (immutable) */ __webpack_exports__["default"] = addContextToasterNotificationInterface;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function addContextToasterNotificationInterface(WrappedComponent) {
  // eslint-disable-next-line react/display-name
  return __WEBPACK_IMPORTED_MODULE_2_create_react_class___default()({
    componentWillMount: function componentWillMount() {
      WrappedComponent[__WEBPACK_IMPORTED_MODULE_3__consts__["a" /* CONTEXT_TOAST_NOTIFY_FUNC_NAME */]] = this.context[__WEBPACK_IMPORTED_MODULE_3__consts__["a" /* CONTEXT_TOAST_NOTIFY_FUNC_NAME */]];
    },
    render: function render() {
      var propsWithToastFunc = Object.assign({}, this.props, _defineProperty({}, __WEBPACK_IMPORTED_MODULE_3__consts__["a" /* CONTEXT_TOAST_NOTIFY_FUNC_NAME */], this.context[__WEBPACK_IMPORTED_MODULE_3__consts__["a" /* CONTEXT_TOAST_NOTIFY_FUNC_NAME */]]));

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WrappedComponent, propsWithToastFunc);
    },

    contextTypes: _defineProperty({}, __WEBPACK_IMPORTED_MODULE_3__consts__["a" /* CONTEXT_TOAST_NOTIFY_FUNC_NAME */], __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired)
  });
}

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTEXT_TOAST_NOTIFY_FUNC_NAME; });
var CONTEXT_TOAST_NOTIFY_FUNC_NAME = 'popToast';

/* unused harmony default export */ var _unused_webpack_default_export = ({ CONTEXT_TOAST_NOTIFY_FUNC_NAME: CONTEXT_TOAST_NOTIFY_FUNC_NAME });

/***/ })

},[25]);
});