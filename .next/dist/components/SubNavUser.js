'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cssConstants = require('../static/css-constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/eric/dev/challenges/simplysocial/components/SubNavUser.js';

exports.default = function (_ref) {
  var name = _ref.name,
      followers = _ref.followers,
      following = _ref.following;

  var firstName = name.split(' ')[0].toUpperCase();
  return _react2.default.createElement('nav', { className: 'sub-nav', 'data-jsx': 1190652630,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('ul', { className: 'sub-nav__items', 'data-jsx': 1190652630,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('li', { className: 'sub-nav__item sub-nav__item--active', 'data-jsx': 1190652630,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, firstName + '\'S FEED'), _react2.default.createElement('li', { className: 'sub-nav__item', 'data-jsx': 1190652630,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, followers, ' FOLLOWERS'), _react2.default.createElement('li', { className: 'sub-nav__item', 'data-jsx': 1190652630,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, following, ' FOLLOWING')), _react2.default.createElement(_style2.default, {
    styleId: 1190652630,
    css: '.sub-nav[data-jsx="1190652630"]{position:relative;margin:0 auto;margin-top:-47px;width:575px;font-family:' + _cssConstants.fonts.openSans + ';color:' + _cssConstants.colors.white + ';font-size:10px;font-weight:700}.sub-nav__items[data-jsx="1190652630"]{text-align:center}.sub-nav__item--disclosures[data-jsx="1190652630"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:absolute;top:30%;right:0;border:none}.sub-nav__item[data-jsx="1190652630"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin-right:35px;padding:15px 10px;opacity:0.5}.sub-nav__item--active[data-jsx="1190652630"]{opacity:1;border-bottom:5px solid ' + _cssConstants.colors.turquoise + '}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3ViTmF2VXNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZa0IsQUFHNkIsQUFVQSxBQUdMLEFBU08sQUFNVixVQUMyQyxRQTVCdkMsQUFVaEIsY0FUbUIsaUJBQ0wsWUFDNkIsRUEwQjNDLFdBaEJxQiw0QkFUZ0IsQUFrQmpCLGtCQUNBLGlCQWxCSCxDQW1CSCxLQVZhLE9BVzNCLEVBbkJrQixnQkFDbEIsd0VBUW9CLGtCQUNWLFFBQ0EsUUFDSSxZQUNkIiwiZmlsZSI6ImNvbXBvbmVudHMvU3ViTmF2VXNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9zaW1wbHlzb2NpYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3JzLCBmb250cyB9IGZyb20gJy4uL3N0YXRpYy9jc3MtY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgbmFtZSwgZm9sbG93ZXJzLCBmb2xsb3dpbmcgfSkgPT4ge1xuICBjb25zdCBmaXJzdE5hbWUgPSBuYW1lLnNwbGl0KCcgJylbMF0udG9VcHBlckNhc2UoKTtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cInN1Yi1uYXZcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbmF2X19pdGVtc1wiPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwic3ViLW5hdl9faXRlbSBzdWItbmF2X19pdGVtLS1hY3RpdmVcIj57YCR7Zmlyc3ROYW1lfSdTIEZFRURgfTwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdWItbmF2X19pdGVtXCI+e2ZvbGxvd2Vyc30gRk9MTE9XRVJTPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInN1Yi1uYXZfX2l0ZW1cIj57Zm9sbG93aW5nfSBGT0xMT1dJTkc8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnN1Yi1uYXYge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNDdweDtcbiAgICAgICAgICB3aWR0aDogNTc1cHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udHMub3BlblNhbnN9O1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy53aGl0ZX07XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICAgICAgLnN1Yi1uYXZfX2l0ZW1zIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnN1Yi1uYXZfX2l0ZW0tLWRpc2Nsb3N1cmVzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAzMCU7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5zdWItbmF2X19pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XG4gICAgICAgICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgfVxuICAgICAgICAuc3ViLW5hdl9faXRlbS0tYWN0aXZlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAke2NvbG9ycy50dXJxdW9pc2V9O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=components/SubNavUser.js */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3ViTmF2VXNlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbG9ycyIsImZvbnRzIiwibmFtZSIsImZvbGxvd2VycyIsImZvbGxvd2luZyIsImZpcnN0TmFtZSIsInNwbGl0IiwidG9VcHBlckNhc2UiLCJvcGVuU2FucyIsIndoaXRlIiwidHVycXVvaXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUSxBQUVqQjs7Ozs7O2tCQUFlLGdCQUFvQztNQUFqQyxBQUFpQyxZQUFqQyxBQUFpQztNQUEzQixBQUEyQixpQkFBM0IsQUFBMkI7TUFBaEIsQUFBZ0IsaUJBQWhCLEFBQWdCLEFBQ2pEOztNQUFNLFlBQVksS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLEdBQWxDLEFBQWtCLEFBQW1CLEFBQ3JDO3lCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWUsdUJBQWY7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWMsOEJBQWQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFFBQUksV0FBSixBQUFjLG1EQUFkOztnQkFBQTtrQkFBQSxBQUF3RDtBQUF4RDtLQUFBLFlBREYsQUFDRSxBQUNBLDZCQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWMsNkJBQWQ7O2dCQUFBO2tCQUFBLEFBQStCO0FBQS9CO0tBQUEsV0FGRixBQUVFLEFBQ0EsK0JBQUEsY0FBQSxRQUFJLFdBQUosQUFBYyw2QkFBZDs7Z0JBQUE7a0JBQUEsQUFBK0I7QUFBL0I7S0FBQSxXQUpKLEFBQ0UsQUFHRTthQUpKO3VIQU53RyxvQkFBTSxBQU05Ryx1QkFOZ0kscUJBQU8sQUFNdkksbXNCQU5xMEIscUJBQU8sQUFNNTBCLFlBREYsQUFDRSxBQTBDSDtBQTFDRztBQUhKIiwiZmlsZSI6IlN1Yk5hdlVzZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VyaWMvZGV2L2NoYWxsZW5nZXMvc2ltcGx5c29jaWFsIn0=