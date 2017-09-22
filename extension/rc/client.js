webpackJsonp([11],{

/***/ 1219:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(208);
module.exports = __webpack_require__(1220);


/***/ }),

/***/ 1220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _ExtensionClientRunner = __webpack_require__(1221);

var _ExtensionClientRunner2 = _interopRequireDefault(_ExtensionClientRunner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global config */

global.runner = new _ExtensionClientRunner2.default();
global.client = global.runner._client;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(77)))

/***/ }),

/***/ 1221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(20);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(10);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(21);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ChromeTransport = __webpack_require__(835);

var _redux = __webpack_require__(33);

var _getProxyClient = __webpack_require__(1249);

var _getProxyClient2 = _interopRequireDefault(_getProxyClient);

var _querystring = __webpack_require__(370);

var _querystring2 = _interopRequireDefault(_querystring);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(217);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _url = __webpack_require__(371);

var _url2 = _interopRequireDefault(_url);

var _Phone = __webpack_require__(839);

var _Phone2 = _interopRequireDefault(_Phone);

var _App = __webpack_require__(882);

var _App2 = _interopRequireDefault(_App);

var _BaseRunner2 = __webpack_require__(378);

var _BaseRunner3 = _interopRequireDefault(_BaseRunner2);

var _Logo = __webpack_require__(905);

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global config */

var ProxyClient = (0, _getProxyClient2.default)(_Phone2.default);
// eslint-disable-next-line

var ExtensionClientRunner = function (_BaseRunner) {
  (0, _inherits3.default)(ExtensionClientRunner, _BaseRunner);

  function ExtensionClientRunner() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ExtensionClientRunner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ExtensionClientRunner.__proto__ || (0, _getPrototypeOf2.default)(ExtensionClientRunner)).call.apply(_ref, [this].concat(args))), _this), _this._renderApp = function () {
      _reactDom2.default.render(_react2.default.createElement(_App2.default, {
        phone: _this._client._target,
        standAlone: _this._standAlone,
        logo: _Logo2.default
      }), document.querySelector('div#viewport'));
      _this._client.sync(); // Rendering App with Routes would force the history object to default path
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ExtensionClientRunner, [{
    key: '_initializeApp',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var _this2 = this;

        var _qs$parse, adapterId, tabId, fn;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _qs$parse = _querystring2.default.parse(_url2.default.parse(location.href).query), adapterId = _qs$parse.adapterId, tabId = _qs$parse.tabId;

                this._transport = new _ChromeTransport.ClientTransport();
                this._client = new ProxyClient((0, _extends3.default)({}, {"prefix":"rc","brandConfig":{"id":"1210","brandCode":"rc","name":"RingCentral","appName":"RingCentral for Google Chrome","application":"Google Chrome","fullName":"RingCentral"},"sdkConfig":{"appKey":"eac8797af1b3502F2CEAAEECAC3Ed378AA7858A386656f28A008b0c638A754B1","appSecret":"c082702E4ea4DA18c4b1377917778a8aafabCA3Be579B78B66d17C36874b27F4","server":"https://api-rcapps.ringcentral.com"},"googleClientId":"420036030335-8mp9jc5r2d86hl78fa4qgetdp9o2675d.apps.googleusercontent.com","defaultWhitelist":["http://*","https://*"],"defaultBlacklist":["*://*.ringcentral.com/*","*://*.glip.com/*"],"managedBlacklist":["*://*.ringcentral.com/login/*"],"version":"4.0.0"}, {
                  adapterId: adapterId,
                  tabId: tabId,
                  transport: this._transport
                }));
                this._store = (0, _redux.createStore)(this._client.reducer);
                this._client.setStore(this._store);
                this._standAlone = !tabId;
                _context.next = 8;
                return this._client.sync();

              case 8:
                // wait for the first sync
                if (document.readyState !== 'loading') {
                  this._renderApp();
                } else {
                  fn = function fn() {
                    window.removeEventListener('load', fn);
                    _this2._renderApp();
                  };

                  window.addEventListener('load', fn);
                }

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _initializeApp() {
        return _ref2.apply(this, arguments);
      }

      return _initializeApp;
    }()
  }]);
  return ExtensionClientRunner;
}(_BaseRunner3.default);

