'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Nav = require('../components/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _SubNav = require('../components/SubNav');

var _SubNav2 = _interopRequireDefault(_SubNav);

var _Posts = require('../components/Posts');

var _Posts2 = _interopRequireDefault(_Posts);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _cssConstants = require('../static/css-constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/eric/dev/challenges/Invision/simplysocial/pages/index.js?entry';

exports.default = function () {
  return _react2.default.createElement('div', {
    'data-jsx': 2323751954,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_Nav2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_SubNav2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement(_Posts2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement(_Footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 2323751954,
    css: '@import url(\'https://fonts.googleapis.com/css?family=Open+Sans\');@import url(\'https://fonts.googleapis.com/css?family=Open+Sans:700\');@import url(\'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300\');body{margin:0;font-family:' + _cssConstants.fonts.openSans + '}ul{list-style-type:none;margin:0;padding:0}textarea{outline:none;background:transparent;border:none;resize:none}h1,h2,h3,h4,h5,h6,p{margin:0}p,span{font-size:14px}a:not(.user__website){color:' + _cssConstants.colors.lightGrey + ' !important;cursor:auto !important;text-decoration:none !important}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWV1QixBQUV1RSxBQUNJLEFBQ00sQUFHL0QsQUFLWSxBQU1SLEFBYUosQUFLTSxBQUkrQixTQWhDTCxBQXdCM0MsSUFieUIsRUFrQnpCLE1BeEJXLFNBQ0MsTUFNRSxJQUxkLE1BMEJ5QixFQXBCWCxFQVpkLFVBYUEsU0FvQmtDLGdDQUNsQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9JbnZpc2lvbi9zaW1wbHlzb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2JztcbmltcG9ydCBTdWJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9TdWJOYXYnO1xuaW1wb3J0IFBvc3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdHMnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgeyBjb2xvcnMsIGZvbnRzIH0gZnJvbSAnLi4vc3RhdGljL2Nzcy1jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPE5hdiAvPlxuICAgIDxIZWFkZXIgLz5cbiAgICA8U3ViTmF2IC8+XG4gICAgPFBvc3RzIC8+XG4gICAgPEZvb3RlciAvPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucycpO1xuICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NzAwJyk7XG4gICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1BybzozMDAnKTtcblxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udHMub3BlblNhbnN9O1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICB0ZXh0YXJlYSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgaDEsXG4gICAgICBoMixcbiAgICAgIGgzLFxuICAgICAgaDQsXG4gICAgICBoNSxcbiAgICAgIGg2LFxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgcCxcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIGE6bm90KC51c2VyX193ZWJzaXRlKSB7XG4gICAgICAgIGNvbG9yOiAke2NvbG9ycy5saWdodEdyZXl9ICFpbXBvcnRhbnQ7XG4gICAgICAgIGN1cnNvcjogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZGVyIiwiTmF2IiwiU3ViTmF2IiwiUG9zdHMiLCJGb290ZXIiLCJjb2xvcnMiLCJmb250cyIsIm9wZW5TYW5zIiwibGlnaHRHcmV5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFRLEFBRWpCOzs7Ozs7a0JBQWUsWUFBQTt5QkFDYixjQUFBO2dCQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsc0JBQ0EsQUFBQzs7Z0JBQUQ7a0JBRkYsQUFFRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxBQUFDOztnQkFBRDtrQkFIRixBQUdFLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLEFBQUM7O2dCQUFEO2tCQUpGLEFBSUUsQUFDQTtBQURBO0FBQUEsc0JBQ0EsQUFBQzs7Z0JBQUQ7a0JBTEYsQUFLRTtBQUFBO0FBQUE7YUFMRjsrUEFUNE8sb0JBQU0sQUFTbFAsZ05BVDZiLHFCQUFPLEFBU3BjLFlBRGEsQUFDYjtBQUFBO0FBREYiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VyaWMvZGV2L2NoYWxsZW5nZXMvSW52aXNpb24vc2ltcGx5c29jaWFsIn0=