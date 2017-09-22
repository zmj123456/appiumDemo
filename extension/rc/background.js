webpackJsonp([10],{

/***/ 1834:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(208);
module.exports = __webpack_require__(1835);


/***/ }),

/***/ 1835:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _ExtensionServerRunner = __webpack_require__(1836);

var _ExtensionServerRunner2 = _interopRequireDefault(_ExtensionServerRunner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.runner = new _ExtensionServerRunner2.default();
global.server = global.runner._server;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(77)))

/***/ }),

/***/ 1836:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(10);

var _extends3 = _interopRequireDefault(_extends2);

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

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(217);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(33);

var _ramda = __webpack_require__(379);

var _ramda2 = _interopRequireDefault(_ramda);

var _ChromeTransport = __webpack_require__(835);

var _getProxyServer = __webpack_require__(1837);

var _getProxyServer2 = _interopRequireDefault(_getProxyServer);

var _Phone = __webpack_require__(839);

var _Phone2 = _interopRequireDefault(_Phone);

var _App = __webpack_require__(882);

var _App2 = _interopRequireDefault(_App);

var _createWindow = __webpack_require__(1840);

var _createWindow2 = _interopRequireDefault(_createWindow);

var _Logo = __webpack_require__(905);

var _Logo2 = _interopRequireDefault(_Logo);

var _BaseRunner2 = __webpack_require__(378);

var _BaseRunner3 = _interopRequireDefault(_BaseRunner2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global config */

// eslint-disable-next-line
var ProxyServer = (0, _getProxyServer2.default)(_Phone2.default);

var ExtensionServerRunner = function (_BaseRunner) {
  (0, _inherits3.default)(ExtensionServerRunner, _BaseRunner);

  function ExtensionServerRunner() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ExtensionServerRunner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ExtensionServerRunner.__proto__ || (0, _getPrototypeOf2.default)(ExtensionServerRunner)).call.apply(_ref, [this].concat(args))), _this), _this._onStateChange = function () {
      if (_this._server._target.chromeAdapter.clickToDial !== _this._clickToDial) {
        _this._clickToDial = _this._server._target.chromeAdapter.clickToDial;
        chrome.storage.local.set({
          clickToDial: !!_this._clickToDial
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ExtensionServerRunner, [{
    key: '_renderApp',
    value: function _renderApp() {
      _reactDom2.default.render(_react2.default.createElement(_App2.default, {
        phone: this._server._target,
        logo: _Logo2.default
      }), document.querySelector('div#viewport'));
    }
  }, {
    key: '_initializeApp',
    value: function _initializeApp() {
      var _this2 = this;

      this._transport = new _ChromeTransport.ServerTransport();
      this._server = new ProxyServer((0, _extends3.default)({}, {"prefix":"rc","brandConfig":{"id":"1210","brandCode":"rc","name":"RingCentral","appName":"RingCentral for Google Chrome","application":"Google Chrome","fullName":"RingCentral"},"sdkConfig":{"appKey":"eac8797af1b3502F2CEAAEECAC3Ed378AA7858A386656f28A008b0c638A754B1","appSecret":"c082702E4ea4DA18c4b1377917778a8aafabCA3Be579B78B66d17C36874b27F4","server":"https://api-rcapps.ringcentral.com"},"googleClientId":"420036030335-8mp9jc5r2d86hl78fa4qgetdp9o2675d.apps.googleusercontent.com","defaultWhitelist":["http://*","https://*"],"defaultBlacklist":["*://*.ringcentral.com/*","*://*.glip.com/*"],"managedBlacklist":["*://*.ringcentral.com/login/*"],"version":"4.0.0"}, {
        transport: this._transport
      }));
      this._store = (0, _redux.createStore)(this._server.reducer);
      this._server.setStore(this._store);
      if (document.readyState !== 'loading') {
        this._renderApp();
      } else {
        var fn = function fn() {
          window.removeEventListener('load', fn);
          _this2._renderApp();
        };
        window.addEventListener('load', fn);
      }
      chrome.browserAction.onClicked.addListener(function (tab) {
        return _this2._onBrowserAction(tab);
      });
      this._store.subscribe(function () {
        return _this2._onStateChange();
      });
    }
  }, {
    key: '_onBrowserAction',
    value: function _onBrowserAction(tab) {
      var _this3 = this;

      if (this._checkUrl(tab.url)) {
        if (this._server._target.chromeAdapter.minimized || this._server._target.chromeAdapter.closed) {
          this._server._target.chromeAdapter.showAdapter();
        }
      } else if (!this._clientWindow) {
        this._clientWindow = (0, _createWindow2.default)({
          url: './client.html',
          width: 300,
          height: 542,
          title: {"prefix":"rc","brandConfig":{"id":"1210","brandCode":"rc","name":"RingCentral","appName":"RingCentral for Google Chrome","application":"Google Chrome","fullName":"RingCentral"},"sdkConfig":{"appKey":"eac8797af1b3502F2CEAAEECAC3Ed378AA7858A386656f28A008b0c638A754B1","appSecret":"c082702E4ea4DA18c4b1377917778a8aafabCA3Be579B78B66d17C36874b27F4","server":"https://api-rcapps.ringcentral.com"},"googleClientId":"420036030335-8mp9jc5r2d86hl78fa4qgetdp9o2675d.apps.googleusercontent.com","defaultWhitelist":["http://*","https://*"],"defaultBlacklist":["*://*.ringcentral.com/*","*://*.glip.com/*"],"managedBlacklist":["*://*.ringcentral.com/login/*"],"version":"4.0.0"}.brandConfig.appName
        });
        this._clientWindow.addEventListener('unload', function () {
          _this3._clientWindow = null;
        });
      } else {
        this._clientWindow.focus();
      }
    }
  }]);
  return ExtensionServerRunner;
}(_BaseRunner3.default);

exports.default = ExtensionServerRunner;

/***/ }),

