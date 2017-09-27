import React, { Component } from 'react';
import Link from 'next/link';
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
              <Link href="/">
                <a>
                  <img
                    className="new-message"
                    src="/static/images/new-message.png"
                  />
                </a>
              </Link>
            </li>
            <li>
              <input className="search" />
            </li>
            <li>
              <Link href="/user">
                <a>
                  <img
                    className="avatar"
                    src="/static/images/user-avatar.png"
                  />
                </a>
              </Link>
            </li>
            <li>
              <img
                className="dropdown-arrow"
                src="/static/images/down-arrow.png"
              />
            </li>
          </ul>
        </div>
        <style jsx>{`
          li {
            height: 30px;
          }

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

          .avatar {
            height: 30px;
            width: 30px%;
          }

          .nav__items,
          .nav__logo {
            display: inline-flex;
            align-items: center;
          }

          .search {
            margin: 0 23px;
            padding: 7px;
            background: url('/static/images/search-icon.png') no-repeat right
              5px center;
            background-color: ${colors.darkGrey};
            border: 1px solid ${colors.medGrey};
            border-radius: 3px;
            outline: none;
            color: ${colors.white};
          }

          .dropdown-arrow {
            margin-left: 20px;
          }
        `}</style>
      </nav>
    );
  }
}
