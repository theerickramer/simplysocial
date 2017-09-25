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
          <li className="sub-nav__item">
            <ul className="sub-nav__item--disclosures">
              <li className="sub-nav__item-disclosure">
                <div className="sub-nav__disclosure--list" />L
              </li>
              <li className="sub-nav__item-disclosure">
                <div className="sub-nav__disclosure--squares" />D
              </li>
            </ul>
          </li>
        </ul>
        <style jsx>{`
          .sub-nav {
            position: relative;
            margin: 0 auto;
            margin-top: -49px;
            width: 575px;
            font-family: ${fonts.openSans};
            color: ${colors.lightGrey};
            font-size: 10px;
            font-weight: 700;
          }
          .sub-nav__item--disclosures {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            position: absolute;
            top: 30%;
            right: 0;
          }
          .sub-nav__item {
            display: inline-flex;
            margin-right: 35px;
            padding: 15px 10px;
          }

          .sub-nav__item-disclosure {
            margin-left: 35px;
          }
          
          .sub-nav__item--active {
            border-bottom: 5px solid ${colors.turquoise};
            color: ${colors.white};
          }

          .sub-nav__item--disclosure {
            height: 10px;
            width: 10px;
            background: purple;
          }
        `}</style>
      </nav>
    );
  }
}
