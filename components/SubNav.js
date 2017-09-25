import React, { Component } from 'react';
import { colors, fonts } from '../static/css-constants';

export default class SubNav extends Component {
  state = {};
  render() {
    return (
      <nav className="sub-nav">
        <ul className="sub-nav__items">
          <li className="sub-nav__item sub-nav__item--active">ALL POSTS</li>
          <li className="sub-nav__item">PHOTOS</li>
          <li className="sub-nav__item">VIDEOS</li>
        </ul>
        <style jsx>{`
          .sub-nav {
            margin: 0 auto;
            margin-top: -49px;
            width: 575px;
            font-family: ${fonts.openSans};
            color: ${colors.lightGrey};
            font-size: 10px;
            font-weight: 700;
          }
          .sub-nav__item {
            display: inline-flex;
            margin-right: 35px;
            padding: 15px 10px;
          }
          .sub-nav__item--active {
            border-bottom: 5px solid ${colors.turquoise};
            color: ${colors.white};            
          }
        `}</style>
      </nav>
    );
  }
}
