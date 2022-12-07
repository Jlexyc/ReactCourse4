import { combineReducers } from 'redux';
import { reducer as userReducer, UserState } from './user/reducer';
import { reducer as goodsReducer, GoodsState } from './goods/reducer';

export interface GlobalAppState {
  user: UserState,
  goods: GoodsState,
}

export const rootReducer = combineReducers<GlobalAppState>({
  user: userReducer,
  goods: goodsReducer,
});
