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
      return _react2.default.createElement('nav', { className: 'nav', 'data-jsx': 1340489100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react2.default.createElement('div', { className: 'nav__logo', 'data-jsx': 1340489100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement('img', { className: 'nav__logo-icon', src: '/static/images/logo.png', 'data-jsx': 1340489100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      })), _react2.default.createElement('div', { className: 'nav__items-container', 'data-jsx': 1340489100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('ul', { className: 'nav__items', 'data-jsx': 1340489100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('li', {
        'data-jsx': 1340489100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('img', { className: 'add-post-button', src: '/static/images/new-message.png', 'data-jsx': 1340489100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      })), _react2.default.createElement('li', {
        'data-jsx': 1340489100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('input', { className: 'search', 'data-jsx': 1340489100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })), _react2.default.createElement('li', {
        'data-jsx': 1340489100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('img', { className: 'avatar', src: '/static/images/user-avatar.png', 'data-jsx': 1340489100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })), _react2.default.createElement('li', {
        'data-jsx': 1340489100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('img', { className: 'dropdown-arrow', src: '/static/images/down-arrow.png', 'data-jsx': 1340489100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })))), _react2.default.createElement(_style2.default, {
        styleId: 1340489100,
        css: 'li[data-jsx="1340489100"]{height:30px}.nav[data-jsx="1340489100"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px 100px;height:35px;background:' + _cssConstants.colors.darkGrey + '}.nav__items-container[data-jsx="1340489100"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:100%}.user-options__avatar[data-jsx="1340489100"]{height:100%;width:100%}.nav__items[data-jsx="1340489100"],.nav__logo[data-jsx="1340489100"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.search[data-jsx="1340489100"]{margin:0 23px;padding:7px;background:url(\'/static/images/search-icon.png\') no-repeat right 5px center;background-color:' + _cssConstants.colors.darkGrey + ';border:1px solid ' + _cssConstants.colors.medGrey + ';border-radius:3px;outline:none;color:' + _cssConstants.colors.white + '}.dropdown-arrow[data-jsx="1340489100"]{margin-left:20px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCb0IsQUFHeUIsQUFJQyxBQU9BLEFBTUQsQUFNUSxBQUtOLEFBV0csWUF0Q25CLEFBaUJhLEVBV0MsR0FXZCxNQXJCQSxHQVc4RSxnREF6QnpELEFBT00sbUJBTmIsU0FrQk8sQUFPMkIsR0F4Qk4sd0NBQzFDLEdBd0JnRCx1QkFuQm5DLFdBQ2IsWUFtQm9CLENBUnBCLGlCQVNlLGFBRWhCLG1DQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvTmF2LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lcmljL2Rldi9jaGFsbGVuZ2VzL0ludmlzaW9uL3NpbXBseXNvY2lhbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xvcnMsIGZvbnRzIH0gZnJvbSAnLi4vc3RhdGljL2Nzcy1jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXYgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X19sb2dvXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJuYXZfX2xvZ28taWNvblwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X19pdGVtcy1jb250YWluZXJcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2X19pdGVtc1wiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFkZC1wb3N0LWJ1dHRvblwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL25ldy1tZXNzYWdlLnBuZ1wiIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoXCIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvdXNlci1hdmF0YXIucG5nXCIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZHJvcGRvd24tYXJyb3dcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9kb3duLWFycm93LnBuZ1wiIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5kYXJrR3JleX07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdl9faXRlbXMtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVzZXItb3B0aW9uc19fYXZhdGFyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXZfX2l0ZW1zLFxuICAgICAgICAgIC5uYXZfX2xvZ28ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDIzcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL3NlYXJjaC1pY29uLnBuZycpIG5vLXJlcGVhdCByaWdodCA1cHggY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZGFya0dyZXl9O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMubWVkR3JleX07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kcm9wZG93bi1hcnJvdyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbmF2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Nav.js */'
      }));
    }
  }]);

  return Nav;
}(_react.Component);

exports.default = Nav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29sb3JzIiwiZm9udHMiLCJOYXYiLCJkYXJrR3JleSIsIm1lZEdyZXkiLCJ3aGl0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUTs7Ozs7OztJLEFBRUk7Ozs7Ozs7Ozs7OzZCQUNWLEFBQ1A7NkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZSxtQkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZSx5QkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO2dEQUNPLFdBQUwsQUFBZSxrQkFBaUIsS0FBaEMsQUFBb0MsdUNBQXBDOztvQkFBQTtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUEsU0FBSyxXQUFMLEFBQWUsb0NBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFFBQUksV0FBSixBQUFjLDBCQUFkOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTtvQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsZ0RBQ08sV0FBTCxBQUFlLG1CQUFrQixLQUFqQyxBQUFxQyw4Q0FBckM7O29CQUFBO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7MkJBRUYsY0FBQTtvQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsa0RBQ1MsV0FBUCxBQUFpQixzQkFBakI7O29CQUFBO3NCQUxKLEFBSUUsQUFDRSxBQUVGO0FBRkU7MkJBRUYsY0FBQTtvQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsZ0RBQ08sV0FBTCxBQUFlLFVBQVMsS0FBeEIsQUFBNEIsOENBQTVCOztvQkFBQTtzQkFSSixBQU9FLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUE7b0JBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGdEQUNPLFdBQUwsQUFBZSxrQkFBaUIsS0FBaEMsQUFBb0MsNkNBQXBDOztvQkFBQTtzQkFoQlIsQUFJRSxBQUNFLEFBVUUsQUFDRTtBQUFBOztpQkFoQlI7d01BTm1MLHFCQUFPLEFBTTFMLHd0QkFOMjRCLHFCQUFPLEFBTWw1QixrQ0FOKzZCLHFCQUFPLEFBTXQ3QixxREFOcytCLHFCQUFPLEFBTTcrQixRQURGLEFBQ0UsQUFrRUg7QUFsRUc7Ozs7O0FBSDJCLEE7O2tCQUFaLEEiLCJmaWxlIjoiTmF2LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lcmljL2Rldi9jaGFsbGVuZ2VzL0ludmlzaW9uL3NpbXBseXNvY2lhbCJ9