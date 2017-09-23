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

var _jsxFileName = '/Users/eric/dev/challenges/Invision/simplysocial/components/NewMessage.js';


var NewMessage = function (_Component) {
  (0, _inherits3.default)(NewMessage, _Component);

  function NewMessage() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, NewMessage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NewMessage.__proto__ || (0, _getPrototypeOf2.default)(NewMessage)).call.apply(_ref, [this].concat(args))), _this), _this.state = { value: '' }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(NewMessage, [{
    key: 'onChange',
    value: function onChange(val) {
      this.state.value = val;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'new-message', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('textarea', {
        rows: '2',
        className: 'new-message__input',
        placeholder: 'What\'s On Your Mind?',
        value: this.state.value,
        onChange: this.onChange,
        'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), _react2.default.createElement('div', { className: 'add-photo', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('img', { className: 'add-photo__image', src: '/static/images/camera.png', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement('span', { className: 'add-photo__text', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, 'Add Photo')), _react2.default.createElement('div', { className: 'add-video', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('img', { className: 'add-video__image', src: '/static/images/video-camera.png', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement('span', { className: 'add-photo__text', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, 'Add Video')), _react2.default.createElement(_style2.default, {
        styleId: 1021722323,
        css: '.new-message[data-jsx="1021722323"]{margin:0 auto;padding-top:40px;height:155px;width:575px;border-radius:5px;background:' + _cssConstants.colors.turquoise + ';opacity:0.5;font-family:' + _cssConstants.fonts.sourceSans + '}.new-message__input[data-jsx="1021722323"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 30px 45px;color:' + _cssConstants.colors.white + ';font-family:' + _cssConstants.fonts.sourceSans + ';font-size:24px;width:80%}[data-jsx="1021722323"]::-webkit-input-placeholder{color:' + _cssConstants.colors.white + ';opacity:.5}[data-jsx="1021722323"]::-moz-placeholder{color:' + _cssConstants.colors.white + ';opacity:.5}[data-jsx="1021722323"]:-ms-input-placeholder{color:' + _cssConstants.colors.white + ';opacity:.5}[data-jsx="1021722323"]:-moz-placeholder{color:' + _cssConstants.colors.white + ';opacity:.5}.add-photo[data-jsx="1021722323"],.add-video[data-jsx="1021722323"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:30px;cursor:pointer}.add-photo__text[data-jsx="1021722323"]{margin-left:10px;color:' + _cssConstants.colors.white + ';opacity:.5}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmV3TWVzc2FnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQm9CLEFBRzJCLEFBV0QsQUFVc0IsQUFLQSxBQU1BLEFBS0EsQUFLZixBQVFwQixjQWpEaUIsR0FpRGtCLGNBaER0QixJQW9CRixBQUtBLEFBTUEsQUFLQSxTQW5DQyxFQW9CZCxBQUtBLEFBTUEsQUFLQSxNQVlhLElBL0NPLE9BZ0RwQixXQS9DMEMsQUFPckIsbUJBQ2dCLFNBOEJoQixZQXJDUCxZQUM2QixFQU9BLHVDQU4zQyxFQU9pQixlQUNMLFVBQ1osQ0EyQm1CLGlCQUNGLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvTmV3TWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9JbnZpc2lvbi9zaW1wbHlzb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3JzLCBmb250cyB9IGZyb20gJy4uL3N0YXRpYy9jc3MtY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3TWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0geyB2YWx1ZTogYGB9O1xuICBvbkNoYW5nZSh2YWwpIHtcbiAgICB0aGlzLnN0YXRlLnZhbHVlID0gdmFsXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1tZXNzYWdlXCI+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIHJvd3M9XCIyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJuZXctbWVzc2FnZV9faW5wdXRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCdzIE9uIFlvdXIgTWluZD9cIlxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1waG90b1wiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYWRkLXBob3RvX19pbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2NhbWVyYS5wbmdcIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFkZC1waG90b19fdGV4dFwiPkFkZCBQaG90bzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLXZpZGVvXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhZGQtdmlkZW9fX2ltYWdlXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvdmlkZW8tY2FtZXJhLnBuZ1wiIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWRkLXBob3RvX190ZXh0XCI+QWRkIFZpZGVvPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5uZXctbWVzc2FnZSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTVweDtcbiAgICAgICAgICAgIHdpZHRoOiA1NzVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLnR1cnF1b2lzZX07XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHtmb250cy5zb3VyY2VTYW5zfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmV3LW1lc3NhZ2VfX2lucHV0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW46IDAgMzBweCA0NXB4O1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnRzLnNvdXJjZVNhbnN9OyAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy53aGl0ZX07XG4gICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIC8qIEZpcmVmb3ggMTkrICovXG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMud2hpdGV9O1xuICAgICAgICAgICAgb3BhY2l0eTogLjU7ICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAvKiBJRSAxMCsgKi9cbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy53aGl0ZX07XG4gICAgICAgICAgICBvcGFjaXR5OiAuNTsgICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgOi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgLyogRmlyZWZveCAxOC0gKi9cbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy53aGl0ZX07XG4gICAgICAgICAgICBvcGFjaXR5OiAuNTsgICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYWRkLXBob3RvLCAuYWRkLXZpZGVvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAuYWRkLXBob3RvX190ZXh0IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMud2hpdGV9O1xuICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/NewMessage.js */'
      }));
    }
  }]);

  return NewMessage;
}(_react.Component);

