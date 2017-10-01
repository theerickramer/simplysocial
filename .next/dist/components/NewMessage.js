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
          id = _state.id,
          avatar = _state.avatar,
          name = _state.name,
          text = _state.text,
          time = _state.time,
          liked = _state.liked;

      if (e.key === 'Enter') {
        this.props.dispatch((0, _store.post)({ id: id, avatar: avatar, name: name, text: text, time: time, liked: liked }));
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
        this.setState({ id: id, avatar: avatar, name: name, text: text, time: time, liked: liked });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'new-message', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
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
          lineNumber: 31
        }
      }), _react2.default.createElement('div', { className: 'add-photo', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('img', { className: 'add-photo__image', src: '/static/images/camera.png', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement('span', { className: 'add-photo__text', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'Add Photo')), _react2.default.createElement('div', { className: 'add-video', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('img', {
        className: 'add-video__image',
        src: '/static/images/video-camera.png',
        'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), _react2.default.createElement('span', { className: 'add-photo__text', 'data-jsx': 1021722323,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Add Video')), _react2.default.createElement(_style2.default, {
        styleId: 1021722323,
        css: '.new-message[data-jsx="1021722323"]{margin:0 auto;padding-top:40px;height:155px;width:575px;border-radius:5px;background:' + _cssConstants.colors.turquoise + ';opacity:0.5;font-family:' + _cssConstants.fonts.sourceSans + '}.new-message__input[data-jsx="1021722323"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 30px 45px;color:' + _cssConstants.colors.white + ';font-family:' + _cssConstants.fonts.sourceSans + ';font-size:24px;width:80%}[data-jsx="1021722323"]::-webkit-input-placeholder{color:' + _cssConstants.colors.white + ';opacity:.5}[data-jsx="1021722323"]::-moz-placeholder{color:' + _cssConstants.colors.white + ';opacity:.5}[data-jsx="1021722323"]:-ms-input-placeholder{color:' + _cssConstants.colors.white + ';opacity:.5}[data-jsx="1021722323"]:-moz-placeholder{color:' + _cssConstants.colors.white + ';opacity:.5}.add-photo[data-jsx="1021722323"],.add-video[data-jsx="1021722323"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:30px;cursor:pointer}.add-photo__text[data-jsx="1021722323"]{margin-left:10px;color:' + _cssConstants.colors.white + ';opacity:.5}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmV3TWVzc2FnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRG9CLEFBRzJCLEFBV0QsQUFVc0IsQUFLQSxBQU1BLEFBS0EsQUFLZixBQVFwQixjQWpEaUIsR0FpRGtCLGNBaER0QixJQW9CRixBQUtBLEFBTUEsQUFLQSxTQW5DQyxFQW9CZCxBQUtBLEFBTUEsQUFLQSxNQVlhLElBL0NPLE9BZ0RwQixXQS9DMEMsQUFPckIsbUJBQ2dCLFNBOEJoQixZQXJDUCxZQUM2QixFQU9BLHVDQU4zQyxFQU9pQixlQUNMLFVBQ1osQ0EyQm1CLGlCQUNGLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvTmV3TWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9zaW1wbHlzb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3JzLCBmb250cyB9IGZyb20gJy4uL3N0YXRpYy9jc3MtY29uc3RhbnRzJztcbmltcG9ydCB7IHBvc3QgfSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5jbGFzcyBOZXdNZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7fTtcbiAgX29uS2V5UHJlc3MoZSkge1xuICAgIGNvbnN0IHsgaWQsIGF2YXRhciwgbmFtZSwgdGV4dCwgdGltZSwgbGlrZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocG9zdCh7IGlkLCBhdmF0YXIsIG5hbWUsIHRleHQsIHRpbWUsIGxpa2VkIH0pKTsgICAgXG4gICAgICB0aGlzLnNldFN0YXRlKHt0ZXh0OiAnJ30pO1xuICAgIH1cbiAgfVxuICBfb25DaGFuZ2UoZSkge1xuICAgIGNvbnN0IHsgaWQsIGF2YXRhciwgbmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgdGltZSA9IG1vbWVudCgpLmZvcm1hdCgnaCcpO1xuICAgIGNvbnN0IGxpa2VkID0gZmFsc2U7XG4gICAgaWYgKHRleHQuc2xpY2UoLTEpID09PSAnXFxuJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGV4dDogJyd9KVxuICAgICAgdGhpcy5yZWZzLnRleHRhcmVhLnZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpZCwgYXZhdGFyLCBuYW1lLCB0ZXh0LCB0aW1lLCBsaWtlZCB9KTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1tZXNzYWdlXCI+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIHJvd3M9XCIyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJuZXctbWVzc2FnZV9faW5wdXRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCdzIE9uIFlvdXIgTWluZD9cIlxuICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnRleHR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5fb25LZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICAgIHJlZj1cInRleHRhcmVhXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtcGhvdG9cIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFkZC1waG90b19faW1hZ2VcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9jYW1lcmEucG5nXCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZGQtcGhvdG9fX3RleHRcIj5BZGQgUGhvdG88L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC12aWRlb1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZC12aWRlb19faW1hZ2VcIlxuICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvdmlkZW8tY2FtZXJhLnBuZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZGQtcGhvdG9fX3RleHRcIj5BZGQgVmlkZW88L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm5ldy1tZXNzYWdlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1NXB4O1xuICAgICAgICAgICAgd2lkdGg6IDU3NXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMudHVycXVvaXNlfTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnRzLnNvdXJjZVNhbnN9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uZXctbWVzc2FnZV9faW5wdXQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAzMHB4IDQ1cHg7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMud2hpdGV9O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udHMuc291cmNlU2Fuc307ICAgICAgICAgICAgXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgIH1cbiAgICAgICAgICA6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgLyogRmlyZWZveCAxOSsgKi9cbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy53aGl0ZX07XG4gICAgICAgICAgICBvcGFjaXR5OiAuNTsgICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIC8qIElFIDEwKyAqL1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgICAgICAgICAgIG9wYWNpdHk6IC41OyAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICA6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAvKiBGaXJlZm94IDE4LSAqL1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgICAgICAgICAgIG9wYWNpdHk6IC41OyAgICAgICAgICAgIFxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hZGQtcGhvdG8sIC5hZGQtdmlkZW8ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5hZGQtcGhvdG9fX3RleHQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHhcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy53aGl0ZX07XG4gICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiBzdGF0ZSkoTmV3TWVzc2FnZSk7XG4iXX0= */\n/*@ sourceURL=components/NewMessage.js */'
      }));
    }
  }]);

  return NewMessage;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(NewMessage);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmV3TWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbG9ycyIsImZvbnRzIiwicG9zdCIsImNvbm5lY3QiLCJtb21lbnQiLCJOZXdNZXNzYWdlIiwic3RhdGUiLCJlIiwiaWQiLCJhdmF0YXIiLCJuYW1lIiwidGV4dCIsInRpbWUiLCJsaWtlZCIsImtleSIsInByb3BzIiwiZGlzcGF0Y2giLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZm9ybWF0Iiwic2xpY2UiLCJyZWZzIiwidGV4dGFyZWEiLCJfb25DaGFuZ2UiLCJiaW5kIiwiX29uS2V5UHJlc3MiLCJ0dXJxdW9pc2UiLCJzb3VyY2VTYW5zIiwid2hpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVE7O0FBQ2pCLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFPOzs7Ozs7Ozs7SUFFRCxBOzs7Ozs7Ozs7Ozs7OztvTixBQUNKLFEsQUFBUTs7Ozs7Z0MsQUFDSSxHQUFHO21CQUNtQyxLQURuQyxBQUN3QztVQUR4QyxBQUNMLFlBREssQUFDTDtVQURLLEFBQ0QsZ0JBREMsQUFDRDtVQURDLEFBQ08sY0FEUCxBQUNPO1VBRFAsQUFDYSxjQURiLEFBQ2E7VUFEYixBQUNtQixjQURuQixBQUNtQjtVQURuQixBQUN5QixlQUR6QixBQUN5QixBQUN0Qzs7VUFBRyxFQUFBLEFBQUUsUUFBTCxBQUFhLFNBQVMsQUFDcEI7YUFBQSxBQUFLLE1BQUwsQUFBVyxTQUFTLGlCQUFLLEVBQUUsSUFBRixJQUFNLFFBQU4sUUFBYyxNQUFkLE1BQW9CLE1BQXBCLE1BQTBCLE1BQTFCLE1BQWdDLE9BQXpELEFBQW9CLEFBQUssQUFDekI7YUFBQSxBQUFLLFNBQVMsRUFBQyxNQUFmLEFBQWMsQUFBTyxBQUN0QjtBQUNGOzs7OzhCLEFBQ1MsR0FBRzttQkFDa0IsS0FEbEIsQUFDdUI7VUFEdkIsQUFDSCxZQURHLEFBQ0g7VUFERyxBQUNDLGdCQURELEFBQ0M7VUFERCxBQUNTLGNBRFQsQUFDUyxBQUNwQjs7VUFBTSxPQUFPLEVBQUEsQUFBRSxPQUFmLEFBQXNCLEFBQ3RCO1VBQU0sT0FBTyx3QkFBQSxBQUFTLE9BQXRCLEFBQWEsQUFBZ0IsQUFDN0I7VUFBTSxRQUFOLEFBQWMsQUFDZDtVQUFJLEtBQUEsQUFBSyxNQUFNLENBQVgsQUFBWSxPQUFoQixBQUF1QixNQUFNLEFBQzNCO2FBQUEsQUFBSyxTQUFTLEVBQUMsTUFBZixBQUFjLEFBQU8sQUFDckI7YUFBQSxBQUFLLEtBQUwsQUFBVSxTQUFWLEFBQW1CLFFBQW5CLEFBQTJCLEFBQzVCO0FBSEQsYUFHTyxBQUNMO2FBQUEsQUFBSyxTQUFTLEVBQUUsSUFBRixJQUFNLFFBQU4sUUFBYyxNQUFkLE1BQW9CLE1BQXBCLE1BQTBCLE1BQTFCLE1BQWdDLE9BQTlDLEFBQWMsQUFDZjtBQUNGOzs7OzZCQUNRLEFBQ1A7NkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZSwyQkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUE7Y0FDRSxBQUNPLEFBQ0w7bUJBRkYsQUFFWSxBQUNWO3FCQUhGLEFBR2MsQUFDWjtlQUFPLEtBQUEsQUFBSyxNQUpkLEFBSW9CLEFBQ2xCO2tCQUFVLEtBQUEsQUFBSyxVQUFMLEFBQWUsS0FMM0IsQUFLWSxBQUFvQixBQUM5QjtvQkFBWSxLQUFBLEFBQUssWUFBTCxBQUFpQixLQU4vQixBQU1jLEFBQXNCLEFBQ2xDO2FBUEYsQUFPTTtvQkFQTjs7b0JBQUE7c0JBREYsQUFDRSxBQVNBO0FBVEE7QUFDRSwwQkFRRixjQUFBLFNBQUssV0FBTCxBQUFlLHlCQUFmOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7Z0RBQ08sV0FBTCxBQUFlLG9CQUFtQixLQUFsQyxBQUFzQyx5Q0FBdEM7O29CQUFBO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUEsVUFBTSxXQUFOLEFBQWdCLCtCQUFoQjs7b0JBQUE7c0JBQUE7QUFBQTtTQVpKLEFBVUUsQUFFRSxBQUVGLCtCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWUseUJBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjs7bUJBQ0UsQUFDWSxBQUNWO2FBRkYsQUFFTTtvQkFGTjs7b0JBQUE7c0JBREYsQUFDRSxBQUlBO0FBSkE7QUFDRSwwQkFHRixjQUFBLFVBQU0sV0FBTixBQUFnQiwrQkFBaEI7O29CQUFBO3NCQUFBO0FBQUE7U0FuQkosQUFjRSxBQUtFO2lCQW5CSjsySUE3QnNILHFCQUFPLEFBNkI3SCwwQ0E3QmtLLG9CQUFNLEFBNkJ4SyxpS0E3Qm9VLHFCQUFPLEFBNkIzVSwwQkE3QmdXLG9CQUFNLEFBNkJ0VyxxR0E3QnNjLHFCQUFPLEFBNkI3Yyx5RUE3QmloQixxQkFBTyxBQTZCeGhCLDZFQTdCZ21CLHFCQUFPLEFBNkJ2bUIsd0VBN0IwcUIscUJBQU8sQUE2QmpyQiwrWEE3QjJpQyxxQkFBTyxBQTZCbGpDLFFBREYsQUFDRSxBQStFSDtBQS9FRzs7Ozs7QUF2Qm1CLEFBeUd6QixBOzsyQ0FBdUIsaUJBQUE7U0FBQSxBQUFTO0FBQWpCLENBQUEsRUFBZixBQUFlLEFBQXdCIiwiZmlsZSI6Ik5ld01lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VyaWMvZGV2L2NoYWxsZW5nZXMvc2ltcGx5c29jaWFsIn0=