/***/ 1837:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = __webpack_require__(177);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _regenerator = __webpack_require__(20);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = __webpack_require__(31);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _toArray2 = __webpack_require__(1838);

var _toArray3 = _interopRequireDefault(_toArray2);

var _asyncToGenerator2 = __webpack_require__(21);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(10);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _objectWithoutProperties2 = __webpack_require__(18);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = getProxyServer;

var _RcModule2 = __webpack_require__(53);

var _RcModule3 = _interopRequireDefault(_RcModule2);

var _baseActionTypes = __webpack_require__(698);

var _baseActionTypes2 = _interopRequireDefault(_baseActionTypes);

var _getProxyServerReducer = __webpack_require__(1839);

var _getProxyServerReducer2 = _interopRequireDefault(_getProxyServerReducer);

var _ensureExist = __webpack_require__(128);

var _ensureExist2 = _interopRequireDefault(_ensureExist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getProxyServer(Target) {
  return function (_RcModule) {
    (0, _inherits3.default)(_class, _RcModule);

    function _class(_ref) {
      var _this2 = this;

      var transport = _ref.transport,
          options = (0, _objectWithoutProperties3.default)(_ref, ['transport']);
      (0, _classCallCheck3.default)(this, _class);

      var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, (0, _extends3.default)({}, options, {
        actionTypes: _baseActionTypes2.default
      })));

      _this._target = new Target((0, _extends3.default)({}, options, {
        getState: function getState() {
          return _this.state.target;
        }
      }));

      var _loop = function _loop(subModule) {
        var _context2;

        if ((_context2 = _this._target, Object.prototype.hasOwnProperty).call(_context2, subModule) && _this._target[subModule] instanceof _RcModule3.default) {
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

      _this._transport = _ensureExist2.default.call(_this, transport, 'transport');
      _this._reducer = (0, _getProxyServerReducer2.default)({
        moduleReducer: _this._target.reducer,
        transport: transport,
        prefix: _this.prefix
      });

      transport.on(transport.events.request, function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref3) {
          var requestId = _ref3.requestId,
              _ref3$payload = _ref3.payload,
              type = _ref3$payload.type,
              functionPath = _ref3$payload.functionPath,
              args = _ref3$payload.args;

          var _functionPath$split$s, _functionPath$split$s2, pathTokens, fnName, target, _target, result;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.t0 = type;
                  _context.next = _context.t0 === _this.actionTypes.execute ? 3 : _context.t0 === _this.actionTypes.sync ? 18 : 20;
                  break;

                case 3:
                  _functionPath$split$s = functionPath.split('.').slice(1), _functionPath$split$s2 = (0, _toArray3.default)(_functionPath$split$s), pathTokens = _functionPath$split$s2.slice(0);
                  fnName = pathTokens.pop();
                  target = _this._target;

                  pathTokens.forEach(function (token) {
                    target = target[token];
                  });
                  _context.prev = 7;
                  _context.next = 10;
                  return (_target = target)[fnName].apply(_target, (0, _toConsumableArray3.default)(args));

                case 10:
                  result = _context.sent;

                  transport.response({
                    requestId: requestId,
                    result: result
                  });
                  _context.next = 17;
                  break;

                case 14:
                  _context.prev = 14;
                  _context.t1 = _context['catch'](7);

                  transport.response({
                    requestId: requestId,
                    error: _context.t1
                  });

                case 17:
                  return _context.abrupt('break', 22);

                case 18:
                  transport.response({
                    requestId: requestId,
                    result: _this.state
                  });
                  return _context.abrupt('break', 22);

                case 20:
                  transport.response({
                    requestId: requestId,
                    error: new Error('Invalid request type \'' + type + '\'.')
                  });
                  return _context.abrupt('break', 22);

                case 22:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[7, 14]]);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
      return _this;
    }

    return _class;
  }(_RcModule3.default);
}


