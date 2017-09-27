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

var _jsxFileName = '/Users/eric/dev/challenges/Invision/simplysocial/components/User.js';


var User = function (_Component) {
  (0, _inherits3.default)(User, _Component);

  function User() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = User.__proto__ || (0, _getPrototypeOf2.default)(User)).call.apply(_ref, [this].concat(args))), _this), _this.state = { value: '' }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(User, [{
    key: 'onChange',
    value: function onChange(val) {
      this.state.value = val;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'user', 'data-jsx': 831727993,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('img', { className: 'user__avatar', src: '/static/images/user-avatar.png', 'data-jsx': 831727993,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), _react2.default.createElement('h1', { className: 'user__name', 'data-jsx': 831727993,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'Kaitlyn Smith'), _react2.default.createElement('p', { className: 'user__blurb', 'data-jsx': 831727993,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, 'Modular Synthesist'), _react2.default.createElement('a', { className: 'user__website', 'data-jsx': 831727993,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, 'www.kaitlynaureliasmith.com'), _react2.default.createElement(_style2.default, {
        styleId: 831727993,
        css: '.user[data-jsx="831727993"]{-webkit-align-self:flex-start;-ms-flex-item-align:flex-start;align-self:flex-start;margin:50px auto;height:155px;width:575px;border-radius:5px;font-family:' + _cssConstants.fonts.sourceSans + ';text-align:center}.user__avatar[data-jsx="831727993"]{height:86px;width:86px}.user__name[data-jsx="831727993"]{margin:10px;color:' + _cssConstants.colors.white + ';font-weight:300}.user__blurb[data-jsx="831727993"]{margin-bottom:15px;color:' + _cssConstants.colors.lightGrey + '}.user__website[data-jsx="831727993"]{font-size:10px;color:' + _cssConstants.colors.medDarkGrey + '}.add-photo[data-jsx="831727993"],.add-video[data-jsx="831727993"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:30px;cursor:pointer}.add-photo__text[data-jsx="831727993"]{margin-left:10px;color:' + _cssConstants.colors.white + ';opacity:.5}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVXNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlb0IsQUFHbUMsQUFVVixBQUtBLEFBTU8sQUFLSixBQUtLLEFBUXBCLFlBNUJXLEFBS3dCLEdBV0EsRUFZQSxFQWpCQSxJQVZyQyx3QkFLa0IsR0FXbEIsRUFZYSxFQWpCYixTQUxBLEFBdUJBLG9CQXhDbUIsaUJBQ0osRUE4Qk0sV0E3QlAsWUFDTSxrQkFDdUIseUNBQ3ZCLFdBMkJELE9BMUJuQixVQTJCaUIsZUFDakIiLCJmaWxlIjoiY29tcG9uZW50cy9Vc2VyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lcmljL2Rldi9jaGFsbGVuZ2VzL0ludmlzaW9uL3NpbXBseXNvY2lhbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xvcnMsIGZvbnRzIH0gZnJvbSAnLi4vc3RhdGljL2Nzcy1jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IHZhbHVlOiBgYH07XG4gIG9uQ2hhbmdlKHZhbCkge1xuICAgIHRoaXMuc3RhdGUudmFsdWUgPSB2YWxcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInVzZXJfX2F2YXRhclwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3VzZXItYXZhdGFyLnBuZ1wiIC8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ1c2VyX19uYW1lXCI+S2FpdGx5biBTbWl0aDwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInVzZXJfX2JsdXJiXCI+TW9kdWxhciBTeW50aGVzaXN0PC9wPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ1c2VyX193ZWJzaXRlXCI+d3d3LmthaXRseW5hdXJlbGlhc21pdGguY29tPC9hPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnVzZXIge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTVweDtcbiAgICAgICAgICAgIHdpZHRoOiA1NzVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnRzLnNvdXJjZVNhbnN9O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51c2VyX19hdmF0YXIge1xuICAgICAgICAgICAgaGVpZ2h0OiA4NnB4O1xuICAgICAgICAgICAgd2lkdGg6IDg2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVzZXJfX25hbWUge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTsgICBcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7ICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVzZXJfX2JsdXJiIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubGlnaHRHcmV5fTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudXNlcl9fd2Vic2l0ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubWVkRGFya0dyZXl9OyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hZGQtcGhvdG8sIC5hZGQtdmlkZW8ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5hZGQtcGhvdG9fX3RleHQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHhcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy53aGl0ZX07XG4gICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/User.js */'
      }));
    }
  }]);

  return User;
}(_react.Component);

exports.default = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVXNlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbG9ycyIsImZvbnRzIiwiVXNlciIsInN0YXRlIiwidmFsdWUiLCJ2YWwiLCJzb3VyY2VTYW5zIiwid2hpdGUiLCJsaWdodEdyZXkiLCJtZWREYXJrR3JleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUTs7Ozs7OztJLEFBRUk7Ozs7Ozs7Ozs7Ozs7O3dNLEFBQ25CLFFBQVEsRUFBRSxPQUFGLEE7Ozs7OzZCQUNDLEEsS0FBSyxBQUNaO1dBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixBQUNwQjs7Ozs2QkFDUSxBQUNQOzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWUsb0JBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLHlDQUNPLFdBQUwsQUFBZSxnQkFBZSxLQUE5QixBQUFrQyw4Q0FBbEM7O29CQUFBO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUEsUUFBSSxXQUFKLEFBQWMsMEJBQWQ7O29CQUFBO3NCQUFBO0FBQUE7U0FGRixBQUVFLEFBQ0Esa0NBQUEsY0FBQSxPQUFHLFdBQUgsQUFBYSwyQkFBYjs7b0JBQUE7c0JBQUE7QUFBQTtTQUhGLEFBR0UsQUFDQSx1Q0FBQSxjQUFBLE9BQUcsV0FBSCxBQUFhLDZCQUFiOztvQkFBQTtzQkFBQTtBQUFBO1NBSkYsQUFJRTtpQkFKRjt5TUFWb0wsb0JBQU0sQUFVMUwsb0pBVnlVLHFCQUFPLEFBVWhWLDBGQVZxYSxxQkFBTyxBQVU1YSw0RUFWbWYscUJBQU8sQUFVMWYsdVhBVjQyQixxQkFBTyxBQVVuM0IsUUFERixBQUNFLEFBb0RIO0FBcERHOzs7OztBQVA0QixBOztrQkFBYixBIiwiZmlsZSI6IlVzZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VyaWMvZGV2L2NoYWxsZW5nZXMvSW52aXNpb24vc2ltcGx5c29jaWFsIn0=