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
      return _react2.default.createElement('nav', { className: 'nav', 'data-jsx': 649879501,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react2.default.createElement('div', { className: 'nav__logo', 'data-jsx': 649879501,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement('img', { className: 'nav__logo-icon', src: '/static/images/logo.png', 'data-jsx': 649879501,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      })), _react2.default.createElement('div', { className: 'nav__items-container', 'data-jsx': 649879501,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('ul', { className: 'nav__items', 'data-jsx': 649879501,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('li', {
        'data-jsx': 649879501,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('img', { className: 'add-post-button', 'data-jsx': 649879501,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      })), _react2.default.createElement('li', {
        'data-jsx': 649879501,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('input', { className: 'search', 'data-jsx': 649879501,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })), _react2.default.createElement('li', {
        'data-jsx': 649879501,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('div', { className: 'user-options', 'data-jsx': 649879501,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('img', { className: 'user-options__avatar', 'data-jsx': 649879501,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('img', { className: 'user-options__dropdown-arrow', 'data-jsx': 649879501,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }))))), _react2.default.createElement(_style2.default, {
        styleId: 649879501,
        css: '.nav[data-jsx="649879501"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px 100px;height:35px;background:' + _cssConstants.colors.darkGrey + '}.nav__items-container[data-jsx="649879501"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:100%}ul[data-jsx="649879501"],.nav__logo[data-jsx="649879501"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCb0IsQUFHMEIsQUFPQSxBQU9PLDBFQWJELEFBT00sbUJBTmIsU0FhTyxHQVpxQix3Q0FDMUMsMEJBS2EsV0FDYixhQU1BIiwiZmlsZSI6ImNvbXBvbmVudHMvTmF2LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lcmljL2Rldi9jaGFsbGVuZ2VzL0ludmlzaW9uL3NpbXBseXNvY2lhbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xvcnMsIGZvbnRzIH0gZnJvbSAnLi4vc3RhdGljL2Nzcy1jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXYgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X19sb2dvXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJuYXZfX2xvZ28taWNvblwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X19pdGVtcy1jb250YWluZXJcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2X19pdGVtc1wiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFkZC1wb3N0LWJ1dHRvblwiIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoXCIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1vcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ1c2VyLW9wdGlvbnNfX2F2YXRhclwiIC8+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ1c2VyLW9wdGlvbnNfX2Ryb3Bkb3duLWFycm93XCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLmRhcmtHcmV5fTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2X19pdGVtcy1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCxcbiAgICAgICAgICAubmF2X19sb2dvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbmF2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Nav.js */'
      }));
    }
  }]);

  return Nav;
}(_react.Component);

exports.default = Nav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29sb3JzIiwiZm9udHMiLCJOYXYiLCJkYXJrR3JleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUTs7Ozs7OztJLEFBRUk7Ozs7Ozs7Ozs7OzZCQUNWLEFBQ1A7NkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZSxtQkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZSx5QkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO2dEQUNPLFdBQUwsQUFBZSxrQkFBaUIsS0FBaEMsQUFBb0MsdUNBQXBDOztvQkFBQTtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUEsU0FBSyxXQUFMLEFBQWUsb0NBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFFBQUksV0FBSixBQUFjLDBCQUFkOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTtvQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsZ0RBQ08sV0FBTCxBQUFlLCtCQUFmOztvQkFBQTtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUE7b0JBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGtEQUNTLFdBQVAsQUFBaUIsc0JBQWpCOztvQkFBQTtzQkFMSixBQUlFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUE7b0JBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWUsNEJBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtnREFDTyxXQUFMLEFBQWUsb0NBQWY7O29CQUFBO3NCQURGLEFBQ0UsQUFDQTtBQURBO2lEQUNLLFdBQUwsQUFBZSw0Q0FBZjs7b0JBQUE7c0JBZlYsQUFJRSxBQUNFLEFBT0UsQUFDRSxBQUVFO0FBQUE7O2lCQWZWO2lLQU40SSxxQkFBTyxBQU1uSixXQURGLEFBQ0UsQUEwQ0g7QUExQ0c7Ozs7O0FBSDJCLEE7O2tCQUFaLEEiLCJmaWxlIjoiTmF2LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lcmljL2Rldi9jaGFsbGVuZ2VzL0ludmlzaW9uL3NpbXBseXNvY2lhbCJ9