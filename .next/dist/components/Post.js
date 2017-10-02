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
      if (!this.props.liked && nextProps.liked) {
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
      return _react2.default.createElement(_animateComponents.FadeIn, { duration: '.5s', timingFunction: 'ease-in', __source: {
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
        css: '.post[data-jsx="475720477"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:30px;border:1px solid ' + _cssConstants.colors.lightGrey + ';border-radius:5px}.post__content-container[data-jsx="475720477"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;padding:25px;color:' + _cssConstants.colors.medGrey + '}.post__content[data-jsx="475720477"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-left:20px}.post__avatar[data-jsx="475720477"],.post__content[data-jsx="475720477"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex}.post__avatar[data-jsx="475720477"]{height:40px;width:40px}.post__name[data-jsx="475720477"]{margin-bottom:10px;color:' + _cssConstants.colors.medGrey + '}.post__text[data-jsx="475720477"]{max-width:420px;line-height:25px;color:' + _cssConstants.colors.medLightGrey + '}.post__options[data-jsx="475720477"]{position:absolute;top:25px;right:25px}.post__reply[data-jsx="475720477"],.post__like[data-jsx="475720477"],.post__time[data-jsx="475720477"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin-left:20px;color:' + _cssConstants.colors.lightGrey + '}.post__expand[data-jsx="475720477"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:25px}.post__expand[data-jsx="475720477"] span[data-jsx="475720477"]{margin-right:10px;color:' + _cssConstants.colors.lightGrey + ';font-size:10px}.post__expand[data-jsx="475720477"] img[data-jsx="475720477"]{opacity:0.4}.post__image-container[data-jsx="475720477"]{position:relative;width:100%}.post__image[data-jsx="475720477"]{margin-bottom:-5px;margin-left:-1px;width:575px;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.heart.icon[data-jsx="475720477"]{color:' + _cssConstants.colors.lightGrey + ';width:9px;height:9px;border-left:solid 1px currentColor;border-bottom:solid 1px currentColor;-webkit-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.heart.icon[data-jsx="475720477"]:before{content:\'\';position:absolute;top:-5px;left:-1px;width:8px;height:5px;border-radius:5px 5px 0 0;border-top:solid 1px currentColor;border-left:solid 1px currentColor;border-right:solid 1px currentColor}.heart.icon[data-jsx="475720477"]:after{content:\'\';position:absolute;top:0px;left:8px;width:5px;height:8px;border-radius:0 5px 5px 0;border-top:solid 1px currentColor;border-right:solid 1px currentColor;border-bottom:solid 1px currentColor}@-webkit-keyframes poofdatajsx475720477{0%{box-shadow:0 0 rgba(255,0,0,1)}100%{box-shadow:20px -20px 5px rgba(255,0,0,0)}}@keyframes poofdatajsx475720477{0%{box-shadow:0 0 rgba(255,0,0,1)}100%{box-shadow:20px -20px 5px rgba(255,0,0,0)}}.heart.icon.selected[data-jsx="475720477"],.heart.icon.selected[data-jsx="475720477"]:before,.heart.icon.selected[data-jsx="475720477"]:after{background-color:red}.heart.icon.poof[data-jsx="475720477"],.heart.icon.poof[data-jsx="475720477"]:before,.heart.icon.poof[data-jsx="475720477"]:after{-webkit-animation:poofdatajsx475720477 1s;animation:poofdatajsx475720477 1s}.heart.icon[data-jsx="475720477"]:hover,.heart.icon.selected[data-jsx="475720477"]{border-bottom:1px solid red;border-left:1px solid red}.heart.icon[data-jsx="475720477"]:hover[data-jsx="475720477"]:before,.heart.icon.selected[data-jsx="475720477"]:before{border-top:1px solid red;border-right:1px solid red;border-left:1px solid red}.heart.icon[data-jsx="475720477"]:hover[data-jsx="475720477"]:after,.heart.icon.selected[data-jsx="475720477"]:after{border-top:1px solid red;border-bottom:1px solid red;border-right:1px solid red}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRnNCLEFBRzRCLEFBT0EsQUFPQSxBQU1PLEFBR1IsQUFJTyxBQUlILEFBS0UsQUFPRSxBQUtQLEFBS0ssQUFLTixBQUdNLEFBSUMsQUFPZ0IsQUFVeEIsQUFhQSxBQWN5QixBQUlXLEFBTzFCLEFBTUgsQUFLVSxBQU1ILEFBT0EsV0E3RFAsQUFhQSxDQXhFUCxBQW1DYixJQTNCbUIsRUFLUixBQWlCMEIsQUFReEIsQ0FsQ3dCLEFBc0NsQixFQXVEbkIsRUFoR0EsRUFpSDZCLEFBT0MsRUEzR2pCLENBOEZlLENBckU1QixBQXFCVyxBQWFELEVBYVIsRUE3RW1DLEVBd0N6QixDQU5FLENBK0JILENBM0RYLEFBOENZLElBNkJWLEdBeENXLENBeUJELEVBL0JvQixBQWtCcEIsSUFxRGdCLENBcEZYLEFBMkZZLENBckg3QixBQXdHQSxFQTFEcUMsQUF5QnhCLEVBYkEsU0FjZSxDQW5FNUIsQUFzQkEsQ0FnQzRCLEtBdkZKLEFBT0MsQUFPRCxBQWtDSCxFQThFckIsRUExRGlDLEFBdUVqQyxFQU9BLFdBdkV1QyxFQTBCSCxFQWJBLE9BcEVwQyxBQXVCbUIsT0EwQm5CLFVBekJxQyxRQTBEQyxDQTFCSCxDQWFFLHVCQXhGaEIsQUFjRCxFQThCcEIsT0FnQzJCLEVBMEJZLENBYkQsR0F6Q3BCLEdBakNsQixDQWRnRCxZQU01QixBQTBDcEIsaUJBeUNBLEFBYUEsQ0EvRmUsYUFDc0IsR0FQakIsa0JBQ3BCLGFBMEVBLENBbkVBIiwiZmlsZSI6ImNvbXBvbmVudHMvUG9zdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9zaW1wbHlzb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi9zdGF0aWMvY3NzLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgbGlrZSB9IGZyb20gJy4uL3JlZHV4L3N0b3JlJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IEZhZGVJbiB9IGZyb20gJ2FuaW1hdGUtY29tcG9uZW50cyc7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHtcbiAgICBsaWtlOiBiaW5kQWN0aW9uQ3JlYXRvcnMobGlrZSwgZGlzcGF0Y2gpXG4gIH07XG59O1xuXG5jbGFzcyBQb3N0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IGp1c3RMaWtlZDogZmFsc2UgfTtcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMubGlrZWQgJiYgbmV4dFByb3BzLmxpa2VkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsganVzdExpa2VkOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuICBzZWxlY3RlZENsYXNzKCkge1xuICAgIGNvbnN0IHsgbGlrZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIGNsYXNzbmFtZXMoe1xuICAgICAgJ3Bvc3RfX2xpa2UgaGVhcnQgaWNvbic6IHRydWUsXG4gICAgICBzZWxlY3RlZDogbGlrZWQsXG4gICAgICBwb29mOiB0aGlzLnN0YXRlLmp1c3RMaWtlZFxuICAgIH0pO1xuICB9XG4gIF9vbkNsaWNrKCkge1xuICAgIGNvbnN0IHsgbGlrZSwgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgbGlrZShpZCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgYXZhdGFyLFxuICAgICAgbmFtZSxcbiAgICAgIHRleHQsXG4gICAgICB0aW1lLFxuICAgICAgbW9yZSxcbiAgICAgIGltYWdlLFxuICAgICAgbGlrZWQsXG4gICAgICBsaWtlXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgbm93ID0gbW9tZW50KCk7XG4gICAgY29uc3QgdGltZVRvTW9tZW50ID0gbW9tZW50KHRpbWUpO1xuICAgIGNvbnN0IHRpbWVEaWZmID0gdGltZVRvTW9tZW50LnRvKG5vdywgdHJ1ZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGYWRlSW4gZHVyYXRpb249XCIuNXNcIiB0aW1pbmdGdW5jdGlvbj1cImVhc2UtaW5cIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvc3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvc3RfX2F2YXRhclwiIHNyYz17YXZhdGFyfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwb3N0X19uYW1lXCI+e25hbWV9PC9oNT5cbiAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0X190ZXh0XCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRleHQgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge21vcmUgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19leHRyYVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19leHBhbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+RXhwYW5kPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2Rvd24tYXJyb3cucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19vcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zdF9fcmVwbHlcIlxuICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvcmVwbHktYXJyb3cucG5nXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5zZWxlY3RlZENsYXNzKCl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICByZWY9XCJoZWFydFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X190aW1lXCI+e3RpbWVEaWZmfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7aW1hZ2UgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2ltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvc3RfX2ltYWdlXCIgc3JjPXtpbWFnZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnBvc3Qge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5saWdodEdyZXl9O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9zdF9fY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubWVkR3JleX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9zdF9fY29udGVudCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3N0X19hdmF0YXIsXG4gICAgICAgICAgICAucG9zdF9fY29udGVudCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvc3RfX2F2YXRhciB7XG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9zdF9fbmFtZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5tZWRHcmV5fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3N0X190ZXh0IHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MjBweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5tZWRMaWdodEdyZXl9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvc3RfX29wdGlvbnMge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9zdF9fcmVwbHksXG4gICAgICAgICAgICAucG9zdF9fbGlrZSxcbiAgICAgICAgICAgIC5wb3N0X190aW1lIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3N0X19leHBhbmQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvc3RfX2V4cGFuZCBzcGFuIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvc3RfX2V4cGFuZCBpbWcge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9zdF9faW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3N0X19pbWFnZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC01cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgICAgICAgICAgICB3aWR0aDogNTc1cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWFydC5pY29uIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmxpZ2h0R3JleX07XG4gICAgICAgICAgICAgIHdpZHRoOiA5cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogOXB4O1xuICAgICAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhcnQuaWNvbjpiZWZvcmUge1xuICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYXJ0Lmljb246YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgbGVmdDogOHB4O1xuICAgICAgICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQGtleWZyYW1lcyBwb29mIHtcbiAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCByZ2JhKDI1NSwgMCwgMCwgMSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAyMHB4IC0yMHB4IDVweCByZ2JhKDI1NSwgMCwgMCwgMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYXJ0Lmljb24uc2VsZWN0ZWQsXG4gICAgICAgICAgICAuaGVhcnQuaWNvbi5zZWxlY3RlZDpiZWZvcmUsXG4gICAgICAgICAgICAuaGVhcnQuaWNvbi5zZWxlY3RlZDphZnRlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYXJ0Lmljb24ucG9vZixcbiAgICAgICAgICAgIC5oZWFydC5pY29uLnBvb2Y6YmVmb3JlLFxuICAgICAgICAgICAgLmhlYXJ0Lmljb24ucG9vZjphZnRlciB7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogcG9vZiAxcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYXJ0Lmljb246aG92ZXIsXG4gICAgICAgICAgICAuaGVhcnQuaWNvbi5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhcnQuaWNvbjpob3ZlcjpiZWZvcmUsXG4gICAgICAgICAgICAuaGVhcnQuaWNvbi5zZWxlY3RlZDpiZWZvcmUge1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhcnQuaWNvbjpob3ZlcjphZnRlcixcbiAgICAgICAgICAgIC5oZWFydC5pY29uLnNlbGVjdGVkOmFmdGVyIHtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvRmFkZUluPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gc3RhdGUsIG1hcERpc3BhdGNoVG9Qcm9wcykoUG9zdCk7XG4iXX0= */\n/*@ sourceURL=components/Post.js */'
      })));
    }
  }]);

  return Post;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
}, mapDispatchToProps)(Post);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiY29sb3JzIiwiY29ubmVjdCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImxpa2UiLCJjbGFzc25hbWVzIiwiTGluayIsIm1vbWVudCIsIkZhZGVJbiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiUG9zdCIsInN0YXRlIiwianVzdExpa2VkIiwibmV4dFByb3BzIiwicHJvcHMiLCJsaWtlZCIsInNldFN0YXRlIiwic2VsZWN0ZWQiLCJwb29mIiwiaWQiLCJhdmF0YXIiLCJuYW1lIiwidGV4dCIsInRpbWUiLCJtb3JlIiwiaW1hZ2UiLCJub3ciLCJ0aW1lVG9Nb21lbnQiLCJ0aW1lRGlmZiIsInRvIiwiX19odG1sIiwic2VsZWN0ZWRDbGFzcyIsIl9vbkNsaWNrIiwiYmluZCIsImxpZ2h0R3JleSIsIm1lZEdyZXkiLCJtZWRMaWdodEdyZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOzs7Ozs7O0FBRVQsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsNkJBQVksQUFDckM7O1VBQ1EsQUFBbUIsNENBRDNCLEFBQU8sQUFDQyxBQUF5QixBQUVsQztBQUhRLEFBQ0w7QUFGSjs7SSxBQU1NOzs7Ozs7Ozs7Ozs7Ozt3TUFDSixBLFFBQVEsRUFBRSxXLEFBQUYsQUFBYTs7Ozs7OEMsQUFDSyxXQUFXLEFBQ25DO1VBQUksQ0FBQyxLQUFBLEFBQUssTUFBTixBQUFZLFNBQVMsVUFBekIsQUFBbUMsT0FBTyxBQUN4QzthQUFBLEFBQUssU0FBUyxFQUFFLFdBQWhCLEFBQWMsQUFBYSxBQUM1QjtBQUNGOzs7O29DQUNlO1VBQUEsQUFDTixRQUFVLEtBREosQUFDUyxNQURULEFBQ04sQUFDUjs7O2lDQUFrQixBQUNTLEFBQ3pCO2tCQUZnQixBQUVOLEFBQ1Y7Y0FBTSxLQUFBLEFBQUssTUFIYixBQUFPLEFBQVcsQUFHQyxBQUVwQjtBQUxtQixBQUNoQixPQURLOzs7OytCQU1FO21CQUNZLEtBRFosQUFDaUI7VUFEakIsQUFDRCxjQURDLEFBQ0Q7VUFEQyxBQUNLLFlBREwsQUFDSyxBQUNkOztXQUFBLEFBQUssQUFDTjs7Ozs2QkFDUTtvQkFXSCxLQVhHLEFBV0U7VUFYRixBQUVMLGFBRkssQUFFTDtVQUZLLEFBR0wsaUJBSEssQUFHTDtVQUhLLEFBSUwsZUFKSyxBQUlMO1VBSkssQUFLTCxlQUxLLEFBS0w7VUFMSyxBQU1MLGVBTkssQUFNTDtVQU5LLEFBT0wsZUFQSyxBQU9MO1VBUEssQUFRTCxnQkFSSyxBQVFMO1VBUkssQUFTTCxnQkFUSyxBQVNMO1VBVEssQUFVTCxlQVZLLEFBVUwsQUFFRjs7VUFBTSxNQUFOLEFBQVksQUFDWjtVQUFNLGVBQWUsc0JBQXJCLEFBQXFCLEFBQU8sQUFDNUI7VUFBTSxXQUFXLGFBQUEsQUFBYSxHQUFiLEFBQWdCLEtBQWpDLEFBQWlCLEFBQXFCLEFBQ3RDOzZCQUNFLEFBQUMsMkNBQU8sVUFBUixBQUFpQixPQUFNLGdCQUF2QixBQUFzQztvQkFBdEM7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYyxvQkFBZDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWUsdUNBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtnREFDTyxXQUFMLEFBQWUsZ0JBQWUsS0FBOUIsQUFBbUMsb0JBQW5DOztvQkFBQTtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxjQUFBLFNBQUssV0FBTCxBQUFlLDZCQUFmOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYywwQkFBZDs7b0JBQUE7c0JBQUEsQUFBNEI7QUFBNUI7U0FERixBQUNFLEFBQ0E7bUJBQUEsQUFDWSxBQUNWO2lDQUF5QixFQUFFLFFBRjdCLEFBRTJCLEFBQVU7b0JBRnJDOztvQkFBQTtzQkFGRixBQUVFLEFBSUM7QUFKRDtBQUNFLGlDQUlBLGNBQUEsU0FBSyxXQUFMLEFBQWUsMkJBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWUsNEJBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBO29CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esa0RBQUssS0FBTCxBQUFTLDZDQUFUOztvQkFBQTtzQkFKTCxBQUNDLEFBQ0UsQUFFRTtBQUFBO2FBVlIsQUFhTSxBQUNKLHNCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWUsNkJBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjs7bUJBQ0UsQUFDWSxBQUNWO2FBRkYsQUFFTTtvQkFGTjs7b0JBQUE7c0JBREYsQUFDRSxBQUlBO0FBSkE7QUFDRTttQkFJVyxLQURiLEFBQ2EsQUFBSyxBQUNoQjtpQkFBUyxLQUFBLEFBQUssU0FBTCxBQUFjLEtBRnpCLEFBRVcsQUFBbUIsQUFDNUI7YUFIRixBQUdNO29CQUhOOztvQkFBQTtzQkFMRixBQUtFLEFBS0E7QUFMQTtBQUNFLDBCQUlGLGNBQUEsVUFBTSxXQUFOLEFBQWdCLDBCQUFoQjs7b0JBQUE7c0JBQUEsQUFBOEI7QUFBOUI7U0EzQlIsQUFDRSxBQUVFLEFBY0UsQUFVRSxBQUlMLHNDQUNDLGNBQUEsU0FBSyxXQUFMLEFBQWUscUNBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLHlDQUNPLFdBQUwsQUFBZSxlQUFjLEtBQTdCLEFBQWtDLG1CQUFsQzs7b0JBQUE7c0JBRkgsQUFDQyxBQUNFO0FBQUE7WUFqQ04sQUFtQ007aUJBbkNOOzBPQXJEbU4scUJBQU8sQUFxRDFOLCtTQXJEb2dCLHFCQUFPLEFBcUQzZ0Isb2dCQXJEMGdDLHFCQUFPLEFBcURqaEMseUZBckRxbUMscUJBQU8sQUFxRDVtQyxvVUFyRDI2QyxxQkFBTyxBQXFEbDdDLG9VQXJEaXZELHFCQUFPLEFBcUR4dkQsNldBckRnbUUscUJBQU8sQUFxRHZtRSxZQUZKLEFBQ0UsQUFDRSxBQStMTDtBQS9MSzs7Ozs7QUFwQ1csQUFxT25CLEE7OzJDQUF1QixpQkFBQTtTQUFBLEFBQVM7QUFBakIsQ0FBQSxFQUFBLEFBQXdCLG9CQUF2QyxBQUFlLEFBQTRDIiwiZmlsZSI6IlBvc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VyaWMvZGV2L2NoYWxsZW5nZXMvc2ltcGx5c29jaWFsIn0=