/***/ }),

/***/ 1838:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(413);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
};

/***/ }),

/***/ 1839:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProxyServerReducer;

var _Enum = __webpack_require__(14);

var _baseActionTypes = __webpack_require__(698);

var _baseActionTypes2 = _interopRequireDefault(_baseActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getProxyServerReducer(_ref) {
  var moduleReducer = _ref.moduleReducer,
      transport = _ref.transport,
      prefix = _ref.prefix;

  var actionTypes = (0, _Enum.prefixEnum)({ enumMap: _baseActionTypes2.default, prefix: prefix });
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      target: moduleReducer(undefined, {
        type: actionTypes.initModule
      }),
      lastAction: null,
      actionNumber: -1
    };
    var action = arguments[1];

    if (!action) return state;
    var nextActionNumber = state.actionNumber + 1;
    transport.push({
      payload: {
        type: actionTypes.action,
        action: action,
        actionNumber: nextActionNumber
      }
    });
    return {
      target: moduleReducer(state.target, action),
      lastAction: action,
      actionNumber: nextActionNumber
    };
  };
}


/***/ }),

/***/ 1840:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createWindow;
// TODO: refactor
function createWindow(_ref) {
  var url = _ref.url,
      title = _ref.title,
      width = _ref.width,
      height = _ref.height,
      _ref$position = _ref.position,
      position = _ref$position === undefined ? 'center' : _ref$position;

  var isMac = navigator.userAgent.indexOf('Macintosh') > -1 || navigator.userAgent.indexOf('Mac OS X') > -1;

  var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
  var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

  var windowWidth = window.innerWidth || document.documentElement.clientWidth || screen.width;
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || screen.height;

  var top = void 0;
  var left = void 0;
  switch (position) {
    case 'bottom-right':
      top = windowHeight - height + dualScreenTop;
      left = windowWidth - width + dualScreenLeft;
      break;
    case 'center':
    default:
      top = windowHeight / 2 - height / 2 + dualScreenTop;
      left = windowWidth / 2 - width / 2 + dualScreenLeft;
      break;
  }

  if (!isMac) {
    width += 16;
    height += 16;
  }

  var newWindow = window.open(url, title, 'scrollbars=yes, resizable=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);

  if (window.focus) {
    newWindow.focus();
  }
  return newWindow;
}

/***/ })

},[1834]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXh0ZW5zaW9uL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9FeHRlbnNpb25TZXJ2ZXJSdW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2xpYi9wcm94eS9nZXRQcm94eVNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vL2xpYi9wcm94eS9nZXRQcm94eVNlcnZlclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jcmVhdGVXaW5kb3cuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwicnVubmVyIiwic2VydmVyIiwiX3NlcnZlciIsIlByb3h5U2VydmVyIiwiRXh0ZW5zaW9uU2VydmVyUnVubmVyIiwiX29uU3RhdGVDaGFuZ2UiLCJfdGFyZ2V0IiwiY2hyb21lQWRhcHRlciIsImNsaWNrVG9EaWFsIiwiX2NsaWNrVG9EaWFsIiwiY2hyb21lIiwic3RvcmFnZSIsImxvY2FsIiwic2V0IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiX3RyYW5zcG9ydCIsInRyYW5zcG9ydCIsIl9zdG9yZSIsInJlZHVjZXIiLCJzZXRTdG9yZSIsInJlYWR5U3RhdGUiLCJfcmVuZGVyQXBwIiwiZm4iLCJ3aW5kb3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJyb3dzZXJBY3Rpb24iLCJvbkNsaWNrZWQiLCJhZGRMaXN0ZW5lciIsIl9vbkJyb3dzZXJBY3Rpb24iLCJ0YWIiLCJzdWJzY3JpYmUiLCJfY2hlY2tVcmwiLCJ1cmwiLCJtaW5pbWl6ZWQiLCJjbG9zZWQiLCJzaG93QWRhcHRlciIsIl9jbGllbnRXaW5kb3ciLCJ3aWR0aCIsImhlaWdodCIsInRpdGxlIiwiY29uZmlnIiwiYnJhbmRDb25maWciLCJhcHBOYW1lIiwiZm9jdXMiLCJnZXRQcm94eVNlcnZlciIsIlRhcmdldCIsIm9wdGlvbnMiLCJhY3Rpb25UeXBlcyIsImdldFN0YXRlIiwic3RhdGUiLCJ0YXJnZXQiLCJzdWJNb2R1bGUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJnZXQiLCJfcmVkdWNlciIsIm1vZHVsZVJlZHVjZXIiLCJwcmVmaXgiLCJvbiIsImV2ZW50cyIsInJlcXVlc3QiLCJyZXF1ZXN0SWQiLCJwYXlsb2FkIiwidHlwZSIsImZ1bmN0aW9uUGF0aCIsImFyZ3MiLCJleGVjdXRlIiwic3luYyIsInNwbGl0Iiwic2xpY2UiLCJwYXRoVG9rZW5zIiwiZm5OYW1lIiwicG9wIiwiZm9yRWFjaCIsInRva2VuIiwicmVzdWx0IiwicmVzcG9uc2UiLCJlcnJvciIsIkVycm9yIiwiZ2V0UHJveHlTZXJ2ZXJSZWR1Y2VyIiwiZW51bU1hcCIsInVuZGVmaW5lZCIsImluaXRNb2R1bGUiLCJsYXN0QWN0aW9uIiwiYWN0aW9uTnVtYmVyIiwiYWN0aW9uIiwibmV4dEFjdGlvbk51bWJlciIsInB1c2giLCJjcmVhdGVXaW5kb3ciLCJwb3NpdGlvbiIsImlzTWFjIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaW5kZXhPZiIsImR1YWxTY3JlZW5MZWZ0Iiwic2NyZWVuTGVmdCIsInNjcmVlbiIsImxlZnQiLCJkdWFsU2NyZWVuVG9wIiwic2NyZWVuVG9wIiwidG9wIiwid2luZG93V2lkdGgiLCJpbm5lcldpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsIm5ld1dpbmRvdyIsIm9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBQSxPQUFPQyxNQUFQLEdBQWdCLHFDQUFoQjtBQUNBRCxPQUFPRSxNQUFQLEdBQWdCRixPQUFPQyxNQUFQLENBQWNFLE9BQTlCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7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LGVBQWUsQ0FBaEIsR0FBc0J0RSxTQUFTLENBQWhDLEdBQXNDK0QsYUFBNUM7QUFDQUQsYUFBU0ksY0FBYyxDQUFmLEdBQXFCbkUsUUFBUSxDQUE5QixHQUFvQzRELGNBQTNDO0FBQ0E7QUFUSjs7QUFZQSxNQUFJLENBQUNKLEtBQUwsRUFBWTtBQUNWeEQsYUFBUyxFQUFUO0FBQ0FDLGNBQVUsRUFBVjtBQUNEOztBQUVELE1BQU15RSxZQUFZekYsT0FBTzBGLElBQVAsQ0FDaEJoRixHQURnQixFQUVoQk8sS0FGZ0IsMkNBR3VCRixLQUh2QixpQkFHd0NDLE1BSHhDLGNBR3VEaUUsR0FIdkQsZUFHb0VILElBSHBFLENBQWxCOztBQU1BLE1BQUk5RSxPQUFPcUIsS0FBWCxFQUFrQjtBQUNoQm9FLGNBQVVwRSxLQUFWO0FBQ0Q7QUFDRCxTQUFPb0UsU0FBUDtBQUNELEMiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHRlbnNpb25TZXJ2ZXJSdW5uZXIgZnJvbSAnLi4vbGliL0V4dGVuc2lvblNlcnZlclJ1bm5lcic7XHJcblxyXG5nbG9iYWwucnVubmVyID0gbmV3IEV4dGVuc2lvblNlcnZlclJ1bm5lcigpO1xyXG5nbG9iYWwuc2VydmVyID0gZ2xvYmFsLnJ1bm5lci5fc2VydmVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXh0ZW5zaW9uL2JhY2tncm91bmQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBSIGZyb20gJ3JhbWRhJztcclxuaW1wb3J0IHsgU2VydmVyVHJhbnNwb3J0IH0gZnJvbSAncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbGliL0Nocm9tZVRyYW5zcG9ydCc7XHJcbmltcG9ydCBnZXRQcm94eVNlcnZlciBmcm9tICdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9saWIvcHJveHkvZ2V0UHJveHlTZXJ2ZXInO1xyXG5pbXBvcnQgUGhvbmUgZnJvbSAnLi4vLi4vbW9kdWxlcy9QaG9uZSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vLi4vY29udGFpbmVycy9BcHAnO1xyXG5pbXBvcnQgY3JlYXRlV2luZG93IGZyb20gJy4uL2NyZWF0ZVdpbmRvdyc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG5pbXBvcnQgTG9nbyBmcm9tICdicmFuZC1sb2dvLXBhdGgvTG9nby5zdmcnO1xyXG5pbXBvcnQgQmFzZVJ1bm5lciBmcm9tICcuLi9CYXNlUnVubmVyJztcclxuXHJcbi8qIGdsb2JhbCBjb25maWcgKi9cclxuXHJcbmNvbnN0IFByb3h5U2VydmVyID0gZ2V0UHJveHlTZXJ2ZXIoUGhvbmUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0ZW5zaW9uU2VydmVyUnVubmVyIGV4dGVuZHMgQmFzZVJ1bm5lciB7XHJcbiAgX3JlbmRlckFwcCgpIHtcclxuICAgIFJlYWN0RE9NLnJlbmRlcihcclxuICAgICAgPEFwcFxyXG4gICAgICAgIHBob25lPXt0aGlzLl9zZXJ2ZXIuX3RhcmdldH1cclxuICAgICAgICBsb2dvPXtMb2dvfVxyXG4gICAgICAvPixcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I3ZpZXdwb3J0JyksXHJcbiAgICApO1xyXG4gIH1cclxuICBfaW5pdGlhbGl6ZUFwcCgpIHtcclxuICAgIHRoaXMuX3RyYW5zcG9ydCA9IG5ldyBTZXJ2ZXJUcmFuc3BvcnQoKTtcclxuICAgIHRoaXMuX3NlcnZlciA9IG5ldyBQcm94eVNlcnZlcih7XHJcbiAgICAgIC4uLmNvbmZpZyxcclxuICAgICAgdHJhbnNwb3J0OiB0aGlzLl90cmFuc3BvcnQsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3N0b3JlID0gY3JlYXRlU3RvcmUodGhpcy5fc2VydmVyLnJlZHVjZXIpO1xyXG4gICAgdGhpcy5fc2VydmVyLnNldFN0b3JlKHRoaXMuX3N0b3JlKTtcclxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyQXBwKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBmbiA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZuKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJBcHAoKTtcclxuICAgICAgfTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmbik7XHJcbiAgICB9XHJcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIodGFiID0+IHRoaXMuX29uQnJvd3NlckFjdGlvbih0YWIpKTtcclxuICAgIHRoaXMuX3N0b3JlLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9vblN0YXRlQ2hhbmdlKCkpO1xyXG4gIH1cclxuICBfb25TdGF0ZUNoYW5nZSA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLl9zZXJ2ZXIuX3RhcmdldC5jaHJvbWVBZGFwdGVyLmNsaWNrVG9EaWFsICE9PSB0aGlzLl9jbGlja1RvRGlhbCkge1xyXG4gICAgICB0aGlzLl9jbGlja1RvRGlhbCA9IHRoaXMuX3NlcnZlci5fdGFyZ2V0LmNocm9tZUFkYXB0ZXIuY2xpY2tUb0RpYWw7XHJcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7XHJcbiAgICAgICAgY2xpY2tUb0RpYWw6ICEhKHRoaXMuX2NsaWNrVG9EaWFsKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIF9vbkJyb3dzZXJBY3Rpb24odGFiKSB7XHJcbiAgICBpZiAodGhpcy5fY2hlY2tVcmwodGFiLnVybCkpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuX3NlcnZlci5fdGFyZ2V0LmNocm9tZUFkYXB0ZXIubWluaW1pemVkIHx8XHJcbiAgICAgICAgdGhpcy5fc2VydmVyLl90YXJnZXQuY2hyb21lQWRhcHRlci5jbG9zZWRcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmVyLl90YXJnZXQuY2hyb21lQWRhcHRlci5zaG93QWRhcHRlcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9jbGllbnRXaW5kb3cpIHtcclxuICAgICAgdGhpcy5fY2xpZW50V2luZG93ID0gY3JlYXRlV2luZG93KHtcclxuICAgICAgICB1cmw6ICcuL2NsaWVudC5odG1sJyxcclxuICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgIGhlaWdodDogNTQyLFxyXG4gICAgICAgIHRpdGxlOiBjb25maWcuYnJhbmRDb25maWcuYXBwTmFtZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX2NsaWVudFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmxvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fY2xpZW50V2luZG93ID0gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9jbGllbnRXaW5kb3cuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9FeHRlbnNpb25TZXJ2ZXJSdW5uZXIvaW5kZXguanMiLCJpbXBvcnQgUmNNb2R1bGUgZnJvbSAnLi4vUmNNb2R1bGUnO1xyXG5pbXBvcnQgYmFzZUFjdGlvblR5cGVzIGZyb20gJy4vYmFzZUFjdGlvblR5cGVzJztcclxuaW1wb3J0IGdldFByb3h5U2VydmVyUmVkdWNlciBmcm9tICcuL2dldFByb3h5U2VydmVyUmVkdWNlcic7XHJcbmltcG9ydCBlbnN1cmVFeGlzdCBmcm9tICcuLi9lbnN1cmVFeGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQcm94eVNlcnZlcihUYXJnZXQpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBSY01vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IHRyYW5zcG9ydCwgLi4ub3B0aW9ucyB9KSB7XHJcbiAgICAgIHN1cGVyKHtcclxuICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgIGFjdGlvblR5cGVzOiBiYXNlQWN0aW9uVHlwZXMsXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl90YXJnZXQgPSBuZXcgVGFyZ2V0KHtcclxuICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgIGdldFN0YXRlOiAoKSA9PiB0aGlzLnN0YXRlLnRhcmdldCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IHN1Yk1vZHVsZSBpbiB0aGlzLl90YXJnZXQpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLl90YXJnZXQ6Ok9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoc3ViTW9kdWxlKSAmJlxyXG4gICAgICAgICAgICB0aGlzLl90YXJnZXRbc3ViTW9kdWxlXSBpbnN0YW5jZW9mIFJjTW9kdWxlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgc3ViTW9kdWxlLCB7XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0W3N1Yk1vZHVsZV07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX3RyYW5zcG9ydCA9IHRoaXM6OmVuc3VyZUV4aXN0KHRyYW5zcG9ydCwgJ3RyYW5zcG9ydCcpO1xyXG4gICAgICB0aGlzLl9yZWR1Y2VyID0gZ2V0UHJveHlTZXJ2ZXJSZWR1Y2VyKHtcclxuICAgICAgICBtb2R1bGVSZWR1Y2VyOiB0aGlzLl90YXJnZXQucmVkdWNlcixcclxuICAgICAgICB0cmFuc3BvcnQsXHJcbiAgICAgICAgcHJlZml4OiB0aGlzLnByZWZpeCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0cmFuc3BvcnQub24oXHJcbiAgICAgICAgdHJhbnNwb3J0LmV2ZW50cy5yZXF1ZXN0LFxyXG4gICAgICAgIGFzeW5jICh7XHJcbiAgICAgICAgICByZXF1ZXN0SWQsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uUGF0aCxcclxuICAgICAgICAgICAgYXJncyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5hY3Rpb25UeXBlcy5leGVjdXRlOiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgWy4uLnBhdGhUb2tlbnNdID0gZnVuY3Rpb25QYXRoLnNwbGl0KCcuJykuc2xpY2UoMSk7XHJcbiAgICAgICAgICAgICAgY29uc3QgZm5OYW1lID0gcGF0aFRva2Vucy5wb3AoKTtcclxuICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5fdGFyZ2V0O1xyXG4gICAgICAgICAgICAgIHBhdGhUb2tlbnMuZm9yRWFjaCgodG9rZW4pID0+IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldFt0b2tlbl07XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRhcmdldFtmbk5hbWVdKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0LnJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgICAgcmVxdWVzdElkLFxyXG4gICAgICAgICAgICAgICAgICByZXN1bHQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0LnJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgICAgcmVxdWVzdElkLFxyXG4gICAgICAgICAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHRoaXMuYWN0aW9uVHlwZXMuc3luYzpcclxuICAgICAgICAgICAgICB0cmFuc3BvcnQucmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdElkLFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0OiB0aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgIHRyYW5zcG9ydC5yZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0SWQsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogbmV3IEVycm9yKGBJbnZhbGlkIHJlcXVlc3QgdHlwZSAnJHt0eXBlfScuYClcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9wcm94eS9nZXRQcm94eVNlcnZlci5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKSA/IGFyciA6ICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDE4Mzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsImltcG9ydCB7IHByZWZpeEVudW0gfSBmcm9tICcuLi9FbnVtJztcclxuaW1wb3J0IGJhc2VBY3Rpb25UeXBlcyBmcm9tICcuL2Jhc2VBY3Rpb25UeXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQcm94eVNlcnZlclJlZHVjZXIoeyBtb2R1bGVSZWR1Y2VyLCB0cmFuc3BvcnQsIHByZWZpeCB9KSB7XHJcbiAgY29uc3QgYWN0aW9uVHlwZXMgPSBwcmVmaXhFbnVtKHsgZW51bU1hcDogYmFzZUFjdGlvblR5cGVzLCBwcmVmaXggfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICB0YXJnZXQ6IG1vZHVsZVJlZHVjZXIodW5kZWZpbmVkLCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuaW5pdE1vZHVsZSxcclxuICAgICAgfSksXHJcbiAgICAgIGxhc3RBY3Rpb246IG51bGwsXHJcbiAgICAgIGFjdGlvbk51bWJlcjogLTEsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uLFxyXG4gICkgPT4ge1xyXG4gICAgaWYgKCFhY3Rpb24pIHJldHVybiBzdGF0ZTtcclxuICAgIGNvbnN0IG5leHRBY3Rpb25OdW1iZXIgPSBzdGF0ZS5hY3Rpb25OdW1iZXIgKyAxO1xyXG4gICAgdHJhbnNwb3J0LnB1c2goe1xyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuYWN0aW9uLFxyXG4gICAgICAgIGFjdGlvbixcclxuICAgICAgICBhY3Rpb25OdW1iZXI6IG5leHRBY3Rpb25OdW1iZXIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRhcmdldDogbW9kdWxlUmVkdWNlcihzdGF0ZS50YXJnZXQsIGFjdGlvbiksXHJcbiAgICAgIGxhc3RBY3Rpb246IGFjdGlvbixcclxuICAgICAgYWN0aW9uTnVtYmVyOiBuZXh0QWN0aW9uTnVtYmVyLFxyXG4gICAgfTtcclxuICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvcHJveHkvZ2V0UHJveHlTZXJ2ZXJSZWR1Y2VyLmpzIiwiLy8gVE9ETzogcmVmYWN0b3JcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlV2luZG93KHsgdXJsLCB0aXRsZSwgd2lkdGgsIGhlaWdodCwgcG9zaXRpb24gPSAnY2VudGVyJyB9KSB7XHJcbiAgY29uc3QgaXNNYWMgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ01hY2ludG9zaCcpID4gLTEgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdNYWMgT1MgWCcpID4gLTE7XHJcblxyXG4gIGNvbnN0IGR1YWxTY3JlZW5MZWZ0ID0gd2luZG93LnNjcmVlbkxlZnQgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogc2NyZWVuLmxlZnQ7XHJcbiAgY29uc3QgZHVhbFNjcmVlblRvcCA9IHdpbmRvdy5zY3JlZW5Ub3AgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5Ub3AgOiBzY3JlZW4udG9wO1xyXG5cclxuICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBzY3JlZW4ud2lkdGg7XHJcbiAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfHwgc2NyZWVuLmhlaWdodDtcclxuXHJcbiAgbGV0IHRvcDtcclxuICBsZXQgbGVmdDtcclxuICBzd2l0Y2ggKHBvc2l0aW9uKSB7XHJcbiAgICBjYXNlICdib3R0b20tcmlnaHQnOlxyXG4gICAgICB0b3AgPSB3aW5kb3dIZWlnaHQgLSBoZWlnaHQgKyBkdWFsU2NyZWVuVG9wO1xyXG4gICAgICBsZWZ0ID0gd2luZG93V2lkdGggLSB3aWR0aCArIGR1YWxTY3JlZW5MZWZ0O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2NlbnRlcic6XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0b3AgPSAoKHdpbmRvd0hlaWdodCAvIDIpIC0gKGhlaWdodCAvIDIpKSArIGR1YWxTY3JlZW5Ub3A7XHJcbiAgICAgIGxlZnQgPSAoKHdpbmRvd1dpZHRoIC8gMikgLSAod2lkdGggLyAyKSkgKyBkdWFsU2NyZWVuTGVmdDtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICBpZiAoIWlzTWFjKSB7XHJcbiAgICB3aWR0aCArPSAxNjtcclxuICAgIGhlaWdodCArPSAxNjtcclxuICB9XHJcblxyXG4gIGNvbnN0IG5ld1dpbmRvdyA9IHdpbmRvdy5vcGVuKFxyXG4gICAgdXJsLFxyXG4gICAgdGl0bGUsXHJcbiAgICBgc2Nyb2xsYmFycz15ZXMsIHJlc2l6YWJsZT1ubywgd2lkdGg9JHt3aWR0aH0sIGhlaWdodD0ke2hlaWdodH0sIHRvcD0ke3RvcH0sIGxlZnQ9JHtsZWZ0fWAsXHJcbiAgKTtcclxuXHJcbiAgaWYgKHdpbmRvdy5mb2N1cykge1xyXG4gICAgbmV3V2luZG93LmZvY3VzKCk7XHJcbiAgfVxyXG4gIHJldHVybiBuZXdXaW5kb3c7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9jcmVhdGVXaW5kb3cuanMiXSwic291cmNlUm9vdCI6IiJ9