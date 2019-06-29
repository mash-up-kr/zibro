import { hot } from 'react-hot-loader/root';
import React, { Suspense } from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { Home } from './pages';


const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  </Router>
);

export default hot(App);
