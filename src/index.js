import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)
console.log('this is the store!', store.getState())

ReactDOM.render(
  <Provider store={store} >
  <App store={store} />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
