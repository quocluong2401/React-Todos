import React from 'react';
import { render } from 'react-dom'
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducer'
import reduxThunk from "redux-thunk";

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(reduxThunk), reduxDevTools)
)

// sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
