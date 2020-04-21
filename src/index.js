import './polyfills';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {LocalizeProvider} from 'react-localize-redux';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <LocalizeProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LocalizeProvider>
  </Provider>,
  document.getElementById('root')
);
