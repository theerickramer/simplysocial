import React, { Component } from 'react';
import { colors, fonts } from '../static/css-constants';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <ul className="footer__nav">
          <li>ABOUT</li>
          <li>SUPPORT</li>
          <li>PRIVACY</li>
          <li>TERMS</li>
          <li className="copyright">&reg; 2014 SIMPLYSOCIAL</li>
        </ul>
        <style jsx>{`
          footer {
            margin: 30px 0;
          }
          .footer__nav {
            display: inline-flex;
            justify-content: center;
            width: 100%;
            text-align: center;
          }
          .footer__nav li:not(.copyright) {
            margin-right: 25px;
            font-weight: 700;
            font-size: 10px;
            color: ${colors.turquoise};
          }
          .copyright {
            font-weight: 700;
            font-size: 10px;
            color: ${colors.medLightGrey};
          }
        `}</style>
      </footer>
    );
  }
}