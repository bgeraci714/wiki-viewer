import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './rootReducer';

import { testUpdateResults } from './tests/redux_tests';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, div);
});

it('updates the array of results', () => {
    testUpdateResults();
});
