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

      return _react2.default.createElement('li', { className: 'post', 'data-jsx': 2414275292,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement('div', { className: 'post__content-container', 'data-jsx': 2414275292,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement('img', { className: 'post__avatar', src: avatar, 'data-jsx': 2414275292,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), _react2.default.createElement('div', { className: 'post__content', 'data-jsx': 2414275292,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('h5', { className: 'post__name', 'data-jsx': 2414275292,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, name), _react2.default.createElement('p', {
        className: 'post__text',
        dangerouslySetInnerHTML: { __html: text },
        'data-jsx': 2414275292,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), more ? _react2.default.createElement('div', { className: 'post__extra', 'data-jsx': 2414275292,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('div', { className: 'post__expand', 'data-jsx': 2414275292,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('span', {
        'data-jsx': 2414275292,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'Expand'), _react2.default.createElement('img', { src: '/static/images/down-arrow.png', 'data-jsx': 2414275292,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }))) : null, _react2.default.createElement('div', { className: 'post__options', 'data-jsx': 2414275292,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('img', {
        className: 'post__reply',
        src: '/static/images/reply-arrow.png',
        'data-jsx': 2414275292,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement('div', { className: 'post__like heart icon', 'data-jsx': 2414275292,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement('span', { className: 'post__time', 'data-jsx': 2414275292,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, time)))), image ? _react2.default.createElement('div', { className: 'post__image-container', 'data-jsx': 2414275292,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('img', { className: 'post__image', src: image, 'data-jsx': 2414275292,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })) : null, _react2.default.createElement(_style2.default, {
        styleId: 2414275292,
        css: '.post[data-jsx="2414275292"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:30px;border:1px solid ' + _cssConstants.colors.lightGrey + ';border-radius:5px}.post__content-container[data-jsx="2414275292"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;padding:25px;color:' + _cssConstants.colors.medGrey + '}.post__content[data-jsx="2414275292"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-left:20px}.post__avatar[data-jsx="2414275292"],.post__content[data-jsx="2414275292"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex}.post__avatar[data-jsx="2414275292"]{height:40px;width:40px}.post__name[data-jsx="2414275292"]{margin-bottom:15px;color:' + _cssConstants.colors.medDarkGrey + '}.post__text[data-jsx="2414275292"]{color:' + _cssConstants.colors.medDarkGrey + '}.post__options[data-jsx="2414275292"]{position:absolute;top:25px;right:25px}.post__reply[data-jsx="2414275292"],.post__like[data-jsx="2414275292"],.post__time[data-jsx="2414275292"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin-left:20px;color:' + _cssConstants.colors.lightGrey + '}.post__expand[data-jsx="2414275292"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:25px}.post__expand[data-jsx="2414275292"] span[data-jsx="2414275292"]{margin-right:10px;color:' + _cssConstants.colors.lightGrey + ';font-size:10px}.post__expand[data-jsx="2414275292"] img[data-jsx="2414275292"]{opacity:0.4}.post__image-container[data-jsx="2414275292"]{position:relative;width:100%}.post__image[data-jsx="2414275292"]{margin-bottom:-5px;margin-left:-1px;width:575px;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.heart.icon[data-jsx="2414275292"]{color:' + _cssConstants.colors.lightGrey + ';width:9px;height:9px;border-left:solid 1px currentColor;border-bottom:solid 1px currentColor;-webkit-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.heart.icon[data-jsx="2414275292"]:before{content:\'\';position:absolute;top:-5px;left:-1px;width:8px;height:5px;border-radius:5px 5px 0 0;border-top:solid 1px currentColor;border-left:solid 1px currentColor;border-right:solid 1px currentColor}.heart.icon[data-jsx="2414275292"]:after{content:\'\';position:absolute;top:0px;left:8px;width:5px;height:8px;border-radius:0 5px 5px 0;border-top:solid 1px currentColor;border-right:solid 1px currentColor;border-bottom:solid 1px currentColor}@-webkit-keyframes poofdatajsx2414275292{0%{box-shadow:0 0 rgba(255,0,0,1)}100%{box-shadow:20px -20px 5px rgba(255,0,0,0)}}@keyframes poofdatajsx2414275292{0%{box-shadow:0 0 rgba(255,0,0,1)}100%{box-shadow:20px -20px 5px rgba(255,0,0,0)}}.heart.icon.selected[data-jsx="2414275292"],.heart.icon.selected[data-jsx="2414275292"]:before,.heart.icon.selected[data-jsx="2414275292"]:after{-webkit-animation:poofdatajsx2414275292 1s;animation:poofdatajsx2414275292 1s;background-color:red}.heart.icon[data-jsx="2414275292"]:hover,.heart.icon.selected[data-jsx="2414275292"]{border-bottom:1px solid red;border-left:1px solid red}.heart.icon[data-jsx="2414275292"]:hover[data-jsx="2414275292"]:before,.heart.icon.selected[data-jsx="2414275292"]:before{border-top:1px solid red;border-right:1px solid red;border-left:1px solid red}.heart.icon[data-jsx="2414275292"]:hover[data-jsx="2414275292"]:after,.heart.icon.selected[data-jsx="2414275292"]:after{border-top:1px solid red;border-bottom:1px solid red;border-right:1px solid red}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q29CLEFBRzBCLEFBT0EsQUFPQSxBQU1PLEFBR1IsQUFJTyxBQUlnQixBQUdqQixBQU9FLEFBS1AsQUFLSyxBQUtOLEFBR00sQUFJQyxBQU9nQixBQVV4QixBQWFBLEFBY3lCLEFBSVcsQUFPN0IsQUFNVSxBQU1ILEFBT0EsV0F4RFAsQUFhQSxDQXRFUCxBQWlDYixNQXRCVyxBQWlCMEIsQUFReEIsQ0FoQ3dCLEFBb0NsQixJQXZDbkIsRUEwRzZCLEFBT0MsRUF0R2pCLENBeUZlLENBaEU1QixBQXFCVyxBQWFELEVBYVIsSUE1RUYsQUF1Q1ksQ0FORSxDQStCSCxDQTNEWCxBQThDWSxJQTZCVixHQXhDVyxDQXlCRCxFQS9Cb0IsQUFrQnBCLElBZ0RnQixDQS9FWCxBQXNGWSxDQTlHN0IsQUFpR0EsRUFyRHFDLEFBeUJ4QixFQWJBLFNBY2UsQ0E3QzVCLENBZ0M0QixLQXJGSixBQU9DLEFBT0QsQUFnQ0gsSUFvQlksQUFvRFYsQUFjdkIsRUFPQSxXQWxFdUMsRUEwQkgsRUFiQSxJQWlDcEMsR0FuR0EsQUFxQm1CLE9BMEJuQixVQXpCcUMsUUEwREMsQ0ExQkgsQ0FhRSx1QkF0RmhCLEFBY0QsRUE0QnBCLE9BZ0MyQixFQTBCWSxDQWJELEdBekNwQixHQS9CbEIsQ0FkZ0QsWUFNNUIsQUF3Q3BCLGlCQXlDQSxBQWFBLENBN0ZlLGFBQ3NCLEdBUGpCLGtCQUNwQixhQXdFQSxDQWpFQSIsImZpbGUiOiJjb21wb25lbnRzL1Bvc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VyaWMvZGV2L2NoYWxsZW5nZXMvSW52aXNpb24vc2ltcGx5c29jaWFsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uL3N0YXRpYy9jc3MtY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlkLCBhdmF0YXIsIG5hbWUsIHRleHQsIHRpbWUsIG1vcmUsIGltYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPVwicG9zdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3N0X19hdmF0YXJcIiBzcmM9e2F2YXRhcn0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwb3N0X19uYW1lXCI+e25hbWV9PC9oNT5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3RfX3RleHRcIlxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRleHQgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7bW9yZSA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19leHRyYVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fZXhwYW5kXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5FeHBhbmQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2Rvd24tYXJyb3cucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fb3B0aW9uc1wiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zdF9fcmVwbHlcIlxuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3JlcGx5LWFycm93LnBuZ1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fbGlrZSBoZWFydCBpY29uXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdF9fdGltZVwiPnt0aW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2ltYWdlID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9faW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvc3RfX2ltYWdlXCIgc3JjPXtpbWFnZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5wb3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLm1lZEdyZXl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9zdF9fY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX2F2YXRhcixcbiAgICAgICAgICAucG9zdF9fY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX2F2YXRhciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX25hbWUge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5tZWREYXJrR3JleX07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X190ZXh0IHtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5tZWREYXJrR3JleX07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19vcHRpb25zIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgICAgIHJpZ2h0OiAyNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9zdF9fcmVwbHksXG4gICAgICAgICAgLnBvc3RfX2xpa2UsXG4gICAgICAgICAgLnBvc3RfX3RpbWUge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5saWdodEdyZXl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9zdF9fZXhwYW5kIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX2V4cGFuZCBzcGFuIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5saWdodEdyZXl9O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9zdF9fZXhwYW5kIGltZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19pbWFnZSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgICAgICAgICB3aWR0aDogNTc1cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhcnQuaWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICAgIHdpZHRoOiA5cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDlweDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYXJ0Lmljb246YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICAgICAgbGVmdDogLTFweDtcbiAgICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oZWFydC5pY29uOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICBsZWZ0OiA4cHg7XG4gICAgICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBrZXlmcmFtZXMgcG9vZiB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCByZ2JhKDI1NSwgMCwgMCwgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAyMHB4IC0yMHB4IDVweCByZ2JhKDI1NSwgMCwgMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYXJ0Lmljb24uc2VsZWN0ZWQsXG4gICAgICAgICAgLmhlYXJ0Lmljb24uc2VsZWN0ZWQ6YmVmb3JlLFxuICAgICAgICAgIC5oZWFydC5pY29uLnNlbGVjdGVkOmFmdGVyIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcG9vZiAxcztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhcnQuaWNvbjpob3ZlcixcbiAgICAgICAgICAuaGVhcnQuaWNvbi5zZWxlY3RlZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYXJ0Lmljb246aG92ZXI6YmVmb3JlLFxuICAgICAgICAgIC5oZWFydC5pY29uLnNlbGVjdGVkOmJlZm9yZSB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYXJ0Lmljb246aG92ZXI6YWZ0ZXIsXG4gICAgICAgICAgLmhlYXJ0Lmljb24uc2VsZWN0ZWQ6YWZ0ZXIge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Post.js */'
      }));
    }
  }]);

  return Post;
}(_react.Component);

exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbG9ycyIsIlBvc3QiLCJwcm9wcyIsImlkIiwiYXZhdGFyIiwibmFtZSIsInRleHQiLCJ0aW1lIiwibW9yZSIsImltYWdlIiwiX19odG1sIiwibGlnaHRHcmV5IiwibWVkR3JleSIsIm1lZERhcmtHcmV5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7Ozs7OztJQUVZLEE7Ozs7Ozs7Ozs7OzZCQUNWO21CQUMrQyxLQUQvQyxBQUNvRDtVQURwRCxBQUNDLFlBREQsQUFDQztVQURELEFBQ0ssZ0JBREwsQUFDSztVQURMLEFBQ2EsY0FEYixBQUNhO1VBRGIsQUFDbUIsY0FEbkIsQUFDbUI7VUFEbkIsQUFDeUIsY0FEekIsQUFDeUI7VUFEekIsQUFDK0IsY0FEL0IsQUFDK0I7VUFEL0IsQUFDcUMsZUFEckMsQUFDcUMsQUFDNUM7OzZCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWMsb0JBQWQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWUsdUNBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtnREFDTyxXQUFMLEFBQWUsZ0JBQWUsS0FBOUIsQUFBbUMsb0JBQW5DOztvQkFBQTtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxjQUFBLFNBQUssV0FBTCxBQUFlLDZCQUFmOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYywwQkFBZDs7b0JBQUE7c0JBQUEsQUFBNEI7QUFBNUI7U0FERixBQUNFLEFBQ0E7bUJBQUEsQUFDWSxBQUNWO2lDQUF5QixFQUFFLFFBRjdCLEFBRTJCLEFBQVU7b0JBRnJDOztvQkFBQTtzQkFGRixBQUVFLEFBSUM7QUFKRDtBQUNFLGlDQUlBLGNBQUEsU0FBSyxXQUFMLEFBQWUsMkJBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWUsNEJBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBO29CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esa0RBQUssS0FBTCxBQUFTLDZDQUFUOztvQkFBQTtzQkFKTCxBQUNDLEFBQ0UsQUFFRTtBQUFBO2FBVlIsQUFhTSxBQUNKLHNCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWUsNkJBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjs7bUJBQ0UsQUFDWSxBQUNWO2FBRkYsQUFFTTtvQkFGTjs7b0JBQUE7c0JBREYsQUFDRSxBQUlBO0FBSkE7QUFDRSxpREFHRyxXQUFMLEFBQWUscUNBQWY7O29CQUFBO3NCQUxGLEFBS0UsQUFDQTtBQURBOzBCQUNBLGNBQUEsVUFBTSxXQUFOLEFBQWdCLDBCQUFoQjs7b0JBQUE7c0JBQUEsQUFBOEI7QUFBOUI7U0F2QlIsQUFDRSxBQUVFLEFBY0UsQUFNRSxBQUlMLGtDQUNDLGNBQUEsU0FBSyxXQUFMLEFBQWUscUNBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLHlDQUNPLFdBQUwsQUFBZSxlQUFjLEtBQTdCLEFBQWtDLG1CQUFsQzs7b0JBQUE7c0JBRkgsQUFDQyxBQUNFO0FBQUE7WUE3Qk4sQUErQk07aUJBL0JOOzJPQVBzTixxQkFBTyxBQU83TixnVEFQd2dCLHFCQUFPLEFBTy9nQix5Z0JBUG1oQyxxQkFBTyxBQU8xaEMsNkRBUGtsQyxxQkFBTyxBQU96bEMsdVVBUDI1QyxxQkFBTyxBQU9sNkMsdVVBUG91RCxxQkFBTyxBQU8zdUQsa1hBUHdsRSxxQkFBTyxBQU8vbEUsWUFERixBQUNFLEFBbUxIO0FBbkxHOzs7OztBQUo0QixBOztrQkFBYixBIiwiZmlsZSI6IlBvc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VyaWMvZGV2L2NoYWxsZW5nZXMvSW52aXNpb24vc2ltcGx5c29jaWFsIn0=