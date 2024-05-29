import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import appReducer from './redux/reducer';
import mySaga from './redux/saga';
import {combineReducers,createStore,applyMiddleware} from 'redux'
 
const root = ReactDOM.createRoot(document.getElementById('root'));
const sm= createSagaMiddleware()
const rootReducer= combineReducers({appReducer})
const store= createStore(rootReducer,applyMiddleware(sm))
sm.run(mySaga)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


reportWebVitals();
