'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Post = require('./Post');

var _Post2 = _interopRequireDefault(_Post);

var _cssConstants = require('../static/css-constants');

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