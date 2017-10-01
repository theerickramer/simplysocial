webpackHotUpdate(5,{

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(30);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(31);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(55);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(59);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(554);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(27);

var _react2 = _interopRequireDefault(_react);

var _cssConstants = __webpack_require__(555);

var _store = __webpack_require__(558);

var _reactRedux = __webpack_require__(560);

var _moment = __webpack_require__(553);

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
          id = _state.id,
          avatar = _state.avatar,
          name = _state.name,
          text = _state.text,
          time = _state.time,
          liked = _state.liked;

      if (e.key === 'Enter') {
        console.log(e.key);
        this.props.dispatch((0, _store.post)({ id: id, avatar: avatar, name: name, text: text, time: time, liked: liked }));
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
      var time = (0, _moment2.default)().format('hh');
      var liked = false;
      this.setState({ id: id, avatar: avatar, name: name, text: text, time: time, liked: liked });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'new-message', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('textarea', {
        rows: '2',
        className: 'new-message__input',
        placeholder: 'What\'s On Your Mind?',
        value: this.props.text,
        onChange: this._onChange.bind(this),
        onKeyPress: this._onKeyPress.bind(this),
        'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement('div', { className: 'add-photo', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('img', { className: 'add-photo__image', src: '/static/images/camera.png', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement('span', { className: 'add-photo__text', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'Add Photo')), _react2.default.createElement('div', { className: 'add-video', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('img', {
        className: 'add-video__image',
        src: '/static/images/video-camera.png',
        'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement('span', { className: 'add-photo__text', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Add Video')), _react2.default.createElement(_style2.default, {
        styleId: 1021722323,
        css: '.new-message[data-jsx="1021722323"]{margin:0 auto;padding-top:40px;height:155px;width:575px;border-radius:5px;background:' + _cssConstants.colors.turquoise + ';opacity:0.5;font-family:' + _cssConstants.fonts.sourceSans + '}.new-message__input[data-jsx="1021722323"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 30px 45px;color:' + _cssConstants.colors.white + ';font-family:' + _cssConstants.fonts.sourceSans + ';font-size:24px;width:80%}[data-jsx="1021722323"]::-webkit-input-placeholder{color:' + _cssConstants.colors.white + ';opacity:.5}[data-jsx="1021722323"]::-moz-placeholder{color:' + _cssConstants.colors.white + ';opacity:.5}[data-jsx="1021722323"]:-ms-input-placeholder{color:' + _cssConstants.colors.white + ';opacity:.5}[data-jsx="1021722323"]:-moz-placeholder{color:' + _cssConstants.colors.white + ';opacity:.5}.add-photo[data-jsx="1021722323"],.add-video[data-jsx="1021722323"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:30px;cursor:pointer}.add-photo__text[data-jsx="1021722323"]{margin-left:10px;color:' + _cssConstants.colors.white + ';opacity:.5}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmV3TWVzc2FnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q29CLEFBRzJCLEFBV0QsQUFVc0IsQUFLQSxBQU1BLEFBS0EsQUFLZixBQVFwQixjQWpEaUIsR0FpRGtCLGNBaER0QixJQW9CRixBQUtBLEFBTUEsQUFLQSxTQW5DQyxFQW9CZCxBQUtBLEFBTUEsQUFLQSxNQVlhLElBL0NPLE9BZ0RwQixXQS9DMEMsQUFPckIsbUJBQ2dCLFNBOEJoQixZQXJDUCxZQUM2QixFQU9BLHVDQU4zQyxFQU9pQixlQUNMLFVBQ1osQ0EyQm1CLGlCQUNGLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvTmV3TWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9zaW1wbHlzb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3JzLCBmb250cyB9IGZyb20gJy4uL3N0YXRpYy9jc3MtY29uc3RhbnRzJztcbmltcG9ydCB7IHBvc3QgfSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5jbGFzcyBOZXdNZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7fTtcbiAgX29uS2V5UHJlc3MoZSkge1xuICAgIGNvbnN0IHsgaWQsIGF2YXRhciwgbmFtZSwgdGV4dCwgdGltZSwgbGlrZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUua2V5KVxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChwb3N0KHsgaWQsIGF2YXRhciwgbmFtZSwgdGV4dCwgdGltZSwgbGlrZWQgfSkpOyAgICBcbiAgICB9XG4gIH1cbiAgX29uQ2hhbmdlKGUpIHtcbiAgICBjb25zdCB7IGlkLCBhdmF0YXIsIG5hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHRpbWUgPSBtb21lbnQoKS5mb3JtYXQoJ2hoJyk7XG4gICAgY29uc3QgbGlrZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaWQsIGF2YXRhciwgbmFtZSwgdGV4dCwgdGltZSwgbGlrZWQgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1tZXNzYWdlXCI+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIHJvd3M9XCIyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJuZXctbWVzc2FnZV9faW5wdXRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCdzIE9uIFlvdXIgTWluZD9cIlxuICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnRleHR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5fb25LZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1waG90b1wiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYWRkLXBob3RvX19pbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2NhbWVyYS5wbmdcIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFkZC1waG90b19fdGV4dFwiPkFkZCBQaG90bzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLXZpZGVvXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkLXZpZGVvX19pbWFnZVwiXG4gICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy92aWRlby1jYW1lcmEucG5nXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFkZC1waG90b19fdGV4dFwiPkFkZCBWaWRlbzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubmV3LW1lc3NhZ2Uge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTU1cHg7XG4gICAgICAgICAgICB3aWR0aDogNTc1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy50dXJxdW9pc2V9O1xuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udHMuc291cmNlU2Fuc307XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5ldy1tZXNzYWdlX19pbnB1dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDMwcHggNDVweDtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy53aGl0ZX07XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHtmb250cy5zb3VyY2VTYW5zfTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMud2hpdGV9O1xuICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgfVxuICAgICAgICAgIDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAvKiBGaXJlZm94IDE5KyAqL1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgICAgICAgICAgIG9wYWNpdHk6IC41OyAgICAgICAgICAgIFxuICAgICAgICAgIH1cblxuICAgICAgICAgIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgLyogSUUgMTArICovXG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMud2hpdGV9O1xuICAgICAgICAgICAgb3BhY2l0eTogLjU7ICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIC8qIEZpcmVmb3ggMTgtICovXG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMud2hpdGV9O1xuICAgICAgICAgICAgb3BhY2l0eTogLjU7ICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFkZC1waG90bywgLmFkZC12aWRlbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLmFkZC1waG90b19fdGV4dCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweFxuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHN0YXRlKShOZXdNZXNzYWdlKTtcbiJdfQ== */\n/*@ sourceURL=components/NewMessage.js */'
      }));
    }
  }]);

  return NewMessage;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(NewMessage);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmV3TWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbG9ycyIsImZvbnRzIiwicG9zdCIsImNvbm5lY3QiLCJtb21lbnQiLCJOZXdNZXNzYWdlIiwic3RhdGUiLCJlIiwiaWQiLCJhdmF0YXIiLCJuYW1lIiwidGV4dCIsInRpbWUiLCJsaWtlZCIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImRpc3BhdGNoIiwidGFyZ2V0IiwidmFsdWUiLCJmb3JtYXQiLCJzZXRTdGF0ZSIsIl9vbkNoYW5nZSIsImJpbmQiLCJfb25LZXlQcmVzcyIsInR1cnF1b2lzZSIsInNvdXJjZVNhbnMiLCJ3aGl0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUTs7QUFDakIsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQU87Ozs7Ozs7OztJQUVELEE7Ozs7Ozs7Ozs7Ozs7O29OLEFBQ0osUUFBUSxBOzs7OztnQ0FDSSxBLEdBQUc7bUJBQ21DLEtBRG5DLEFBQ3dDO1VBRHhDLEFBQ0wsWUFESyxBQUNMO1VBREssQUFDRCxnQkFEQyxBQUNEO1VBREMsQUFDTyxjQURQLEFBQ087VUFEUCxBQUNhLGNBRGIsQUFDYTtVQURiLEFBQ21CLGNBRG5CLEFBQ21CO1VBRG5CLEFBQ3lCLGVBRHpCLEFBQ3lCLEFBQ3RDOztVQUFHLEVBQUEsQUFBRSxRQUFMLEFBQWEsU0FBUyxBQUNwQjtnQkFBQSxBQUFRLElBQUksRUFBWixBQUFjLEFBQ2Q7YUFBQSxBQUFLLE1BQUwsQUFBVyxTQUFTLGlCQUFLLEVBQUUsSUFBRixJQUFNLFFBQU4sUUFBYyxNQUFkLE1BQW9CLE1BQXBCLE1BQTBCLE1BQTFCLE1BQWdDLE9BQXpELEFBQW9CLEFBQUssQUFDMUI7QUFDRjs7Ozs4QkFDUyxBLEdBQUc7bUJBQ2tCLEtBRGxCLEFBQ3VCO1VBRHZCLEFBQ0gsWUFERyxBQUNIO1VBREcsQUFDQyxnQkFERCxBQUNDO1VBREQsQUFDUyxjQURULEFBQ1MsQUFDcEI7O1VBQU0sT0FBTyxFQUFBLEFBQUUsT0FBZixBQUFzQixBQUN0QjtVQUFNLE9BQU8sd0JBQUEsQUFBUyxPQUF0QixBQUFhLEFBQWdCLEFBQzdCO1VBQU0sUUFBTixBQUFjLEFBQ2Q7V0FBQSxBQUFLLFNBQVMsRUFBRSxJQUFGLElBQU0sUUFBTixRQUFjLE1BQWQsTUFBb0IsTUFBcEIsTUFBMEIsTUFBMUIsTUFBZ0MsT0FBOUMsQUFBYyxBQUNmOzs7OzZCQUNRLEFBQ1A7NkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZSwyQkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUE7Y0FDRSxBQUNPLEFBQ0w7bUJBRkYsQUFFWSxBQUNWO3FCQUhGLEFBR2MsQUFDWjtlQUFPLEtBQUEsQUFBSyxNQUpkLEFBSW9CLEFBQ2xCO2tCQUFVLEtBQUEsQUFBSyxVQUFMLEFBQWUsS0FMM0IsQUFLWSxBQUFvQixBQUM5QjtvQkFBWSxLQUFBLEFBQUssWUFBTCxBQUFpQixLQU4vQixBQU1jLEFBQXNCO29CQU5wQzs7b0JBQUE7c0JBREYsQUFDRSxBQVFBO0FBUkE7QUFDRSwwQkFPRixjQUFBLFNBQUssV0FBTCxBQUFlLHlCQUFmOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7Z0RBQ08sV0FBTCxBQUFlLG9CQUFtQixLQUFsQyxBQUFzQyx5Q0FBdEM7O29CQUFBO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUEsVUFBTSxXQUFOLEFBQWdCLCtCQUFoQjs7b0JBQUE7c0JBQUE7QUFBQTtTQVhKLEFBU0UsQUFFRSxBQUVGLCtCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWUseUJBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjs7bUJBQ0UsQUFDWSxBQUNWO2FBRkYsQUFFTTtvQkFGTjs7b0JBQUE7c0JBREYsQUFDRSxBQUlBO0FBSkE7QUFDRSwwQkFHRixjQUFBLFVBQU0sV0FBTixBQUFnQiwrQkFBaEI7O29CQUFBO3NCQUFBO0FBQUE7U0FsQkosQUFhRSxBQUtFO2lCQWxCSjsySUF4QnNILHFCQUFPLEFBd0I3SCwwQ0F4QmtLLG9CQUFNLEFBd0J4SyxpS0F4Qm9VLHFCQUFPLEFBd0IzVSwwQkF4QmdXLG9CQUFNLEFBd0J0VyxxR0F4QnNjLHFCQUFPLEFBd0I3Yyx5RUF4QmloQixxQkFBTyxBQXdCeGhCLDZFQXhCZ21CLHFCQUFPLEFBd0J2bUIsd0VBeEIwcUIscUJBQU8sQUF3QmpyQiwrWEF4QjJpQyxxQkFBTyxBQXdCbGpDLFFBREYsQUFDRSxBQThFSDtBQTlFRzs7Ozs7QUFsQm1CLEFBbUd6QixBOzsyQ0FBdUIsaUJBQUE7U0FBQSxBQUFTO0FBQWpCLENBQUEsRUFBZixBQUFlLEFBQXdCIiwiZmlsZSI6Ik5ld01lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VyaWMvZGV2L2NoYWxsZW5nZXMvc2ltcGx5c29jaWFsIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/eric/dev/challenges/simplysocial/components/NewMessage.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/eric/dev/challenges/simplysocial/components/NewMessage.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jMzFiYTk1NzczYTgzZGIwNWYyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZXdNZXNzYWdlLmpzP2M1NmViZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9ycywgZm9udHMgfSBmcm9tICcuLi9zdGF0aWMvY3NzLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBwb3N0IH0gZnJvbSAnLi4vcmVkdXgvc3RvcmUnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuY2xhc3MgTmV3TWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge307XG4gIF9vbktleVByZXNzKGUpIHtcbiAgICBjb25zdCB7IGlkLCBhdmF0YXIsIG5hbWUsIHRleHQsIHRpbWUsIGxpa2VkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBjb25zb2xlLmxvZyhlLmtleSlcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocG9zdCh7IGlkLCBhdmF0YXIsIG5hbWUsIHRleHQsIHRpbWUsIGxpa2VkIH0pKTsgICAgXG4gICAgfVxuICB9XG4gIF9vbkNoYW5nZShlKSB7XG4gICAgY29uc3QgeyBpZCwgYXZhdGFyLCBuYW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRleHQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCB0aW1lID0gbW9tZW50KCkuZm9ybWF0KCdoaCcpO1xuICAgIGNvbnN0IGxpa2VkID0gZmFsc2U7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlkLCBhdmF0YXIsIG5hbWUsIHRleHQsIHRpbWUsIGxpa2VkIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctbWVzc2FnZVwiPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICByb3dzPVwiMlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmV3LW1lc3NhZ2VfX2lucHV0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQncyBPbiBZb3VyIE1pbmQ/XCJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy50ZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuX29uS2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtcGhvdG9cIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFkZC1waG90b19faW1hZ2VcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9jYW1lcmEucG5nXCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZGQtcGhvdG9fX3RleHRcIj5BZGQgUGhvdG88L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC12aWRlb1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZC12aWRlb19faW1hZ2VcIlxuICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvdmlkZW8tY2FtZXJhLnBuZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZGQtcGhvdG9fX3RleHRcIj5BZGQgVmlkZW88L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm5ldy1tZXNzYWdlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1NXB4O1xuICAgICAgICAgICAgd2lkdGg6IDU3NXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMudHVycXVvaXNlfTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnRzLnNvdXJjZVNhbnN9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uZXctbWVzc2FnZV9faW5wdXQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAzMHB4IDQ1cHg7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMud2hpdGV9O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udHMuc291cmNlU2Fuc307ICAgICAgICAgICAgXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgIH1cbiAgICAgICAgICA6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgLyogRmlyZWZveCAxOSsgKi9cbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy53aGl0ZX07XG4gICAgICAgICAgICBvcGFjaXR5OiAuNTsgICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIC8qIElFIDEwKyAqL1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgICAgICAgICAgIG9wYWNpdHk6IC41OyAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICA6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAvKiBGaXJlZm94IDE4LSAqL1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgICAgICAgICAgIG9wYWNpdHk6IC41OyAgICAgICAgICAgIFxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hZGQtcGhvdG8sIC5hZGQtdmlkZW8ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5hZGQtcGhvdG9fX3RleHQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHhcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy53aGl0ZX07XG4gICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiBzdGF0ZSkoTmV3TWVzc2FnZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL05ld01lc3NhZ2UuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFOQTs7QUFBQTtBQVFBO0FBUkE7QUFDQTs7QUFPQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7O0FBR0E7QUFBQTtBQUZBOztBQUFBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBbEJBO0FBeEJBO0FBd0JBOzs7OztBQWlGQTtBQUNBO0FBREE7QUFBQTtBQUFBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=