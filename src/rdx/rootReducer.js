import { combineReducers } from 'redux';
import { reducer as itemsReducer } from './items/reducer';
import { reducer as userReducer } from './user/reducer';

export const rootReducer = combineReducers({
  items: itemsReducer,
  user: userReducer,
});
