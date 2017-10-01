import Header from '../components/Header';
import User from '../components/User';
import Nav from '../components/Nav';
import SubNavUser from '../components/SubNavUser';
import Posts from '../components/Posts';
import Footer from '../components/Footer';
import { colors, fonts } from '../static/css-constants';
import { makeStore } from '../redux/store';
import withRedux from 'next-redux-wrapper';

export default withRedux(makeStore, state => state)(({ user, posts }) => (
  <div>
    <Nav avatar={user.avatar} />
    <Header>
      <User {...user} />
    </Header>
    <SubNavUser {...user} />
    <Posts posts={posts} userId={user.id} />
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
    `}</style>
  </div>
));
