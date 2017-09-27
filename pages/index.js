import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import NewMessage from '../components/NewMessage';
import SubNav from '../components/SubNav';
import Posts from '../components/Posts';
import Footer from '../components/Footer';
import { colors, fonts } from '../static/css-constants';

export default () => (
  <div>
    <Nav />
    <Header>
      <NewMessage />
    </Header>
    <SubNav />
    <Posts />
    <Footer />
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Open+Sans');
      @import url('https://fonts.googleapis.com/css?family=Open+Sans:700');
      @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300');

      body {
        margin: 0;
        font-family: ${fonts.openSans};
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      textarea {
        outline: none;
        background: transparent;
        border: none;
        resize: none;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }

      p,
      span {
        font-size: 14px;
      }

      a:not(.user__website) {
        color: ${colors.lightGrey} !important;
        cursor: auto !important;
        text-decoration: none !important;
      }

      .button {
        cursor: pointer;
      }
    `}</style>
  </div>
);
