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
      posts: [{ id: 1, avatar: '/static/images/user-avatar.png', name: 'Jenny Tran', text: 'Wow wow wow so cool <a href="http://google.com">http://google.com</a>', time: '7hr', liked: false, more: true }, { id: 2, avatar: '/static/images/user-avatar.png', name: 'Alessandro Alessandros', text: 'Beautiful', time: '8hr', liked: false, more: false, image: '/static/images/photo.png' }]
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
        'data-jsx': 3478091717,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('ul', { className: 'posts', 'data-jsx': 3478091717,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, this.mapPosts()), _react2.default.createElement(_style2.default, {
        styleId: 3478091717,
        css: '.posts[data-jsx="3478091717"]{padding-top:50px;margin:0 auto;width:575px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JvQixBQUc4QixpQkFDSCxjQUNGLFlBQ2QiLCJmaWxlIjoiY29tcG9uZW50cy9Qb3N0cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9JbnZpc2lvbi9zaW1wbHlzb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvc3QgZnJvbSAnLi9Qb3N0J1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vc3RhdGljL2Nzcy1jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHBvc3RzOiBbXG4gICAgICB7IGlkOiAxLCBhdmF0YXI6ICcvc3RhdGljL2ltYWdlcy91c2VyLWF2YXRhci5wbmcnLCBuYW1lOiAnSmVubnkgVHJhbicsIHRleHQ6ICdXb3cgd293IHdvdyBzbyBjb29sIDxhIGhyZWY9XCJodHRwOi8vZ29vZ2xlLmNvbVwiPmh0dHA6Ly9nb29nbGUuY29tPC9hPicsIHRpbWU6ICc3aHInLCBsaWtlZDogZmFsc2UsIG1vcmU6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDIsIGF2YXRhcjogJy9zdGF0aWMvaW1hZ2VzL3VzZXItYXZhdGFyLnBuZycsIG5hbWU6ICdBbGVzc2FuZHJvIEFsZXNzYW5kcm9zJywgdGV4dDogJ0JlYXV0aWZ1bCcsIHRpbWU6ICc4aHInLCBsaWtlZDogZmFsc2UsIG1vcmU6IGZhbHNlLCBpbWFnZTogJy9zdGF0aWMvaW1hZ2VzL3Bob3RvLnBuZycgfVxuICAgIF1cbiAgfTtcbiAgbWFwUG9zdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucG9zdHMubWFwKHBvc3QgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBvc3QgeyAuLi5wb3N0IH0ga2V5PXtwb3N0LmlkfS8+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJwb3N0c1wiPnt0aGlzLm1hcFBvc3RzKCl9PC91bD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5wb3N0cyB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDU3NXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9tYWluPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Posts.js */'
      }));
    }
  }]);

  return Posts;
}(_react.Component);

exports.default = Posts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdHMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQb3N0IiwiY29sb3JzIiwiUG9zdHMiLCJzdGF0ZSIsInBvc3RzIiwiaWQiLCJhdmF0YXIiLCJuYW1lIiwidGV4dCIsInRpbWUiLCJsaWtlZCIsIm1vcmUiLCJpbWFnZSIsIm1hcCIsInBvc3QiLCJtYXBQb3N0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBUzs7Ozs7OztJLEFBRVk7Ozs7Ozs7Ozs7Ozs7OzBNLEFBQ25CO2FBQ1MsQ0FDTCxFQUFFLElBQUYsQUFBTSxHQUFHLFFBQVQsQUFBaUIsa0NBQWtDLE1BQW5ELEFBQXlELGNBQWMsTUFBdkUsQUFBNkUseUVBQXlFLE1BQXRKLEFBQTRKLE9BQU8sT0FBbkssQUFBMEssT0FBTyxNQUQ1SyxBQUNMLEFBQXVMLFFBQ3ZMLEVBQUUsSUFBRixBQUFNLEdBQUcsUUFBVCxBQUFpQixrQ0FBa0MsTUFBbkQsQUFBeUQsMEJBQTBCLE1BQW5GLEFBQXlGLGFBQWEsTUFBdEcsQUFBNEcsT0FBTyxPQUFuSCxBQUEwSCxPQUFPLE1BQWpJLEFBQXVJLE9BQU8sT0FIMUksQUFDQyxBQUVMLEFBQXFKLEE7QUFIakosQUFDTjs7Ozs7K0JBS1MsQUFDVDtrQkFBTyxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLElBQUksZ0JBQVEsQUFDbEM7K0JBQ0UsQUFBQyx5REFBRCxBQUFXLFFBQU8sS0FBSyxLQUF2QixBQUE0QjtzQkFBNUI7d0JBREYsQUFDRSxBQUVIO0FBRkc7VUFBQTtBQUZKLEFBQU8sQUFLUixPQUxROzs7OzZCQU1BLEFBQ1A7NkJBQ0UsY0FBQTtvQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBLFFBQUksV0FBSixBQUFjLHFCQUFkOztvQkFBQTtzQkFBQSxBQUF1QjtBQUF2QjtjQURGLEFBQ0UsQUFBdUIsQUFBSztpQkFEOUI7YUFERixBQUNFLEFBV0g7QUFYRzs7Ozs7QUFoQjZCLEE7O2tCQUFkLEEiLCJmaWxlIjoiUG9zdHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VyaWMvZGV2L2NoYWxsZW5nZXMvSW52aXNpb24vc2ltcGx5c29jaWFsIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/eric/dev/challenges/Invision/simplysocial/components/Posts.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/eric/dev/challenges/Invision/simplysocial/components/Posts.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jZjlhZGQwM2VmODNhMTNlOWRhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0cy5qcz9iZGM5MzM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUG9zdCBmcm9tICcuL1Bvc3QnXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi9zdGF0aWMvY3NzLWNvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgcG9zdHM6IFtcbiAgICAgIHsgaWQ6IDEsIGF2YXRhcjogJy9zdGF0aWMvaW1hZ2VzL3VzZXItYXZhdGFyLnBuZycsIG5hbWU6ICdKZW5ueSBUcmFuJywgdGV4dDogJ1dvdyB3b3cgd293IHNvIGNvb2wgPGEgaHJlZj1cImh0dHA6Ly9nb29nbGUuY29tXCI+aHR0cDovL2dvb2dsZS5jb208L2E+JywgdGltZTogJzdocicsIGxpa2VkOiBmYWxzZSwgbW9yZTogdHJ1ZSB9LFxuICAgICAgeyBpZDogMiwgYXZhdGFyOiAnL3N0YXRpYy9pbWFnZXMvdXNlci1hdmF0YXIucG5nJywgbmFtZTogJ0FsZXNzYW5kcm8gQWxlc3NhbmRyb3MnLCB0ZXh0OiAnQmVhdXRpZnVsJywgdGltZTogJzhocicsIGxpa2VkOiBmYWxzZSwgbW9yZTogZmFsc2UsIGltYWdlOiAnL3N0YXRpYy9pbWFnZXMvcGhvdG8ucG5nJyB9XG4gICAgXVxuICB9O1xuICBtYXBQb3N0cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5wb3N0cy5tYXAocG9zdCA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UG9zdCB7IC4uLnBvc3QgfSBrZXk9e3Bvc3QuaWR9Lz5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBvc3RzXCI+e3RoaXMubWFwUG9zdHMoKX08L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnBvc3RzIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB3aWR0aDogNTc1cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L21haW4+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb3N0cy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTs7Ozs7QUFNQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUdBOzs7O0FBRUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFXQTtBQVhBOzs7OztBQWhCQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==