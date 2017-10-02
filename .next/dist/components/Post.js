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

var _animateComponents = require('animate-components');

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

      return (0, _classnames2.default)({
        'post__like heart icon': true,
        selected: liked,
        poof: this.state.justLiked
      });
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
      return _react2.default.createElement(_animateComponents.FadeIn, { duration: '1s', timingFunction: 'ease-in', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('li', { className: 'post', 'data-jsx': 475720477,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('div', { className: 'post__content-container', 'data-jsx': 475720477,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('img', { className: 'post__avatar', src: avatar, 'data-jsx': 475720477,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement('div', { className: 'post__content', 'data-jsx': 475720477,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('h5', { className: 'post__name', 'data-jsx': 475720477,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, name), _react2.default.createElement('p', {
        className: 'post__text',
        dangerouslySetInnerHTML: { __html: text },
        'data-jsx': 475720477,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), more ? _react2.default.createElement('div', { className: 'post__extra', 'data-jsx': 475720477,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('div', { className: 'post__expand', 'data-jsx': 475720477,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('span', {
        'data-jsx': 475720477,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'Expand'), _react2.default.createElement('img', { src: '/static/images/down-arrow.png', 'data-jsx': 475720477,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }))) : null, _react2.default.createElement('div', { className: 'post__options', 'data-jsx': 475720477,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('img', {
        className: 'post__reply',
        src: '/static/images/reply-arrow.png',
        'data-jsx': 475720477,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), _react2.default.createElement('div', {
        className: this.selectedClass(),
        onClick: this._onClick.bind(this),
        ref: 'heart',
        'data-jsx': 475720477,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), _react2.default.createElement('span', { className: 'post__time', 'data-jsx': 475720477,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, timeDiff)))), image ? _react2.default.createElement('div', { className: 'post__image-container', 'data-jsx': 475720477,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement('img', { className: 'post__image', src: image, 'data-jsx': 475720477,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      })) : null, _react2.default.createElement(_style2.default, {
        styleId: 475720477,
        css: '.post[data-jsx="475720477"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:30px;border:1px solid ' + _cssConstants.colors.lightGrey + ';border-radius:5px}.post__content-container[data-jsx="475720477"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;padding:25px;color:' + _cssConstants.colors.medGrey + '}.post__content[data-jsx="475720477"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-left:20px}.post__avatar[data-jsx="475720477"],.post__content[data-jsx="475720477"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex}.post__avatar[data-jsx="475720477"]{height:40px;width:40px}.post__name[data-jsx="475720477"]{margin-bottom:10px;color:' + _cssConstants.colors.medGrey + '}.post__text[data-jsx="475720477"]{max-width:420px;line-height:25px;color:' + _cssConstants.colors.medLightGrey + '}.post__options[data-jsx="475720477"]{position:absolute;top:25px;right:25px}.post__reply[data-jsx="475720477"],.post__like[data-jsx="475720477"],.post__time[data-jsx="475720477"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin-left:20px;color:' + _cssConstants.colors.lightGrey + '}.post__expand[data-jsx="475720477"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:25px}.post__expand[data-jsx="475720477"] span[data-jsx="475720477"]{margin-right:10px;color:' + _cssConstants.colors.lightGrey + ';font-size:10px}.post__expand[data-jsx="475720477"] img[data-jsx="475720477"]{opacity:0.4}.post__image-container[data-jsx="475720477"]{position:relative;width:100%}.post__image[data-jsx="475720477"]{margin-bottom:-5px;margin-left:-1px;width:575px;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.heart.icon[data-jsx="475720477"]{color:' + _cssConstants.colors.lightGrey + ';width:9px;height:9px;border-left:solid 1px currentColor;border-bottom:solid 1px currentColor;-webkit-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.heart.icon[data-jsx="475720477"]:before{content:\'\';position:absolute;top:-5px;left:-1px;width:8px;height:5px;border-radius:5px 5px 0 0;border-top:solid 1px currentColor;border-left:solid 1px currentColor;border-right:solid 1px currentColor}.heart.icon[data-jsx="475720477"]:after{content:\'\';position:absolute;top:0px;left:8px;width:5px;height:8px;border-radius:0 5px 5px 0;border-top:solid 1px currentColor;border-right:solid 1px currentColor;border-bottom:solid 1px currentColor}@-webkit-keyframes poofdatajsx475720477{0%{box-shadow:0 0 rgba(255,0,0,1)}100%{box-shadow:20px -20px 5px rgba(255,0,0,0)}}@keyframes poofdatajsx475720477{0%{box-shadow:0 0 rgba(255,0,0,1)}100%{box-shadow:20px -20px 5px rgba(255,0,0,0)}}.heart.icon.selected[data-jsx="475720477"],.heart.icon.selected[data-jsx="475720477"]:before,.heart.icon.selected[data-jsx="475720477"]:after{background-color:red}.heart.icon.poof[data-jsx="475720477"],.heart.icon.poof[data-jsx="475720477"]:before,.heart.icon.poof[data-jsx="475720477"]:after{-webkit-animation:poofdatajsx475720477 1s;animation:poofdatajsx475720477 1s}.heart.icon[data-jsx="475720477"]:hover,.heart.icon.selected[data-jsx="475720477"]{border-bottom:1px solid red;border-left:1px solid red}.heart.icon[data-jsx="475720477"]:hover[data-jsx="475720477"]:before,.heart.icon.selected[data-jsx="475720477"]:before{border-top:1px solid red;border-right:1px solid red;border-left:1px solid red}.heart.icon[data-jsx="475720477"]:hover[data-jsx="475720477"]:after,.heart.icon.selected[data-jsx="475720477"]:after{border-top:1px solid red;border-bottom:1px solid red;border-right:1px solid red}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRnNCLEFBRzRCLEFBT0EsQUFPQSxBQU1PLEFBR1IsQUFJTyxBQUlILEFBS0UsQUFPRSxBQUtQLEFBS0ssQUFLTixBQUdNLEFBSUMsQUFPZ0IsQUFVeEIsQUFhQSxBQWN5QixBQUlXLEFBTzFCLEFBTUgsQUFLVSxBQU1ILEFBT0EsV0E3RFAsQUFhQSxDQXhFUCxBQW1DYixJQTNCbUIsRUFLUixBQWlCMEIsQUFReEIsQ0FsQ3dCLEFBc0NsQixFQXVEbkIsRUFoR0EsRUFpSDZCLEFBT0MsRUEzR2pCLENBOEZlLENBckU1QixBQXFCVyxBQWFELEVBYVIsRUE3RW1DLEVBd0N6QixDQU5FLENBK0JILENBM0RYLEFBOENZLElBNkJWLEdBeENXLENBeUJELEVBL0JvQixBQWtCcEIsSUFxRGdCLENBcEZYLEFBMkZZLENBckg3QixBQXdHQSxFQTFEcUMsQUF5QnhCLEVBYkEsU0FjZSxDQW5FNUIsQUFzQkEsQ0FnQzRCLEtBdkZKLEFBT0MsQUFPRCxBQWtDSCxFQThFckIsRUExRGlDLEFBdUVqQyxFQU9BLFdBdkV1QyxFQTBCSCxFQWJBLE9BcEVwQyxBQXVCbUIsT0EwQm5CLFVBekJxQyxRQTBEQyxDQTFCSCxDQWFFLHVCQXhGaEIsQUFjRCxFQThCcEIsT0FnQzJCLEVBMEJZLENBYkQsR0F6Q3BCLEdBakNsQixDQWRnRCxZQU01QixBQTBDcEIsaUJBeUNBLEFBYUEsQ0EvRmUsYUFDc0IsR0FQakIsa0JBQ3BCLGFBMEVBLENBbkVBIiwiZmlsZSI6ImNvbXBvbmVudHMvUG9zdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9zaW1wbHlzb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi9zdGF0aWMvY3NzLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgbGlrZSB9IGZyb20gJy4uL3JlZHV4L3N0b3JlJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IEZhZGVJbiB9IGZyb20gJ2FuaW1hdGUtY29tcG9uZW50cyc7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHtcbiAgICBsaWtlOiBiaW5kQWN0aW9uQ3JlYXRvcnMobGlrZSwgZGlzcGF0Y2gpXG4gIH07XG59O1xuXG5jbGFzcyBQb3N0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IGp1c3RMaWtlZDogZmFsc2UgfTtcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmxpa2VkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsganVzdExpa2VkOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuICBzZWxlY3RlZENsYXNzKCkge1xuICAgIGNvbnN0IHsgbGlrZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIGNsYXNzbmFtZXMoe1xuICAgICAgJ3Bvc3RfX2xpa2UgaGVhcnQgaWNvbic6IHRydWUsXG4gICAgICBzZWxlY3RlZDogbGlrZWQsXG4gICAgICBwb29mOiB0aGlzLnN0YXRlLmp1c3RMaWtlZFxuICAgIH0pO1xuICB9XG4gIF9vbkNsaWNrKCkge1xuICAgIGNvbnN0IHsgbGlrZSwgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgbGlrZShpZCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgYXZhdGFyLFxuICAgICAgbmFtZSxcbiAgICAgIHRleHQsXG4gICAgICB0aW1lLFxuICAgICAgbW9yZSxcbiAgICAgIGltYWdlLFxuICAgICAgbGlrZWQsXG4gICAgICBsaWtlXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgbm93ID0gbW9tZW50KCk7XG4gICAgY29uc3QgdGltZVRvTW9tZW50ID0gbW9tZW50KHRpbWUpO1xuICAgIGNvbnN0IHRpbWVEaWZmID0gdGltZVRvTW9tZW50LnRvKG5vdywgdHJ1ZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGYWRlSW4gZHVyYXRpb249XCIxc1wiIHRpbWluZ0Z1bmN0aW9uPVwiZWFzZS1pblwiPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9zdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9zdF9fYXZhdGFyXCIgc3JjPXthdmF0YXJ9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInBvc3RfX25hbWVcIj57bmFtZX08L2g1PlxuICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3RfX3RleHRcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGV4dCB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7bW9yZSA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2V4dHJhXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2V4cGFuZFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FeHBhbmQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvZG93bi1hcnJvdy5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX29wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0X19yZXBseVwiXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9yZXBseS1hcnJvdy5wbmdcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnNlbGVjdGVkQ2xhc3MoKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgIHJlZj1cImhlYXJ0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RfX3RpbWVcIj57dGltZURpZmZ9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtpbWFnZSA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9faW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9zdF9faW1hZ2VcIiBzcmM9e2ltYWdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucG9zdCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3N0X19jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5tZWRHcmV5fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3N0X19jb250ZW50IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvc3RfX2F2YXRhcixcbiAgICAgICAgICAgIC5wb3N0X19jb250ZW50IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9zdF9fYXZhdGFyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3N0X19uYW1lIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLm1lZEdyZXl9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvc3RfX3RleHQge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQyMHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLm1lZExpZ2h0R3JleX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9zdF9fb3B0aW9ucyB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICAgICAgICByaWdodDogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3N0X19yZXBseSxcbiAgICAgICAgICAgIC5wb3N0X19saWtlLFxuICAgICAgICAgICAgLnBvc3RfX3RpbWUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5saWdodEdyZXl9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvc3RfX2V4cGFuZCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9zdF9fZXhwYW5kIHNwYW4ge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5saWdodEdyZXl9O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9zdF9fZXhwYW5kIGltZyB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3N0X19pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvc3RfX2ltYWdlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA1NzVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlYXJ0Lmljb24ge1xuICAgICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICAgICAgd2lkdGg6IDlweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA5cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFydC5pY29uOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgICAgICAgbGVmdDogLTFweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhcnQuaWNvbjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICBsZWZ0OiA4cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggY3VycmVudENvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIHBvb2Yge1xuICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIHJnYmEoMjU1LCAwLCAwLCAxKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDIwcHggLTIwcHggNXB4IHJnYmEoMjU1LCAwLCAwLCAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhcnQuaWNvbi5zZWxlY3RlZCxcbiAgICAgICAgICAgIC5oZWFydC5pY29uLnNlbGVjdGVkOmJlZm9yZSxcbiAgICAgICAgICAgIC5oZWFydC5pY29uLnNlbGVjdGVkOmFmdGVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhcnQuaWNvbi5wb29mLFxuICAgICAgICAgICAgLmhlYXJ0Lmljb24ucG9vZjpiZWZvcmUsXG4gICAgICAgICAgICAuaGVhcnQuaWNvbi5wb29mOmFmdGVyIHtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBwb29mIDFzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhcnQuaWNvbjpob3ZlcixcbiAgICAgICAgICAgIC5oZWFydC5pY29uLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFydC5pY29uOmhvdmVyOmJlZm9yZSxcbiAgICAgICAgICAgIC5oZWFydC5pY29uLnNlbGVjdGVkOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFydC5pY29uOmhvdmVyOmFmdGVyLFxuICAgICAgICAgICAgLmhlYXJ0Lmljb24uc2VsZWN0ZWQ6YWZ0ZXIge1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2xpPlxuICAgICAgPC9GYWRlSW4+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiBzdGF0ZSwgbWFwRGlzcGF0Y2hUb1Byb3BzKShQb3N0KTtcbiJdfQ== */\n/*@ sourceURL=components/Post.js */'
      })));
    }
  }]);

  return Post;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
}, mapDispatchToProps)(Post);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiY29sb3JzIiwiY29ubmVjdCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImxpa2UiLCJjbGFzc25hbWVzIiwiTGluayIsIm1vbWVudCIsIkZhZGVJbiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiUG9zdCIsInN0YXRlIiwianVzdExpa2VkIiwibmV4dFByb3BzIiwibGlrZWQiLCJzZXRTdGF0ZSIsInByb3BzIiwic2VsZWN0ZWQiLCJwb29mIiwiaWQiLCJhdmF0YXIiLCJuYW1lIiwidGV4dCIsInRpbWUiLCJtb3JlIiwiaW1hZ2UiLCJub3ciLCJ0aW1lVG9Nb21lbnQiLCJ0aW1lRGlmZiIsInRvIiwiX19odG1sIiwic2VsZWN0ZWRDbGFzcyIsIl9vbkNsaWNrIiwiYmluZCIsImxpZ2h0R3JleSIsIm1lZEdyZXkiLCJtZWRMaWdodEdyZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOzs7Ozs7O0FBRVQsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsNkJBQVksQUFDckM7O1VBQ1EsQUFBbUIsNENBRDNCLEFBQU8sQUFDQyxBQUF5QixBQUVsQztBQUhRLEFBQ0w7QUFGSjs7SSxBQU1NOzs7Ozs7Ozs7Ozs7Ozt3TUFDSixBLFFBQVEsRUFBRSxXQUFGLEFBQWEsQTs7Ozs7OENBQ0ssQSxXQUFXLEFBQ25DO1VBQUksVUFBSixBQUFjLE9BQU8sQUFDbkI7YUFBQSxBQUFLLFNBQVMsRUFBRSxXQUFoQixBQUFjLEFBQWEsQUFDNUI7QUFDRjs7OztvQ0FDZTtVQUFBLEFBQ04sUUFBVSxLQURKLEFBQ1MsTUFEVCxBQUNOLEFBQ1I7OztpQ0FBa0IsQUFDUyxBQUN6QjtrQkFGZ0IsQUFFTixBQUNWO2NBQU0sS0FBQSxBQUFLLE1BSGIsQUFBTyxBQUFXLEFBR0MsQUFFcEI7QUFMbUIsQUFDaEIsT0FESzs7OzsrQkFNRTttQkFDWSxLQURaLEFBQ2lCO1VBRGpCLEFBQ0QsY0FEQyxBQUNEO1VBREMsQUFDSyxZQURMLEFBQ0ssQUFDZDs7V0FBQSxBQUFLLEFBQ047Ozs7NkJBQ1E7b0JBV0gsS0FYRyxBQVdFO1VBWEYsQUFFTCxhQUZLLEFBRUw7VUFGSyxBQUdMLGlCQUhLLEFBR0w7VUFISyxBQUlMLGVBSkssQUFJTDtVQUpLLEFBS0wsZUFMSyxBQUtMO1VBTEssQUFNTCxlQU5LLEFBTUw7VUFOSyxBQU9MLGVBUEssQUFPTDtVQVBLLEFBUUwsZ0JBUkssQUFRTDtVQVJLLEFBU0wsZ0JBVEssQUFTTDtVQVRLLEFBVUwsZUFWSyxBQVVMLEFBRUY7O1VBQU0sTUFBTixBQUFZLEFBQ1o7VUFBTSxlQUFlLHNCQUFyQixBQUFxQixBQUFPLEFBQzVCO1VBQU0sV0FBVyxhQUFBLEFBQWEsR0FBYixBQUFnQixLQUFqQyxBQUFpQixBQUFxQixBQUN0Qzs2QkFDRSxBQUFDLDJDQUFPLFVBQVIsQUFBaUIsTUFBSyxnQkFBdEIsQUFBcUM7b0JBQXJDO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWMsb0JBQWQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlLHVDQUFmOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7Z0RBQ08sV0FBTCxBQUFlLGdCQUFlLEtBQTlCLEFBQW1DLG9CQUFuQzs7b0JBQUE7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsY0FBQSxTQUFLLFdBQUwsQUFBZSw2QkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWMsMEJBQWQ7O29CQUFBO3NCQUFBLEFBQTRCO0FBQTVCO1NBREYsQUFDRSxBQUNBO21CQUFBLEFBQ1ksQUFDVjtpQ0FBeUIsRUFBRSxRQUY3QixBQUUyQixBQUFVO29CQUZyQzs7b0JBQUE7c0JBRkYsQUFFRSxBQUlDO0FBSkQ7QUFDRSxpQ0FJQSxjQUFBLFNBQUssV0FBTCxBQUFlLDJCQUFmOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlLDRCQUFmOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTtvQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGtEQUFLLEtBQUwsQUFBUyw2Q0FBVDs7b0JBQUE7c0JBSkwsQUFDQyxBQUNFLEFBRUU7QUFBQTthQVZSLEFBYU0sQUFDSixzQkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlLDZCQUFmOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7O21CQUNFLEFBQ1ksQUFDVjthQUZGLEFBRU07b0JBRk47O29CQUFBO3NCQURGLEFBQ0UsQUFJQTtBQUpBO0FBQ0U7bUJBSVcsS0FEYixBQUNhLEFBQUssQUFDaEI7aUJBQVMsS0FBQSxBQUFLLFNBQUwsQUFBYyxLQUZ6QixBQUVXLEFBQW1CLEFBQzVCO2FBSEYsQUFHTTtvQkFITjs7b0JBQUE7c0JBTEYsQUFLRSxBQUtBO0FBTEE7QUFDRSwwQkFJRixjQUFBLFVBQU0sV0FBTixBQUFnQiwwQkFBaEI7O29CQUFBO3NCQUFBLEFBQThCO0FBQTlCO1NBM0JSLEFBQ0UsQUFFRSxBQWNFLEFBVUUsQUFJTCxzQ0FDQyxjQUFBLFNBQUssV0FBTCxBQUFlLHFDQUFmOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7T0FBQSx5Q0FDTyxXQUFMLEFBQWUsZUFBYyxLQUE3QixBQUFrQyxtQkFBbEM7O29CQUFBO3NCQUZILEFBQ0MsQUFDRTtBQUFBO1lBakNOLEFBbUNNO2lCQW5DTjswT0FyRG1OLHFCQUFPLEFBcUQxTiwrU0FyRG9nQixxQkFBTyxBQXFEM2dCLG9nQkFyRDBnQyxxQkFBTyxBQXFEamhDLHlGQXJEcW1DLHFCQUFPLEFBcUQ1bUMsb1VBckQyNkMscUJBQU8sQUFxRGw3QyxvVUFyRGl2RCxxQkFBTyxBQXFEeHZELDZXQXJEZ21FLHFCQUFPLEFBcUR2bUUsWUFGSixBQUNFLEFBQ0UsQUErTEw7QUEvTEs7Ozs7O0EsQUFwQ1csQUFxT25COzsyQ0FBdUIsaUJBQUE7U0FBQSxBQUFTO0FBQWpCLENBQUEsRUFBQSxBQUF3QixvQkFBdkMsQUFBZSxBQUE0QyIsImZpbGUiOiJQb3N0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lcmljL2Rldi9jaGFsbGVuZ2VzL3NpbXBseXNvY2lhbCJ9