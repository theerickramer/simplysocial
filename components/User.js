import React, { Component } from 'react';
import { colors, fonts } from '../static/css-constants';

export default class User extends Component {
  state = { value: ``};
  onChange(val) {
    this.state.value = val
  }
  render() {
    return (
      <div className="user">
        <img className="user__avatar" src="/static/images/user-avatar.png" />
        <h1 className="user__name">Kaitlyn Smith</h1>
        <p className="user__blurb">Modular Synthesist</p>
        <a className="user__website">www.kaitlynaureliasmith.com</a>
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

          .add-photo, .add-video {
            display: inline-flex;
            align-items: center;
            margin-left: 30px;
            cursor: pointer;
          }
          
          .add-photo__text {
            margin-left: 10px
            color: ${colors.white};
            opacity: .5;
          }
        `}</style>
      </div>
    );
  }
}
