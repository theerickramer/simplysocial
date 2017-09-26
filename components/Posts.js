import React, { Component } from 'react';
import Post from './Post'
import { colors } from '../static/css-constants';

export default class Posts extends Component {
  state = {
    posts: [
      { id: 1, name: 'Jenny Tran', text: 'Wow wow wow so cool <a href="http://google.com">http://google.com</a>', time: '7hr', liked: false }
    ]
  };
  mapPosts() {
    return this.state.posts.map(post => {
      return (
        <Post { ...post } />
      );
    });
  }
  render() {
    return (
      <main>
        <ul className="posts">{this.mapPosts()}</ul>
        <style jsx>{`
          .posts {
            padding-top: 50px;
            margin: 0 auto;
            width: 575px;
          }
        `}</style>
      </main>
    );
  }
}
