import React, { Component } from 'react';
import { colors, fonts } from '../static/css-constants.js';

export default class Header extends Component {
  render() {
    return (
      <header>
        <style jsx>{`
          h1 {
            font-family: ${fonts.openSans};
            color: ${colors.white};
          }
        `}</style>
      </header>
    );
  }
}
