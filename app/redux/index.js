import { combineReducers } from 'redux';

import Mock from './reducers/mock'

const rootReducer = combineReducers({
  mock: Mock,
});

export default rootReducer;
