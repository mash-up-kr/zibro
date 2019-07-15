import { hot } from 'react-hot-loader/root';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import {
  Redirect, Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { Layout } from './components';
import {
  Home, Location, NotFound, Notifications, Profile, Reservation, SignIn, ReserveDetail
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
                <Route exact path={['/', '/location', '/notifications', '/profile', '/reserve', '/reservation-details']}>
                  <Layout>
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/location" component={Location} />
                      <Route exact path="/notifications" component={Notifications} />
                      <Route exact path="/profile" component={Profile} />
                      <Route exact path="/reserve" component={Reservation} />
                      <Route exact path="/reservation-details" component={ReserveDetail} />
                      <Redirect to="/not-found" />
                    </Switch>
                  </Layout>
                </Route>

                <Route exact path="/sign-in" component={SignIn} />
                <Route exact path="/not-found" component={NotFound} />
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
