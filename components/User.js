import React, { Component } from 'react';
import { colors, fonts } from '../static/css-constants';

export default ({ name, blurb, website }) => (
  <div className="user">
    <img className="user__avatar" src="/static/images/user-avatar.png" />
    <h1 className="user__name">{name}</h1>
    <p className="user__blurb">{blurb}</p>
    <a className="user__website">{website}</a>
    <style jsx>{`
      .user {
        align-self: flex-start;
        margin: 50px auto;
        height: 155px;
        width: 575px;
        border-radius: 5px;
        font-family: ${fonts.sourceSans};
        text-align: center;
      }

      .user__avatar {
        height: 86px;
        width: 86px;
      }

      .user__name {
        margin: 10px;
        color: ${colors.white};
        font-weight: 300;
      }

      .user__blurb {
        margin-bottom: 15px;
        color: ${colors.lightGrey};
      }

      .user__website {
        font-size: 10px;
        color: ${colors.medDarkGrey};
      }

      a {
        color: ${colors.medGrey};
        text-decoration: none;
      }
    `}</style>
  </div>
);
