import { hot } from 'react-hot-loader/root';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import {
  Redirect, Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { Layout, PrivateRoute } from './components/base';
import {
  Home, Location, NotFound, Profile, Reservation, SignIn,
} from './pages';
import configureStore from './store';
import { GlobalStyle, theme } from './styles';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <GlobalStyle />
          <CssBaseline />
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path={['/', '/location', '/notifications', '/profile']}>
                  <Layout>
                    <Switch>
                      <PrivateRoute exact path="/" component={Home} />
                      <PrivateRoute exact path="/location" component={Location} />
                      <PrivateRoute exact path="/profile" component={Profile} />
                      <Redirect to="/not-found" />
                    </Switch>
                  </Layout>
                </Route>
                <PrivateRoute exact path="/reserve" component={Reservation} />
                <PrivateRoute exact path="/sign-in" component={SignIn} />
                <PrivateRoute exact path="/not-found" component={NotFound} />
                <Redirect to="/not-found" />
              </Switch>
            </Suspense>
          </Router>
        </StylesProvider>
      </MuiThemeProvider>
    </ThemeProvider>
  </Provider>
);

export default hot(App);
