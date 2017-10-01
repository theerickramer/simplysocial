'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeStore = exports.reducer = exports.post = exports.like = exports.initState = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initState = exports.initState = {
  user: {
    id: 1,
    avatar: '/static/images/user-avatar.png',
    name: 'Kaitlyn Smith',
    blurb: 'Composer & Modular Synthesist',
    website: 'www.kaitlynaureliasmith.com',
    following: '3',
    followers: '1000000'
  },
  posts: [{
    id: 1,
    userId: 1,
    avatar: '/static/images/user-avatar.png',
    name: 'Kaitlyn Smith',
    text: 'Wow wow wow Wow wow wow Wow wow so so so so so so so so cool <a href="http://google.com">http://google.com</a>',
    time: '7hr',
    liked: false,
    more: true
  }, {
    id: 2,
    avatar: '/static/images/avatar-2.png',
    name: 'Eliane Radigue',
    text: 'Beautiful',
    time: '8hr',
    liked: false,
    more: false,
    image: '/static/images/photo.png'
  }, {
    id: 3,
    avatar: '/static/images/avatar-3.png',
    name: 'Suzanne Ciani',
    text: 'OMG I <3 movies',
    time: '9hr',
    liked: false,
    more: false,
    image: '/static/images/video.png'
  }]
};

var like = exports.like = function like(id) {
  return {
    type: 'LIKE',
    id: id
  };
};

var post = exports.post = function post(_ref) {
  var id = _ref.id,
      avatar = _ref.avatar,
      name = _ref.name,
      text = _ref.text,
      time = _ref.time,
      more = _ref.more,
      image = _ref.image,
      liked = _ref.liked;
  return {
    type: 'POST',
    payload: { id: id, avatar: avatar, name: name, text: text, time: time, more: more, image: image, liked: liked }
  };
};

