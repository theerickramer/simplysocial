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

var _jsxFileName = '/Users/eric/dev/challenges/Invision/simplysocial/components/Post.js';


var Post = function (_Component) {
  (0, _inherits3.default)(Post, _Component);

  function Post() {
    (0, _classCallCheck3.default)(this, Post);

    return (0, _possibleConstructorReturn3.default)(this, (Post.__proto__ || (0, _getPrototypeOf2.default)(Post)).apply(this, arguments));
  }

  (0, _createClass3.default)(Post, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          avatar = _props.avatar,
          name = _props.name,
          text = _props.text,
          time = _props.time,
          more = _props.more,
          image = _props.image;

      return _react2.default.createElement('li', { className: 'post', key: id, 'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement('img', { className: 'post__avatar', src: avatar, 'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }), _react2.default.createElement('div', { className: 'post__content', 'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement('h5', { className: 'post__name', 'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, name), _react2.default.createElement('p', {
        className: 'post__text',
        dangerouslySetInnerHTML: { __html: text },
        'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), more ? _react2.default.createElement('div', { className: 'post__extra', 'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('div', { className: 'post__expand', 'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('span', {
        'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'Expand'), _react2.default.createElement('img', { src: '/static/images/down-arrow.png', 'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }))) : null), _react2.default.createElement('div', { className: 'post__options', 'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('img', { className: 'post__reply', src: '/static/images/reply-arrow.png', 'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement('div', { className: 'post__like heart icon', 'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement('span', { className: 'post__time', 'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, time)), _react2.default.createElement(_style2.default, {
        styleId: 1510283267,
        css: '.post[data-jsx="1510283267"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;margin-bottom:30px;padding:25px;border:1px solid ' + _cssConstants.colors.lightGrey + ';border-radius:5px;color:' + _cssConstants.colors.medGrey + '}.post__content[data-jsx="1510283267"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-left:20px}.post__avatar[data-jsx="1510283267"],.post__content[data-jsx="1510283267"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex}.post__avatar[data-jsx="1510283267"]{height:40px;width:40px}.post__name[data-jsx="1510283267"]{margin-bottom:15px;color:' + _cssConstants.colors.medDarkGrey + '}.post__text[data-jsx="1510283267"]{margin-bottom:25px;color:' + _cssConstants.colors.medDarkGrey + '}.post__options[data-jsx="1510283267"]{position:absolute;top:25px;right:25px}.post__reply[data-jsx="1510283267"],.post__like[data-jsx="1510283267"],.post__time[data-jsx="1510283267"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin-left:20px;color:' + _cssConstants.colors.lightGrey + '}.post__expand[data-jsx="1510283267"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.post__expand[data-jsx="1510283267"] span[data-jsx="1510283267"]{margin-right:10px;color:' + _cssConstants.colors.lightGrey + ';font-size:10px}.post__expand[data-jsx="1510283267"] img[data-jsx="1510283267"]{opacity:0.4}.heart.icon[data-jsx="1510283267"]{color:' + _cssConstants.colors.lightGrey + ';width:9px;height:9px;border-left:solid 1px currentColor;border-bottom:solid 1px currentColor;-webkit-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.heart.icon[data-jsx="1510283267"]:before{content:\'\';position:absolute;top:-5px;left:-1px;width:8px;height:5px;border-radius:5px 5px 0 0;border-top:solid 1px currentColor;border-left:solid 1px currentColor;border-right:solid 1px currentColor}.heart.icon[data-jsx="1510283267"]:after{content:\'\';position:absolute;top:0px;left:8px;width:5px;height:8px;border-radius:0 5px 5px 0;border-top:solid 1px currentColor;border-right:solid 1px currentColor;border-bottom:solid 1px currentColor}@-webkit-keyframes poofdatajsx1510283267{0%{box-shadow:0 0 rgba(255,0,0,1)}100%{box-shadow:20px -20px 5px rgba(255,0,0,0)}}@keyframes poofdatajsx1510283267{0%{box-shadow:0 0 rgba(255,0,0,1)}100%{box-shadow:20px -20px 5px rgba(255,0,0,0)}}.heart.icon.selected[data-jsx="1510283267"],.heart.icon.selected[data-jsx="1510283267"]:before,.heart.icon.selected[data-jsx="1510283267"]:after{-webkit-animation:poofdatajsx1510283267 1s;animation:poofdatajsx1510283267 1s;background-color:red}.heart.icon[data-jsx="1510283267"]:hover,.heart.icon.selected[data-jsx="1510283267"]{border-bottom:1px solid red;border-left:1px solid red}.heart.icon[data-jsx="1510283267"]:hover[data-jsx="1510283267"]:before,.heart.icon.selected[data-jsx="1510283267"]:before{border-top:1px solid red;border-right:1px solid red;border-left:1px solid red}.heart.icon[data-jsx="1510283267"]:hover[data-jsx="1510283267"]:after,.heart.icon.selected[data-jsx="1510283267"]:after{border-top:1px solid red;border-bottom:1px solid red;border-right:1px solid red}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Qm9CLEFBRzBCLEFBVUEsQUFNTyxBQUdSLEFBSU8sQUFJQSxBQUlELEFBT0UsQUFLUCxBQUlLLEFBS04sQUFHdUIsQUFVeEIsQUFhQSxBQWN5QixBQUlXLEFBTzdCLEFBTVUsQUFNSCxBQU9BLFdBeERQLEFBYUEsQ0EzRFAsQUFpQ2IsTUFyQlcsQUFnQjBCLENBeEJBLEFBSUEsSUFQckMsRUErRjZCLEFBT0MsRUExRmpCLENBNkVlLENBM0NqQixBQWFELEVBYVIsSUFyQ1UsRUF5QkQsQ0EvQ1gsQUFrQ1ksSUE2QlYsR0F4Q1csQ0F5QkQsRUFiQSxJQWdEZ0IsQ0FwRVgsQUEyRVksQ0FuRzdCLEFBSUEsQUFrRkEsRUFyRHFDLEFBeUJ4QixFQWJBLFNBY2UsQ0FsQzVCLENBcUI0QixLQXRFSCxBQVVELEFBaUNILElBNERFLEFBY3ZCLEVBT0EsV0FsRXVDLEVBMEJILEVBYkEsSUFpQ3BDLEdBeEZBLEFBc0JtQixpQkFDa0IsUUE4Q0MsQ0ExQkgsQ0FhRSx1QkE3RGpCLEVBNkJwQixPQW9CMkIsRUEwQlksQ0FiRCxHQTdCdEMsR0FoQ0EsYUFYb0IsaUJBeUVwQixBQWFBLENBckZxQixtQkFDTixhQUNpQyxlQXlEaEQsK0JBeERvQixrQkFDaUIsbUNBQ3JDIiwiZmlsZSI6ImNvbXBvbmVudHMvUG9zdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9JbnZpc2lvbi9zaW1wbHlzb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vc3RhdGljL2Nzcy1jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaWQsIGF2YXRhciwgbmFtZSwgdGV4dCwgdGltZSwgbW9yZSwgaW1hZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3N0XCIga2V5PXtpZH0+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9zdF9fYXZhdGFyXCIgc3JjPXthdmF0YXJ9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudFwiPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwb3N0X19uYW1lXCI+e25hbWV9PC9oNT5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zdF9fdGV4dFwiXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRleHQgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHttb3JlIFxuICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2V4dHJhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19leHBhbmRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkV4cGFuZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvZG93bi1hcnJvdy5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fb3B0aW9uc1wiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9zdF9fcmVwbHlcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9yZXBseS1hcnJvdy5wbmdcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fbGlrZSBoZWFydCBpY29uXCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X190aW1lXCI+e3RpbWV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5wb3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5tZWRHcmV5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX2NvbnRlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19hdmF0YXIsXG4gICAgICAgICAgLnBvc3RfX2NvbnRlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19hdmF0YXIge1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19uYW1lIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubWVkRGFya0dyZXl9OyAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICAucG9zdF9fdGV4dCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLm1lZERhcmtHcmV5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX29wdGlvbnMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICAgICAgcmlnaHQ6IDI1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19yZXBseSxcbiAgICAgICAgICAucG9zdF9fbGlrZSxcbiAgICAgICAgICAucG9zdF9fdGltZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19leHBhbmQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19leHBhbmQgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX2V4cGFuZCBpbWcge1xuICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhcnQuaWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICAgIHdpZHRoOiA5cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDlweDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYXJ0Lmljb246YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICAgICAgbGVmdDogLTFweDtcbiAgICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oZWFydC5pY29uOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICBsZWZ0OiA4cHg7XG4gICAgICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBrZXlmcmFtZXMgcG9vZiB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCByZ2JhKDI1NSwgMCwgMCwgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAyMHB4IC0yMHB4IDVweCByZ2JhKDI1NSwgMCwgMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYXJ0Lmljb24uc2VsZWN0ZWQsXG4gICAgICAgICAgLmhlYXJ0Lmljb24uc2VsZWN0ZWQ6YmVmb3JlLFxuICAgICAgICAgIC5oZWFydC5pY29uLnNlbGVjdGVkOmFmdGVyIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcG9vZiAxcztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhcnQuaWNvbjpob3ZlcixcbiAgICAgICAgICAuaGVhcnQuaWNvbi5zZWxlY3RlZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYXJ0Lmljb246aG92ZXI6YmVmb3JlLFxuICAgICAgICAgIC5oZWFydC5pY29uLnNlbGVjdGVkOmJlZm9yZSB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYXJ0Lmljb246aG92ZXI6YWZ0ZXIsXG4gICAgICAgICAgLmhlYXJ0Lmljb24uc2VsZWN0ZWQ6YWZ0ZXIge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Post.js */'
      }));
    }
  }]);

  return Post;
}(_react.Component);

exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbG9ycyIsIlBvc3QiLCJwcm9wcyIsImlkIiwiYXZhdGFyIiwibmFtZSIsInRleHQiLCJ0aW1lIiwibW9yZSIsImltYWdlIiwiX19odG1sIiwibGlnaHRHcmV5IiwibWVkR3JleSIsIm1lZERhcmtHcmV5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7Ozs7OztJLEFBRVk7Ozs7Ozs7Ozs7OzZCQUNWO21CQUMrQyxLQUQvQyxBQUNvRDtVQURwRCxBQUNDLFlBREQsQUFDQztVQURELEFBQ0ssZ0JBREwsQUFDSztVQURMLEFBQ2EsY0FEYixBQUNhO1VBRGIsQUFDbUIsY0FEbkIsQUFDbUI7VUFEbkIsQUFDeUIsY0FEekIsQUFDeUI7VUFEekIsQUFDK0IsY0FEL0IsQUFDK0I7VUFEL0IsQUFDcUMsZUFEckMsQUFDcUMsQUFDNUM7OzZCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWMsUUFBTyxLQUFyQixBQUEwQixnQkFBMUI7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLHlDQUNPLFdBQUwsQUFBZSxnQkFBZSxLQUE5QixBQUFtQyxvQkFBbkM7O29CQUFBO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWUsNkJBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFFBQUksV0FBSixBQUFjLDBCQUFkOztvQkFBQTtzQkFBQSxBQUE0QjtBQUE1QjtTQURGLEFBQ0UsQUFDQTttQkFBQSxBQUNZLEFBQ1Y7aUNBQXlCLEVBQUUsUUFGN0IsQUFFMkIsQUFBVTtvQkFGckM7O29CQUFBO3NCQUZGLEFBRUUsQUFJQztBQUpEO0FBQ0UsaUNBSUUsY0FBQSxTQUFLLFdBQUwsQUFBZSwyQkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZSw0QkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7b0JBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxrREFBSyxLQUFMLEFBQVMsNkNBQVQ7O29CQUFBO3NCQUpQLEFBQ0csQUFDRSxBQUVFO0FBQUE7YUFaWixBQUVFLEFBYU0sQUFFTix1QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlLDZCQUFmOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7Z0RBQ08sV0FBTCxBQUFlLGVBQWMsS0FBN0IsQUFBaUMsOENBQWpDOztvQkFBQTtzQkFERixBQUNFLEFBQ0E7QUFEQTtpREFDSyxXQUFMLEFBQWUscUNBQWY7O29CQUFBO3NCQUZGLEFBRUUsQUFDQTtBQURBOzBCQUNBLGNBQUEsVUFBTSxXQUFOLEFBQWdCLDBCQUFoQjs7b0JBQUE7c0JBQUEsQUFBOEI7QUFBOUI7U0FwQkosQUFpQkUsQUFHRTtpQkFwQko7eVNBUG9SLHFCQUFPLEFBTzNSLDBDQVBnVSxxQkFBTyxBQU92VSx5Z0JBUDIwQixxQkFBTyxBQU9sMUIsZ0ZBUDY1QixxQkFBTyxBQU9wNkIsdVVBUHN1QyxxQkFBTyxBQU83dUMsdVRBUCtoRCxxQkFBTyxBQU90aUQsc0pBUHVyRCxxQkFBTyxBQU85ckQsWUFERixBQUNFLEFBeUpIO0FBekpHOzs7OztBQUo0QixBOztrQkFBYixBIiwiZmlsZSI6IlBvc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VyaWMvZGV2L2NoYWxsZW5nZXMvSW52aXNpb24vc2ltcGx5c29jaWFsIn0=