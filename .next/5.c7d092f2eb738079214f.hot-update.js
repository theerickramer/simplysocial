webpackHotUpdate(5,{

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(134);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(30);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(31);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(55);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(59);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(553);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(27);

var _react2 = _interopRequireDefault(_react);

var _Post = __webpack_require__(562);

var _Post2 = _interopRequireDefault(_Post);

var _cssConstants = __webpack_require__(554);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/eric/dev/challenges/Invision/simplysocial/components/Posts.js';


var Posts = function (_Component) {
  (0, _inherits3.default)(Posts, _Component);

  function Posts() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Posts);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Posts.__proto__ || (0, _getPrototypeOf2.default)(Posts)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      posts: [{ id: 1, avatar: '/static/images/user-avatar.png', name: 'Suzanne Ciani', text: 'Wow wow wow Wow wow wow Wow wow so so so so so so so so cool <a href="http://google.com">http://google.com</a>', time: '7hr', liked: false, more: true }, { id: 2, avatar: '/static/images/user-avatar.png', name: 'Eliane Radigue', text: 'Beautiful', time: '8hr', liked: false, more: false, image: '/static/images/photo.png' }]
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Posts, [{
    key: 'mapPosts',
    value: function mapPosts() {
      return this.state.posts.map(function (post) {
        return _react2.default.createElement(_Post2.default, (0, _extends3.default)({}, post, { key: post.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('main', {
        'data-jsx': 2934375098,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('ul', { className: 'posts', 'data-jsx': 2934375098,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, this.mapPosts()), _react2.default.createElement('div', { className: 'load-more', 'data-jsx': 2934375098,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, 'LOAD MORE'), _react2.default.createElement(_style2.default, {
        styleId: 2934375098,
        css: 'main[data-jsx="2934375098"]{padding-bottom:120px}.posts[data-jsx="2934375098"]{padding:50px 0 60px 0;margin:0 auto;width:575px}.load-more[data-jsx="2934375098"]{margin:0 auto;color:' + _cssConstants.colors.lightGrey + ';font-size:10px;font-weight:700;text-align:center}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJvQixBQUdrQyxBQUdDLEFBS1IsY0FDcUIsT0FSckMsQ0FHZ0IsY0FDRixZQUNkLENBSWlCLGVBQ0MsZ0JBQ0Usa0JBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHMvUG9zdHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VyaWMvZGV2L2NoYWxsZW5nZXMvSW52aXNpb24vc2ltcGx5c29jaWFsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQb3N0IGZyb20gJy4vUG9zdCdcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uL3N0YXRpYy9jc3MtY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBwb3N0czogW1xuICAgICAgeyBpZDogMSwgYXZhdGFyOiAnL3N0YXRpYy9pbWFnZXMvdXNlci1hdmF0YXIucG5nJywgbmFtZTogJ1N1emFubmUgQ2lhbmknLCB0ZXh0OiAnV293IHdvdyB3b3cgV293IHdvdyB3b3cgV293IHdvdyBzbyBzbyBzbyBzbyBzbyBzbyBzbyBzbyBjb29sIDxhIGhyZWY9XCJodHRwOi8vZ29vZ2xlLmNvbVwiPmh0dHA6Ly9nb29nbGUuY29tPC9hPicsIHRpbWU6ICc3aHInLCBsaWtlZDogZmFsc2UsIG1vcmU6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDIsIGF2YXRhcjogJy9zdGF0aWMvaW1hZ2VzL3VzZXItYXZhdGFyLnBuZycsIG5hbWU6ICdFbGlhbmUgUmFkaWd1ZScsIHRleHQ6ICdCZWF1dGlmdWwnLCB0aW1lOiAnOGhyJywgbGlrZWQ6IGZhbHNlLCBtb3JlOiBmYWxzZSwgaW1hZ2U6ICcvc3RhdGljL2ltYWdlcy9waG90by5wbmcnIH1cbiAgICBdXG4gIH07XG4gIG1hcFBvc3RzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnBvc3RzLm1hcChwb3N0ID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQb3N0IHsgLi4ucG9zdCB9IGtleT17cG9zdC5pZH0vPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicG9zdHNcIj57dGhpcy5tYXBQb3N0cygpfTwvdWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZC1tb3JlXCI+TE9BRCBNT1JFPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RzIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMCA2MHB4IDA7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiA1NzVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvYWQtbW9yZSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5saWdodEdyZXl9O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbWFpbj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/Posts.js */'
      }));
    }
  }]);

  return Posts;
}(_react.Component);

exports.default = Posts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdHMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQb3N0IiwiY29sb3JzIiwiUG9zdHMiLCJzdGF0ZSIsInBvc3RzIiwiaWQiLCJhdmF0YXIiLCJuYW1lIiwidGV4dCIsInRpbWUiLCJsaWtlZCIsIm1vcmUiLCJpbWFnZSIsIm1hcCIsInBvc3QiLCJtYXBQb3N0cyIsImxpZ2h0R3JleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBUzs7Ozs7OztJQUVZLEE7Ozs7Ozs7Ozs7Ozs7OzBNQUNuQixBO2FBQ1MsQ0FDTCxFQUFFLElBQUYsQUFBTSxHQUFHLFFBQVQsQUFBaUIsa0NBQWtDLE1BQW5ELEFBQXlELGlCQUFpQixNQUExRSxBQUFnRixrSEFBa0gsTUFBbE0sQUFBd00sT0FBTyxPQUEvTSxBQUFzTixPQUFPLE1BRHhOLEFBQ0wsQUFBbU8sUUFDbk8sRUFBRSxJQUFGLEFBQU0sR0FBRyxRQUFULEFBQWlCLGtDQUFrQyxNQUFuRCxBQUF5RCxrQkFBa0IsTUFBM0UsQUFBaUYsYUFBYSxNQUE5RixBQUFvRyxPQUFPLE9BQTNHLEFBQWtILE9BQU8sTUFBekgsQUFBK0gsT0FBTyxPQUhsSSxBQUNDLEFBRUwsQUFBNkksQTtBQUh6SSxBQUNOOzs7OzsrQkFLUyxBQUNUO2tCQUFPLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsSUFBSSxnQkFBUSxBQUNsQzsrQkFDRSxBQUFDLHlEQUFELEFBQVcsUUFBTyxLQUFLLEtBQXZCLEFBQTRCO3NCQUE1Qjt3QkFERixBQUNFLEFBRUg7QUFGRztVQUFBO0FBRkosQUFBTyxBQUtSLE9BTFE7Ozs7NkJBTUEsQUFDUDs2QkFDRSxjQUFBO29CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWMscUJBQWQ7O29CQUFBO3NCQUFBLEFBQXVCO0FBQXZCO2NBREYsQUFDRSxBQUF1QixBQUFLLEFBQzVCLDZCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWUseUJBQWY7O29CQUFBO3NCQUFBO0FBQUE7U0FGRixBQUVFO2lCQUZGO3VNQXBCa0wscUJBQU8sQUFvQnpMLFlBREYsQUFDRSxBQXNCSDtBQXRCRzs7Ozs7QUFoQjZCLEE7O2tCQUFkLEEiLCJmaWxlIjoiUG9zdHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VyaWMvZGV2L2NoYWxsZW5nZXMvSW52aXNpb24vc2ltcGx5c29jaWFsIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/eric/dev/challenges/Invision/simplysocial/components/Posts.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/eric/dev/challenges/Invision/simplysocial/components/Posts.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jN2QwOTJmMmViNzM4MDc5MjE0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0cy5qcz8xMGYwMjVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUG9zdCBmcm9tICcuL1Bvc3QnXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi9zdGF0aWMvY3NzLWNvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgcG9zdHM6IFtcbiAgICAgIHsgaWQ6IDEsIGF2YXRhcjogJy9zdGF0aWMvaW1hZ2VzL3VzZXItYXZhdGFyLnBuZycsIG5hbWU6ICdTdXphbm5lIENpYW5pJywgdGV4dDogJ1dvdyB3b3cgd293IFdvdyB3b3cgd293IFdvdyB3b3cgc28gc28gc28gc28gc28gc28gc28gc28gY29vbCA8YSBocmVmPVwiaHR0cDovL2dvb2dsZS5jb21cIj5odHRwOi8vZ29vZ2xlLmNvbTwvYT4nLCB0aW1lOiAnN2hyJywgbGlrZWQ6IGZhbHNlLCBtb3JlOiB0cnVlIH0sXG4gICAgICB7IGlkOiAyLCBhdmF0YXI6ICcvc3RhdGljL2ltYWdlcy91c2VyLWF2YXRhci5wbmcnLCBuYW1lOiAnRWxpYW5lIFJhZGlndWUnLCB0ZXh0OiAnQmVhdXRpZnVsJywgdGltZTogJzhocicsIGxpa2VkOiBmYWxzZSwgbW9yZTogZmFsc2UsIGltYWdlOiAnL3N0YXRpYy9pbWFnZXMvcGhvdG8ucG5nJyB9XG4gICAgXVxuICB9O1xuICBtYXBQb3N0cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5wb3N0cy5tYXAocG9zdCA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UG9zdCB7IC4uLnBvc3QgfSBrZXk9e3Bvc3QuaWR9Lz5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBvc3RzXCI+e3RoaXMubWFwUG9zdHMoKX08L3VsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWQtbW9yZVwiPkxPQUQgTU9SRTwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0cyB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDAgNjBweCAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB3aWR0aDogNTc1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2FkLW1vcmUge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L21haW4+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb3N0cy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTs7Ozs7QUFNQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUdBOzs7O0FBRUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFwQkE7QUFvQkE7Ozs7O0FBaEJBO0FBQ0E7QUFEQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9