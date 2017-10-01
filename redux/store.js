import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const initState = {
  user: {
    id: 1,    
    avatar: '/static/images/user-avatar.png',
    name: 'Kaitlyn Smith',
    blurb: 'Composer & Modular Synthesist',
    website: 'www.kaitlynaureliasmith.com',
    following: '3',
    followers: '1000000'
  },
  posts: [
    {
      id: 1,
      userId: 1,
      avatar: '/static/images/user-avatar.png',
      name: 'Kaitlyn Smith',
      text:
        'Wow wow wow Wow wow wow Wow wow so so so so so so so so cool <a href="http://google.com">http://google.com</a>',
      time: '7hr',
      liked: false,
      more: true
    },
    {
      id: 2,
      avatar: '/static/images/avatar-2.png',
      name: 'Eliane Radigue',
      text: 'Beautiful',
      time: '8hr',
      liked: false,
      more: false,
      image: '/static/images/photo.png'
    },
    {
      id: 3,
      avatar: '/static/images/avatar-3.png',
      name: 'Suzanne Ciani',
      text: 'OMG I <3 movies',
      time: '9hr',
      liked: false,
      more: false,
      image: '/static/images/video.png'
    }
  ]
};

export const like = id => ({
  type: 'LIKE',
  id: id
});

export const post = ({id, avatar, name, text, time, more, image, liked }) => ({
  type: 'POST',
  payload: { id, avatar, name, text, time, more, image, liked }
});

export const reducer = (state = initState, action) => {
  const posts = [...state.posts];
  switch (action.type) {
    case 'LIKE':
      const postsCopy = posts.map(post => {
        if (post.id === action.id) {
          post.liked = !post.liked;
          return post;
        } else {
          return post;
        }
      });
      return { ...state, posts };
    case 'POST':
      const { id, avatar, name, text, time, more, image, liked } = action.payload;
      posts.unshift({ id, avatar, name, text, time, more, image, liked });
      return { ...state, posts };
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
export const makeStore = (initialState = initState, options) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};
