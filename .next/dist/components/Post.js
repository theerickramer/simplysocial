'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cssConstants = require('../static/css-constants');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _store = require('../redux/store');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/eric/dev/challenges/simplysocial/components/Post.js';


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    like: (0, _redux.bindActionCreators)(_store.like, dispatch)
  };
};

var Post = function Post(_ref) {
  var id = _ref.id,
      avatar = _ref.avatar,
      name = _ref.name,
      text = _ref.text,
      time = _ref.time,
      more = _ref.more,
      image = _ref.image,
      liked = _ref.liked,
      like = _ref.like;

  var selectedClass = function selectedClass() {
    return (0, _classnames2.default)({ 'post__like heart icon': true, selected: liked });
  };

  return _react2.default.createElement('li', { className: 'post', 'data-jsx': 3977587669,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('div', { className: 'post__content-container', 'data-jsx': 3977587669,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement('img', { className: 'post__avatar', src: avatar, 'data-jsx': 3977587669,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), _react2.default.createElement('div', { className: 'post__content', 'data-jsx': 3977587669,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement('h5', { className: 'post__name', 'data-jsx': 3977587669,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, name), _react2.default.createElement('p', {
    className: 'post__text',
    dangerouslySetInnerHTML: { __html: text },
    'data-jsx': 3977587669,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), more ? _react2.default.createElement('div', { className: 'post__extra', 'data-jsx': 3977587669,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement('div', { className: 'post__expand', 'data-jsx': 3977587669,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement('span', {
    'data-jsx': 3977587669,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, 'Expand'), _react2.default.createElement('img', { src: '/static/images/down-arrow.png', 'data-jsx': 3977587669,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }))) : null, _react2.default.createElement('div', { className: 'post__options', 'data-jsx': 3977587669,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement('img', { className: 'post__reply', src: '/static/images/reply-arrow.png', 'data-jsx': 3977587669,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }), _react2.default.createElement('div', { className: selectedClass(), onClick: function onClick() {
      return like(id);
    }, 'data-jsx': 3977587669,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), _react2.default.createElement('span', { className: 'post__time', 'data-jsx': 3977587669,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, time)))), image ? _react2.default.createElement('div', { className: 'post__image-container', 'data-jsx': 3977587669,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement('img', { className: 'post__image', src: image, 'data-jsx': 3977587669,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  })) : null, _react2.default.createElement(_style2.default, {
    styleId: 3977587669,
    css: '.post[data-jsx="3977587669"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:30px;border:1px solid ' + _cssConstants.colors.lightGrey + ';border-radius:5px}.post__content-container[data-jsx="3977587669"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;padding:25px;color:' + _cssConstants.colors.medGrey + '}.post__content[data-jsx="3977587669"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-left:20px}.post__avatar[data-jsx="3977587669"],.post__content[data-jsx="3977587669"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex}.post__avatar[data-jsx="3977587669"]{height:40px;width:40px}.post__name[data-jsx="3977587669"]{margin-bottom:10px;color:' + _cssConstants.colors.medGrey + '}.post__text[data-jsx="3977587669"]{max-width:420px;line-height:25px;color:' + _cssConstants.colors.medLightGrey + '}.post__options[data-jsx="3977587669"]{position:absolute;top:25px;right:25px}.post__reply[data-jsx="3977587669"],.post__like[data-jsx="3977587669"],.post__time[data-jsx="3977587669"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin-left:20px;color:' + _cssConstants.colors.lightGrey + '}.post__expand[data-jsx="3977587669"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:25px}.post__expand[data-jsx="3977587669"] span[data-jsx="3977587669"]{margin-right:10px;color:' + _cssConstants.colors.lightGrey + ';font-size:10px}.post__expand[data-jsx="3977587669"] img[data-jsx="3977587669"]{opacity:0.4}.post__image-container[data-jsx="3977587669"]{position:relative;width:100%}.post__image[data-jsx="3977587669"]{margin-bottom:-5px;margin-left:-1px;width:575px;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.heart.icon[data-jsx="3977587669"]{color:' + _cssConstants.colors.lightGrey + ';width:9px;height:9px;border-left:solid 1px currentColor;border-bottom:solid 1px currentColor;-webkit-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.heart.icon[data-jsx="3977587669"]:before{content:\'\';position:absolute;top:-5px;left:-1px;width:8px;height:5px;border-radius:5px 5px 0 0;border-top:solid 1px currentColor;border-left:solid 1px currentColor;border-right:solid 1px currentColor}.heart.icon[data-jsx="3977587669"]:after{content:\'\';position:absolute;top:0px;left:8px;width:5px;height:8px;border-radius:0 5px 5px 0;border-top:solid 1px currentColor;border-right:solid 1px currentColor;border-bottom:solid 1px currentColor}@-webkit-keyframes poofdatajsx3977587669{0%{box-shadow:0 0 rgba(255,0,0,1)}100%{box-shadow:20px -20px 5px rgba(255,0,0,0)}}@keyframes poofdatajsx3977587669{0%{box-shadow:0 0 rgba(255,0,0,1)}100%{box-shadow:20px -20px 5px rgba(255,0,0,0)}}.heart.icon.selected[data-jsx="3977587669"],.heart.icon.selected[data-jsx="3977587669"]:before,.heart.icon.selected[data-jsx="3977587669"]:after{-webkit-animation:poofdatajsx3977587669 1s;animation:poofdatajsx3977587669 1s;background-color:red}.heart.icon[data-jsx="3977587669"]:hover,.heart.icon.selected[data-jsx="3977587669"]{border-bottom:1px solid red;border-left:1px solid red}.heart.icon[data-jsx="3977587669"]:hover[data-jsx="3977587669"]:before,.heart.icon.selected[data-jsx="3977587669"]:before{border-top:1px solid red;border-right:1px solid red;border-left:1px solid red}.heart.icon[data-jsx="3977587669"]:hover[data-jsx="3977587669"]:after,.heart.icon.selected[data-jsx="3977587669"]:after{border-top:1px solid red;border-bottom:1px solid red;border-right:1px solid red}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRGtCLEFBR3dCLEFBT0EsQUFPQSxBQU1PLEFBR1IsQUFJTyxBQUlILEFBS0UsQUFPRSxBQUtQLEFBS0ssQUFLTixBQUdNLEFBSUMsQUFPZ0IsQUFVeEIsQUFhQSxBQWN5QixBQUlXLEFBTzdCLEFBTVUsQUFNSCxBQU9BLFdBeERQLEFBYUEsQ0F4RVAsQUFtQ2IsSUEzQm1CLEVBS1IsQUFpQjBCLEFBUXhCLENBbEN3QixBQXNDbEIsSUF6Q25CLEVBNEc2QixBQU9DLEVBdEdqQixDQXlGZSxDQWhFNUIsQUFxQlcsQUFhRCxFQWFSLEVBN0VtQyxFQXdDekIsQ0FORSxDQStCSCxDQTNEWCxBQThDWSxJQTZCVixHQXhDVyxDQXlCRCxFQS9Cb0IsQUFrQnBCLElBZ0RnQixDQS9FWCxBQXNGWSxDQWhIN0IsQUFtR0EsRUFyRHFDLEFBeUJ4QixFQWJBLFNBY2UsQ0FuRTVCLEFBc0JBLENBZ0M0QixLQXZGSixBQU9DLEFBT0QsQUFrQ0gsSUFvQlksQUFvRFYsQUFjdkIsRUFPQSxXQWxFdUMsRUEwQkgsRUFiQSxJQWlDcEMsR0FyR0EsQUF1Qm1CLE9BMEJuQixVQXpCcUMsUUEwREMsQ0ExQkgsQ0FhRSx1QkF4RmhCLEFBY0QsRUE4QnBCLE9BZ0MyQixFQTBCWSxDQWJELEdBekNwQixHQWpDbEIsQ0FkZ0QsWUFNNUIsQUEwQ3BCLGlCQXlDQSxBQWFBLENBL0ZlLGFBQ3NCLEdBUGpCLGtCQUNwQixhQTBFQSxDQW5FQSIsImZpbGUiOiJjb21wb25lbnRzL1Bvc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VyaWMvZGV2L2NoYWxsZW5nZXMvc2ltcGx5c29jaWFsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uL3N0YXRpYy9jc3MtY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBsaWtlIH0gZnJvbSAnLi4vcmVkdXgvc3RvcmUnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgbGlrZTogYmluZEFjdGlvbkNyZWF0b3JzKGxpa2UsIGRpc3BhdGNoKVxuICB9O1xufTtcblxuY29uc3QgUG9zdCA9ICh7IGlkLCBhdmF0YXIsIG5hbWUsIHRleHQsIHRpbWUsIG1vcmUsIGltYWdlLCBsaWtlZCwgbGlrZSB9KSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkQ2xhc3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNsYXNzbmFtZXMoeyAncG9zdF9fbGlrZSBoZWFydCBpY29uJzogdHJ1ZSwgc2VsZWN0ZWQ6IGxpa2VkIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cInBvc3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3N0X19hdmF0YXJcIiBzcmM9e2F2YXRhcn0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50XCI+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInBvc3RfX25hbWVcIj57bmFtZX08L2g1PlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0X190ZXh0XCJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGV4dCB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAge21vcmUgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2V4dHJhXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fZXhwYW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+RXhwYW5kPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvZG93bi1hcnJvdy5wbmdcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fb3B0aW9uc1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3N0X19yZXBseVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3JlcGx5LWFycm93LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NlbGVjdGVkQ2xhc3MoKX0gb25DbGljaz17KCkgPT4gbGlrZShpZCl9IC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X190aW1lXCI+e3RpbWV9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2ltYWdlID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2ltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9zdF9faW1hZ2VcIiBzcmM9e2ltYWdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wb3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5saWdodEdyZXl9O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAucG9zdF9fY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3JzLm1lZEdyZXl9O1xuICAgICAgICB9XG4gICAgICAgIC5wb3N0X19jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wb3N0X19hdmF0YXIsXG4gICAgICAgIC5wb3N0X19jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgfVxuICAgICAgICAucG9zdF9fYXZhdGFyIHtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnBvc3RfX25hbWUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3JzLm1lZEdyZXl9O1xuICAgICAgICB9XG4gICAgICAgIC5wb3N0X190ZXh0IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQyMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5tZWRMaWdodEdyZXl9O1xuICAgICAgICB9XG4gICAgICAgIC5wb3N0X19vcHRpb25zIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICAgIHJpZ2h0OiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5wb3N0X19yZXBseSxcbiAgICAgICAgLnBvc3RfX2xpa2UsXG4gICAgICAgIC5wb3N0X190aW1lIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgfVxuICAgICAgICAucG9zdF9fZXhwYW5kIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgfVxuICAgICAgICAucG9zdF9fZXhwYW5kIHNwYW4ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnBvc3RfX2V4cGFuZCBpbWcge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgfVxuICAgICAgICAucG9zdF9faW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnBvc3RfX2ltYWdlIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgICAgICAgIHdpZHRoOiA1NzVweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuaGVhcnQuaWNvbiB7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICAgICAgd2lkdGg6IDlweDtcbiAgICAgICAgICBoZWlnaHQ6IDlweDtcbiAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYXJ0Lmljb246YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFydC5pY29uOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgbGVmdDogOHB4O1xuICAgICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gICAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgcG9vZiB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIHJnYmEoMjU1LCAwLCAwLCAxKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDIwcHggLTIwcHggNXB4IHJnYmEoMjU1LCAwLCAwLCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhcnQuaWNvbi5zZWxlY3RlZCxcbiAgICAgICAgLmhlYXJ0Lmljb24uc2VsZWN0ZWQ6YmVmb3JlLFxuICAgICAgICAuaGVhcnQuaWNvbi5zZWxlY3RlZDphZnRlciB7XG4gICAgICAgICAgYW5pbWF0aW9uOiBwb29mIDFzO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFydC5pY29uOmhvdmVyLFxuICAgICAgICAuaGVhcnQuaWNvbi5zZWxlY3RlZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFydC5pY29uOmhvdmVyOmJlZm9yZSxcbiAgICAgICAgLmhlYXJ0Lmljb24uc2VsZWN0ZWQ6YmVmb3JlIHtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFydC5pY29uOmhvdmVyOmFmdGVyLFxuICAgICAgICAuaGVhcnQuaWNvbi5zZWxlY3RlZDphZnRlciB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbGk+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiBzdGF0ZSwgbWFwRGlzcGF0Y2hUb1Byb3BzKShQb3N0KTtcbiJdfQ== */\n/*@ sourceURL=components/Post.js */'
  }));
};
exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
}, mapDispatchToProps)(Post);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbG9ycyIsImNvbm5lY3QiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJsaWtlIiwiY2xhc3NuYW1lcyIsIkxpbmsiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIlBvc3QiLCJpZCIsImF2YXRhciIsIm5hbWUiLCJ0ZXh0IiwidGltZSIsIm1vcmUiLCJpbWFnZSIsImxpa2VkIiwic2VsZWN0ZWRDbGFzcyIsInNlbGVjdGVkIiwiX19odG1sIiwibGlnaHRHcmV5IiwibWVkR3JleSIsIm1lZExpZ2h0R3JleSIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLDZCQUFZLEFBQ3JDOztVQUNRLEFBQW1CLDRDQUQzQixBQUFPLEFBQ0MsQUFBeUIsQUFFbEM7QUFIUSxBQUNMO0FBRko7O0FBTUEsSUFBTSxPQUFPLFNBQVAsQUFBTyxXQUFnRTtNQUE3RCxBQUE2RCxVQUE3RCxBQUE2RDtNQUF6RCxBQUF5RCxjQUF6RCxBQUF5RDtNQUFqRCxBQUFpRCxZQUFqRCxBQUFpRDtNQUEzQyxBQUEyQyxZQUEzQyxBQUEyQztNQUFyQyxBQUFxQyxZQUFyQyxBQUFxQztNQUEvQixBQUErQixZQUEvQixBQUErQjtNQUF6QixBQUF5QixhQUF6QixBQUF5QjtNQUFsQixBQUFrQixhQUFsQixBQUFrQjtNQUFYLEFBQVcsWUFBWCxBQUFXLEFBQzNFOztNQUFNLGdCQUFnQixTQUFoQixBQUFnQixnQkFBTSxBQUMxQjtXQUFPLDBCQUFXLEVBQUUseUJBQUYsQUFBMkIsTUFBTSxVQUFuRCxBQUFPLEFBQVcsQUFBMkMsQUFDOUQ7QUFGRCxBQUlBOzt5QkFDRSxjQUFBLFFBQUksV0FBSixBQUFjLG9CQUFkOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlLHVDQUFmOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7NENBQ08sV0FBTCxBQUFlLGdCQUFlLEtBQTlCLEFBQW1DLG9CQUFuQzs7Z0JBQUE7a0JBREYsQUFDRSxBQUNBO0FBREE7c0JBQ0EsY0FBQSxTQUFLLFdBQUwsQUFBZSw2QkFBZjs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWMsMEJBQWQ7O2dCQUFBO2tCQUFBLEFBQTRCO0FBQTVCO0tBREYsQUFDRSxBQUNBO2VBQUEsQUFDWSxBQUNWOzZCQUF5QixFQUFFLFFBRjdCLEFBRTJCLEFBQVU7Z0JBRnJDOztnQkFBQTtrQkFGRixBQUVFLEFBSUM7QUFKRDtBQUNFLDZCQUlBLGNBQUEsU0FBSyxXQUFMLEFBQWUsMkJBQWY7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWUsNEJBQWY7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBO2dCQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0Esa0RBQUssS0FBTCxBQUFTLDZDQUFUOztnQkFBQTtrQkFKTCxBQUNDLEFBQ0UsQUFFRTtBQUFBO1NBVlIsQUFhTSxBQUNKLHNCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWUsNkJBQWY7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjs0Q0FDTyxXQUFMLEFBQWUsZUFBYyxLQUE3QixBQUFpQyw4Q0FBakM7O2dCQUFBO2tCQURGLEFBQ0UsQUFDSTtBQURKOzZDQUNTLFdBQUwsQUFBZ0IsaUJBQWlCLFNBQVMsbUJBQUE7YUFBTSxLQUFOLEFBQU0sQUFBSztBQUFyRCxtQkFBQTs7Z0JBQUE7a0JBRk4sQUFFTSxBQUNKO0FBREk7c0JBQ0osY0FBQSxVQUFNLFdBQU4sQUFBZ0IsMEJBQWhCOztnQkFBQTtrQkFBQSxBQUE4QjtBQUE5QjtLQXBCUixBQUNFLEFBRUUsQUFjRSxBQUdFLEFBSUwsa0NBQ0MsY0FBQSxTQUFLLFdBQUwsQUFBZSxxQ0FBZjs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0dBQUEseUNBQ08sV0FBTCxBQUFlLGVBQWMsS0FBN0IsQUFBa0MsbUJBQWxDOztnQkFBQTtrQkFGSCxBQUNDLEFBQ0U7QUFBQTtRQTFCTixBQTRCTTthQTVCTjt1T0FwQndOLHFCQUFPLEFBb0IvTixnVEFwQjBnQixxQkFBTyxBQW9CamhCLHlnQkFwQnFoQyxxQkFBTyxBQW9CNWhDLDBGQXBCaW5DLHFCQUFPLEFBb0J4bkMsd1VBcEIyN0MscUJBQU8sQUFvQmw4Qyx1VUFwQm93RCxxQkFBTyxBQW9CM3dELGtYQXBCd25FLHFCQUFPLEFBb0IvbkUsWUFERixBQUNFLEFBa0xIO0FBbExHO0FBTkosQUF5TEE7MkNBQXVCLGlCQUFBO1NBQUEsQUFBUztBQUFqQixDQUFBLEVBQUEsQUFBd0Isb0JBQXZDLEFBQWUsQUFBNEMiLCJmaWxlIjoiUG9zdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9zaW1wbHlzb2NpYWwifQ==