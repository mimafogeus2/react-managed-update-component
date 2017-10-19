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
return webpackJsonpreact_context_toaster([1],{

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ContextToast = function (_React$Component) {
  _inherits(ContextToast, _React$Component);

  function ContextToast(props) {
    _classCallCheck(this, ContextToast);

    var _this = _possibleConstructorReturn(this, (ContextToast.__proto__ || Object.getPrototypeOf(ContextToast)).call(this, props));

    if (!props.title && !props.children) {
      throw new Error('ContextToasts requires you to provide either a title, children or both.');
    }
    _this.onClickFunc = _this.onClickFunc.bind(_this);
    _this.state = { isVisible: false };
    return _this;
  }

  _createClass(ContextToast, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var showTimeoutId = setTimeout(function () {
        return _this2.setState({ isVisible: true });
      }, 0);
      var hideTimeoutId = setTimeout(function () {
        return _this2.setState({ isVisible: false });
      }, this.props.lifetime);
      var removeTimeoutId = setTimeout(this.props.removeToastFunc, this.props.lifetime + this.props.animationLength);
      this.setState({ timeoutIds: [showTimeoutId, hideTimeoutId, removeTimeoutId] });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.state.timeoutIds.forEach(function (tid) {
        clearTimeout(tid);
      });
    }
  }, {
    key: 'onClickFunc',
    value: function onClickFunc() {
      if (this.props.closeOnClick) {
        this.setState({ isVisible: false });
        setTimeout(this.props.removeToastFunc, this.props.animationLength);
      }
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      if (!this.props.title) {
        return null;
      }
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'h1',
        { className: 'ContextToaster__Toast__textContainer__title' },
        this.props.title
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var toastClassNames = __WEBPACK_IMPORTED_MODULE_0_classnames___default()((_classnames = {
        ContextToaster__Toast: true,
        'ContextToaster__Toast--visible': this.state.isVisible
      }, _defineProperty(_classnames, 'ContextToaster__Toast--' + this.props.type.toUpperCase(), !!this.props.type), _defineProperty(_classnames, this.props.className, !!this.props.className), _classnames));
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'li',
        { className: toastClassNames, onClick: this.onClickFunc },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'ContentToaster__Toast__iconContainer' }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'ContextToaster__Toast__textContainer' },
          this.getTitle(),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'ContextToaster__Toast__textContainer__textMessage' },
            this.props.children
          )
        )
      );
    }
  }]);

  return ContextToast;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

ContextToast.defaultProps = {
  animationLength: 200,
  closeOnClick: true,
  customClass: null,
  lifetime: 5000
};
ContextToast.propTypes = {
  animationLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node), __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node]),
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  closeOnClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  lifetime: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  title: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  removeToastFunc: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
  type: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};

/* harmony default export */ __webpack_exports__["a"] = (ContextToast);

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(51)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./contextToaster.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./contextToaster.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ContextToast__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__consts__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contextToaster_css__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contextToaster_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__contextToaster_css__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOAST_TYPES", function() { return TOAST_TYPES; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var INITIAL_STATE = {
  toasts: []
};
var DEFAULT_LIFETIME = 5000;
var DEFAULT_ANIMATION_LENGTH = 200;
var TOAST_TYPES = {
  ERROR: 'ERROR',
  NOTIFY: 'NOTIFY',
  SUCCESS: 'SUCCESS',
  WARN: 'WARN'
};

var ContextToaster = function (_React$Component) {
  _inherits(ContextToaster, _React$Component);

  function ContextToaster(props) {
    _classCallCheck(this, ContextToaster);

    var _this = _possibleConstructorReturn(this, (ContextToaster.__proto__ || Object.getPrototypeOf(ContextToaster)).call(this, props));

    _this.notify = _this.notify.bind(_this);
    _this.state = INITIAL_STATE;
    return _this;
  }

  _createClass(ContextToaster, [{
    key: 'removeToast',
    value: function removeToast(toastKey) {
      var nextToasts = this.state.toasts.filter(function (toast) {
        return toast.key !== toastKey;
      });
      this.setState({ toasts: nextToasts });
    }
  }, {
    key: 'notify',
    value: function notify(_ref) {
      var title = _ref.title,
          message = _ref.message,
          _ref$type = _ref.type,
          type = _ref$type === undefined ? TOAST_TYPES.NOTIFY : _ref$type,
          className = _ref.className,
          _ref$lifetime = _ref.lifetime,
          lifetime = _ref$lifetime === undefined ? DEFAULT_LIFETIME : _ref$lifetime,
          _ref$animationLength = _ref.animationLength,
          animationLength = _ref$animationLength === undefined ? DEFAULT_ANIMATION_LENGTH : _ref$animationLength,
          _ref$closeOnClick = _ref.closeOnClick,
          closeOnClick = _ref$closeOnClick === undefined ? true : _ref$closeOnClick;

      var timestamp = new Date().getTime();
      var key = type + '_' + message + '_' + timestamp;
      var removeToastFunc = this.removeToast.bind(this, key);
      var newToast = { title: title, message: message, type: type, className: className, key: key, lifetime: lifetime, removeToastFunc: removeToastFunc, closeOnClick: closeOnClick, animationLength: animationLength };
      var nextToasts = this.state.toasts.concat(newToast);
      setTimeout(removeToastFunc, lifetime + animationLength);
      this.setState({ toasts: nextToasts });
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return _defineProperty({}, __WEBPACK_IMPORTED_MODULE_3__consts__["a" /* CONTEXT_TOAST_NOTIFY_FUNC_NAME */], this.notify);
    }
  }, {
    key: 'getToasts',
    value: function getToasts() {
      return this.state.toasts.map(function (toast) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__ContextToast__["a" /* default */],
          {
            title: toast.title,
            key: toast.key,
            lifetime: toast.lifetime,
            animationLength: toast.animationLength,
            type: toast.type,
            removeToastFunc: toast.removeToastFunc,
            closeOnClick: toast.closeOnClick
          },
          toast.message
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'ContextToaster__Scope' },
        this.props.children,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'ContextToaster__ToastsList' },
          this.getToasts()
        )
      );
    }
  }]);

  return ContextToaster;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

