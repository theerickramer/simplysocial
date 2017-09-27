import React, { Component } from 'react';
import Post from './Post'
import { colors } from '../static/css-constants';

export default class Posts extends Component {
  state = {
    posts: [
      { id: 1, avatar: '/static/images/user-avatar.png', name: 'Suzanne Ciani', text: 'Wow wow wow Wow wow wow Wow wow so so so so so so so so cool <a href="http://google.com">http://google.com</a>', time: '7hr', liked: false, more: true },
      { id: 2, avatar: '/static/images/user-avatar.png', name: 'Eliane Radigue', text: 'Beautiful', time: '8hr', liked: false, more: false, image: '/static/images/photo.png' }
    ]
  };
  mapPosts() {
    return this.state.posts.map(post => {
      return (
        <Post { ...post } key={post.id}/>
      );
    });
  }
  render() {
    return (
      <main>
        <ul className="posts">{this.mapPosts()}</ul>
        <div className="load-more">LOAD MORE</div>
        <style jsx>{`
          main {
            padding-bottom: 120px;
            border-bottom: 1px solid ${colors.lightGrey};
          }
          .posts {
            padding: 50px 0 60px 0;
            margin: 0 auto;
            width: 575px;
          }
          .load-more {
            color: ${colors.lightGrey};
            font-size: 10px;
            font-weight: 700;
            text-align: center;
          }
        `}</style>
      </main>
    );
  }
}
