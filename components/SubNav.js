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
              <li className="sub-nav__item--disclosure">
                <div className="icon three-lines" />
              </li>
              <li className="sub-nav__item--disclosure sub-nav__item--active">
                <div className="icon four-squares" />
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
            color: ${colors.white};
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
            border: none;
          }
          .sub-nav__item {
            display: inline-flex;
            margin-right: 35px;
            padding: 15px 10px;
            opacity: .5;            
          }
          .sub-nav__item--active {
            opacity: 1;
            border-bottom: 5px solid ${colors.turquoise};
          }

          .sub-nav__item--disclosure.sub-nav__item--active {
            opacity: 1;
            border: none;
          }

          .sub-nav__item--disclosure {
            margin-left: 35px;
            height: 10px;
            width: 10px;
            opacity: .5;          }

          .three-lines.icon {
            color: #000;
            position: absolute;
            margin-left: 2px;
            margin-top: 6px;
            width: 10px;
            height: 5px;
            border-top: solid 1px ${colors.white};
          }

          .three-lines.icon:before {
            content: '';
            position: absolute;
            top: -4px;
            left: 0;
            width: 10px;
            height: 5px;
            border-top: solid 1px ${colors.white};
            border-bottom: solid 1px ${colors.white};
          }

          .icon.four-squares {
            color: #000;
            position: absolute;
            margin-left: 2px;
            margin-top: 2px;
            width: 3px;
            height: 3px;
            border-right: solid 3px ${colors.white};
            border-left: solid 3px ${colors.white};            
          }

          .icon.four-squares:before {
            content: '';
            position: absolute;
            top: 6px;
            left: -3px;
            width: 3px;
            height: 3px;
            border-right: solid 3px ${colors.white};
            border-left: solid 3px ${colors.white};
          }
        `}</style>
      </nav>
    );
  }
}
