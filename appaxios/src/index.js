import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware } from 'redux';
import reducer from './Redux/Reducers/index';
import { Provider } from 'react-redux';
import  rootSaga  from './Saga/index';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    reducer,
    applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
