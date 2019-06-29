import { hot } from 'react-hot-loader/root';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { Home, SignIn } from './pages';
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
                <Route exact path="/" component={Home} />
                <Route exact path="/sign-in" component={SignIn} />
              </Switch>
            </Suspense>
          </Router>
        </StylesProvider>
      </MuiThemeProvider>
    </ThemeProvider>
  </Provider>
);

export default hot(App);
