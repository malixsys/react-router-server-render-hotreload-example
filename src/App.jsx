/* eslint-disable react/prop-types */
import React from 'react';
import Helmet from 'react-helmet';
import { Switch, Route, Link } from 'react-router-dom';
import { Container, Header, Menu, Segment } from 'semantic-ui-react';

import styles from './App.scss';

const TopMenu = (props) => {
  const { activeItem } = props;
  return (
    <Menu fixed="top" pointing secondary>
      <Menu.Item header>APP_TITLE</Menu.Item>
      <Menu.Item name="Home" as={Link} to="/" active={activeItem === 'home'} />
      <Menu.Item name="About" as={Link} to="/about" active={activeItem === 'about'} />
      <Menu.Menu position="right">
        <Menu.Item name="login" as={Link} to="/login" active={activeItem === 'login'} >
          Login
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};


const Homepage = () => (
  <div className={styles.mainContainer}>
    <Helmet
      title="Welcome"
    />
    <TopMenu activeItem="home" />
    <Container>
      <Header as="h2">
        Home
      </Header>
      <p>
        Welcome!
      </p>
    </Container>
  </div>
);

const About = () => (
  <div className={styles.mainContainer}>
    <Helmet
      title="About us"
    />
    <TopMenu activeItem="about" />
    <Container>
      <Header as="h2">
        About
      </Header>
      <p>
        Write to: <pre>github at malix.com</pre>
      </p>
    </Container>
  </div>
);

const Login = () => (
  <div className={styles.mainContainer}>
    <Helmet
      title="Login"
    />
    <TopMenu activeItem="login" />
    <Container>
      <Header as="h2">
        Login
      </Header>
      <p>
        [ Form ]
      </p>
    </Container>
  </div>
);

const App = () => (
  <Segment padded="very" style={{ height: '100%' }}>
    <Helmet
      htmlAttributes={{ lang: 'en', amp: undefined }} // amp takes no value
      titleTemplate="%s | APP_TITLE"
      titleAttributes={{ itemprop: 'name', lang: 'en' }}
      meta={[
        { name: 'description', content: 'An example of hot reloading universal React/Express App' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]}
    />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </Switch>
  </Segment>
);

App.propTypes = {};
App.defaultProps = {};

export default App;
