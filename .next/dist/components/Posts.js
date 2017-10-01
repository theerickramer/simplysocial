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

var _jsxFileName = '/Users/eric/dev/challenges/simplysocial/components/Posts.js';


var Posts = function (_Component) {
  (0, _inherits3.default)(Posts, _Component);

  function Posts() {
    (0, _classCallCheck3.default)(this, Posts);

    return (0, _possibleConstructorReturn3.default)(this, (Posts.__proto__ || (0, _getPrototypeOf2.default)(Posts)).apply(this, arguments));
  }

  (0, _createClass3.default)(Posts, [{
    key: 'mapPosts',
    value: function mapPosts() {
      return this.props.posts.map(function (post) {
        return _react2.default.createElement(_Post2.default, (0, _extends3.default)({}, post, { key: post.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        }));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('main', {
        'data-jsx': 3493031076,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('ul', { className: 'posts', 'data-jsx': 3493031076,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, this.mapPosts()), _react2.default.createElement('div', { className: 'load-more', 'data-jsx': 3493031076,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, 'LOAD MORE'), _react2.default.createElement(_style2.default, {
        styleId: 3493031076,
        css: 'main[data-jsx="3493031076"]{padding-bottom:120px;border-bottom:1px solid ' + _cssConstants.colors.lightGrey + '}.posts[data-jsx="3493031076"]{padding:50px 0 60px 0;margin:0 auto;width:575px}.load-more[data-jsx="3493031076"]{color:' + _cssConstants.colors.lightGrey + ';font-size:10px;font-weight:700;text-align:center}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJvQixBQUdrQyxBQUlDLEFBS2EscUJBUmtCLENBSXZDLGFBS0MsQ0FKSCxZQUNkLEVBSWtCLGdCQUNFLFFBVnBCLFVBV0EiLCJmaWxlIjoiY29tcG9uZW50cy9Qb3N0cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9zaW1wbHlzb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvc3QgZnJvbSAnLi9Qb3N0J1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vc3RhdGljL2Nzcy1jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIG1hcFBvc3RzKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnBvc3RzLm1hcChwb3N0ID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQb3N0IHsgLi4ucG9zdCB9IGtleT17cG9zdC5pZH0vPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicG9zdHNcIj57dGhpcy5tYXBQb3N0cygpfTwvdWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZC1tb3JlXCI+TE9BRCBNT1JFPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2NvbG9ycy5saWdodEdyZXl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9zdHMge1xuICAgICAgICAgICAgcGFkZGluZzogNTBweCAwIDYwcHggMDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDU3NXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubG9hZC1tb3JlIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5saWdodEdyZXl9O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbWFpbj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/Posts.js */'
      }));
    }
  }]);

  return Posts;
}(_react.Component);

exports.default = Posts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdHMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQb3N0IiwiY29sb3JzIiwiUG9zdHMiLCJwcm9wcyIsInBvc3RzIiwibWFwIiwicG9zdCIsImlkIiwibWFwUG9zdHMiLCJsaWdodEdyZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQVM7Ozs7Ozs7SUFFWSxBOzs7Ozs7Ozs7OzsrQkFDUixBQUNUO2tCQUFPLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsSUFBSSxnQkFBUSxBQUNsQzsrQkFDRSxBQUFDLHlEQUFELEFBQVcsUUFBTyxLQUFLLEtBQXZCLEFBQTRCO3NCQUE1Qjt3QkFERixBQUNFLEFBRUg7QUFGRztVQUFBO0FBRkosQUFBTyxBQUtSLE9BTFE7Ozs7NkJBTUEsQUFDUDs2QkFDRSxjQUFBO29CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWMscUJBQWQ7O29CQUFBO3NCQUFBLEFBQXVCO0FBQXZCO2NBREYsQUFDRSxBQUF1QixBQUFLLEFBQzVCLDZCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWUseUJBQWY7O29CQUFBO3NCQUFBO0FBQUE7U0FGRixBQUVFO2lCQUZGOzJGQWRzRSxxQkFBTyxBQWM3RSx3SUFkZ04scUJBQU8sQUFjdk4sWUFERixBQUNFLEFBc0JIO0FBdEJHOzs7OztBQVY2QixBOztrQkFBZCxBIiwiZmlsZSI6IlBvc3RzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lcmljL2Rldi9jaGFsbGVuZ2VzL3NpbXBseXNvY2lhbCJ9