exports.default = NewMessage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmV3TWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbG9ycyIsImZvbnRzIiwiTmV3TWVzc2FnZSIsInN0YXRlIiwidmFsdWUiLCJ2YWwiLCJvbkNoYW5nZSIsInR1cnF1b2lzZSIsInNvdXJjZVNhbnMiLCJ3aGl0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUTs7Ozs7OztJLEFBRUk7Ozs7Ozs7Ozs7Ozs7O29OQUNuQixBLFFBQVEsRUFBRSxPLEFBQUY7Ozs7OzZCLEFBQ0MsS0FBSyxBQUNaO1dBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixBQUNwQjs7Ozs2QkFDUSxBQUNQOzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWUsMkJBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBO2NBQ0UsQUFDTyxBQUNMO21CQUZGLEFBRVksQUFDVjtxQkFIRixBQUdjLEFBQ1o7ZUFBTyxLQUFBLEFBQUssTUFKZCxBQUlvQixBQUNsQjtrQkFBVSxLQUxaLEFBS2lCO29CQUxqQjs7b0JBQUE7c0JBREYsQUFDRSxBQU9BO0FBUEE7QUFDRSwwQkFNRixjQUFBLFNBQUssV0FBTCxBQUFlLHlCQUFmOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7Z0RBQ08sV0FBTCxBQUFlLG9CQUFtQixLQUFsQyxBQUFzQyx5Q0FBdEM7O29CQUFBO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUEsVUFBTSxXQUFOLEFBQWdCLCtCQUFoQjs7b0JBQUE7c0JBQUE7QUFBQTtTQVZKLEFBUUUsQUFFRSxBQUVGLCtCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWUseUJBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtnREFDTyxXQUFMLEFBQWUsb0JBQW1CLEtBQWxDLEFBQXNDLCtDQUF0Qzs7b0JBQUE7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsY0FBQSxVQUFNLFdBQU4sQUFBZ0IsK0JBQWhCOztvQkFBQTtzQkFBQTtBQUFBO1NBZEosQUFZRSxBQUVFO2lCQWRKOzJJQVZzSCxxQkFBTyxBQVU3SCwwQ0FWa0ssb0JBQU0sQUFVeEssaUtBVm9VLHFCQUFPLEFBVTNVLDBCQVZnVyxvQkFBTSxBQVV0VyxxR0FWc2MscUJBQU8sQUFVN2MseUVBVmloQixxQkFBTyxBQVV4aEIsNkVBVmdtQixxQkFBTyxBQVV2bUIsd0VBVjBxQixxQkFBTyxBQVVqckIsK1hBVjJpQyxxQkFBTyxBQVVsakMsUUFERixBQUNFLEFBMEVIO0FBMUVHOzs7OztBQVBrQyxBOztrQkFBbkIsQSIsImZpbGUiOiJOZXdNZXNzYWdlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lcmljL2Rldi9jaGFsbGVuZ2VzL0ludmlzaW9uL3NpbXBseXNvY2lhbCJ9