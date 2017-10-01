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
      var _props = this.props,
          posts = _props.posts,
          user = _props.user;

      if (user) {
        return posts.filter(function (post) {
          return post.id === user || post.liked;
        }).map(function (post) {
          return _react2.default.createElement(_Post2.default, (0, _extends3.default)({}, post, { key: post.id, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          }));
        });
      }
      return posts.map(function (post) {
        return _react2.default.createElement(_Post2.default, (0, _extends3.default)({}, post, { key: post.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
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
          lineNumber: 23
        }
      }, _react2.default.createElement('ul', { className: 'posts', 'data-jsx': 3493031076,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, this.mapPosts()), _react2.default.createElement('div', { className: 'load-more', 'data-jsx': 3493031076,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, 'LOAD MORE'), _react2.default.createElement(_style2.default, {
        styleId: 3493031076,
        css: 'main[data-jsx="3493031076"]{padding-bottom:120px;border-bottom:1px solid ' + _cssConstants.colors.lightGrey + '}.posts[data-jsx="3493031076"]{padding:50px 0 60px 0;margin:0 auto;width:575px}.load-more[data-jsx="3493031076"]{color:' + _cssConstants.colors.lightGrey + ';font-size:10px;font-weight:700;text-align:center}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJvQixBQUdrQyxBQUlDLEFBS2EscUJBUmtCLENBSXZDLGFBS0MsQ0FKSCxZQUNkLEVBSWtCLGdCQUNFLFFBVnBCLFVBV0EiLCJmaWxlIjoiY29tcG9uZW50cy9Qb3N0cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9zaW1wbHlzb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvc3QgZnJvbSAnLi9Qb3N0J1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vc3RhdGljL2Nzcy1jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIG1hcFBvc3RzKCkge1xuICAgIGNvbnN0IHsgcG9zdHMsIHVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIHJldHVybiBwb3N0cy5maWx0ZXIocG9zdCA9PiBwb3N0LmlkID09PSB1c2VyIHx8IHBvc3QubGlrZWQpLm1hcChwb3N0ID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UG9zdCB7IC4uLnBvc3QgfSBrZXk9e3Bvc3QuaWR9Lz5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcG9zdHMubWFwKHBvc3QgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBvc3QgeyAuLi5wb3N0IH0ga2V5PXtwb3N0LmlkfS8+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJwb3N0c1wiPnt0aGlzLm1hcFBvc3RzKCl9PC91bD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkLW1vcmVcIj5MT0FEIE1PUkU8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0cyB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDAgNjBweCAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB3aWR0aDogNTc1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2FkLW1vcmUge1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9tYWluPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Posts.js */'
      }));
    }
  }]);

  return Posts;
}(_react.Component);

exports.default = Posts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdHMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQb3N0IiwiY29sb3JzIiwiUG9zdHMiLCJwcm9wcyIsInBvc3RzIiwidXNlciIsImZpbHRlciIsInBvc3QiLCJpZCIsImxpa2VkIiwibWFwIiwibWFwUG9zdHMiLCJsaWdodEdyZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQVM7Ozs7Ozs7SUFFWSxBOzs7Ozs7Ozs7OzsrQkFDUjttQkFDZSxLQURmLEFBQ29CO1VBRHBCLEFBQ0QsZUFEQyxBQUNEO1VBREMsQUFDTSxjQUROLEFBQ00sQUFDZjs7VUFBQSxBQUFJLE1BQU0sQUFDUjtxQkFBTyxBQUFNLE9BQU8sZ0JBQUE7aUJBQVEsS0FBQSxBQUFLLE9BQUwsQUFBWSxRQUFRLEtBQTVCLEFBQWlDO0FBQTlDLFNBQUEsRUFBQSxBQUFxRCxJQUFJLGdCQUFRLEFBQ3RFO2lDQUNFLEFBQUMseURBQUQsQUFBVyxRQUFPLEtBQUssS0FBdkIsQUFBNEI7d0JBQTVCOzBCQURGLEFBQ0UsQUFFSDtBQUZHO1lBQUE7QUFGSixBQUFPLEFBS1I7QUFDRDttQkFBTyxBQUFNLElBQUksZ0JBQVEsQUFDdkI7K0JBQ0UsQUFBQyx5REFBRCxBQUFXLFFBQU8sS0FBSyxLQUF2QixBQUE0QjtzQkFBNUI7d0JBREYsQUFDRSxBQUVIO0FBRkc7VUFBQTtBQUZKLEFBQU8sQUFLUixPQUxROzs7OzZCQU1BLEFBQ1A7NkJBQ0UsY0FBQTtvQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBLFFBQUksV0FBSixBQUFjLHFCQUFkOztvQkFBQTtzQkFBQSxBQUF1QjtBQUF2QjtjQURGLEFBQ0UsQUFBdUIsQUFBSyxBQUM1Qiw2QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlLHlCQUFmOztvQkFBQTtzQkFBQTtBQUFBO1NBRkYsQUFFRTtpQkFGRjsyRkF0QnNFLHFCQUFPLEFBc0I3RSx3SUF0QmdOLHFCQUFPLEFBc0J2TixZQURGLEFBQ0UsQUFzQkg7QUF0Qkc7Ozs7O0FBbEI2QixBOztrQkFBZCxBIiwiZmlsZSI6IlBvc3RzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lcmljL2Rldi9jaGFsbGVuZ2VzL3NpbXBseXNvY2lhbCJ9