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

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Nav = require('../components/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _NewMessage = require('../components/NewMessage');

var _NewMessage2 = _interopRequireDefault(_NewMessage);

var _SubNavHome = require('../components/SubNavHome');

var _SubNavHome2 = _interopRequireDefault(_SubNavHome);

var _Posts = require('../components/Posts');

var _Posts2 = _interopRequireDefault(_Posts);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _cssConstants = require('../static/css-constants');

var _store = require('../redux/store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/eric/dev/challenges/simplysocial/pages/index.js?entry';


var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        'data-jsx': 1079452344,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_Nav2.default, { avatar: this.props.user.avatar, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_NewMessage2.default, (0, _extends3.default)({}, this.props.user, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }))), _react2.default.createElement(_SubNavHome2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement(_Posts2.default, { posts: this.props.posts, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement(_Footer2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 1079452344,
        css: '@import url(\'https://fonts.googleapis.com/css?family=Open+Sans\');@import url(\'https://fonts.googleapis.com/css?family=Open+Sans:700\');@import url(\'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300\');body{margin:0;font-family:' + _cssConstants.fonts.openSans + '}ul{list-style-type:none;margin:0;padding:0}textarea{outline:none;background:transparent;border:none;resize:none}h1,h2,h3,h4,h5,h6,p{margin:0}p,span{font-size:14px}a{color:' + _cssConstants.colors.lightGrey + ' !important;cursor:auto !important;text-decoration:none !important}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCMkIsQUFFMkUsQUFDSSxBQUNNLEFBRy9ELEFBS1ksQUFNUixBQWFKLEFBS00sQUFJK0IsU0FoQ0wsQUF3QjNDLElBYnlCLEVBa0J6QixNQXhCVyxTQUNDLE1BTUUsSUFMZCxNQTBCeUIsRUFwQlgsRUFaZCxVQWFBLFNBb0JrQyxnQ0FDbEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VyaWMvZGV2L2NoYWxsZW5nZXMvc2ltcGx5c29jaWFsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XG5pbXBvcnQgTmV3TWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnRzL05ld01lc3NhZ2UnO1xuaW1wb3J0IFN1Yk5hdkhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9TdWJOYXZIb21lJztcbmltcG9ydCBQb3N0cyBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IHsgY29sb3JzLCBmb250cyB9IGZyb20gJy4uL3N0YXRpYy9jc3MtY29uc3RhbnRzJztcbmltcG9ydCB7IG1ha2VTdG9yZSB9IGZyb20gJy4uL3JlZHV4L3N0b3JlJztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2IGF2YXRhcj17dGhpcy5wcm9wcy51c2VyLmF2YXRhcn0gLz5cbiAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICA8TmV3TWVzc2FnZSB7Li4udGhpcy5wcm9wcy51c2VyfSAvPlxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgPFN1Yk5hdkhvbWUgLz5cbiAgICAgICAgPFBvc3RzIHBvc3RzPXt0aGlzLnByb3BzLnBvc3RzfSAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMnKTtcbiAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo3MDAnKTtcbiAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1BybzozMDAnKTtcblxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udHMub3BlblNhbnN9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxLFxuICAgICAgICAgIGgyLFxuICAgICAgICAgIGgzLFxuICAgICAgICAgIGg0LFxuICAgICAgICAgIGg1LFxuICAgICAgICAgIGg2LFxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHAsXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubGlnaHRHcmV5fSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY3Vyc29yOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KG1ha2VTdG9yZSwgc3RhdGUgPT4gc3RhdGUpKEFwcCk7XG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }]);

  return App;
}(_react.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.makeStore, function (state) {
  return state;
})(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZGVyIiwiTmF2IiwiTmV3TWVzc2FnZSIsIlN1Yk5hdkhvbWUiLCJQb3N0cyIsIkZvb3RlciIsImNvbG9ycyIsImZvbnRzIiwibWFrZVN0b3JlIiwid2l0aFJlZHV4IiwiQXBwIiwicHJvcHMiLCJ1c2VyIiwiYXZhdGFyIiwicG9zdHMiLCJvcGVuU2FucyIsImxpZ2h0R3JleSIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBUTs7QUFDakIsQUFBUzs7QUFDVCxBQUFPOzs7Ozs7Ozs7SSxBQUVEOzs7Ozs7Ozs7Ozs2QkFDSyxBQUNQOzZCQUNFLGNBQUE7b0JBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQywrQkFBSSxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBeEIsQUFBNkI7b0JBQTdCO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsK0RBQWUsS0FBQSxBQUFLLE1BQXJCLEFBQTJCOztvQkFBM0I7c0JBSEosQUFFRSxBQUNFLEFBRUY7QUFGRTtBQUFBLDRCQUVGLEFBQUM7O29CQUFEO3NCQUxGLEFBS0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyxpQ0FBTSxPQUFPLEtBQUEsQUFBSyxNQUFuQixBQUF5QjtvQkFBekI7c0JBTkYsQUFNRSxBQUNBO0FBREE7MEJBQ0EsQUFBQzs7b0JBQUQ7c0JBUEYsQUFPRTtBQUFBO0FBQUE7aUJBUEY7bVFBZHdPLG9CQUFNLEFBYzlPLDRMQWRxYSxxQkFBTyxBQWM1YSxZQURGLEFBQ0UsQUFzREg7QUF0REc7Ozs7O0FBSFksQSxBQTREbEI7O29FQUFvQyxpQkFBQTtTQUFBLEFBQVM7QUFBOUIsQ0FBQSxBQUFVLEVBQXpCLEFBQWUsQUFBcUMiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VyaWMvZGV2L2NoYWxsZW5nZXMvc2ltcGx5c29jaWFsIn0=