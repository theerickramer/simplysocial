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

var _store = require('../redux/store');

var _reactRedux = require('react-redux');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/eric/dev/challenges/simplysocial/components/NewMessage.js';


var NewMessage = function (_Component) {
  (0, _inherits3.default)(NewMessage, _Component);

  function NewMessage() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, NewMessage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NewMessage.__proto__ || (0, _getPrototypeOf2.default)(NewMessage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(NewMessage, [{
    key: '_onKeyPress',
    value: function _onKeyPress(e) {
      var _state = this.state,
          userId = _state.userId,
          avatar = _state.avatar,
          name = _state.name,
          text = _state.text,
          liked = _state.liked;

      var time = (0, _moment2.default)();
      if (e.key === 'Enter') {
        this.props.dispatch((0, _store.post)({ userId: userId, avatar: avatar, name: name, text: text, time: time, liked: liked }));
        this.setState({ text: '' });
      }
    }
  }, {
    key: '_onChange',
    value: function _onChange(e) {
      var _props = this.props,
          id = _props.id,
          avatar = _props.avatar,
          name = _props.name;

      var text = e.target.value;
      var time = (0, _moment2.default)().format('h');
      var liked = false;
      if (text.slice(-1) === '\n') {
        this.setState({ text: '' });
        this.refs.textarea.value = '';
      } else {
        this.setState({ userId: id, avatar: avatar, name: name, text: text, time: time, liked: liked });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'new-message', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('textarea', {
        rows: '2',
        className: 'new-message__input',
        placeholder: 'What\'s On Your Mind?',
        value: this.props.text,
        onChange: this._onChange.bind(this),
        onKeyPress: this._onKeyPress.bind(this),
        ref: 'textarea',
        'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement('div', { className: 'add-photo', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('img', { className: 'add-photo__image', src: '/static/images/camera.png', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement('span', { className: 'add-photo__text', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Add Photo')), _react2.default.createElement('div', { className: 'add-video', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('img', {
        className: 'add-video__image',
        src: '/static/images/video-camera.png',
        'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), _react2.default.createElement('span', { className: 'add-photo__text', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Add Video')), _react2.default.createElement(_style2.default, {
        styleId: 1021722323,
        css: '.new-message[data-jsx="1021722323"]{margin:0 auto;padding-top:40px;height:155px;width:575px;border-radius:5px;background:' + _cssConstants.colors.turquoise + ';opacity:0.5;font-family:' + _cssConstants.fonts.sourceSans + '}.new-message__input[data-jsx="1021722323"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 30px 45px;color:' + _cssConstants.colors.white + ';font-family:' + _cssConstants.fonts.sourceSans + ';font-size:24px;width:80%}[data-jsx="1021722323"]::-webkit-input-placeholder{color:' + _cssConstants.colors.white + ';opacity:.5}[data-jsx="1021722323"]::-moz-placeholder{color:' + _cssConstants.colors.white + ';opacity:.5}[data-jsx="1021722323"]:-ms-input-placeholder{color:' + _cssConstants.colors.white + ';opacity:.5}[data-jsx="1021722323"]:-moz-placeholder{color:' + _cssConstants.colors.white + ';opacity:.5}.add-photo[data-jsx="1021722323"],.add-video[data-jsx="1021722323"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:30px;cursor:pointer}.add-photo__text[data-jsx="1021722323"]{margin-left:10px;color:' + _cssConstants.colors.white + ';opacity:.5}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmV3TWVzc2FnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRG9CLEFBRzJCLEFBV0QsQUFVc0IsQUFLQSxBQU1BLEFBS0EsQUFLZixBQVFwQixjQWpEaUIsR0FpRGtCLGNBaER0QixJQW9CRixBQUtBLEFBTUEsQUFLQSxTQW5DQyxFQW9CZCxBQUtBLEFBTUEsQUFLQSxNQVlhLElBL0NPLE9BZ0RwQixXQS9DMEMsQUFPckIsbUJBQ2dCLFNBOEJoQixZQXJDUCxZQUM2QixFQU9BLHVDQU4zQyxFQU9pQixlQUNMLFVBQ1osQ0EyQm1CLGlCQUNGLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvTmV3TWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9zaW1wbHlzb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3JzLCBmb250cyB9IGZyb20gJy4uL3N0YXRpYy9jc3MtY29uc3RhbnRzJztcbmltcG9ydCB7IHBvc3QgfSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5jbGFzcyBOZXdNZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7fTtcbiAgX29uS2V5UHJlc3MoZSkge1xuICAgIGNvbnN0IHsgdXNlcklkLCBhdmF0YXIsIG5hbWUsIHRleHQsIGxpa2VkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHRpbWUgPSBtb21lbnQoKTtcbiAgICBpZihlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChwb3N0KHsgdXNlcklkLCBhdmF0YXIsIG5hbWUsIHRleHQsIHRpbWUsIGxpa2VkIH0pKTsgICAgXG4gICAgICB0aGlzLnNldFN0YXRlKHt0ZXh0OiAnJ30pO1xuICAgIH1cbiAgfVxuICBfb25DaGFuZ2UoZSkge1xuICAgIGNvbnN0IHsgaWQsIGF2YXRhciwgbmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgdGltZSA9IG1vbWVudCgpLmZvcm1hdCgnaCcpO1xuICAgIGNvbnN0IGxpa2VkID0gZmFsc2U7XG4gICAgaWYgKHRleHQuc2xpY2UoLTEpID09PSAnXFxuJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGV4dDogJyd9KVxuICAgICAgdGhpcy5yZWZzLnRleHRhcmVhLnZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VySWQ6IGlkLCBhdmF0YXIsIG5hbWUsIHRleHQsIHRpbWUsIGxpa2VkIH0pO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LW1lc3NhZ2VcIj5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgcm93cz1cIjJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5ldy1tZXNzYWdlX19pbnB1dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0J3MgT24gWW91ciBNaW5kP1wiXG4gICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudGV4dH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICBvbktleVByZXNzPXt0aGlzLl9vbktleVByZXNzLmJpbmQodGhpcyl9XG4gICAgICAgICAgcmVmPVwidGV4dGFyZWFcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1waG90b1wiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYWRkLXBob3RvX19pbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2NhbWVyYS5wbmdcIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFkZC1waG90b19fdGV4dFwiPkFkZCBQaG90bzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLXZpZGVvXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkLXZpZGVvX19pbWFnZVwiXG4gICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy92aWRlby1jYW1lcmEucG5nXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFkZC1waG90b19fdGV4dFwiPkFkZCBWaWRlbzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubmV3LW1lc3NhZ2Uge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTU1cHg7XG4gICAgICAgICAgICB3aWR0aDogNTc1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy50dXJxdW9pc2V9O1xuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udHMuc291cmNlU2Fuc307XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5ldy1tZXNzYWdlX19pbnB1dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDMwcHggNDVweDtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy53aGl0ZX07XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHtmb250cy5zb3VyY2VTYW5zfTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMud2hpdGV9O1xuICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgfVxuICAgICAgICAgIDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAvKiBGaXJlZm94IDE5KyAqL1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgICAgICAgICAgIG9wYWNpdHk6IC41OyAgICAgICAgICAgIFxuICAgICAgICAgIH1cblxuICAgICAgICAgIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgLyogSUUgMTArICovXG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMud2hpdGV9O1xuICAgICAgICAgICAgb3BhY2l0eTogLjU7ICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIC8qIEZpcmVmb3ggMTgtICovXG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMud2hpdGV9O1xuICAgICAgICAgICAgb3BhY2l0eTogLjU7ICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFkZC1waG90bywgLmFkZC12aWRlbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLmFkZC1waG90b19fdGV4dCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweFxuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHN0YXRlKShOZXdNZXNzYWdlKTtcbiJdfQ== */\n/*@ sourceURL=components/NewMessage.js */'
      }));
    }
  }]);

  return NewMessage;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(NewMessage);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmV3TWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbG9ycyIsImZvbnRzIiwicG9zdCIsImNvbm5lY3QiLCJtb21lbnQiLCJOZXdNZXNzYWdlIiwic3RhdGUiLCJlIiwidXNlcklkIiwiYXZhdGFyIiwibmFtZSIsInRleHQiLCJsaWtlZCIsInRpbWUiLCJrZXkiLCJwcm9wcyIsImRpc3BhdGNoIiwic2V0U3RhdGUiLCJpZCIsInRhcmdldCIsInZhbHVlIiwiZm9ybWF0Iiwic2xpY2UiLCJyZWZzIiwidGV4dGFyZWEiLCJfb25DaGFuZ2UiLCJiaW5kIiwiX29uS2V5UHJlc3MiLCJ0dXJxdW9pc2UiLCJzb3VyY2VTYW5zIiwid2hpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVE7O0FBQ2pCLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFPOzs7Ozs7Ozs7SUFFRCxBOzs7Ozs7Ozs7Ozs7OztvTixBQUNKLFEsQUFBUTs7Ozs7Z0MsQUFDSSxHQUFHO21CQUNpQyxLQURqQyxBQUNzQztVQUR0QyxBQUNMLGdCQURLLEFBQ0w7VUFESyxBQUNHLGdCQURILEFBQ0c7VUFESCxBQUNXLGNBRFgsQUFDVztVQURYLEFBQ2lCLGNBRGpCLEFBQ2lCO1VBRGpCLEFBQ3VCLGVBRHZCLEFBQ3VCLEFBQ3BDOztVQUFNLE9BQU4sQUFBYSxBQUNiO1VBQUcsRUFBQSxBQUFFLFFBQUwsQUFBYSxTQUFTLEFBQ3BCO2FBQUEsQUFBSyxNQUFMLEFBQVcsU0FBUyxpQkFBSyxFQUFFLFFBQUYsUUFBVSxRQUFWLFFBQWtCLE1BQWxCLE1BQXdCLE1BQXhCLE1BQThCLE1BQTlCLE1BQW9DLE9BQTdELEFBQW9CLEFBQUssQUFDekI7YUFBQSxBQUFLLFNBQVMsRUFBQyxNQUFmLEFBQWMsQUFBTyxBQUN0QjtBQUNGOzs7OzhCLEFBQ1MsR0FBRzttQkFDa0IsS0FEbEIsQUFDdUI7VUFEdkIsQUFDSCxZQURHLEFBQ0g7VUFERyxBQUNDLGdCQURELEFBQ0M7VUFERCxBQUNTLGNBRFQsQUFDUyxBQUNwQjs7VUFBTSxPQUFPLEVBQUEsQUFBRSxPQUFmLEFBQXNCLEFBQ3RCO1VBQU0sT0FBTyx3QkFBQSxBQUFTLE9BQXRCLEFBQWEsQUFBZ0IsQUFDN0I7VUFBTSxRQUFOLEFBQWMsQUFDZDtVQUFJLEtBQUEsQUFBSyxNQUFNLENBQVgsQUFBWSxPQUFoQixBQUF1QixNQUFNLEFBQzNCO2FBQUEsQUFBSyxTQUFTLEVBQUMsTUFBZixBQUFjLEFBQU8sQUFDckI7YUFBQSxBQUFLLEtBQUwsQUFBVSxTQUFWLEFBQW1CLFFBQW5CLEFBQTJCLEFBQzVCO0FBSEQsYUFHTyxBQUNMO2FBQUEsQUFBSyxTQUFTLEVBQUUsUUFBRixBQUFVLElBQUksUUFBZCxRQUFzQixNQUF0QixNQUE0QixNQUE1QixNQUFrQyxNQUFsQyxNQUF3QyxPQUF0RCxBQUFjLEFBQ2Y7QUFDRjs7Ozs2QkFDUSxBQUNQOzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWUsMkJBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBO2NBQ0UsQUFDTyxBQUNMO21CQUZGLEFBRVksQUFDVjtxQkFIRixBQUdjLEFBQ1o7ZUFBTyxLQUFBLEFBQUssTUFKZCxBQUlvQixBQUNsQjtrQkFBVSxLQUFBLEFBQUssVUFBTCxBQUFlLEtBTDNCLEFBS1ksQUFBb0IsQUFDOUI7b0JBQVksS0FBQSxBQUFLLFlBQUwsQUFBaUIsS0FOL0IsQUFNYyxBQUFzQixBQUNsQzthQVBGLEFBT007b0JBUE47O29CQUFBO3NCQURGLEFBQ0UsQUFTQTtBQVRBO0FBQ0UsMEJBUUYsY0FBQSxTQUFLLFdBQUwsQUFBZSx5QkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO2dEQUNPLFdBQUwsQUFBZSxvQkFBbUIsS0FBbEMsQUFBc0MseUNBQXRDOztvQkFBQTtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxjQUFBLFVBQU0sV0FBTixBQUFnQiwrQkFBaEI7O29CQUFBO3NCQUFBO0FBQUE7U0FaSixBQVVFLEFBRUUsQUFFRiwrQkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlLHlCQUFmOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7O21CQUNFLEFBQ1ksQUFDVjthQUZGLEFBRU07b0JBRk47O29CQUFBO3NCQURGLEFBQ0UsQUFJQTtBQUpBO0FBQ0UsMEJBR0YsY0FBQSxVQUFNLFdBQU4sQUFBZ0IsK0JBQWhCOztvQkFBQTtzQkFBQTtBQUFBO1NBbkJKLEFBY0UsQUFLRTtpQkFuQko7MklBOUJzSCxxQkFBTyxBQThCN0gsMENBOUJrSyxvQkFBTSxBQThCeEssaUtBOUJvVSxxQkFBTyxBQThCM1UsMEJBOUJnVyxvQkFBTSxBQThCdFcscUdBOUJzYyxxQkFBTyxBQThCN2MseUVBOUJpaEIscUJBQU8sQUE4QnhoQiw2RUE5QmdtQixxQkFBTyxBQThCdm1CLHdFQTlCMHFCLHFCQUFPLEFBOEJqckIsK1hBOUIyaUMscUJBQU8sQUE4QmxqQyxRQURGLEFBQ0UsQUErRUg7QUEvRUc7Ozs7O0FBeEJtQixBQTBHekIsQTs7MkNBQXVCLGlCQUFBO1NBQUEsQUFBUztBQUFqQixDQUFBLEVBQWYsQUFBZSxBQUF3QiIsImZpbGUiOiJOZXdNZXNzYWdlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lcmljL2Rldi9jaGFsbGVuZ2VzL3NpbXBseXNvY2lhbCJ9