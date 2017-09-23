import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';

export default () => (
  <div>
    <Nav />
    <Header />
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Open+Sans');
      @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300');

      body {
        margin: 0;
      }

      ul {
        list-style-type: none;
        margin: 0;
      }

      textarea {
        outline: none;
        background: transparent;
        border: none;
      }
    `}</style>
  </div>
);
