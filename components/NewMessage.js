import React, { Component } from 'react';
import { colors, fonts } from '../static/css-constants';

export default class NewMessage extends Component {
  state = { value: ``};
  onChange(val) {
    this.state.value = val
  }
  render() {
    return (
      <div className="new-message">
        <textarea
          rows="2"
          className="new-message__input"
          placeholder="What's On Your Mind?"
          value={this.state.value}
          onChange={this.onChange}
        />
        <div className="add-photo">
          <img className="add-photo__image" src="/static/images/camera.png" />
          <span className="add-photo__text">Add Photo</span>
        </div>
        <div className="add-video">
          <img className="add-video__image" src="/static/images/video-camera.png" />
          <span className="add-photo__text">Add Video</span>
        </div>
        <style jsx>{`
          .new-message {
            margin: 0 auto;
            padding-top: 40px;
            height: 155px;
            width: 575px;
            border-radius: 5px;
            background: ${colors.turquoise};
            opacity: 0.5;
            font-family: ${fonts.sourceSans};
          }

          .new-message__input {
            display: flex;
            margin: 0 30px 45px;
            color: ${colors.white};
            font-family: ${fonts.sourceSans};            
            font-size: 24px;
            width: 80%;
          }
          
          ::-webkit-input-placeholder {
            /* Chrome/Opera/Safari */
            color: ${colors.white};
            opacity: .5;
          }
          ::-moz-placeholder {
            /* Firefox 19+ */
            color: ${colors.white};
            opacity: .5;            
          }

          :-ms-input-placeholder {
            /* IE 10+ */
            color: ${colors.white};
            opacity: .5;            
          }
          :-moz-placeholder {
            /* Firefox 18- */
            color: ${colors.white};
            opacity: .5;            
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