'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _cssConstants = require('../static/css-constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/eric/dev/challenges/Invision/simplysocial/components/Nav.js';


var Nav = function (_Component) {
  (0, _inherits3.default)(Nav, _Component);

  function Nav() {
    (0, _classCallCheck3.default)(this, Nav);

    return (0, _possibleConstructorReturn3.default)(this, (Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).apply(this, arguments));
  }

  (0, _createClass3.default)(Nav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('nav', { className: 'nav', 'data-jsx': 3833205786,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react2.default.createElement('div', { className: 'nav__logo', 'data-jsx': 3833205786,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement('img', { className: 'nav__logo-icon', src: '/static/images/logo.png', 'data-jsx': 3833205786,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      })), _react2.default.createElement('div', { className: 'nav__items-container', 'data-jsx': 3833205786,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('ul', { className: 'nav__items', 'data-jsx': 3833205786,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('li', {
        'data-jsx': 3833205786,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('img', { className: 'add-post-button', src: '/static/images/new-message.png', 'data-jsx': 3833205786,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      })), _react2.default.createElement('li', {
        'data-jsx': 3833205786,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('input', { className: 'search', 'data-jsx': 3833205786,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })), _react2.default.createElement('li', {
        'data-jsx': 3833205786,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('div', { className: 'user-options', 'data-jsx': 3833205786,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('img', { className: 'user-options__avatar', src: '/static/images/user-avatar.png', 'data-jsx': 3833205786,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('img', { className: 'user-options__dropdown-arrow', 'data-jsx': 3833205786,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }))))), _react2.default.createElement(_style2.default, {
        styleId: 3833205786,
        css: '.nav[data-jsx="3833205786"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px 100px;height:35px;background:' + _cssConstants.colors.darkGrey + '}.nav__items-container[data-jsx="3833205786"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:100%}.user-options__avatar[data-jsx="3833205786"]{height:100%;width:100%}.nav__items[data-jsx="3833205786"],.nav__logo[data-jsx="3833205786"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.search[data-jsx="3833205786"]{margin:0 25px;padding:5px;background:url(\'/static/images/search-icon.png\') no-repeat right 5px center;background-color:' + _cssConstants.colors.darkGrey + ';border:1px solid ' + _cssConstants.colors.medGrey + ';border-radius:3px;outline:none;color:' + _cssConstants.colors.white + '}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCb0IsQUFHMEIsQUFPQSxBQU1ELEFBTVEsQUFLTixZQVZILEVBV0MsU0FWZCxHQVc4RSxnREF6QnpELEFBT00sbUJBTmIsU0FrQk8sQUFPMkIsR0F4Qk4sd0NBQzFDLEdBd0JnRCx1QkFuQm5DLFdBQ2IsWUFtQm9CLENBUnBCLGlCQVNlLGFBRWhCLG1DQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvTmF2LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lcmljL2Rldi9jaGFsbGVuZ2VzL0ludmlzaW9uL3NpbXBseXNvY2lhbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xvcnMsIGZvbnRzIH0gZnJvbSAnLi4vc3RhdGljL2Nzcy1jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXYgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X19sb2dvXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJuYXZfX2xvZ28taWNvblwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X19pdGVtcy1jb250YWluZXJcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2X19pdGVtc1wiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFkZC1wb3N0LWJ1dHRvblwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL25ldy1tZXNzYWdlLnBuZ1wiIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoXCIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1vcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ1c2VyLW9wdGlvbnNfX2F2YXRhclwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3VzZXItYXZhdGFyLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ1c2VyLW9wdGlvbnNfX2Ryb3Bkb3duLWFycm93XCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLmRhcmtHcmV5fTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2X19pdGVtcy1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudXNlci1vcHRpb25zX19hdmF0YXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdl9faXRlbXMsXG4gICAgICAgICAgLm5hdl9fbG9nbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNlYXJjaCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMjVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnL3N0YXRpYy9pbWFnZXMvc2VhcmNoLWljb24ucG5nJykgbm8tcmVwZWF0IHJpZ2h0IDVweCBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5kYXJrR3JleX07XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5tZWRHcmV5fTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMud2hpdGV9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/Nav.js */'
      }));
    }
  }]);

  return Nav;
}(_react.Component);

exports.default = Nav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29sb3JzIiwiZm9udHMiLCJOYXYiLCJkYXJrR3JleSIsIm1lZEdyZXkiLCJ3aGl0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUTs7Ozs7OztJLEFBRUk7Ozs7Ozs7Ozs7OzZCQUNWLEFBQ1A7NkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZSxtQkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZSx5QkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO2dEQUNPLFdBQUwsQUFBZSxrQkFBaUIsS0FBaEMsQUFBb0MsdUNBQXBDOztvQkFBQTtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUEsU0FBSyxXQUFMLEFBQWUsb0NBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFFBQUksV0FBSixBQUFjLDBCQUFkOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTtvQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsZ0RBQ08sV0FBTCxBQUFlLG1CQUFrQixLQUFqQyxBQUFxQyw4Q0FBckM7O29CQUFBO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7MkJBRUYsY0FBQTtvQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsa0RBQ1MsV0FBUCxBQUFpQixzQkFBakI7O29CQUFBO3NCQUxKLEFBSUUsQUFDRSxBQUVGO0FBRkU7MkJBRUYsY0FBQTtvQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZSw0QkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO2dEQUNPLFdBQUwsQUFBZSx3QkFBdUIsS0FBdEMsQUFBMEMsOENBQTFDOztvQkFBQTtzQkFERixBQUNFLEFBQ0E7QUFEQTtpREFDSyxXQUFMLEFBQWUsNENBQWY7O29CQUFBO3NCQWZWLEFBSUUsQUFDRSxBQU9FLEFBQ0UsQUFFRTtBQUFBOztpQkFmVjtrS0FONkkscUJBQU8sQUFNcEosd3RCQU5xMkIscUJBQU8sQUFNNTJCLGtDQU55NEIscUJBQU8sQUFNaDVCLHFEQU5nOEIscUJBQU8sQUFNdjhCLFFBREYsQUFDRSxBQTBESDtBQTFERzs7Ozs7QUFIMkIsQTs7a0JBQVosQSIsImZpbGUiOiJOYXYuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VyaWMvZGV2L2NoYWxsZW5nZXMvSW52aXNpb24vc2ltcGx5c29jaWFsIn0=