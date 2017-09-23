import React, { Component } from 'react';
import NewMessage from './NewMessage';
import { colors, fonts } from '../static/css-constants';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="hero">
          <NewMessage />
          {/* <nav class="header__sub-nav"></nav> */}
        </div>
        <style jsx>{`
          .hero {
            display: flex;
            align-items: center;
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
