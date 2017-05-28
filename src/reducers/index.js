import { combineReducers } from 'redux';
import chooseCoin from './chooseCoin';
import coinSearchReducers from './coinSearchReducers';

const rootReducer = combineReducers({
  chooseCoin,
  coinSearchReducers
})

export default rootReducer;