ContextToaster.childContextTypes = _defineProperty({}, __WEBPACK_IMPORTED_MODULE_3__consts__["a" /* CONTEXT_TOAST_NOTIFY_FUNC_NAME */], __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func);

ContextToaster.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node])
};

/* harmony default export */ __webpack_exports__["default"] = (ContextToaster);

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(undefined);
// imports


// module
exports.push([module.i, ".ContextToaster__ToastsList {\r\n    bottom: 0;\r\n    display: flex;\r\n    flex-flow: column;\r\n    left: 0;\r\n    margin: 0;\r\n    padding: 16px;\r\n    position: fixed;\r\n}\r\n\r\n.ContextToaster__Toast {\r\n    background-color: #424242;\r\n    border-radius: 2px;\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);\r\n    display: flex;\r\n    font-family: Optima, Segoe, \"Segoe UI\", Candara, Calibri, Arial, sans-serif;\r\n    list-style: none;\r\n    margin-bottom: 8px;\r\n    opacity: 0;\r\n    transition: box-shadow 0.2s, opacity 0.2s, transform 0.2s;\r\n    transform: translateX(-150px);\r\n    width: 320px;\r\n}\r\n\r\n.ContextToaster__Toast--visible {\r\n    opacity: 0.85;\r\n    transform: translateX(0);\r\n}\r\n\r\n.ContextToaster__Toast--visible:hover {\r\n    opacity: 1;\r\n    transform: translateX(-6px);\r\n}\r\n\r\n.ContextToaster__Toast:last-child {\r\n    margin-bottom: 0\r\n}\r\n\r\n.ContentToaster__Toast__iconContainer {\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.ContentToaster__Toast__iconContainer:before {\r\n    background-color: #fff;\r\n    border-radius: 18px;\r\n    color: #424242;\r\n    content: '\\1F514\\FE0E';\r\n    display: block;\r\n    font-size: 24px;\r\n    height: 36px;\r\n    line-height: 34px;\r\n    margin: 0 8px 0 16px;\r\n    text-align: center;\r\n    width: 36px;\r\n}\r\n\r\n.ContextToaster__Toast__textContainer {\r\n    color: #fff;\r\n    display: flex;\r\n    flex-flow: column;\r\n    justify-content: space-around;\r\n}\r\n\r\n.ContextToaster__Toast__textContainer__title {\r\n    font-size: 16px;\r\n    margin: 0;\r\n    padding: 16px 8px 0;\r\n}\r\n\r\n.ContextToaster__Toast__textContainer__textMessage {\r\n    margin: 0;\r\n    padding: 0 16px 16px 8px;\r\n}\r\n\r\n/* Types */\r\n.ContextToaster__Toast--NOTIFY {\r\n    background-color: #424242;\r\n}\r\n\r\n.ContextToaster__Toast--NOTIFY .ContentToaster__Toast__iconContainer:before {\r\n    color: #424242;\r\n    content: '\\1F514\\FE0E';\r\n}\r\n\r\n.ContextToaster__Toast--ERROR {\r\n    background-color: #F44336;\r\n}\r\n\r\n.ContextToaster__Toast--ERROR .ContentToaster__Toast__iconContainer:before {\r\n    color: #F44336;\r\n    content: '\\2716\\FE0E';\r\n}\r\n\r\n.ContextToaster__Toast--WARN {\r\n    background-color: #FFD600;\r\n}\r\n\r\n.ContextToaster__Toast--WARN .ContentToaster__Toast__iconContainer:before {\r\n    color: #FFD600;\r\n    content: '\\2757\\FE0E';\r\n}\r\n\r\n.ContextToaster__Toast--SUCCESS {\r\n    background-color: #4CAF50;\r\n}\r\n\r\n.ContextToaster__Toast--SUCCESS .ContentToaster__Toast__iconContainer:before {\r\n    color: #4CAF50;\r\n    content: '\\2714\\FE0E';\r\n}", ""]);

// exports


/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTEXT_TOAST_NOTIFY_FUNC_NAME; });
var CONTEXT_TOAST_NOTIFY_FUNC_NAME = 'popToast';

/* unused harmony default export */ var _unused_webpack_default_export = ({ CONTEXT_TOAST_NOTIFY_FUNC_NAME: CONTEXT_TOAST_NOTIFY_FUNC_NAME });

/***/ })

},[26]);
});