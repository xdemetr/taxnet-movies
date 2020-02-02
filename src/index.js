import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

import './styles/styles.sass';

ReactDOM.render(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <App/>
    </Router>
  </Provider>
  , document.getElementById('app'));