var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  var posts = [].concat((0, _toConsumableArray3.default)(state.posts));
  switch (action.type) {
    case 'LIKE':
      var postsCopy = posts.map(function (post) {
        if (post.id === action.id) {
          post.liked = !post.liked;
          return post;
        } else {
          return post;
        }
      });
      return (0, _extends3.default)({}, state, { posts: posts });
    case 'POST':
      var _action$payload = action.payload,
          id = _action$payload.id,
          avatar = _action$payload.avatar,
          name = _action$payload.name,
          text = _action$payload.text,
          time = _action$payload.time,
          more = _action$payload.more,
          image = _action$payload.image,
          liked = _action$payload.liked;

      posts.unshift({ id: id, avatar: avatar, name: name, text: text, time: time, more: more, image: image, liked: liked });
      return (0, _extends3.default)({}, state, { posts: posts });
    default:
      return state;
  }
};

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (if any)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/
var makeStore = exports.makeStore = function makeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var options = arguments[1];

  return (0, _redux.createStore)(reducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4L3N0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rIiwiaW5pdFN0YXRlIiwidXNlciIsImlkIiwiYXZhdGFyIiwibmFtZSIsImJsdXJiIiwid2Vic2l0ZSIsImZvbGxvd2luZyIsImZvbGxvd2VycyIsInBvc3RzIiwidXNlcklkIiwidGV4dCIsInRpbWUiLCJsaWtlZCIsIm1vcmUiLCJpbWFnZSIsImxpa2UiLCJ0eXBlIiwicG9zdCIsInBheWxvYWQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwb3N0c0NvcHkiLCJtYXAiLCJ1bnNoaWZ0IiwibWFrZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFhOztBQUN0QixBQUFTOztBQUNULEFBQU8sQUFFUDs7Ozs7O0FBQU8sSUFBTTs7UUFDTCxBQUNBLEFBQ0o7WUFGSSxBQUVJLEFBQ1I7VUFISSxBQUdFLEFBQ047V0FKSSxBQUlHLEFBQ1A7YUFMSSxBQUtLLEFBQ1Q7ZUFOSSxBQU1PLEFBQ1g7ZUFScUIsQUFDakIsQUFPTyxBQUViO0FBVE0sQUFDSjs7UUFTQSxBQUNNLEFBQ0o7WUFGRixBQUVVLEFBQ1I7WUFIRixBQUdVLEFBQ1I7VUFKRixBQUlRLEFBQ047VUFMRixBQU1JLEFBQ0Y7VUFQRixBQU9RLEFBQ047V0FSRixBQVFTLEFBQ1A7VUFWRyxBQUNMLEFBU1E7QUFUUixBQUNFLEdBRkc7UUFZTCxBQUNNLEFBQ0o7WUFGRixBQUVVLEFBQ1I7VUFIRixBQUdRLEFBQ047VUFKRixBQUlRLEFBQ047VUFMRixBQUtRLEFBQ047V0FORixBQU1TLEFBQ1A7VUFQRixBQU9RLEFBQ047V0FwQkcsQUFZTCxBQVFTO0FBUlQsQUFDRTtRQVNGLEFBQ00sQUFDSjtZQUZGLEFBRVUsQUFDUjtVQUhGLEFBR1EsQUFDTjtVQUpGLEFBSVEsQUFDTjtVQUxGLEFBS1EsQUFDTjtXQU5GLEFBTVMsQUFDUDtVQVBGLEFBT1EsQUFDTjtXQXhDQyxBQUFrQixBQVVoQixBQXNCTCxBQVFTLEFBS2I7QUFiSSxBQUNFO0FBakNtQixBQUN2Qjs7QUE0Q0ssSUFBTSxzQkFBTyxTQUFQLEFBQU8sU0FBQTs7VUFBTyxBQUNuQixBQUNOO1FBRmtCLEFBQU8sQUFFckI7QUFGcUIsQUFDekI7QUFESyxBQUtQOztBQUFPLElBQU0sc0JBQU8sU0FBUCxBQUFPLFdBQUE7TUFBQSxBQUFFLFVBQUYsQUFBRTtNQUFGLEFBQU0sY0FBTixBQUFNO01BQU4sQUFBYyxZQUFkLEFBQWM7TUFBZCxBQUFvQixZQUFwQixBQUFvQjtNQUFwQixBQUEwQixZQUExQixBQUEwQjtNQUExQixBQUFnQyxZQUFoQyxBQUFnQztNQUFoQyxBQUFzQyxhQUF0QyxBQUFzQztNQUF0QyxBQUE2QyxhQUE3QyxBQUE2Qzs7VUFBYSxBQUN0RSxBQUNOO2FBQVMsRUFBRSxJQUFGLElBQU0sUUFBTixRQUFjLE1BQWQsTUFBb0IsTUFBcEIsTUFBMEIsTUFBMUIsTUFBZ0MsTUFBaEMsTUFBc0MsT0FBdEMsT0FBNkMsT0FGcEMsQUFBMEQsQUFFbkU7QUFGbUUsQUFDNUU7QUFESyxBQUtQOztBQUFPLElBQU0sNEJBQVUsU0FBVixBQUFVLFVBQStCO01BQTlCLEFBQThCLDRFQUF0QixBQUFzQjtNQUFYLEFBQVcsbUJBQ3BEOztNQUFNLG1EQUFZLE1BQWxCLEFBQU0sQUFBa0IsQUFDeEI7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFBLEFBQUssQUFDSDtVQUFNLGtCQUFZLEFBQU0sSUFBSSxnQkFBUSxBQUNsQztZQUFJLEtBQUEsQUFBSyxPQUFPLE9BQWhCLEFBQXVCLElBQUksQUFDekI7ZUFBQSxBQUFLLFFBQVEsQ0FBQyxLQUFkLEFBQW1CLEFBQ25CO2lCQUFBLEFBQU8sQUFDUjtBQUhELGVBR08sQUFDTDtpQkFBQSxBQUFPLEFBQ1I7QUFDRjtBQVBELEFBQWtCLEFBUWxCLE9BUmtCO3dDQVFsQixBQUFZLFNBQU8sT0FBbkIsQUFDRjtTQUFBLEFBQUs7NEJBQzBELE9BRC9ELEFBQ3NFO1VBRHRFLEFBQ1UscUJBRFYsQUFDVTtVQURWLEFBQ2MseUJBRGQsQUFDYztVQURkLEFBQ3NCLHVCQUR0QixBQUNzQjtVQUR0QixBQUM0Qix1QkFENUIsQUFDNEI7VUFENUIsQUFDa0MsdUJBRGxDLEFBQ2tDO1VBRGxDLEFBQ3dDLHVCQUR4QyxBQUN3QztVQUR4QyxBQUM4Qyx3QkFEOUMsQUFDOEM7VUFEOUMsQUFDcUQsd0JBRHJELEFBQ3FELEFBQ25EOztZQUFBLEFBQU0sUUFBUSxFQUFFLElBQUYsSUFBTSxRQUFOLFFBQWMsTUFBZCxNQUFvQixNQUFwQixNQUEwQixNQUExQixNQUFnQyxNQUFoQyxNQUFzQyxPQUF0QyxPQUE2QyxPQUEzRCxBQUFjLEFBQ2Q7d0NBQUEsQUFBWSxTQUFPLE9BQW5CLEFBQ0Y7QUFDRTthQWhCSixBQWdCSSxBQUFPLEFBRVo7O0FBcEJNOztBQXNCUCxBQU9BOzs7Ozs7O0FBQU8sSUFBTSxnQ0FBWSxTQUFaLEFBQVksWUFBdUM7TUFBdEMsQUFBc0MsbUZBQXZCLEFBQXVCO01BQVosQUFBWSxvQkFDOUQ7O1NBQU8sd0JBQUEsQUFDTCxTQURLLEFBRUwsY0FDQSxpREFIRixBQUFPLEFBR0wsQUFBb0IsQUFBZ0IsQUFFdkM7QUFOTSIsImZpbGUiOiJzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpYy9kZXYvY2hhbGxlbmdlcy9zaW1wbHlzb2NpYWwifQ==