exports.default = ExtensionClientRunner;

/***/ }),

/***/ 1249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(20);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(21);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty = __webpack_require__(177);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _extends2 = __webpack_require__(10);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _objectWithoutProperties2 = __webpack_require__(18);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = getProxyClient;

var _uuid = __webpack_require__(342);

var _uuid2 = _interopRequireDefault(_uuid);

var _RcModule2 = __webpack_require__(53);

var _RcModule3 = _interopRequireDefault(_RcModule2);

var _getProxyClientReducer = __webpack_require__(1251);

var _getProxyClientReducer2 = _interopRequireDefault(_getProxyClientReducer);

var _baseActionTypes = __webpack_require__(698);

var _baseActionTypes2 = _interopRequireDefault(_baseActionTypes);

var _ensureExist = __webpack_require__(128);

var _ensureExist2 = _interopRequireDefault(_ensureExist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getProxyClient(Target) {
  return function (_RcModule) {
    (0, _inherits3.default)(_class, _RcModule);

    function _class(_ref) {
      var transport = _ref.transport,
          options = (0, _objectWithoutProperties3.default)(_ref, ['transport']);
      (0, _classCallCheck3.default)(this, _class);

      var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, (0, _extends3.default)({}, options, {
        actionTypes: _baseActionTypes2.default
      })));

      _this._id = _uuid2.default.v4();
      _this._target = new Target((0, _extends3.default)({}, options, {
        getState: function getState() {
          return _this.state.target;
        },
        getProxyState: function getProxyState() {
          return _this.state.proxy;
        }
      }));
      _this._transport = _ensureExist2.default.call(_this, transport, 'transport');
      _this._setTransport(_this._target);

      var _loop = function _loop(subModule) {
        var _context;

        if ((_context = _this._target, Object.prototype.hasOwnProperty).call(_context, subModule) && _this._target[subModule] instanceof _RcModule3.default) {
          (0, _defineProperty2.default)(_this, subModule, {
            configurable: false,
            enumerable: true,
            get: function get() {
              return this._target[subModule];
            }
          });
        }
      };

      for (var subModule in _this._target) {
        _loop(subModule);
      }

      _this._reducer = (0, _getProxyClientReducer2.default)({
        targetReducer: _this._target.reducer,
        proxyReducer: _this._target.proxyReducer,
        transport: transport,
        types: _this.actionTypes
      });
      return _this;
    }

    (0, _createClass3.default)(_class, [{
      key: '_setTransport',
      value: function _setTransport(target) {
        target._transport = this._transport;
        target._proxyActionTypes = this.actionTypes;
        target._suppressInit = true;
        for (var subModule in target) {
          if (Object.prototype.hasOwnProperty.call(target, subModule) && target[subModule] instanceof _RcModule3.default) {
            this._setTransport(target[subModule]);
          }
        }
      }
    }, {
      key: '_sync',
      value: function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var result;
          return _regenerator2.default.wrap(function _callee$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this._transport.request({
                    payload: {
                      type: this.actionTypes.sync
                    }
                  });

                case 2:
                  result = _context2.sent;

                  this.store.dispatch((0, _extends3.default)({}, result, {
                    type: this.actionTypes.sync
                  }));
                  this._syncPromise = null;

                case 5:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee, this);
        }));

        function _sync() {
          return _ref2.apply(this, arguments);
        }

        return _sync;
      }()
    }, {
      key: 'sync',
      value: function sync() {
        if (!this._syncPromise) {
          this._syncPromise = this._sync();
        }
        return this._syncPromise;
      }
    }, {
      key: '_initialize',
      value: function _initialize(target) {
        if (typeof target.initializeProxy === 'function' && !target._proxyInitialized) {
          target._proxyInitialized = true;
          target.initializeProxy();
        }
        for (var subModule in target) {
          if (Object.prototype.hasOwnProperty.call(target, subModule) && target[subModule] instanceof _RcModule3.default) {
            this._initialize(target[subModule]);
          }
        }
      }
    }, {
      key: 'initialize',
      value: function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
          var _this2 = this;

          return _regenerator2.default.wrap(function _callee3$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  this._transport.on(this._transport.events.push, function () {
                    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(payload) {
                      return _regenerator2.default.wrap(function _callee2$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              if (!(payload.type === _this2.actionTypes.action)) {
                                _context3.next = 10;
                                break;
                              }

                              if (!_this2._syncPromise) {
                                _context3.next = 4;
                                break;
                              }

                              _context3.next = 4;
                              return _this2._syncPromise;

                            case 4:
                              if (!(payload.actionNumber === _this2.state.actionNumber + 1)) {
                                _context3.next = 8;
                                break;
                              }

                              _this2.store.dispatch((0, _extends3.default)({}, payload, {
                                type: _this2.actionTypes.action
                              }));
                              _context3.next = 10;
                              break;

                            case 8:
                              _context3.next = 10;
                              return _this2.sync();

                            case 10:
                            case 'end':
                              return _context3.stop();
                          }
                        }
                      }, _callee2, _this2);
                    }));

                    return function (_x) {
                      return _ref4.apply(this, arguments);
                    };
                  }());
                  _context4.next = 3;
                  return this.sync();

                case 3:
                  this._initialize(this._target);

                case 4:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee3, this);
        }));

        function initialize() {
          return _ref3.apply(this, arguments);
        }

        return initialize;
      }()
    }]);
    return _class;
  }(_RcModule3.default);
}


