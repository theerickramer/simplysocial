webpackHotUpdate(5,{

/***/ 562:
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

var _style = __webpack_require__(553);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(27);

var _react2 = _interopRequireDefault(_react);

var _cssConstants = __webpack_require__(554);

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
          name = _props.name,
          text = _props.text,
          time = _props.time;

      return _react2.default.createElement('li', { className: 'post', key: id, 'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement('img', { className: 'post__avatar', src: '/static/images/user-avatar.png', 'data-jsx': 1510283267,
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
      }), _react2.default.createElement('div', { className: 'post__extra', 'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('div', { className: 'post__expand', 'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('span', {
        'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, 'Expand'), _react2.default.createElement('img', { src: '/static/images/down-arrow.png', 'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })))), _react2.default.createElement('div', { className: 'post__options', 'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('img', { className: 'post__reply', src: '/static/images/reply-arrow.png', 'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement('div', { className: 'post__like heart icon', 'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement('span', { className: 'post__time', 'data-jsx': 1510283267,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, time)), _react2.default.createElement(_style2.default, {
        styleId: 1510283267,
        css: '.post[data-jsx="1510283267"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;margin-bottom:30px;padding:25px;border:1px solid ' + _cssConstants.colors.lightGrey + ';border-radius:5px;color:' + _cssConstants.colors.medGrey + '}.post__content[data-jsx="1510283267"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-left:20px}.post__avatar[data-jsx="1510283267"],.post__content[data-jsx="1510283267"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex}.post__avatar[data-jsx="1510283267"]{height:40px;width:40px}.post__name[data-jsx="1510283267"]{margin-bottom:15px;color:' + _cssConstants.colors.medDarkGrey + '}.post__text[data-jsx="1510283267"]{margin-bottom:25px;color:' + _cssConstants.colors.medDarkGrey + '}.post__options[data-jsx="1510283267"]{position:absolute;top:25px;right:25px}.post__reply[data-jsx="1510283267"],.post__like[data-jsx="1510283267"],.post__time[data-jsx="1510283267"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin-left:20px;color:' + _cssConstants.colors.lightGrey + '}.post__expand[data-jsx="1510283267"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.post__expand[data-jsx="1510283267"] span[data-jsx="1510283267"]{margin-right:10px;color:' + _cssConstants.colors.lightGrey + ';font-size:10px}.post__expand[data-jsx="1510283267"] img[data-jsx="1510283267"]{opacity:0.4}.heart.icon[data-jsx="1510283267"]{color:' + _cssConstants.colors.lightGrey + ';width:9px;height:9px;border-left:solid 1px currentColor;border-bottom:solid 1px currentColor;-webkit-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.heart.icon[data-jsx="1510283267"]:before{content:\'\';position:absolute;top:-5px;left:-1px;width:8px;height:5px;border-radius:5px 5px 0 0;border-top:solid 1px currentColor;border-left:solid 1px currentColor;border-right:solid 1px currentColor}.heart.icon[data-jsx="1510283267"]:after{content:\'\';position:absolute;top:0px;left:8px;width:5px;height:8px;border-radius:0 5px 5px 0;border-top:solid 1px currentColor;border-right:solid 1px currentColor;border-bottom:solid 1px currentColor}@-webkit-keyframes poofdatajsx1510283267{0%{box-shadow:0 0 rgba(255,0,0,1)}100%{box-shadow:20px -20px 5px rgba(255,0,0,0)}}@keyframes poofdatajsx1510283267{0%{box-shadow:0 0 rgba(255,0,0,1)}100%{box-shadow:20px -20px 5px rgba(255,0,0,0)}}.heart.icon.selected[data-jsx="1510283267"],.heart.icon.selected[data-jsx="1510283267"]:before,.heart.icon.selected[data-jsx="1510283267"]:after{-webkit-animation:poofdatajsx1510283267 1s;animation:poofdatajsx1510283267 1s;background-color:red}.heart.icon[data-jsx="1510283267"]:hover,.heart.icon.selected[data-jsx="1510283267"]{border-bottom:1px solid red;border-left:1px solid red}.heart.icon[data-jsx="1510283267"]:hover[data-jsx="1510283267"]:before,.heart.icon.selected[data-jsx="1510283267"]:before{border-top:1px solid red;border-right:1px solid red;border-left:1px solid red}.heart.icon[data-jsx="1510283267"]:hover[data-jsx="1510283267"]:after,.heart.icon.selected[data-jsx="1510283267"]:after{border-top:1px solid red;border-bottom:1px solid red;border-right:1px solid red}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQm9CLEFBRzBCLEFBVUEsQUFNTyxBQUdSLEFBSU8sQUFJQSxBQUlELEFBT0UsQUFLUCxBQUlLLEFBS04sQUFHdUIsQUFVeEIsQUFhQSxBQWN5QixBQUlXLEFBTzdCLEFBTVUsQUFNSCxBQU9BLFdBeERQLEFBYUEsQ0EzRFAsQUFpQ2IsTUFyQlcsQUFnQjBCLENBeEJBLEFBSUEsSUFQckMsRUErRjZCLEFBT0MsRUExRmpCLENBNkVlLENBM0NqQixBQWFELEVBYVIsSUFyQ1UsRUF5QkQsQ0EvQ1gsQUFrQ1ksSUE2QlYsR0F4Q1csQ0F5QkQsRUFiQSxJQWdEZ0IsQ0FwRVgsQUEyRVksQ0FuRzdCLEFBSUEsQUFrRkEsRUFyRHFDLEFBeUJ4QixFQWJBLFNBY2UsQ0FsQzVCLENBcUI0QixLQXRFSCxBQVVELEFBaUNILElBNERFLEFBY3ZCLEVBT0EsV0FsRXVDLEVBMEJILEVBYkEsSUFpQ3BDLEdBeEZBLEFBc0JtQixpQkFDa0IsUUE4Q0MsQ0ExQkgsQ0FhRSx1QkE3RGpCLEVBNkJwQixPQW9CMkIsRUEwQlksQ0FiRCxHQTdCdEMsR0FoQ0EsYUFYb0IsaUJBeUVwQixBQWFBLENBckZxQixtQkFDTixhQUNpQyxlQXlEaEQsK0JBeERvQixrQkFDaUIsbUNBQ3JDIiwiZmlsZSI6ImNvbXBvbmVudHMvUG9zdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9JbnZpc2lvbi9zaW1wbHlzb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vc3RhdGljL2Nzcy1jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaWQsIG5hbWUsIHRleHQsIHRpbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3N0XCIga2V5PXtpZH0+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9zdF9fYXZhdGFyXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvdXNlci1hdmF0YXIucG5nXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50XCI+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInBvc3RfX25hbWVcIj57bmFtZX08L2g1PlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0X190ZXh0XCJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGV4dCB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19leHRyYVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19leHBhbmRcIj5cbiAgICAgICAgICAgICAgPHNwYW4+RXhwYW5kPC9zcGFuPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2Rvd24tYXJyb3cucG5nXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19vcHRpb25zXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3N0X19yZXBseVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3JlcGx5LWFycm93LnBuZ1wiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19saWtlIGhlYXJ0IGljb25cIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RfX3RpbWVcIj57dGltZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnBvc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5saWdodEdyZXl9O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLm1lZEdyZXl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9zdF9fY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX2F2YXRhcixcbiAgICAgICAgICAucG9zdF9fY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX2F2YXRhciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX25hbWUge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5tZWREYXJrR3JleX07ICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X190ZXh0IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubWVkRGFya0dyZXl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9zdF9fb3B0aW9ucyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgICAgICByaWdodDogMjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX3JlcGx5LFxuICAgICAgICAgIC5wb3N0X19saWtlLFxuICAgICAgICAgIC5wb3N0X190aW1lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX2V4cGFuZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX2V4cGFuZCBzcGFuIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5saWdodEdyZXl9O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9zdF9fZXhwYW5kIGltZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFydC5pY29uIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5saWdodEdyZXl9O1xuICAgICAgICAgICAgd2lkdGg6IDlweDtcbiAgICAgICAgICAgIGhlaWdodDogOXB4O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhcnQuaWNvbjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICBsZWZ0OiAtMXB4O1xuICAgICAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYXJ0Lmljb246YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGtleWZyYW1lcyBwb29mIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIHJnYmEoMjU1LCAwLCAwLCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDIwcHggLTIwcHggNXB4IHJnYmEoMjU1LCAwLCAwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhcnQuaWNvbi5zZWxlY3RlZCxcbiAgICAgICAgICAuaGVhcnQuaWNvbi5zZWxlY3RlZDpiZWZvcmUsXG4gICAgICAgICAgLmhlYXJ0Lmljb24uc2VsZWN0ZWQ6YWZ0ZXIge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBwb29mIDFzO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oZWFydC5pY29uOmhvdmVyLFxuICAgICAgICAgIC5oZWFydC5pY29uLnNlbGVjdGVkIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhcnQuaWNvbjpob3ZlcjpiZWZvcmUsXG4gICAgICAgICAgLmhlYXJ0Lmljb24uc2VsZWN0ZWQ6YmVmb3JlIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhcnQuaWNvbjpob3ZlcjphZnRlcixcbiAgICAgICAgICAuaGVhcnQuaWNvbi5zZWxlY3RlZDphZnRlciB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/Post.js */'
      }));
    }
  }]);

  return Post;
}(_react.Component);

exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbG9ycyIsIlBvc3QiLCJwcm9wcyIsImlkIiwibmFtZSIsInRleHQiLCJ0aW1lIiwiX19odG1sIiwibGlnaHRHcmV5IiwibWVkR3JleSIsIm1lZERhcmtHcmV5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7Ozs7OztJQUVZLEE7Ozs7Ozs7Ozs7OzZCQUNWO21CQUMwQixLQUQxQixBQUMrQjtVQUQvQixBQUNDLFlBREQsQUFDQztVQURELEFBQ0ssY0FETCxBQUNLO1VBREwsQUFDVyxjQURYLEFBQ1c7VUFEWCxBQUNpQixjQURqQixBQUNpQixBQUN4Qjs7NkJBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYyxRQUFPLEtBQXJCLEFBQTBCLGdCQUExQjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUEseUNBQ08sV0FBTCxBQUFlLGdCQUFlLEtBQTlCLEFBQWtDLDhDQUFsQzs7b0JBQUE7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsY0FBQSxTQUFLLFdBQUwsQUFBZSw2QkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWMsMEJBQWQ7O29CQUFBO3NCQUFBLEFBQTRCO0FBQTVCO1NBREYsQUFDRSxBQUNBO21CQUFBLEFBQ1ksQUFDVjtpQ0FBeUIsRUFBRSxRQUY3QixBQUUyQixBQUFVO29CQUZyQzs7b0JBQUE7c0JBRkYsQUFFRSxBQUlBO0FBSkE7QUFDRSwwQkFHRixjQUFBLFNBQUssV0FBTCxBQUFlLDJCQUFmOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZSw0QkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7b0JBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxrREFBSyxLQUFMLEFBQVMsNkNBQVQ7O29CQUFBO3NCQVhSLEFBRUUsQUFNRSxBQUNFLEFBRUUsQUFJTjtBQUpNOzZCQUlOLGNBQUEsU0FBSyxXQUFMLEFBQWUsNkJBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtnREFDTyxXQUFMLEFBQWUsZUFBYyxLQUE3QixBQUFpQyw4Q0FBakM7O29CQUFBO3NCQURGLEFBQ0UsQUFDQTtBQURBO2lEQUNLLFdBQUwsQUFBZSxxQ0FBZjs7b0JBQUE7c0JBRkYsQUFFRSxBQUNBO0FBREE7MEJBQ0EsY0FBQSxVQUFNLFdBQU4sQUFBZ0IsMEJBQWhCOztvQkFBQTtzQkFBQSxBQUE4QjtBQUE5QjtTQWxCSixBQWVFLEFBR0U7aUJBbEJKO3lTQVBvUixxQkFBTyxBQU8zUiwwQ0FQZ1UscUJBQU8sQUFPdlUseWdCQVAyMEIscUJBQU8sQUFPbDFCLGdGQVA2NUIscUJBQU8sQUFPcDZCLHVVQVBzdUMscUJBQU8sQUFPN3VDLHVUQVAraEQscUJBQU8sQUFPdGlELHNKQVB1ckQscUJBQU8sQUFPOXJELFlBREYsQUFDRSxBQXVKSDtBQXZKRzs7Ozs7QUFKNEIsQTs7a0JBQWIsQSIsImZpbGUiOiJQb3N0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lcmljL2Rldi9jaGFsbGVuZ2VzL0ludmlzaW9uL3NpbXBseXNvY2lhbCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/eric/dev/challenges/Invision/simplysocial/components/Post.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/eric/dev/challenges/Invision/simplysocial/components/Post.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kZjZkMWUzMjgxYTQ2NmY4OTY1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0LmpzP2QxYzY3YmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uL3N0YXRpYy9jc3MtY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlkLCBuYW1lLCB0ZXh0LCB0aW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPVwicG9zdFwiIGtleT17aWR9PlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvc3RfX2F2YXRhclwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3VzZXItYXZhdGFyLnBuZ1wiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudFwiPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwb3N0X19uYW1lXCI+e25hbWV9PC9oNT5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zdF9fdGV4dFwiXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRleHQgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fZXh0cmFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fZXhwYW5kXCI+XG4gICAgICAgICAgICAgIDxzcGFuPkV4cGFuZDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9kb3duLWFycm93LnBuZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fb3B0aW9uc1wiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9zdF9fcmVwbHlcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9yZXBseS1hcnJvdy5wbmdcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fbGlrZSBoZWFydCBpY29uXCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X190aW1lXCI+e3RpbWV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5wb3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5tZWRHcmV5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX2NvbnRlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19hdmF0YXIsXG4gICAgICAgICAgLnBvc3RfX2NvbnRlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19hdmF0YXIge1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19uYW1lIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubWVkRGFya0dyZXl9OyAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICAucG9zdF9fdGV4dCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLm1lZERhcmtHcmV5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX29wdGlvbnMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICAgICAgcmlnaHQ6IDI1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19yZXBseSxcbiAgICAgICAgICAucG9zdF9fbGlrZSxcbiAgICAgICAgICAucG9zdF9fdGltZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19leHBhbmQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19leHBhbmQgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX2V4cGFuZCBpbWcge1xuICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhcnQuaWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICAgIHdpZHRoOiA5cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDlweDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYXJ0Lmljb246YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICAgICAgbGVmdDogLTFweDtcbiAgICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oZWFydC5pY29uOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICBsZWZ0OiA4cHg7XG4gICAgICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBrZXlmcmFtZXMgcG9vZiB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCByZ2JhKDI1NSwgMCwgMCwgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAyMHB4IC0yMHB4IDVweCByZ2JhKDI1NSwgMCwgMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYXJ0Lmljb24uc2VsZWN0ZWQsXG4gICAgICAgICAgLmhlYXJ0Lmljb24uc2VsZWN0ZWQ6YmVmb3JlLFxuICAgICAgICAgIC5oZWFydC5pY29uLnNlbGVjdGVkOmFmdGVyIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcG9vZiAxcztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhcnQuaWNvbjpob3ZlcixcbiAgICAgICAgICAuaGVhcnQuaWNvbi5zZWxlY3RlZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYXJ0Lmljb246aG92ZXI6YmVmb3JlLFxuICAgICAgICAgIC5oZWFydC5pY29uLnNlbGVjdGVkOmJlZm9yZSB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYXJ0Lmljb246aG92ZXI6YWZ0ZXIsXG4gICAgICAgICAgLmhlYXJ0Lmljb24uc2VsZWN0ZWQ6YWZ0ZXIge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUG9zdC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFGQTs7QUFBQTtBQUlBO0FBSkE7QUFDQTs7QUFHQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBSUE7QUFKQTtBQUlBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbEJBO0FBUEE7QUFPQTs7Ozs7QUFKQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==