import { combineReducers } from 'redux';
import { reducer as goodsReducer, GoodsState } from './goods/reducer';
import { reducer as imdbReducer, IMDBState } from './imdb/reducer';

export interface GlobalAppState {
  goods: GoodsState,
  imdb: IMDBState,
}

export const rootReducer = combineReducers<GlobalAppState>({
  goods: goodsReducer,
  imdb: imdbReducer,
});
