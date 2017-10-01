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
          userId = _props.userId;

      if (userId) {
        return posts.filter(function (post) {
          return post.userId === userId || post.liked;
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
        css: 'main[data-jsx="3493031076"]{padding-bottom:120px;border-bottom:1px solid ' + _cssConstants.colors.lightGrey + '}.posts[data-jsx="3493031076"]{padding:50px 0 60px 0;margin:0 auto;width:575px}.load-more[data-jsx="3493031076"]{color:' + _cssConstants.colors.lightGrey + ';font-size:10px;font-weight:700;text-align:center}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJvQixBQUdrQyxBQUlDLEFBS2EscUJBUmtCLENBSXZDLGFBS0MsQ0FKSCxZQUNkLEVBSWtCLGdCQUNFLFFBVnBCLFVBV0EiLCJmaWxlIjoiY29tcG9uZW50cy9Qb3N0cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9zaW1wbHlzb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvc3QgZnJvbSAnLi9Qb3N0J1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vc3RhdGljL2Nzcy1jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIG1hcFBvc3RzKCkge1xuICAgIGNvbnN0IHsgcG9zdHMsIHVzZXJJZCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodXNlcklkKSB7XG4gICAgICByZXR1cm4gcG9zdHMuZmlsdGVyKHBvc3QgPT4gcG9zdC51c2VySWQgPT09IHVzZXJJZCB8fCBwb3N0Lmxpa2VkKS5tYXAocG9zdCA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFBvc3QgeyAuLi5wb3N0IH0ga2V5PXtwb3N0LmlkfS8+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBvc3RzLm1hcChwb3N0ID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQb3N0IHsgLi4ucG9zdCB9IGtleT17cG9zdC5pZH0vPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicG9zdHNcIj57dGhpcy5tYXBQb3N0cygpfTwvdWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZC1tb3JlXCI+TE9BRCBNT1JFPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2NvbG9ycy5saWdodEdyZXl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9zdHMge1xuICAgICAgICAgICAgcGFkZGluZzogNTBweCAwIDYwcHggMDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDU3NXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubG9hZC1tb3JlIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5saWdodEdyZXl9O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbWFpbj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/Posts.js */'
      }));
    }
  }]);

  return Posts;
}(_react.Component);

exports.default = Posts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdHMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQb3N0IiwiY29sb3JzIiwiUG9zdHMiLCJwcm9wcyIsInBvc3RzIiwidXNlcklkIiwiZmlsdGVyIiwicG9zdCIsImxpa2VkIiwibWFwIiwiaWQiLCJtYXBQb3N0cyIsImxpZ2h0R3JleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBUzs7Ozs7OztJQUVZLEE7Ozs7Ozs7Ozs7OytCQUNSO21CQUNpQixLQURqQixBQUNzQjtVQUR0QixBQUNELGVBREMsQUFDRDtVQURDLEFBQ00sZ0JBRE4sQUFDTSxBQUNmOztVQUFBLEFBQUksUUFBUSxBQUNWO3FCQUFPLEFBQU0sT0FBTyxnQkFBQTtpQkFBUSxLQUFBLEFBQUssV0FBTCxBQUFnQixVQUFVLEtBQWxDLEFBQXVDO0FBQXBELFNBQUEsRUFBQSxBQUEyRCxJQUFJLGdCQUFRLEFBQzVFO2lDQUNFLEFBQUMseURBQUQsQUFBVyxRQUFPLEtBQUssS0FBdkIsQUFBNEI7d0JBQTVCOzBCQURGLEFBQ0UsQUFFSDtBQUZHO1lBQUE7QUFGSixBQUFPLEFBS1I7QUFDRDttQkFBTyxBQUFNLElBQUksZ0JBQVEsQUFDdkI7K0JBQ0UsQUFBQyx5REFBRCxBQUFXLFFBQU8sS0FBSyxLQUF2QixBQUE0QjtzQkFBNUI7d0JBREYsQUFDRSxBQUVIO0FBRkc7VUFBQTtBQUZKLEFBQU8sQUFLUixPQUxROzs7OzZCQU1BLEFBQ1A7NkJBQ0UsY0FBQTtvQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBLFFBQUksV0FBSixBQUFjLHFCQUFkOztvQkFBQTtzQkFBQSxBQUF1QjtBQUF2QjtjQURGLEFBQ0UsQUFBdUIsQUFBSyxBQUM1Qiw2QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlLHlCQUFmOztvQkFBQTtzQkFBQTtBQUFBO1NBRkYsQUFFRTtpQkFGRjsyRkF0QnNFLHFCQUFPLEFBc0I3RSx3SUF0QmdOLHFCQUFPLEFBc0J2TixZQURGLEFBQ0UsQUFzQkg7QUF0Qkc7Ozs7O0FBbEI2QixBOztrQkFBZCxBIiwiZmlsZSI6IlBvc3RzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lcmljL2Rldi9jaGFsbGVuZ2VzL3NpbXBseXNvY2lhbCJ9