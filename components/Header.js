import React, { Component } from 'react';
import { colors, fonts } from '../static/css-constants.js';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="hero">
        
        </div>
        <style jsx>{`
          .hero {
            width: 100%;
            height: 420px;
            background-image: url('/static/images/hero.png');
          }
          h1 {
            font-family: ${fonts.openSans};
            color: ${colors.white};
          }
        `}</style>
      </header>
    );
  }
}
