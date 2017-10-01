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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var now = (0, _moment2.default)();
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
    time: now.subtract(30, 'seconds').format('LLL'),
    liked: false,
    more: true
  }, {
    id: 2,
    userId: 2,
    avatar: '/static/images/avatar-2.png',
    name: 'Eliane Radigue',
    text: 'Beautiful',
    time: now.subtract(2, 'minutes').format('LLL'),
    liked: false,
    more: false,
    image: '/static/images/photo.png'
  }, {
    id: 3,
    userId: 3,
    avatar: '/static/images/avatar-3.png',
    name: 'Suzanne Ciani',
    text: 'OMG I <3 movies',
    time: now.subtract(3, 'hours').format('LLL'),
    liked: false,
    more: false,
    image: '/static/images/video.png'
  }]
};

var like = exports.like = function like(id) {
  return {
    type: 'LIKED',
    id: id
  };
};

var post = exports.post = function post(_ref) {
  var userId = _ref.userId,
      avatar = _ref.avatar,
      name = _ref.name,
      text = _ref.text,
      time = _ref.time,
      more = _ref.more,
      image = _ref.image,
      liked = _ref.liked;
  return {
    type: 'POST',
    payload: { userId: userId, avatar: avatar, name: name, text: text, time: time, more: more, image: image, liked: liked }
  };
};

var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  var posts = [].concat((0, _toConsumableArray3.default)(state.posts));
  switch (action.type) {
    case 'LIKED':
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
      var id = state.posts.length + 1;
      var _action$payload = action.payload,
          userId = _action$payload.userId,
          avatar = _action$payload.avatar,
          name = _action$payload.name,
          text = _action$payload.text,
          time = _action$payload.time,
          more = _action$payload.more,
          image = _action$payload.image,
          liked = _action$payload.liked;

      posts.unshift({ id: id, userId: userId, avatar: avatar, name: name, text: text, time: time, more: more, image: image, liked: liked });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4L3N0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rIiwibW9tZW50Iiwibm93IiwiaW5pdFN0YXRlIiwidXNlciIsImlkIiwiYXZhdGFyIiwibmFtZSIsImJsdXJiIiwid2Vic2l0ZSIsImZvbGxvd2luZyIsImZvbGxvd2VycyIsInBvc3RzIiwidXNlcklkIiwidGV4dCIsInRpbWUiLCJzdWJ0cmFjdCIsImZvcm1hdCIsImxpa2VkIiwibW9yZSIsImltYWdlIiwibGlrZSIsInR5cGUiLCJwb3N0IiwicGF5bG9hZCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInBvc3RzQ29weSIsIm1hcCIsImxlbmd0aCIsInVuc2hpZnQiLCJtYWtlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQWE7O0FBQ3RCLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU87Ozs7OztBQUVQLElBQU0sTUFBTixBQUFZLEFBQ1o7QUFBTyxJQUFNOztRQUNMLEFBQ0EsQUFDSjtZQUZJLEFBRUksQUFDUjtVQUhJLEFBR0UsQUFDTjtXQUpJLEFBSUcsQUFDUDthQUxJLEFBS0ssQUFDVDtlQU5JLEFBTU8sQUFDWDtlQVJxQixBQUNqQixBQU9PLEFBRWI7QUFUTSxBQUNKOztRQVNBLEFBQ00sQUFDSjtZQUZGLEFBRVUsQUFDUjtZQUhGLEFBR1UsQUFDUjtVQUpGLEFBSVEsQUFDTjtVQUxGLEFBTUksQUFDRjtVQUFNLElBQUEsQUFBSSxTQUFKLEFBQWEsSUFBYixBQUFpQixXQUFqQixBQUE0QixPQVBwQyxBQU9RLEFBQW1DLEFBQ3pDO1dBUkYsQUFRUyxBQUNQO1VBVkcsQUFDTCxBQVNRO0FBVFIsQUFDRSxHQUZHO1FBWUwsQUFDTSxBQUNKO1lBRkYsQUFFVSxBQUNSO1lBSEYsQUFHVSxBQUNSO1VBSkYs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