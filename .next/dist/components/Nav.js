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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _cssConstants = require('../static/css-constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/eric/dev/challenges/simplysocial/components/Nav.js';


var Nav = function (_Component) {
  (0, _inherits3.default)(Nav, _Component);

  function Nav() {
    (0, _classCallCheck3.default)(this, Nav);

    return (0, _possibleConstructorReturn3.default)(this, (Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).apply(this, arguments));
  }

  (0, _createClass3.default)(Nav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('nav', { className: 'nav', 'data-jsx': 220687124,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement('div', { className: 'nav__logo', 'data-jsx': 220687124,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement('img', { className: 'nav__logo-icon', src: '/static/images/logo.png', 'data-jsx': 220687124,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      })), _react2.default.createElement('div', { className: 'nav__items-container', 'data-jsx': 220687124,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('ul', { className: 'nav__items', 'data-jsx': 220687124,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('li', {
        'data-jsx': 220687124,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('a', {
        'data-jsx': 220687124,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('img', {
        className: 'new-message',
        src: '/static/images/new-message.png',
        'data-jsx': 220687124,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })))), _react2.default.createElement('li', {
        'data-jsx': 220687124,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('input', { className: 'search', 'data-jsx': 220687124,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })), _react2.default.createElement('li', {
        'data-jsx': 220687124,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_link2.default, { href: '/user', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('a', {
        'data-jsx': 220687124,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('img', {
        className: 'avatar',
        src: this.props.avatar,
        'data-jsx': 220687124,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })))), _react2.default.createElement('li', {
        'data-jsx': 220687124,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('img', {
        className: 'dropdown-arrow',
        src: '/static/images/down-arrow.png',
        'data-jsx': 220687124,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })))), _react2.default.createElement(_style2.default, {
        styleId: 220687124,
        css: 'li[data-jsx="220687124"]{height:30px}.nav[data-jsx="220687124"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px 100px;height:35px;background:' + _cssConstants.colors.darkGrey + '}.nav__items-container[data-jsx="220687124"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:100%}.avatar[data-jsx="220687124"]{height:30px;width:30px%}.nav__items[data-jsx="220687124"],.nav__logo[data-jsx="220687124"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.search[data-jsx="220687124"]{margin:0 23px;padding:7px;background:url(\'/static/images/search-icon.png\') no-repeat right;5px center;background-color:' + _cssConstants.colors.darkGrey + ';border:1px solid ' + _cssConstants.colors.medGrey + ';border-radius:3px;outline:none;color:' + _cssConstants.colors.white + '}.dropdown-arrow[data-jsx="220687124"]{margin-left:20px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDb0IsQUFHeUIsQUFJQyxBQU9BLEFBTUQsQUFNUSxBQUtOLEFBWUcsWUF2Q25CLEFBaUJjLEVBV0EsR0FZZCxPQXRCQSxFQVlJLGdEQTFCaUIsQUFPTSxpQkFtQmIsRUF6QkEsU0FrQk8sQUFRMkIsR0F6Qk4sd0NBQzFDLEdBeUJnRCx1QkFwQm5DLFdBQ2IsWUFvQm9CLENBVHBCLGlCQVVlLGFBQ3NCLG1DQUNyQyIsImZpbGUiOiJjb21wb25lbnRzL05hdi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9zaW1wbHlzb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGNvbG9ycywgZm9udHMgfSBmcm9tICcuLi9zdGF0aWMvY3NzLWNvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX2xvZ29cIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm5hdl9fbG9nby1pY29uXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvbG9nby5wbmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX2l0ZW1zLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZfX2l0ZW1zXCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5ldy1tZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvbmV3LW1lc3NhZ2UucG5nXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoXCIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlclwiPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuYXZhdGFyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1hcnJvd1wiXG4gICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvZG93bi1hcnJvdy5wbmdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMuZGFya0dyZXl9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXZfX2l0ZW1zLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwcHglO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXZfX2l0ZW1zLFxuICAgICAgICAgIC5uYXZfX2xvZ28ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDIzcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL3NlYXJjaC1pY29uLnBuZycpIG5vLXJlcGVhdCByaWdodFxuICAgICAgICAgICAgICA1cHggY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZGFya0dyZXl9O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMubWVkR3JleX07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZHJvcGRvd24tYXJyb3cge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/Nav.js */'
      }));
    }
  }]);

  return Nav;
}(_react.Component);

exports.default = Nav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGluayIsImNvbG9ycyIsImZvbnRzIiwiTmF2IiwicHJvcHMiLCJhdmF0YXIiLCJkYXJrR3JleSIsIm1lZEdyZXkiLCJ3aGl0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVE7Ozs7Ozs7SUFFSSxBOzs7Ozs7Ozs7Ozs2QkFDVixBQUNQOzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWUsbUJBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWUseUJBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtnREFDTyxXQUFMLEFBQWUsa0JBQWlCLEtBQWhDLEFBQW9DLHVDQUFwQzs7b0JBQUE7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTsyQkFFRixjQUFBLFNBQUssV0FBTCxBQUFlLG9DQUFmOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYywwQkFBZDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7b0JBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXO29CQUFYO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBO29CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQTttQkFDRSxBQUNZLEFBQ1Y7YUFGRixBQUVNO29CQUZOOztvQkFBQTtzQkFKUixBQUNFLEFBQ0UsQUFDRSxBQUNFLEFBT047QUFQTTtBQUNFLDZCQU1SLGNBQUE7b0JBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGtEQUNTLFdBQVAsQUFBaUIsc0JBQWpCOztvQkFBQTtzQkFaSixBQVdFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUE7b0JBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXO29CQUFYO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBO29CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQTttQkFDRSxBQUNZLEFBQ1Y7YUFBSyxLQUFBLEFBQUssTUFGWixBQUVrQjtvQkFGbEI7O29CQUFBO3NCQWpCUixBQWNFLEFBQ0UsQUFDRSxBQUNFLEFBT047QUFQTTtBQUNFLDZCQU1SLGNBQUE7b0JBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBO21CQUNFLEFBQ1ksQUFDVjthQUZGLEFBRU07b0JBRk47O29CQUFBO3NCQTlCUixBQUlFLEFBQ0UsQUF3QkUsQUFDRTtBQUFBO0FBQ0U7aUJBL0JWO3NNQVBpTCxxQkFBTyxBQU94TCxzc0JBUHUzQixxQkFBTyxBQU85M0Isa0NBUDI1QixxQkFBTyxBQU9sNkIscURBUGs5QixxQkFBTyxBQU96OUIsUUFERixBQUNFLEFBb0ZIO0FBcEZHOzs7OztBQUgyQixBOztrQkFBWixBIiwiZmlsZSI6Ik5hdi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9zaW1wbHlzb2NpYWwifQ==