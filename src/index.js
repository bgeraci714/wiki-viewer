import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './rootReducer';

import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './rootEpic';

import App from './app/App';
import './index.css';



// const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// ));

const epicMiddleware = createEpicMiddleware(rootEpic);
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose;
const store = createStore(reducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

/*
ReactDOM.render(
        <App />,
    document.getElementById('root')
);
*/

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
