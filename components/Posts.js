import React, { Component } from 'react';
import Post from './Post'
import { colors } from '../static/css-constants';

export default class Posts extends Component {
  mapPosts() {
    const { posts, user } = this.props;
    if (user) {
      return posts.filter(post => post.id === user || post.liked).map(post => {
        return (
          <Post { ...post } key={post.id}/>
        );
      });
    }
    return posts.map(post => {
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
