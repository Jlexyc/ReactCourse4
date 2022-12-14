import { RequestState } from '../../services/goodsStoreTypes';
import { GlobalAppState } from '../rootReducer';

export const selectTitles = (state: GlobalAppState) => state.imdb.titles;
export const selectAreTitlesLoading = (state: GlobalAppState) => (
  state.imdb.findTitleRequestState === RequestState.Waiting
);

export const selectTitlesCast = (state: GlobalAppState) => state.imdb.cast;
