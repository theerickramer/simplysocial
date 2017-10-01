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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _cssConstants = require('../static/css-constants');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _store = require('../redux/store');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/eric/dev/challenges/simplysocial/components/Post.js';


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    like: (0, _redux.bindActionCreators)(_store.like, dispatch)
  };
};

var Post = function (_Component) {
  (0, _inherits3.default)(Post, _Component);

  function Post() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Post);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Post.__proto__ || (0, _getPrototypeOf2.default)(Post)).call.apply(_ref, [this].concat(args))), _this), _this.state = { justLiked: false }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Post, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.liked) {
        this.setState({ justLiked: true });
      }
    }
  }, {
    key: 'selectedClass',
    value: function selectedClass() {
      var liked = this.props.liked;

      return (0, _classnames2.default)({ 'post__like heart icon': true, 'selected': liked, 'poof': this.state.justLiked });
    }
  }, {
    key: '_onClick',
    value: function _onClick() {
      var _props = this.props,
          like = _props.like,
          id = _props.id;

      like(id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          avatar = _props2.avatar,
          name = _props2.name,
          text = _props2.text,
          time = _props2.time,
          more = _props2.more,
          image = _props2.image,
          liked = _props2.liked,
          like = _props2.like;

      var now = (0, _moment2.default)();
      var timeToMoment = (0, _moment2.default)(time);
      var timeDiff = timeToMoment.to(now, true);
      return _react2.default.createElement('li', { className: 'post', 'data-jsx': 1248168605,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('div', { className: 'post__content-container', 'data-jsx': 1248168605,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('img', { className: 'post__avatar', src: avatar, 'data-jsx': 1248168605,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react2.default.createElement('div', { className: 'post__content', 'data-jsx': 1248168605,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('h5', { className: 'post__name', 'data-jsx': 1248168605,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, name), _react2.default.createElement('p', {
        className: 'post__text',
        dangerouslySetInnerHTML: { __html: text },
        'data-jsx': 1248168605,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), more ? _react2.default.createElement('div', { className: 'post__extra', 'data-jsx': 1248168605,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('div', { className: 'post__expand', 'data-jsx': 1248168605,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('span', {
        'data-jsx': 1248168605,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Expand'), _react2.default.createElement('img', { src: '/static/images/down-arrow.png', 'data-jsx': 1248168605,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }))) : null, _react2.default.createElement('div', { className: 'post__options', 'data-jsx': 1248168605,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('img', {
        className: 'post__reply',
        src: '/static/images/reply-arrow.png',
        'data-jsx': 1248168605,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), _react2.default.createElement('div', {
        className: this.selectedClass(),
        onClick: this._onClick.bind(this),
        ref: 'heart',
        'data-jsx': 1248168605,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), _react2.default.createElement('span', { className: 'post__time', 'data-jsx': 1248168605,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, timeDiff)))), image ? _react2.default.createElement('div', { className: 'post__image-container', 'data-jsx': 1248168605,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement('img', { className: 'post__image', src: image, 'data-jsx': 1248168605,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      })) : null, _react2.default.createElement(_style2.default, {
        styleId: 1248168605,
        css: '.post[data-jsx="1248168605"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:30px;border:1px solid ' + _cssConstants.colors.lightGrey + ';border-radius:5px}.post__content-container[data-jsx="1248168605"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;padding:25px;color:' + _cssConstants.colors.medGrey + '}.post__content[data-jsx="1248168605"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-left:20px}.post__avatar[data-jsx="1248168605"],.post__content[data-jsx="1248168605"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex}.post__avatar[data-jsx="1248168605"]{height:40px;width:40px}.post__name[data-jsx="1248168605"]{margin-bottom:10px;color:' + _cssConstants.colors.medGrey + '}.post__text[data-jsx="1248168605"]{max-width:420px;line-height:25px;color:' + _cssConstants.colors.medLightGrey + '}.post__options[data-jsx="1248168605"]{position:absolute;top:25px;right:25px}.post__reply[data-jsx="1248168605"],.post__like[data-jsx="1248168605"],.post__time[data-jsx="1248168605"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin-left:20px;color:' + _cssConstants.colors.lightGrey + '}.post__expand[data-jsx="1248168605"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:25px}.post__expand[data-jsx="1248168605"] span[data-jsx="1248168605"]{margin-right:10px;color:' + _cssConstants.colors.lightGrey + ';font-size:10px}.post__expand[data-jsx="1248168605"] img[data-jsx="1248168605"]{opacity:0.4}.post__image-container[data-jsx="1248168605"]{position:relative;width:100%}.post__image[data-jsx="1248168605"]{margin-bottom:-5px;margin-left:-1px;width:575px;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.heart.icon[data-jsx="1248168605"]{color:' + _cssConstants.colors.lightGrey + ';width:9px;height:9px;border-left:solid 1px currentColor;border-bottom:solid 1px currentColor;-webkit-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.heart.icon[data-jsx="1248168605"]:before{content:\'\';position:absolute;top:-5px;left:-1px;width:8px;height:5px;border-radius:5px 5px 0 0;border-top:solid 1px currentColor;border-left:solid 1px currentColor;border-right:solid 1px currentColor}.heart.icon[data-jsx="1248168605"]:after{content:\'\';position:absolute;top:0px;left:8px;width:5px;height:8px;border-radius:0 5px 5px 0;border-top:solid 1px currentColor;border-right:solid 1px currentColor;border-bottom:solid 1px currentColor}@-webkit-keyframes poofdatajsx1248168605{0%{box-shadow:0 0 rgba(255,0,0,1)}100%{box-shadow:20px -20px 5px rgba(255,0,0,0)}}@keyframes poofdatajsx1248168605{0%{box-shadow:0 0 rgba(255,0,0,1)}100%{box-shadow:20px -20px 5px rgba(255,0,0,0)}}.heart.icon.selected[data-jsx="1248168605"],.heart.icon.selected[data-jsx="1248168605"]:before,.heart.icon.selected[data-jsx="1248168605"]:after{background-color:red}.heart.icon.poof[data-jsx="1248168605"],.heart.icon.poof[data-jsx="1248168605"]:before,.heart.icon.poof[data-jsx="1248168605"]:after{-webkit-animation:poofdatajsx1248168605 1s;animation:poofdatajsx1248168605 1s}.heart.icon[data-jsx="1248168605"]:hover,.heart.icon.selected[data-jsx="1248168605"]{border-bottom:1px solid red;border-left:1px solid red}.heart.icon[data-jsx="1248168605"]:hover[data-jsx="1248168605"]:before,.heart.icon.selected[data-jsx="1248168605"]:before{border-top:1px solid red;border-right:1px solid red;border-left:1px solid red}.heart.icon[data-jsx="1248168605"]:hover[data-jsx="1248168605"]:after,.heart.icon.selected[data-jsx="1248168605"]:after{border-top:1px solid red;border-bottom:1px solid red;border-right:1px solid red}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRm9CLEFBRzBCLEFBT0EsQUFPQSxBQU1PLEFBR1IsQUFJTyxBQUlILEFBS0UsQUFPRSxBQUtQLEFBS0ssQUFLTixBQUdNLEFBSUMsQUFPZ0IsQUFVeEIsQUFhQSxBQWN5QixBQUlXLEFBTzFCLEFBTUgsQUFLVSxBQU1ILEFBT0EsV0E3RFAsQUFhQSxDQXhFUCxBQW1DYixJQTNCbUIsRUFLUixBQWlCMEIsQUFReEIsQ0FsQ3dCLEFBc0NsQixFQXVEbkIsRUFoR0EsRUFpSDZCLEFBT0MsRUEzR2pCLENBOEZlLENBckU1QixBQXFCVyxBQWFELEVBYVIsRUE3RW1DLEVBd0N6QixDQU5FLENBK0JILENBM0RYLEFBOENZLElBNkJWLEdBeENXLENBeUJELEVBL0JvQixBQWtCcEIsSUFxRGdCLENBcEZYLEFBMkZZLENBckg3QixBQXdHQSxFQTFEcUMsQUF5QnhCLEVBYkEsU0FjZSxDQW5FNUIsQUFzQkEsQ0FnQzRCLEtBdkZKLEFBT0MsQUFPRCxBQWtDSCxJQW9CWSxBQTBEakMsQUFhQSxFQU9BLFdBdkV1QyxFQTBCSCxFQWJBLE9BcEVwQyxBQXVCbUIsT0EwQm5CLFVBekJxQyxRQTBEQyxDQTFCSCxDQWFFLHVCQXhGaEIsQUFjRCxFQThCcEIsT0FnQzJCLEVBMEJZLENBYkQsR0F6Q3BCLEdBakNsQixDQWRnRCxZQU01QixBQTBDcEIsaUJBeUNBLEFBYUEsQ0EvRmUsYUFDc0IsR0FQakIsa0JBQ3BCLGFBMEVBLENBbkVBIiwiZmlsZSI6ImNvbXBvbmVudHMvUG9zdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9zaW1wbHlzb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi9zdGF0aWMvY3NzLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgbGlrZSB9IGZyb20gJy4uL3JlZHV4L3N0b3JlJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4ge1xuICAgIGxpa2U6IGJpbmRBY3Rpb25DcmVhdG9ycyhsaWtlLCBkaXNwYXRjaClcbiAgfTtcbn07XG5cbmNsYXNzIFBvc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtqdXN0TGlrZWQ6IGZhbHNlfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgaWYgKG5leHRQcm9wcy5saWtlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7anVzdExpa2VkOiB0cnVlfSlcbiAgICB9XG4gIH1cbiAgc2VsZWN0ZWRDbGFzcygpIHtcbiAgICBjb25zdCB7IGxpa2VkIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBjbGFzc25hbWVzKHsgJ3Bvc3RfX2xpa2UgaGVhcnQgaWNvbic6IHRydWUsICdzZWxlY3RlZCc6IGxpa2VkLCAncG9vZic6IHRoaXMuc3RhdGUuanVzdExpa2VkIH0pO1xuICB9XG4gIF9vbkNsaWNrKCkge1xuICAgIGNvbnN0IHsgbGlrZSwgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgbGlrZShpZCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgYXZhdGFyLFxuICAgICAgbmFtZSxcbiAgICAgIHRleHQsXG4gICAgICB0aW1lLFxuICAgICAgbW9yZSxcbiAgICAgIGltYWdlLFxuICAgICAgbGlrZWQsXG4gICAgICBsaWtlXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgbm93ID0gbW9tZW50KCk7XG4gICAgY29uc3QgdGltZVRvTW9tZW50ID0gbW9tZW50KHRpbWUpO1xuICAgIGNvbnN0IHRpbWVEaWZmID0gdGltZVRvTW9tZW50LnRvKG5vdywgdHJ1ZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3N0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvc3RfX2F2YXRhclwiIHNyYz17YXZhdGFyfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudFwiPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInBvc3RfX25hbWVcIj57bmFtZX08L2g1PlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zdF9fdGV4dFwiXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGV4dCB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHttb3JlID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2V4dHJhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19leHBhbmRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkV4cGFuZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvZG93bi1hcnJvdy5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19vcHRpb25zXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0X19yZXBseVwiXG4gICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvcmVwbHktYXJyb3cucG5nXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5zZWxlY3RlZENsYXNzKCl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25DbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIHJlZj1cImhlYXJ0XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdF9fdGltZVwiPnt0aW1lRGlmZn08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtpbWFnZSA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2ltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3N0X19pbWFnZVwiIHNyYz17aW1hZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5saWdodEdyZXl9O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9zdF9fY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5tZWRHcmV5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX2NvbnRlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19hdmF0YXIsXG4gICAgICAgICAgLnBvc3RfX2NvbnRlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19hdmF0YXIge1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19uYW1lIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubWVkR3JleX07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X190ZXh0IHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDIwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5tZWRMaWdodEdyZXl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9zdF9fb3B0aW9ucyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgICAgICByaWdodDogMjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX3JlcGx5LFxuICAgICAgICAgIC5wb3N0X19saWtlLFxuICAgICAgICAgIC5wb3N0X190aW1lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX2V4cGFuZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0X19leHBhbmQgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3RfX2V4cGFuZCBpbWcge1xuICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9zdF9faW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9zdF9faW1hZ2Uge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTVweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgICAgICAgICAgd2lkdGg6IDU3NXB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYXJ0Lmljb24ge1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICAgICAgICB3aWR0aDogOXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA5cHg7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oZWFydC5pY29uOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhcnQuaWNvbjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgbGVmdDogOHB4O1xuICAgICAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIHBvb2Yge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgcmdiYSgyNTUsIDAsIDAsIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMjBweCAtMjBweCA1cHggcmdiYSgyNTUsIDAsIDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oZWFydC5pY29uLnNlbGVjdGVkLFxuICAgICAgICAgIC5oZWFydC5pY29uLnNlbGVjdGVkOmJlZm9yZSxcbiAgICAgICAgICAuaGVhcnQuaWNvbi5zZWxlY3RlZDphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYXJ0Lmljb24ucG9vZixcbiAgICAgICAgICAuaGVhcnQuaWNvbi5wb29mOmJlZm9yZSxcbiAgICAgICAgICAuaGVhcnQuaWNvbi5wb29mOmFmdGVyIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcG9vZiAxcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhcnQuaWNvbjpob3ZlcixcbiAgICAgICAgICAuaGVhcnQuaWNvbi5zZWxlY3RlZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYXJ0Lmljb246aG92ZXI6YmVmb3JlLFxuICAgICAgICAgIC5oZWFydC5pY29uLnNlbGVjdGVkOmJlZm9yZSB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYXJ0Lmljb246aG92ZXI6YWZ0ZXIsXG4gICAgICAgICAgLmhlYXJ0Lmljb24uc2VsZWN0ZWQ6YWZ0ZXIge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gc3RhdGUsIG1hcERpc3BhdGNoVG9Qcm9wcykoUG9zdCk7XG4iXX0= */\n/*@ sourceURL=components/Post.js */'
      }));
    }
  }]);

  return Post;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
}, mapDispatchToProps)(Post);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiY29sb3JzIiwiY29ubmVjdCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImxpa2UiLCJjbGFzc25hbWVzIiwiTGluayIsIm1vbWVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiUG9zdCIsInN0YXRlIiwianVzdExpa2VkIiwibmV4dFByb3BzIiwibGlrZWQiLCJzZXRTdGF0ZSIsInByb3BzIiwiaWQiLCJhdmF0YXIiLCJuYW1lIiwidGV4dCIsInRpbWUiLCJtb3JlIiwiaW1hZ2UiLCJub3ciLCJ0aW1lVG9Nb21lbnQiLCJ0aW1lRGlmZiIsInRvIiwiX19odG1sIiwic2VsZWN0ZWRDbGFzcyIsIl9vbkNsaWNrIiwiYmluZCIsImxpZ2h0R3JleSIsIm1lZEdyZXkiLCJtZWRMaWdodEdyZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLDZCQUFZLEFBQ3JDOztVQUNRLEFBQW1CLDRDQUQzQixBQUFPLEFBQ0MsQUFBeUIsQUFFbEM7QUFIUSxBQUNMO0FBRko7O0ksQUFNTTs7Ozs7Ozs7Ozs7Ozs7d00sQUFDSixRQUFRLEVBQUMsV0FBRCxBQUFZLEE7Ozs7OzhDLEFBQ00sV0FBVSxBQUNsQztVQUFJLFVBQUosQUFBYyxPQUFPLEFBQ25CO2FBQUEsQUFBSyxTQUFTLEVBQUMsV0FBZixBQUFjLEFBQVksQUFDM0I7QUFDRjs7OztvQ0FDZTtVQUFBLEFBQ04sUUFBVSxLQURKLEFBQ1MsTUFEVCxBQUNOLEFBQ1I7O2FBQU8sMEJBQVcsRUFBRSx5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