import { ThunkAction } from 'redux-thunk';
import { GlobalAppState } from '../rootReducer';
import * as Actions from './actions';
import { AppDispatch } from '../index';
import * as ApiService from '../../services/imdbApi';
import { GlobalAppActions } from '../actions';

export type ThunkAppType = ThunkAction<Promise<void>, GlobalAppState, undefined, GlobalAppActions>

export const imdbFindTitleThunk = (q: string): ThunkAppType => async (dispatch: AppDispatch) => {
  dispatch(Actions.findTitleAsyncAction.request());
  try {
    const response = await ApiService.imdbFindTitle(q);
    if (!response.success || !response.response) {
      throw (Error('Something went wrong'));
    }
    dispatch(Actions.findTitleAsyncAction.success({ titles: response.response.results }));
  } catch (error) {
    dispatch(Actions.findTitleAsyncAction.failure({ error: new Error('Something went wrong') }));
  }
};

export const imdbGetCreditsThunk = (id: string): ThunkAppType => async (dispatch: AppDispatch) => {
  dispatch(Actions.getCreditsAsyncAction.request({ id }));
  try {
    const response = await ApiService.imdbGetCast(id);
    if (!response.success || !response.response) {
      throw (Error('Something went wrong'));
    }
    dispatch(Actions.getCreditsAsyncAction.success({ cast: response.response.cast, id }));
  } catch (error) {
    dispatch(Actions.getCreditsAsyncAction.failure({ error: new Error('Something went wrong'), id }));
  }
};
