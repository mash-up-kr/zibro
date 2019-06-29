import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import initFirebase from './firebase';

initFirebase();

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
