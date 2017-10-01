import React, { Component } from 'react';
import { colors, fonts } from '../static/css-constants';

export default ({ name, followers, following }) => {
  const firstName = name.split(' ')[0].toUpperCase();
  return (
    <nav className="sub-nav">
      <ul className="sub-nav__items">
        <li className="sub-nav__item sub-nav__item--active">{`${firstName}'S FEED`}</li>
        <li className="sub-nav__item">{followers} FOLLOWERS</li>
        <li className="sub-nav__item">{following} FOLLOWING</li>
      </ul>
      <style jsx>{`
        .sub-nav {
          position: relative;
          margin: 0 auto;
          margin-top: -47px;
          width: 575px;
          font-family: ${fonts.openSans};
          color: ${colors.white};
          font-size: 10px;
          font-weight: 700;
        }
        .sub-nav__items {
          text-align: center;
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
          opacity: 0.5;
        }
        .sub-nav__item--active {
          opacity: 1;
          border-bottom: 5px solid ${colors.turquoise};
        }
      `}</style>
    </nav>
  );
};