/***/ }),

/***/ 1251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLastActionReducer = getLastActionReducer;
exports.getActionNumberReducer = getActionNumberReducer;
exports.getTargetReducer = getTargetReducer;
exports.default = getProxyClientReducer;

var _redux = __webpack_require__(33);

function getLastActionReducer(_ref) {
  var types = _ref.types;

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var _ref2 = arguments[1];
    var type = _ref2.type,
        action = _ref2.action,
        lastAction = _ref2.lastAction;

    switch (type) {
      case types.action:
        return action;
      case types.sync:
        return lastAction;
      default:
        return state;
    }
  };
}
function getActionNumberReducer(_ref3) {
  var types = _ref3.types;

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
    var _ref4 = arguments[1];
    var type = _ref4.type,
        actionNumber = _ref4.actionNumber;

    switch (type) {
      case types.action:
      case types.sync:
        return actionNumber;
      default:
        return state;
    }
  };
}
function getTargetReducer(_ref5) {
  var targetReducer = _ref5.targetReducer,
      types = _ref5.types;

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : targetReducer(undefined, { type: types.initModule });
    var _ref6 = arguments[1];
    var type = _ref6.type,
        target = _ref6.target,
        action = _ref6.action;

    switch (type) {
      case types.action:
        return targetReducer(state, action);
      case types.sync:
        return target;
      default:
        return state;
    }
  };
}

function getProxyClientReducer(_ref7) {
  var targetReducer = _ref7.targetReducer,
      proxyReducer = _ref7.proxyReducer,
      types = _ref7.types;

  return (0, _redux.combineReducers)({
    target: getTargetReducer({ targetReducer: targetReducer, types: types }),
    proxy: proxyReducer,
    lastAction: getLastActionReducer({ types: types }),
    actionNumber: getActionNumberReducer({ types: types })
  });
}


