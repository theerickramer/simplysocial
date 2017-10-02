'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _User = require('../components/User');

var _User2 = _interopRequireDefault(_User);

var _Nav = require('../components/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _SubNavUser = require('../components/SubNavUser');

var _SubNavUser2 = _interopRequireDefault(_SubNavUser);

var _Posts = require('../components/Posts');

var _Posts2 = _interopRequireDefault(_Posts);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _cssConstants = require('../static/css-constants');

var _store = require('../redux/store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/eric/dev/challenges/simplysocial/pages/user.js?entry';
exports.default = (0, _nextReduxWrapper2.default)(_store.makeStore, function (state) {
  return state;
})(function (_ref) {
  var user = _ref.user,
      posts = _ref.posts;
  return _react2.default.createElement('div', {
    'data-jsx': 2323751954,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_Nav2.default, { avatar: user.avatar, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_User2.default, (0, _extends3.default)({}, user, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }))), _react2.default.createElement(_SubNavUser2.default, (0, _extends3.default)({}, user, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })), _react2.default.createElement(_Posts2.default, { posts: posts, userId: user.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement(_Footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 2323751954,
    css: '@import url(\'https://fonts.googleapis.com/css?family=Open+Sans\');@import url(\'https://fonts.googleapis.com/css?family=Open+Sans:700\');@import url(\'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300\');body{margin:0;font-family:' + _cssConstants.fonts.openSans + '}ul{list-style-type:none;margin:0;padding:0}textarea{outline:none;background:transparent;border:none;resize:none}h1,h2,h3,h4,h5,h6,p{margin:0}p,span{font-size:14px}a:not(.user__website){color:' + _cssConstants.colors.lightGrey + ' !important;cursor:auto !important;text-decoration:none !important}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXIuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJ1QixBQUV1RSxBQUNJLEFBQ00sQUFHL0QsQUFLWSxBQU1SLEFBYUosQUFLTSxBQUkrQixTQWhDTCxBQXdCM0MsSUFieUIsRUFrQnpCLE1BeEJXLFNBQ0MsTUFNRSxJQUxkLE1BMEJ5QixFQXBCWCxFQVpkLFVBYUEsU0FvQmtDLGdDQUNsQyIsImZpbGUiOiJwYWdlcy91c2VyLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lcmljL2Rldi9jaGFsbGVuZ2VzL3NpbXBseXNvY2lhbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VyJztcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnO1xuaW1wb3J0IFN1Yk5hdlVzZXIgZnJvbSAnLi4vY29tcG9uZW50cy9TdWJOYXZVc2VyJztcbmltcG9ydCBQb3N0cyBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IHsgY29sb3JzLCBmb250cyB9IGZyb20gJy4uL3N0YXRpYy9jc3MtY29uc3RhbnRzJztcbmltcG9ydCB7IG1ha2VTdG9yZSB9IGZyb20gJy4uL3JlZHV4L3N0b3JlJztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KG1ha2VTdG9yZSwgc3RhdGUgPT4gc3RhdGUpKCh7IHVzZXIsIHBvc3RzIH0pID0+IChcbiAgPGRpdj5cbiAgICA8TmF2IGF2YXRhcj17dXNlci5hdmF0YXJ9IC8+XG4gICAgPEhlYWRlcj5cbiAgICAgIDxVc2VyIHsuLi51c2VyfSAvPlxuICAgIDwvSGVhZGVyPlxuICAgIDxTdWJOYXZVc2VyIHsuLi51c2VyfSAvPlxuICAgIDxQb3N0cyBwb3N0cz17cG9zdHN9IHVzZXJJZD17dXNlci5pZH0gLz5cbiAgICA8Rm9vdGVyIC8+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJyk7XG4gICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo3MDAnKTtcbiAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvOjMwMCcpO1xuXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LWZhbWlseTogJHtmb250cy5vcGVuU2Fuc307XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgfVxuXG4gICAgICBoMSxcbiAgICAgIGgyLFxuICAgICAgaDMsXG4gICAgICBoNCxcbiAgICAgIGg1LFxuICAgICAgaDYsXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICBwLFxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgYTpub3QoLnVzZXJfX3dlYnNpdGUpIHtcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzLmxpZ2h0R3JleX0gIWltcG9ydGFudDtcbiAgICAgICAgY3Vyc29yOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pKTtcbiJdfQ== */\n/*@ sourceURL=pages/user.js?entry */'
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiVXNlciIsIk5hdiIsIlN1Yk5hdlVzZXIiLCJQb3N0cyIsIkZvb3RlciIsImNvbG9ycyIsImZvbnRzIiwibWFrZVN0b3JlIiwid2l0aFJlZHV4Iiwic3RhdGUiLCJ1c2VyIiwicG9zdHMiLCJhdmF0YXIiLCJpZCIsIm9wZW5TYW5zIiwibGlnaHRHcmV5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVE7O0FBQ2pCLEFBQVM7O0FBQ1QsQUFBTyxBQUVQOzs7Ozs7O29FQUFvQyxpQkFBQTtTQUFBLEFBQVM7QUFBOUIsQ0FBQSxBQUFVLEVBQTJCLGdCQUFBO01BQUEsQUFBRyxZQUFILEFBQUc7TUFBSCxBQUFTLGFBQVQsQUFBUzt5QkFDM0QsY0FBQTtnQkFBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDLCtCQUFJLFFBQVEsS0FBYixBQUFrQjtnQkFBbEI7a0JBREYsQUFDRSxBQUNBO0FBREE7c0JBQ0EsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQyx5REFBRCxBQUFVOztnQkFBVjtrQkFISixBQUVFLEFBQ0UsQUFFRjtBQUZFO0FBQUEsd0JBRUYsQUFBQywrREFBRCxBQUFnQjs7Z0JBQWhCO2tCQUxGLEFBS0UsQUFDQTtBQURBO0FBQUEsdUJBQ0EsQUFBQyxpQ0FBTSxPQUFQLEFBQWMsT0FBTyxRQUFRLEtBQTdCLEFBQWtDO2dCQUFsQztrQkFORixBQU1FLEFBQ0E7QUFEQTtzQkFDQSxBQUFDOztnQkFBRDtrQkFQRixBQU9FO0FBQUE7QUFBQTthQVBGOytQQVg0TyxvQkFBTSxBQVdsUCxnTkFYNmIscUJBQU8sQUFXcGMsWUFEa0QsQUFDbEQ7QUFBQTtBQURGLEFBQWUiLCJmaWxlIjoidXNlci5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9zaW1wbHlzb2NpYWwifQ==