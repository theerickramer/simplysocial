import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import SubNav from '../components/SubNav';

export default () => (
  <div>
    <Nav />
    <Header />
    <SubNav />
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Open+Sans');
      @import url('https://fonts.googleapis.com/css?family=Open+Sans:700');
      @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300');

      body {
        margin: 0;
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
    `}</style>
  </div>
);