/***/ })

},[1219]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXh0ZW5zaW9uL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL0V4dGVuc2lvbkNsaWVudFJ1bm5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vbGliL3Byb3h5L2dldFByb3h5Q2xpZW50LmpzIiwid2VicGFjazovLy9saWIvcHJveHkvZ2V0UHJveHlDbGllbnRSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsInJ1bm5lciIsImNsaWVudCIsIl9jbGllbnQiLCJQcm94eUNsaWVudCIsIkV4dGVuc2lvbkNsaWVudFJ1bm5lciIsIl9yZW5kZXJBcHAiLCJyZW5kZXIiLCJfdGFyZ2V0IiwiX3N0YW5kQWxvbmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzeW5jIiwicGFyc2UiLCJsb2NhdGlvbiIsImhyZWYiLCJxdWVyeSIsImFkYXB0ZXJJZCIsInRhYklkIiwiX3RyYW5zcG9ydCIsInRyYW5zcG9ydCIsIl9zdG9yZSIsInJlZHVjZXIiLCJzZXRTdG9yZSIsInJlYWR5U3RhdGUiLCJmbiIsIndpbmRvdyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0UHJveHlDbGllbnQiLCJUYXJnZXQiLCJvcHRpb25zIiwiYWN0aW9uVHlwZXMiLCJfaWQiLCJ2NCIsImdldFN0YXRlIiwic3RhdGUiLCJ0YXJnZXQiLCJnZXRQcm94eVN0YXRlIiwicHJveHkiLCJfc2V0VHJhbnNwb3J0Iiwic3ViTW9kdWxlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiX3JlZHVjZXIiLCJ0YXJnZXRSZWR1Y2VyIiwicHJveHlSZWR1Y2VyIiwidHlwZXMiLCJfcHJveHlBY3Rpb25UeXBlcyIsIl9zdXBwcmVzc0luaXQiLCJyZXF1ZXN0IiwicGF5bG9hZCIsInR5cGUiLCJyZXN1bHQiLCJzdG9yZSIsImRpc3BhdGNoIiwiX3N5bmNQcm9taXNlIiwiX3N5bmMiLCJpbml0aWFsaXplUHJveHkiLCJfcHJveHlJbml0aWFsaXplZCIsIl9pbml0aWFsaXplIiwib24iLCJldmVudHMiLCJwdXNoIiwiYWN0aW9uIiwiYWN0aW9uTnVtYmVyIiwiZ2V0TGFzdEFjdGlvblJlZHVjZXIiLCJnZXRBY3Rpb25OdW1iZXJSZWR1Y2VyIiwiZ2V0VGFyZ2V0UmVkdWNlciIsImdldFByb3h5Q2xpZW50UmVkdWNlciIsImxhc3RBY3Rpb24iLCJ1bmRlZmluZWQiLCJpbml0TW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFDQTs7QUFFQUEsT0FBT0MsTUFBUCxHQUFnQixxQ0FBaEI7QUFDQUQsT0FBT0UsTUFBUCxHQUFnQkYsT0FBT0MsTUFBUCxDQUFjRSxPQUE5QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUNBOztBQUVBLElBQU1DLGNBQWMsOENBQXBCO0FBSkE7O0lBTXFCQyxxQjs7Ozs7Ozs7Ozs7Ozs7ME9BQ25CQyxVLEdBQWEsWUFBTTtBQUNqQix5QkFBU0MsTUFBVCxDQUNFO0FBQ0UsZUFBTyxNQUFLSixPQUFMLENBQWFLLE9BRHRCO0FBRUUsb0JBQVksTUFBS0MsV0FGbkI7QUFHRTtBQUhGLFFBREYsRUFNRUMsU0FBU0MsYUFBVCxDQUF1QixjQUF2QixDQU5GO0FBUUEsWUFBS1IsT0FBTCxDQUFhUyxJQUFiLEdBVGlCLENBU0k7QUFDdEIsSzs7Ozs7Ozs7Ozs7Ozs7OzRCQUtLLHNCQUFHQyxLQUFILENBQVMsY0FBSUEsS0FBSixDQUFVQyxTQUFTQyxJQUFuQixFQUF5QkMsS0FBbEMsQyxFQUZKQyxTLGFBQUFBLFMsRUFDRUMsSyxhQUFBQSxLOztBQUVGLHFCQUFLQyxVQUFMLEdBQWtCLHND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UUFEYStCLE1BQ2IsU0FEYUEsTUFDYjs7QUFDSCxZQUFRWixJQUFSO0FBQ0UsV0FBS0wsTUFBTWlCLE1BQVg7QUFDRSxlQUFPbkIsY0FBY2IsS0FBZCxFQUFxQmdDLE1BQXJCLENBQVA7QUFDRixXQUFLakIsTUFBTXZDLElBQVg7QUFDRSxlQUFPeUIsTUFBUDtBQUNGO0FBQ0UsZUFBT0QsS0FBUDtBQU5KO0FBUUQsR0FaRDtBQWFEOztBQUdjLFNBQVNxQyxxQkFBVCxRQUF1RTtBQUFBLE1BQXRDeEIsYUFBc0MsU0FBdENBLGFBQXNDO0FBQUEsTUFBdkJDLFlBQXVCLFNBQXZCQSxZQUF1QjtBQUFBLE1BQVRDLEtBQVMsU0FBVEEsS0FBUzs7QUFDcEYsU0FBTyw0QkFBZ0I7QUFDckJkLFlBQVFtQyxpQkFBaUIsRUFBRXZCLDRCQUFGLEVBQWlCRSxZQUFqQixFQUFqQixDQURhO0FBRXJCWixXQUFPVyxZQUZjO0FBR3JCd0IsZ0JBQVlKLHFCQUFxQixFQUFFbkIsWUFBRixFQUFyQixDQUhTO0FBSXJCa0Isa0JBQWNFLHVCQUF1QixFQUFFcEIsWUFBRixFQUF2QjtBQUpPLEdBQWhCLENBQVA7QUFNRCIsImZpbGUiOiJjbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0ZW5zaW9uQ2xpZW50UnVubmVyIGZyb20gJy4uL2xpYi9FeHRlbnNpb25DbGllbnRSdW5uZXInO1xyXG4vKiBnbG9iYWwgY29uZmlnICovXHJcblxyXG5nbG9iYWwucnVubmVyID0gbmV3IEV4dGVuc2lvbkNsaWVudFJ1bm5lcigpO1xyXG5nbG9iYWwuY2xpZW50ID0gZ2xvYmFsLnJ1bm5lci5fY2xpZW50O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXh0ZW5zaW9uL2NsaWVudC5qcyIsImltcG9ydCB7IENsaWVudFRyYW5zcG9ydCB9IGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL2xpYi9DaHJvbWVUcmFuc3BvcnQnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGdldFByb3h5Q2xpZW50IGZyb20gJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL2xpYi9wcm94eS9nZXRQcm94eUNsaWVudCc7XHJcbmltcG9ydCBxcyBmcm9tICdxdWVyeXN0cmluZyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgdXJsIGZyb20gJ3VybCc7XHJcbmltcG9ydCBQaG9uZSBmcm9tICcuLi8uLi9tb2R1bGVzL1Bob25lJztcclxuaW1wb3J0IEFwcCBmcm9tICcuLi8uLi9jb250YWluZXJzL0FwcCc7XHJcbmltcG9ydCBCYXNlUnVubmVyIGZyb20gJy4uL0Jhc2VSdW5uZXInO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuaW1wb3J0IExvZ28gZnJvbSAnYnJhbmQtbG9nby1wYXRoL0xvZ28uc3ZnJztcclxuLyogZ2xvYmFsIGNvbmZpZyAqL1xyXG5cclxuY29uc3QgUHJveHlDbGllbnQgPSBnZXRQcm94eUNsaWVudChQaG9uZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRlbnNpb25DbGllbnRSdW5uZXIgZXh0ZW5kcyBCYXNlUnVubmVyIHtcclxuICBfcmVuZGVyQXBwID0gKCkgPT4ge1xyXG4gICAgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICA8QXBwXHJcbiAgICAgICAgcGhvbmU9e3RoaXMuX2NsaWVudC5fdGFyZ2V0fVxyXG4gICAgICAgIHN0YW5kQWxvbmU9e3RoaXMuX3N0YW5kQWxvbmV9XHJcbiAgICAgICAgbG9nbz17TG9nb31cclxuICAgICAgLz4sXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiN2aWV3cG9ydCcpLFxyXG4gICAgKTtcclxuICAgIHRoaXMuX2NsaWVudC5zeW5jKCk7IC8vIFJlbmRlcmluZyBBcHAgd2l0aCBSb3V0ZXMgd291bGQgZm9yY2UgdGhlIGhpc3Rvcnkgb2JqZWN0IHRvIGRlZmF1bHQgcGF0aFxyXG4gIH1cclxuICBhc3luYyBfaW5pdGlhbGl6ZUFwcCgpIHtcclxuICAgIGNvbnN0IHtcclxuICAgIGFkYXB0ZXJJZCxcclxuICAgICAgdGFiSWQsXHJcbiAgICB9ID0gcXMucGFyc2UodXJsLnBhcnNlKGxvY2F0aW9uLmhyZWYpLnF1ZXJ5KTtcclxuICAgIHRoaXMuX3RyYW5zcG9ydCA9IG5ldyBDbGllbnRUcmFuc3BvcnQoKTtcclxuICAgIHRoaXMuX2NsaWVudCA9IG5ldyBQcm94eUNsaWVudCh7XHJcbiAgICAgIC4uLmNvbmZpZyxcclxuICAgICAgYWRhcHRlcklkLFxyXG4gICAgICB0YWJJZCxcclxuICAgICAgdHJhbnNwb3J0OiB0aGlzLl90cmFuc3BvcnQsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3N0b3JlID0gY3JlYXRlU3RvcmUodGhpcy5fY2xpZW50LnJlZHVjZXIpO1xyXG4gICAgdGhpcy5fY2xpZW50LnNldFN0b3JlKHRoaXMuX3N0b3JlKTtcclxuICAgIHRoaXMuX3N0YW5kQWxvbmUgPSAhdGFiSWQ7XHJcbiAgICBhd2FpdCB0aGlzLl9jbGllbnQuc3luYygpOyAgLy8gd2FpdCBmb3IgdGhlIGZpcnN0IHN5bmNcclxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyQXBwKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBmbiA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZuKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJBcHAoKTtcclxuICAgICAgfTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmbik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvRXh0ZW5zaW9uQ2xpZW50UnVubmVyL2luZGV4LmpzIiwiaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XHJcbmltcG9ydCBSY01vZHVsZSBmcm9tICcuLi9SY01vZHVsZSc7XHJcbmltcG9ydCBnZXRQcm94eUNsaWVudFJlZHVjZXIgZnJvbSAnLi9nZXRQcm94eUNsaWVudFJlZHVjZXInO1xyXG5pbXBvcnQgYmFzZUFjdGlvblR5cGVzIGZyb20gJy4vYmFzZUFjdGlvblR5cGVzJztcclxuaW1wb3J0IGVuc3VyZUV4aXN0IGZyb20gJy4uL2Vuc3VyZUV4aXN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQcm94eUNsaWVudChUYXJnZXQpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBSY01vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IHRyYW5zcG9ydCwgLi4ub3B0aW9ucyB9KSB7XHJcbiAgICAgIHN1cGVyKHtcclxuICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgIGFjdGlvblR5cGVzOiBiYXNlQWN0aW9uVHlwZXMsXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9pZCA9IHV1aWQudjQoKTtcclxuICAgICAgdGhpcy5fdGFyZ2V0ID0gbmV3IFRhcmdldCh7XHJcbiAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICBnZXRTdGF0ZTogKCkgPT4gdGhpcy5zdGF0ZS50YXJnZXQsXHJcbiAgICAgICAgZ2V0UHJveHlTdGF0ZTogKCkgPT4gdGhpcy5zdGF0ZS5wcm94eSxcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX3RyYW5zcG9ydCA9IHRoaXM6OmVuc3VyZUV4aXN0KHRyYW5zcG9ydCwgJ3RyYW5zcG9ydCcpO1xyXG4gICAgICB0aGlzLl9zZXRUcmFuc3BvcnQodGhpcy5fdGFyZ2V0KTtcclxuICAgICAgZm9yIChjb25zdCBzdWJNb2R1bGUgaW4gdGhpcy5fdGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGhpcy5fdGFyZ2V0OjpPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KHN1Yk1vZHVsZSkgJiZcclxuICAgICAgICAgICAgdGhpcy5fdGFyZ2V0W3N1Yk1vZHVsZV0gaW5zdGFuY2VvZiBSY01vZHVsZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHN1Yk1vZHVsZSwge1xyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldFtzdWJNb2R1bGVdO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9yZWR1Y2VyID0gZ2V0UHJveHlDbGllbnRSZWR1Y2VyKHtcclxuICAgICAgICB0YXJnZXRSZWR1Y2VyOiB0aGlzLl90YXJnZXQucmVkdWNlcixcclxuICAgICAgICBwcm94eVJlZHVjZXI6IHRoaXMuX3RhcmdldC5wcm94eVJlZHVjZXIsXHJcbiAgICAgICAgdHJhbnNwb3J0LFxyXG4gICAgICAgIHR5cGVzOiB0aGlzLmFjdGlvblR5cGVzLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0VHJhbnNwb3J0KHRhcmdldCkge1xyXG4gICAgICB0YXJnZXQuX3RyYW5zcG9ydCA9IHRoaXMuX3RyYW5zcG9ydDtcclxuICAgICAgdGFyZ2V0Ll9wcm94eUFjdGlvblR5cGVzID0gdGhpcy5hY3Rpb25UeXBlcztcclxuICAgICAgdGFyZ2V0Ll9zdXBwcmVzc0luaXQgPSB0cnVlO1xyXG4gICAgICBmb3IgKGNvbnN0IHN1Yk1vZHVsZSBpbiB0YXJnZXQpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0YXJnZXQ6Ok9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoc3ViTW9kdWxlKSAmJlxyXG4gICAgICAgICAgICB0YXJnZXRbc3ViTW9kdWxlXSBpbnN0YW5jZW9mIFJjTW9kdWxlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLl9zZXRUcmFuc3BvcnQodGFyZ2V0W3N1Yk1vZHVsZV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBfc3luYygpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fdHJhbnNwb3J0LnJlcXVlc3Qoe1xyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHR5cGU6IHRoaXMuYWN0aW9uVHlwZXMuc3luYyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgLi4ucmVzdWx0LFxyXG4gICAgICAgIHR5cGU6IHRoaXMuYWN0aW9uVHlwZXMuc3luYyxcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX3N5bmNQcm9taXNlID0gbnVsbDtcclxuICAgIH1cclxuICAgIHN5bmMoKSB7XHJcbiAgICAgIGlmICghdGhpcy5fc3luY1Byb21pc2UpIHtcclxuICAgICAgICB0aGlzLl9zeW5jUHJvbWlzZSA9IHRoaXMuX3N5bmMoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5fc3luY1Byb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgX2luaXRpYWxpemUodGFyZ2V0KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0eXBlb2YgdGFyZ2V0LmluaXRpYWxpemVQcm94eSA9PT0gJ2Z1bmN0aW9uJyAmJlxyXG4gICAgICAgICF0YXJnZXQuX3Byb3h5SW5pdGlhbGl6ZWRcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGFyZ2V0Ll9wcm94eUluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICB0YXJnZXQuaW5pdGlhbGl6ZVByb3h5KCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChjb25zdCBzdWJNb2R1bGUgaW4gdGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGFyZ2V0OjpPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KHN1Yk1vZHVsZSkgJiZcclxuICAgICAgICAgICAgdGFyZ2V0W3N1Yk1vZHVsZV0gaW5zdGFuY2VvZiBSY01vZHVsZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5faW5pdGlhbGl6ZSh0YXJnZXRbc3ViTW9kdWxlXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBpbml0aWFsaXplKCkge1xyXG4gICAgICB0aGlzLl90cmFuc3BvcnQub24odGhpcy5fdHJhbnNwb3J0LmV2ZW50cy5wdXNoLCBhc3luYyAocGF5bG9hZCkgPT4ge1xyXG4gICAgICAgIGlmIChwYXlsb2FkLnR5cGUgPT09IHRoaXMuYWN0aW9uVHlwZXMuYWN0aW9uKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5fc3luY1Byb21pc2UpIGF3YWl0IHRoaXMuX3N5bmNQcm9taXNlO1xyXG4gICAgICAgICAgaWYgKHBheWxvYWQuYWN0aW9uTnVtYmVyID09PSB0aGlzLnN0YXRlLmFjdGlvbk51bWJlciArIDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICAgICAgICB0eXBlOiB0aGlzLmFjdGlvblR5cGVzLmFjdGlvbixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnN5bmMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBhd2FpdCB0aGlzLnN5bmMoKTtcclxuICAgICAgdGhpcy5faW5pdGlhbGl6ZSh0aGlzLl90YXJnZXQpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9wcm94eS9nZXRQcm94eUNsaWVudC5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0QWN0aW9uUmVkdWNlcih7IHR5cGVzIH0pIHtcclxuICByZXR1cm4gKHN0YXRlID0gbnVsbCwgeyB0eXBlLCBhY3Rpb24sIGxhc3RBY3Rpb24gfSkgPT4ge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgdHlwZXMuYWN0aW9uOlxyXG4gICAgICAgIHJldHVybiBhY3Rpb247XHJcbiAgICAgIGNhc2UgdHlwZXMuc3luYzpcclxuICAgICAgICByZXR1cm4gbGFzdEFjdGlvbjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aW9uTnVtYmVyUmVkdWNlcih7IHR5cGVzIH0pIHtcclxuICByZXR1cm4gKHN0YXRlID0gLTEsIHsgdHlwZSwgYWN0aW9uTnVtYmVyIH0pID0+IHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIHR5cGVzLmFjdGlvbjpcclxuICAgICAgY2FzZSB0eXBlcy5zeW5jOlxyXG4gICAgICAgIHJldHVybiBhY3Rpb25OdW1iZXI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhcmdldFJlZHVjZXIoeyB0YXJnZXRSZWR1Y2VyLCB0eXBlcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIHN0YXRlID0gdGFyZ2V0UmVkdWNlcih1bmRlZmluZWQsIHsgdHlwZTogdHlwZXMuaW5pdE1vZHVsZSB9KSxcclxuICAgIHsgdHlwZSwgdGFyZ2V0LCBhY3Rpb24gfSxcclxuICApID0+IHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIHR5cGVzLmFjdGlvbjpcclxuICAgICAgICByZXR1cm4gdGFyZ2V0UmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSB0eXBlcy5zeW5jOlxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQcm94eUNsaWVudFJlZHVjZXIoeyB0YXJnZXRSZWR1Y2VyLCBwcm94eVJlZHVjZXIsIHR5cGVzIH0pIHtcclxuICByZXR1cm4gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIHRhcmdldDogZ2V0VGFyZ2V0UmVkdWNlcih7IHRhcmdldFJlZHVjZXIsIHR5cGVzIH0pLFxyXG4gICAgcHJveHk6IHByb3h5UmVkdWNlcixcclxuICAgIGxhc3RBY3Rpb246IGdldExhc3RBY3Rpb25SZWR1Y2VyKHsgdHlwZXMgfSksXHJcbiAgICBhY3Rpb25OdW1iZXI6IGdldEFjdGlvbk51bWJlclJlZHVjZXIoeyB0eXBlcyB9KSxcclxuICB9KTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3Byb3h5L2dldFByb3h5Q2xpZW50UmVkdWNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=