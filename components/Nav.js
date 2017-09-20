import React, { Component } from 'react';
import { colors, fonts } from '../static/css-constants';

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__logo">
          <img className="nav__logo-icon" src="/static/images/logo.png" />
        </div>
        <div className="nav__items-container">
          <ul className="nav__items">
            <li>
              <img className="add-post-button" />
            </li>
            <li>
              <input className="search" />
            </li>
            <li>
              <div className="user-options">
                <img className="user-options__avatar" />
                <img className="user-options__dropdown-arrow" />
              </div>
            </li>
          </ul>
        </div>
        <style jsx>{`
          .nav {
            display: flex;
            padding: 10px 100px;
            height: 35px;
            background: ${colors.darkGrey};
          }

          .nav__items-container {
            display: flex;
            justify-content: flex-end;
            width: 100%;
          }

          ul,
          .nav__logo {
            display: inline-flex;
            align-items: center;
          }
        `}</style>
      </nav>
    );
  }
}
