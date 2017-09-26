import React, { Component } from 'react';
import { colors } from '../static/css-constants';

export default class Post extends Component {
  render() {
    const { id, name, text, time } = this.props;
    return (
      <li className="post" key={id}>
        <img className="post__avatar" src="/static/images/user-avatar.png" />
        <div className="post__content">
          <h5 className="post__name">{name}</h5>
          <p
            className="post__text"
            dangerouslySetInnerHTML={{ __html: text }}
          />
          <div className="post__extra">
            <div className="post__expand">
              <span>Expand</span>
              <img src="/static/images/down-arrow.png" />
            </div>
          </div>
        </div>
        <div className="post__options">
          <img className="post__reply" src="/static/images/reply-arrow.png" />
          <div className="post__like heart icon" />
          <span className="post__time">{time}</span>
        </div>
        <style jsx>{`
          .post {
            display: flex;
            align-items: flex-start;
            position: relative;
            margin-bottom: 30px;
            padding: 25px;
            border: 1px solid ${colors.lightGrey};
            border-radius: 5px;
            color: ${colors.medGrey};
          }
          .post__content {
            display: flex;
            flex-direction: column;
            padding-left: 20px;
          }
          .post__avatar,
          .post__content {
            display: inline-flex;
          }
          .post__avatar {
            height: 40px;
            width: 40px;
          }
          .post__name {
            margin-bottom: 15px;
            color: ${colors.medDarkGrey};            
          }
          .post__text {
            margin-bottom: 25px;
            color: ${colors.medDarkGrey};
          }
          .post__options {
            position: absolute;
            top: 25px;
            right: 25px;
          }
          .post__reply,
          .post__like,
          .post__time {
            display: inline-flex;
            margin-left: 20px;
            color: ${colors.lightGrey};
          }
          .post__expand {
            display: flex;
            align-items: center;
          }
          .post__expand span {
            margin-right: 10px;
            color: ${colors.lightGrey};
            font-size: 10px;
          }
          .post__expand img {
            opacity: 0.4;
          }
          .heart.icon {
            color: ${colors.lightGrey};
            width: 9px;
            height: 9px;
            border-left: solid 1px currentColor;
            border-bottom: solid 1px currentColor;
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
          }

          .heart.icon:before {
            content: '';
            position: absolute;
            top: -5px;
            left: -1px;
            width: 8px;
            height: 5px;
            border-radius: 5px 5px 0 0;
            border-top: solid 1px currentColor;
            border-left: solid 1px currentColor;
            border-right: solid 1px currentColor;
          }

          .heart.icon:after {
            content: '';
            position: absolute;
            top: 0px;
            left: 8px;
            width: 5px;
            height: 8px;
            border-radius: 0 5px 5px 0;
            border-top: solid 1px currentColor;
            border-right: solid 1px currentColor;
            border-bottom: solid 1px currentColor;
          }

          @keyframes poof {
            0% {
              box-shadow: 0 0 rgba(255, 0, 0, 1);
            }

            100% {
              box-shadow: 20px -20px 5px rgba(255, 0, 0, 0);
            }
          }

          .heart.icon.selected,
          .heart.icon.selected:before,
          .heart.icon.selected:after {
            animation: poof 1s;
            background-color: red;
          }

          .heart.icon:hover,
          .heart.icon.selected {
            border-bottom: 1px solid red;
            border-left: 1px solid red;
          }

          .heart.icon:hover:before,
          .heart.icon.selected:before {
            border-top: 1px solid red;
            border-right: 1px solid red;
            border-left: 1px solid red;
          }

          .heart.icon:hover:after,
          .heart.icon.selected:after {
            border-top: 1px solid red;
            border-bottom: 1px solid red;
            border-right: 1px solid red;
          }
        `}</style>
      </li>
    );
  }
}
