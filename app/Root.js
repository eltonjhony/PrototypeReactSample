import React, {
  Component,
} from 'react';

import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'

import thunk from 'redux-thunk';

import rootReducer from './redux/index';

import {
  Provider
} from 'react-redux'

// internal imports
import App from './containers/App';

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

class Root extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Root;
