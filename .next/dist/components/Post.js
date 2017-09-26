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
          name = _props.name,
          text = _props.text,
          time = _props.time;

      return _react2.default.createElement('li', { className: 'post', key: id, 'data-jsx': 2988515756,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement('img', { className: 'post__avatar', src: '/static/images/user-avatar.png', 'data-jsx': 2988515756,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }), _react2.default.createElement('div', { className: 'post__copy', 'data-jsx': 2988515756,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement('h6', { className: 'post__name', 'data-jsx': 2988515756,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, name), _react2.default.createElement('p', {
        className: 'post__text',
        dangerouslySetInnerHTML: { __html: text },
        'data-jsx': 2988515756,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      })), _react2.default.createElement('div', { className: 'post__options', 'data-jsx': 2988515756,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('img', { className: 'post__reply', src: '/static/images/reply-arrow.png', 'data-jsx': 2988515756,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement('div', { className: 'post__like heart icon', 'data-jsx': 2988515756,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement('span', { className: 'post__time', 'data-jsx': 2988515756,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, time)), _react2.default.createElement(_style2.default, {
        styleId: 2988515756,
        css: '.post[data-jsx="2988515756"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;margin-bottom:30px;padding:25px;border:1px solid ' + _cssConstants.colors.lightGrey + ';border-radius:5px;color:' + _cssConstants.colors.medGrey + '}.post__copy[data-jsx="2988515756"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.post__avatar[data-jsx="2988515756"],.post__copy[data-jsx="2988515756"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex}.post__name[data-jsx="2988515756"],.post__text[data-jsx="2988515756"]{margin-left:20px;color:' + _cssConstants.colors.medGrey + '}.post__options[data-jsx="2988515756"]{position:absolute;top:25px;right:25px}.post__reply[data-jsx="2988515756"],.post__like[data-jsx="2988515756"],.post__time[data-jsx="2988515756"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin-left:20px;color:' + _cssConstants.colors.lightGrey + '}.heart.icon[data-jsx="2988515756"]{color:' + _cssConstants.colors.lightGrey + ';width:9px;height:9px;border-left:solid 1px currentColor;border-bottom:solid 1px currentColor;-webkit-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.heart.icon[data-jsx="2988515756"]:before{content:\'\';position:absolute;top:-5px;left:-1px;width:8px;height:5px;border-radius:5px 5px 0 0;border-top:solid 1px currentColor;border-left:solid 1px currentColor;border-right:solid 1px currentColor}.heart.icon[data-jsx="2988515756"]:after{content:\'\';position:absolute;top:0px;left:8px;width:5px;height:8px;border-radius:0 5px 5px 0;border-top:solid 1px currentColor;border-right:solid 1px currentColor;border-bottom:solid 1px currentColor}@-webkit-keyframes poofdatajsx2988515756{0%{box-shadow:0 0 rgba(255,0,0,1)}100%{box-shadow:20px -20px 5px rgba(255,0,0,0)}}@keyframes poofdatajsx2988515756{0%{box-shadow:0 0 rgba(255,0,0,1)}100%{box-shadow:20px -20px 5px rgba(255,0,0,0)}}.heart.icon.selected[data-jsx="2988515756"],.heart.icon.selected[data-jsx="2988515756"]:before,.heart.icon.selected[data-jsx="2988515756"]:after{-webkit-animation:poofdatajsx2988515756 1s;animation:poofdatajsx2988515756 1s;background-color:red}.heart.icon[data-jsx="2988515756"]:hover,.heart.icon.selected[data-jsx="2988515756"]{border-bottom:1px solid red;border-left:1px solid red}.heart.icon[data-jsx="2988515756"]:hover[data-jsx="2988515756"]:before,.heart.icon.selected[data-jsx="2988515756"]:before{border-top:1px solid red;border-right:1px solid red;border-left:1px solid red}.heart.icon[data-jsx="2988515756"]:hover[data-jsx="2988515756"]:after,.heart.icon.selected[data-jsx="2988515756"]:after{border-top:1px solid red;border-bottom:1px solid red;border-right:1px solid red}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQm9CLEFBRzBCLEFBVUEsQUFLTyxBQUlILEFBSUMsQUFPRSxBQUtlLEFBVXhCLEFBYUEsQUFjeUIsQUFJVyxBQU83QixBQU1VLEFBTUgsQUFPQSxXQXhEUCxBQWFBLE1BdkNpQixDQUkxQixPQXdFa0IsQUFPQyxFQTlFakIsQ0FpRWUsQ0EzQ2pCLEFBYUQsRUFhUixJQXJDVSxFQXlCRCxDQW5DWCxBQXNCWSxJQTZCVixHQXhDVyxDQXlCRCxFQWJBLElBNUJaLEFBNEU0QixDQU9DLENBYjdCLEVBckRxQyxBQXlCeEIsRUFiQSxTQWNlLEVBYkEsS0FsREgsQUFVRCxJQXlFRCxBQWN2QixFQU9BLFdBbEV1QyxFQTBCSCxFQWJBLElBaUNwQyxHQXJFQSxBQWVtQixpQkFDa0IsUUFrQ0MsQ0ExQkgsQ0FhRSx1QkF6Q3JDLEVBcUJBLE9BUTJCLEVBMEJZLENBYkQsbUJBcERsQixpQkFxRHBCLEFBYUEsQ0FqRXFCLG1CQUNOLGFBQ2lDLGVBcUNoRCwrQkFwQ29CLGtCQUNpQixtQ0FDckMiLCJmaWxlIjoiY29tcG9uZW50cy9Qb3N0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lcmljL2Rldi9jaGFsbGVuZ2VzL0ludmlzaW9uL3NpbXBseXNvY2lhbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi9zdGF0aWMvY3NzLWNvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpZCwgbmFtZSwgdGV4dCwgdGltZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT1cInBvc3RcIiBrZXk9e2lkfT5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3N0X19hdmF0YXJcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy91c2VyLWF2YXRhci5wbmdcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvcHlcIj5cbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwicG9zdF9fbmFtZVwiPntuYW1lfTwvaDY+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3RfX3RleHRcIlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0ZXh0IH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fb3B0aW9uc1wiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9zdF9fcmVwbHlcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9yZXBseS1hcnJvdy5wbmdcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fbGlrZSBoZWFydCBpY29uXCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X190aW1lXCI+e3RpbWV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5wb3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5tZWRHcmV5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX2NvcHkge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19hdmF0YXIsXG4gICAgICAgICAgLnBvc3RfX2NvcHkge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19uYW1lLFxuICAgICAgICAgIC5wb3N0X190ZXh0IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLm1lZEdyZXl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9zdF9fb3B0aW9ucyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgICAgICByaWdodDogMjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX3JlcGx5LFxuICAgICAgICAgIC5wb3N0X19saWtlLFxuICAgICAgICAgIC5wb3N0X190aW1lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYXJ0Lmljb24ge1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICAgICAgICB3aWR0aDogOXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA5cHg7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oZWFydC5pY29uOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhcnQuaWNvbjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgbGVmdDogOHB4O1xuICAgICAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIHBvb2Yge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgcmdiYSgyNTUsIDAsIDAsIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMjBweCAtMjBweCA1cHggcmdiYSgyNTUsIDAsIDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oZWFydC5pY29uLnNlbGVjdGVkLFxuICAgICAgICAgIC5oZWFydC5pY29uLnNlbGVjdGVkOmJlZm9yZSxcbiAgICAgICAgICAuaGVhcnQuaWNvbi5zZWxlY3RlZDphZnRlciB7XG4gICAgICAgICAgICBhbmltYXRpb246IHBvb2YgMXM7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYXJ0Lmljb246aG92ZXIsXG4gICAgICAgICAgLmhlYXJ0Lmljb24uc2VsZWN0ZWQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oZWFydC5pY29uOmhvdmVyOmJlZm9yZSxcbiAgICAgICAgICAuaGVhcnQuaWNvbi5zZWxlY3RlZDpiZWZvcmUge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oZWFydC5pY29uOmhvdmVyOmFmdGVyLFxuICAgICAgICAgIC5oZWFydC5pY29uLnNlbGVjdGVkOmFmdGVyIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/Post.js */'
      }));
    }
  }]);

  return Post;
}(_react.Component);

exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbG9ycyIsIlBvc3QiLCJwcm9wcyIsImlkIiwibmFtZSIsInRleHQiLCJ0aW1lIiwiX19odG1sIiwibGlnaHRHcmV5IiwibWVkR3JleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7Ozs7Ozs7SSxBQUVZOzs7Ozs7Ozs7Ozs2QkFDVjttQkFDMEIsS0FEMUIsQUFDK0I7VUFEL0IsQUFDQyxZQURELEFBQ0M7VUFERCxBQUNLLGNBREwsQUFDSztVQURMLEFBQ1csY0FEWCxBQUNXO1VBRFgsQUFDaUIsY0FEakIsQUFDaUIsQUFDeEI7OzZCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWMsUUFBTyxLQUFyQixBQUEwQixnQkFBMUI7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLHlDQUNPLFdBQUwsQUFBZSxnQkFBZSxLQUE5QixBQUFrQyw4Q0FBbEM7O29CQUFBO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWUsMEJBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFFBQUksV0FBSixBQUFjLDBCQUFkOztvQkFBQTtzQkFBQSxBQUE0QjtBQUE1QjtTQURGLEFBQ0UsQUFDQTttQkFBQSxBQUNZLEFBQ1Y7aUNBQXlCLEVBQUUsUUFGN0IsQUFFMkIsQUFBVTtvQkFGckM7O29CQUFBO3NCQUpKLEFBRUUsQUFFRSxBQUtGO0FBTEU7QUFDRSwyQkFJSixjQUFBLFNBQUssV0FBTCxBQUFlLDZCQUFmOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7Z0RBQ08sV0FBTCxBQUFlLGVBQWMsS0FBN0IsQUFBaUMsOENBQWpDOztvQkFBQTtzQkFERixBQUNFLEFBQ0E7QUFEQTtpREFDSyxXQUFMLEFBQWUscUNBQWY7O29CQUFBO3NCQUZGLEFBRUUsQUFDQTtBQURBOzBCQUNBLGNBQUEsVUFBTSxXQUFOLEFBQWdCLDBCQUFoQjs7b0JBQUE7c0JBQUEsQUFBOEI7QUFBOUI7U0FaSixBQVNFLEFBR0U7aUJBWko7eVNBUG9SLHFCQUFPLEFBTzNSLDBDQVBnVSxxQkFBTyxBQU92VSxzZEFQd3hCLHFCQUFPLEFBTy94QixtVUFQNmxDLHFCQUFPLEFBT3BtQywyREFQMHBDLHFCQUFPLEFBT2pxQyxZQURGLEFBQ0UsQUE2SEg7QUE3SEc7Ozs7O0FBSjRCLEE7O2tCQUFiLEEiLCJmaWxlIjoiUG9zdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9JbnZpc2lvbi9zaW1wbHlzb2NpYWwifQ==