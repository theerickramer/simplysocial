import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import withRedux from 'next-redux-wrapper';
import Link from 'next/link';

const initState = {
  user: 'Kaitlyn Smith',
  posts: [{ id: 1, user: 'Joe', like: false }]
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LIKE':
      const posts = state.posts;
      const post = posts.find(post => (post.id = action.payload));
      const index = posts.indexOf(post);
      post.like = !post.like;
      posts[index] = post;
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
const makeStore = (initialState = initState, options) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

class App extends Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    // store.dispatch({type: 'LIKE', payload: 1}); // component will be able to read from store's state when rendered
    return; // {custom: 'custom'}; you can pass some custom props to component from here
  }
  like(e) {
    this.props.dispatch({ type: 'LIKE', payload: 1 }); // component will be able to read from store's state when rendered
  }
  mapPosts() {
    const { posts } = this.props;
    return posts.map(post => (
      <div>
        <h1>{post.like ? `loved` : `hated`}</h1>
        <Link href="/">
          <a><button onClick={this.like.bind(this)}>{post.like ? `hate` : `love`}</button></a>
        </Link>
      </div>
    ));
  }
  render() {
    return (
      <div>
        <div>{this.mapPosts()}</div>
      </div>
    );
  }
}

App = withRedux(makeStore, state => ({ posts: state.posts }))(App);

export default App;
