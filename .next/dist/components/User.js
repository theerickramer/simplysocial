'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cssConstants = require('../static/css-constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/eric/dev/challenges/simplysocial/components/User.js';

exports.default = function (_ref) {
  var name = _ref.name,
      blurb = _ref.blurb,
      website = _ref.website;
  return _react2.default.createElement('div', { className: 'user', 'data-jsx': 3936662569,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('img', { className: 'user__avatar', src: '/static/images/user-avatar.png', 'data-jsx': 3936662569,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement('h1', { className: 'user__name', 'data-jsx': 3936662569,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, name), _react2.default.createElement('p', { className: 'user__blurb', 'data-jsx': 3936662569,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, blurb), _react2.default.createElement('a', { className: 'user__website', 'data-jsx': 3936662569,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, website), _react2.default.createElement(_style2.default, {
    styleId: 3936662569,
    css: '.user[data-jsx="3936662569"]{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;margin:50px auto;height:155px;width:575px;border-radius:5px;font-family:' + _cssConstants.fonts.sourceSans + ';text-align:center}.user__avatar[data-jsx="3936662569"]{height:86px;width:86px}.user__name[data-jsx="3936662569"]{margin:10px;color:' + _cssConstants.colors.white + ';font-weight:300}.user__blurb[data-jsx="3936662569"]{margin-bottom:15px;color:' + _cssConstants.colors.lightGrey + '}.user__website[data-jsx="3936662569"]{font-size:10px;color:' + _cssConstants.colors.medDarkGrey + '}a[data-jsx="3936662569"]{color:' + _cssConstants.colors.medGrey + ';text-decoration:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVXNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTZ0IsQUFHK0IsQUFVVixBQUtBLEFBTU8sQUFLSixBQUtvQixZQXBCeEIsQUFLd0IsR0FXQSxJQUxBLElBVnJDLFlBb0J1QixZQWZMLEdBV2xCLElBTEEsRUFVQSxPQWZBLGVBakJtQixpQkFDSixhQUNELFlBQ00sa0JBQ3VCLHlDQUN2QixrQkFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy9Vc2VyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lcmljL2Rldi9jaGFsbGVuZ2VzL3NpbXBseXNvY2lhbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xvcnMsIGZvbnRzIH0gZnJvbSAnLi4vc3RhdGljL2Nzcy1jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBuYW1lLCBibHVyYiwgd2Vic2l0ZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxuICAgIDxpbWcgY2xhc3NOYW1lPVwidXNlcl9fYXZhdGFyXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvdXNlci1hdmF0YXIucG5nXCIgLz5cbiAgICA8aDEgY2xhc3NOYW1lPVwidXNlcl9fbmFtZVwiPntuYW1lfTwvaDE+XG4gICAgPHAgY2xhc3NOYW1lPVwidXNlcl9fYmx1cmJcIj57Ymx1cmJ9PC9wPlxuICAgIDxhIGNsYXNzTmFtZT1cInVzZXJfX3dlYnNpdGVcIj57d2Vic2l0ZX08L2E+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnVzZXIge1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICAgICAgaGVpZ2h0OiAxNTVweDtcbiAgICAgICAgd2lkdGg6IDU3NXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnRzLnNvdXJjZVNhbnN9O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC51c2VyX19hdmF0YXIge1xuICAgICAgICBoZWlnaHQ6IDg2cHg7XG4gICAgICAgIHdpZHRoOiA4NnB4O1xuICAgICAgfVxuXG4gICAgICAudXNlcl9fbmFtZSB7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIH1cblxuICAgICAgLnVzZXJfX2JsdXJiIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICB9XG5cbiAgICAgIC51c2VyX193ZWJzaXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBjb2xvcjogJHtjb2xvcnMubWVkRGFya0dyZXl9O1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzLm1lZEdyZXl9O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG4iXX0= */\n/*@ sourceURL=components/User.js */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVXNlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbG9ycyIsImZvbnRzIiwibmFtZSIsImJsdXJiIiwid2Vic2l0ZSIsInNvdXJjZVNhbnMiLCJ3aGl0ZSIsImxpZ2h0R3JleSIsIm1lZERhcmtHcmV5IiwibWVkR3JleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVEsQUFFakI7Ozs7OztrQkFBZSxnQkFBQTtNQUFBLEFBQUcsWUFBSCxBQUFHO01BQUgsQUFBUyxhQUFULEFBQVM7TUFBVCxBQUFnQixlQUFoQixBQUFnQjt5QkFDN0IsY0FBQSxTQUFLLFdBQUwsQUFBZSxvQkFBZjs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0dBQUEseUNBQ08sV0FBTCxBQUFlLGdCQUFlLEtBQTlCLEFBQWtDLDhDQUFsQzs7Z0JBQUE7a0JBREYsQUFDRSxBQUNBO0FBREE7c0JBQ0EsY0FBQSxRQUFJLFdBQUosQUFBYywwQkFBZDs7Z0JBQUE7a0JBQUEsQUFBNEI7QUFBNUI7S0FGRixBQUVFLEFBQ0EsdUJBQUEsY0FBQSxPQUFHLFdBQUgsQUFBYSwyQkFBYjs7Z0JBQUE7a0JBQUEsQUFBNEI7QUFBNUI7S0FIRixBQUdFLEFBQ0Esd0JBQUEsY0FBQSxPQUFHLFdBQUgsQUFBYSw2QkFBYjs7Z0JBQUE7a0JBQUEsQUFBOEI7QUFBOUI7S0FKRixBQUlFO2FBSkY7aU1BSm9MLG9CQUFNLEFBSTFMLHNKQUoyVSxxQkFBTyxBQUlsViwyRkFKd2EscUJBQU8sQUFJL2EsNkVBSnVmLHFCQUFPLEFBSTlmLG1EQUo0aUIscUJBQU8sQUFJbmpCLFVBRGEsQUFDYjtBQUFBO0FBREYiLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9zaW1wbHlzb2NpYWwifQ==